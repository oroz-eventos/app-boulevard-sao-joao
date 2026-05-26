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
import { COMERCIO_FILTERS, COMERCIO_STORES } from '../data/mock'
import { useComerciosPalette } from '../hooks/useComerciosPalette'
import type { ComercioFilterId } from '../types'
import { ComercioCard } from './ComercioCard'
import { fontFamily } from '@/theme/typography'
import { spacing } from '@/theme/tokens'

const TAB_BAR_HEIGHT = 56

const matchesText = (value: string, query: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(query)

export function ComerciosScreen() {
  const insets = useSafeAreaInsets()
  const palette = useComerciosPalette()
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<ComercioFilterId>('todos')

  const normalizedQuery = query
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

  const stores = useMemo(() => {
    const filtered = COMERCIO_STORES.filter((store) => {
      const passesFilter = activeFilter === 'todos' || store.category === activeFilter
      if (!passesFilter) return false
      if (!normalizedQuery) return true

      return [
        store.name,
        store.summary,
        store.addressLine,
        store.openingHours,
        ...store.keywords,
      ].some((value) => matchesText(value, normalizedQuery))
    })

    return filtered.sort((a, b) => a.name.localeCompare(b.name))
  }, [activeFilter, normalizedQuery])

  return (
    <View style={[styles.root, { backgroundColor: palette.pageBg }]}>
      <FlatList
        data={stores}
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
            <TopDisplayHeader title="COMÉRCIOS" color={palette.action} />
            <AppSearchBar
              value={query}
              onChangeText={setQuery}
              onClear={() => setQuery('')}
              placeholder="Busque cafés, serviços, lojas..."
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
              items={COMERCIO_FILTERS}
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
                {stores.length} {stores.length === 1 ? 'resultado' : 'resultados'}
              </Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <Text style={[styles.emptyTitle, { color: palette.title }]}>
              Nenhum comércio encontrado
            </Text>
            <Text style={[styles.emptyBody, { color: palette.body }]}>
              Tente outro termo ou volte para o filtro `Todos` para ampliar as opções locais.
            </Text>
          </View>
        }
        renderItem={({ item }) => <ComercioCard store={item} />}
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
