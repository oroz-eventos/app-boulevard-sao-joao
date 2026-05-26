import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  Clock,
  MapPin,
  MonitorPlay,
  MicrophoneStage,
  Storefront,
  X,
} from 'phosphor-react-native'
import type { MapMarker } from '../types'
import { useMapaPalette } from '../hooks/useMapaPalette'
import { fontFamily } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

type MarkerBottomSheetProps = {
  marker: MapMarker | null
  onClose: () => void
}

export function MarkerBottomSheet({ marker, onClose }: MarkerBottomSheetProps) {
  const palette = useMapaPalette()
  const insets = useSafeAreaInsets()

  if (!marker) return null

  const HeaderIcon =
    marker.kind === 'palcos'
      ? MicrophoneStage
      : marker.kind === 'comercios'
        ? Storefront
        : MonitorPlay

  return (
    <View
      style={[
        styles.sheet,
        {
          backgroundColor: palette.sheetBg,
          borderColor: palette.sheetBorder,
          paddingBottom: Math.max(insets.bottom, 10) + 18,
        },
      ]}
    >
      <View style={styles.headerRow}>
        <View style={styles.titleRow}>
          <HeaderIcon size={20} color={palette.title} weight="bold" />
          <Text style={[styles.title, { color: palette.title }]}>{marker.title}</Text>
        </View>

        <Pressable
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="Fechar detalhes do marcador"
          style={styles.closeButton}
        >
          <X size={18} color={palette.title} weight="bold" />
        </Pressable>
      </View>

      <Text style={[styles.sectionLabel, { color: palette.body }]}>{marker.sectionTitle.toUpperCase()}</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        style={styles.contentScroll}
      >
        {marker.kind === 'comercios' ? (
          <View style={[styles.detailCard, { backgroundColor: palette.sheetCardBg }]}>
            <Image source={{ uri: marker.facadeImageUri }} style={styles.commerceImage} contentFit="cover" />

            {marker.discountLabel ? (
              <View style={[styles.discountChip, { backgroundColor: palette.discountBg }]}>
                <Text style={[styles.discountText, { color: palette.discountText }]}>
                  {marker.discountLabel}
                </Text>
              </View>
            ) : null}

            <Text style={[styles.description, { color: palette.title }]}>{marker.summary}</Text>

            <View style={styles.metaRow}>
              <MapPin size={15} color={palette.body} weight="bold" />
              <Text style={[styles.metaLine, { color: palette.body }]}>{marker.addressLine}</Text>
            </View>

            <View style={styles.metaRow}>
              <Clock size={15} color={palette.body} weight="bold" />
              <Text style={[styles.metaLine, { color: palette.body }]}>{marker.openingHours}</Text>
            </View>
          </View>
        ) : (
          marker.items.map((item) => (
            <View key={item.id} style={[styles.detailCard, { backgroundColor: palette.sheetCardBg }]}>
              <Text style={[styles.cardMeta, { color: palette.sheetMeta }]}>{item.meta}</Text>
              <Text style={[styles.cardTitle, { color: palette.title }]}>{item.title}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
    paddingHorizontal: spacing.screenX,
    paddingTop: 18,
    maxHeight: '56%',
    zIndex: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: -8 },
    elevation: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    minWidth: 0,
    flex: 1,
  },
  title: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    flexShrink: 1,
  },
  closeButton: {
    padding: 4,
  },
  sectionLabel: {
    marginTop: 18,
    fontFamily: fontFamily.mono,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
  },
  contentScroll: {
    marginTop: 14,
    flexGrow: 0,
  },
  content: {
    gap: 12,
    paddingBottom: 4,
  },
  detailCard: {
    borderRadius: radius.xl,
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 8,
  },
  commerceImage: {
    width: '100%',
    height: 154,
    borderRadius: radius.lg,
    marginBottom: 2,
  },
  cardMeta: {
    fontFamily: fontFamily.mono,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6,
  },
  cardTitle: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
  },
  description: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaLine: {
    flex: 1,
    fontFamily: fontFamily.bodyMedium,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
  discountChip: {
    alignSelf: 'flex-start',
    borderRadius: radius.full,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  discountText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
})
