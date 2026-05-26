import { useEffect, useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MagnifyingGlass, MonitorPlay, MicrophoneStage, Storefront } from 'phosphor-react-native'
import { MAP_FILTERS, MAP_MARKERS } from '../data/mock'
import { useMapaPalette } from '../hooks/useMapaPalette'
import type { MapFilterId, MapMarker } from '../types'
import { MapaCanvas } from './MapaCanvas'
import { MarkerBottomSheet } from './MarkerBottomSheet'
import { fontFamily } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

export function MapaScreen() {
  const insets = useSafeAreaInsets()
  const palette = useMapaPalette()
  const [activeFilter, setActiveFilter] = useState<MapFilterId>('todos')
  const [activeMarker, setActiveMarker] = useState<MapMarker | null>(null)

  const visibleMarkerIds = useMemo(
    () =>
      MAP_MARKERS.filter((marker) => activeFilter === 'todos' || marker.kind === activeFilter).map(
        (marker) => marker.id
      ),
    [activeFilter]
  )

  useEffect(() => {
    if (activeMarker && !visibleMarkerIds.includes(activeMarker.id)) {
      setActiveMarker(null)
    }
  }, [activeMarker, visibleMarkerIds])

  return (
    <View style={[styles.root, { backgroundColor: palette.pageBg }]}>
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top + 10,
          },
        ]}
      >
        <View style={styles.titleRow}>
          <View style={styles.copy}>
            <Text style={[styles.eyebrow, { color: palette.body }]}>MAPA</Text>
            <Text style={[styles.title, { color: palette.action }]}>BOULEVARD SÃO JOÃO</Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Buscar no mapa"
            style={[
              styles.searchButton,
              { backgroundColor: palette.searchBg, borderColor: palette.searchBorder },
            ]}
          >
            <MagnifyingGlass size={18} color={palette.title} weight="bold" />
          </Pressable>
        </View>

        <View style={styles.filtersRow}>
          {MAP_FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id
            const Icon =
              filter.id === 'telas'
                ? MonitorPlay
                : filter.id === 'palcos'
                  ? MicrophoneStage
                  : filter.id === 'comercios'
                    ? Storefront
                    : null

            return (
              <Pressable
                key={filter.id}
                onPress={() => setActiveFilter(filter.id)}
                accessibilityRole="button"
                accessibilityLabel={`Filtrar mapa por ${filter.label}`}
                style={styles.filterButton}
              >
                <View style={styles.filterLabelRow}>
                  {Icon ? <Icon size={17} color={isActive ? palette.title : palette.muted} weight="regular" /> : null}
                  <Text
                    style={[
                      styles.filterText,
                      { color: isActive ? palette.filterActiveText : palette.filterInactiveText },
                    ]}
                  >
                    {filter.label}
                  </Text>
                </View>
                <View
                  style={[
                    styles.filterUnderline,
                    { backgroundColor: isActive ? palette.filterUnderline : 'transparent' },
                  ]}
                />
              </Pressable>
            )
          })}
        </View>
      </View>

      <View style={styles.mapArea}>
        <MapaCanvas
          markers={MAP_MARKERS}
          activeFilter={activeFilter}
          activeMarkerId={activeMarker?.id}
          onSelectMarker={setActiveMarker}
        />
        {activeMarker ? <Pressable style={StyleSheet.absoluteFill} onPress={() => setActiveMarker(null)} /> : null}
        <MarkerBottomSheet marker={activeMarker} onClose={() => setActiveMarker(null)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.screenX,
    gap: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  copy: {
    flex: 1,
    gap: 8,
  },
  eyebrow: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  title: {
    fontFamily: fontFamily.display,
    fontSize: 32,
    lineHeight: 36,
    letterSpacing: 0.4,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: radius.full,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  filtersRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 18,
  },
  filterButton: {
    gap: 8,
    alignItems: 'flex-start',
  },
  filterLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  filterText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
  filterUnderline: {
    width: '100%',
    height: 2,
    borderRadius: radius.full,
  },
  mapArea: {
    flex: 1,
    marginTop: 18,
  },
})
