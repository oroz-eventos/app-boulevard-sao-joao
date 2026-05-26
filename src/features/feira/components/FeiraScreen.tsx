import { useMemo, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StandaloneBottomBar } from '@/components/navigation/StandaloneBottomBar'
import { AppSearchBar } from '@/components/ui/AppSearchBar'
import { HorizontalFilterChips } from '@/components/ui/HorizontalFilterChips'
import {
  TopDisplayHeader,
  TOP_DISPLAY_HEADER_SCREEN_PADDING,
} from '@/components/ui/TopDisplayHeader'
import { FEIRA_FILTERS, FEIRA_STALLS } from '../data/mock'
import { useFeiraPalette } from '../hooks/useFeiraPalette'
import type { FeiraFilterId } from '../types'
import { FeiraStallCard } from './FeiraStallCard'
import { fontFamily } from '@/theme/typography'
import { spacing } from '@/theme/tokens'

const TAB_BAR_HEIGHT = 56

const matchesText = (value: string, query: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(query)

export function FeiraScreen() {
  const insets = useSafeAreaInsets()
  const palette = useFeiraPalette()
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<FeiraFilterId>('todos')

  const normalizedQuery = query
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

  const stalls = useMemo(() => {
    const filtered = FEIRA_STALLS.filter((stall) => {
      const passesFilter = activeFilter === 'todos' || stall.category === activeFilter
      if (!passesFilter) return false
      if (!normalizedQuery) return true

      return [
        stall.number,
        stall.name,
        stall.summary,
        stall.mapLabel,
        ...stall.keywords,
      ].some((value) => matchesText(value, normalizedQuery))
    })

    return filtered.sort((a, b) => a.number.localeCompare(b.number))
  }, [activeFilter, normalizedQuery])

  return (
    <View style={[styles.root, { backgroundColor: palette.pageBg }]}>
      <FlatList
        data={stalls}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + TOP_DISPLAY_HEADER_SCREEN_PADDING,
            paddingBottom: TAB_BAR_HEIGHT + Math.max(insets.bottom, 8) + spacing.sectionGap,
          },
        ]}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.headerContent}>
            <TopDisplayHeader title="FEIRA" color={palette.action} />
            <AppSearchBar
              value={query}
              onChangeText={setQuery}
              onClear={() => setQuery('')}
              placeholder="Busque barracas, produtos, selos..."
              colors={{
                background: palette.searchBg,
                border: palette.searchBorder,
                icon: palette.action,
                placeholder: palette.searchPlaceholder,
                text: palette.title,
                clear: palette.muted,
              }}
            />
            <HorizontalFilterChips
              items={FEIRA_FILTERS}
              activeId={activeFilter}
              onChange={setActiveFilter}
              colors={{
                activeBg: palette.filterActiveBg,
                activeText: palette.filterActiveText,
                inactiveBg: palette.filterBg,
                inactiveText: palette.filterText,
                border: palette.filterBorder,
              }}
            />

            <View style={styles.introBlock}>
              <Text style={[styles.sectionBody, { color: palette.body }]}>
                {stalls.length} {stalls.length === 1 ? 'resultado' : 'resultados'}
              </Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <Text style={[styles.emptyTitle, { color: palette.title }]}>
              Nenhuma barraca encontrada
            </Text>
            <Text style={[styles.emptyBody, { color: palette.body }]}>
              Tente outro termo ou volte para o filtro `Todas` para ampliar os resultados da feira.
            </Text>
          </View>
        }
        renderItem={({ item }) => <FeiraStallCard stall={item} />}
      />
      <StandaloneBottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.screenX,
  },
  headerContent: {
    gap: 16,
    marginBottom: 24,
  },
  introBlock: {
    minHeight: 18,
  },
  sectionBody: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    lineHeight: 18,
  },
  separator: {
    height: 12,
  },
  emptyWrap: {
    paddingVertical: 28,
    alignItems: 'center',
    gap: 6,
  },
  emptyTitle: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  emptyBody: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
})
