import { useMemo, useState } from 'react'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import {
  POPULAR_SEARCHES,
  SEARCH_FILTER_LABELS,
  SEARCH_FILTERS,
  SEARCH_PROGRAMMING_SPOTLIGHT,
} from '../data/mock'
import { useSearchPalette } from '../hooks/useSearchPalette'
import type {
  SearchFilterId,
  SearchResultFilterId,
  SearchResultItem,
  SearchSuggestion,
} from '../types'
import { getSearchResults, getSearchSuggestions } from '../utils/search'
import { SearchHighlightCard } from './SearchHighlightCard'
import { SearchResultCard } from './SearchResultCard'
import { AppSearchBar } from '@/components/ui/AppSearchBar'
import { HorizontalFilterChips } from '@/components/ui/HorizontalFilterChips'
import {
  TopDisplayHeader,
  TOP_DISPLAY_HEADER_SCREEN_PADDING,
} from '@/components/ui/TopDisplayHeader'
import { fontFamily, typography } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

const TAB_BAR_HEIGHT = 56
const SECTION_ORDER: SearchResultFilterId[] = [
  'vantagens',
  'programacao',
  'lojas',
  'gastronomia',
  'feed',
]

const SECTION_TITLES: Record<SearchResultFilterId, string> = {
  vantagens: 'Cupons e vantagens',
  programacao: 'Programação',
  lojas: 'Lojas e espaços',
  gastronomia: 'Gastronomia',
  feed: 'Do feed',
}

function buildSections(results: SearchResultItem[], activeFilter: SearchFilterId, hasQuery: boolean) {
  const grouped = results.reduce<Record<SearchResultFilterId, SearchResultItem[]>>(
    (acc, item) => {
      acc[item.filterId].push(item)
      return acc
    },
    {
      vantagens: [],
      programacao: [],
      lojas: [],
      gastronomia: [],
      feed: [],
    },
  )

  return SECTION_ORDER.map((filterId) => ({
    filterId,
    title: SECTION_TITLES[filterId],
    items:
      activeFilter === 'all'
        ? grouped[filterId].slice(0, hasQuery ? 3 : 2)
        : grouped[filterId].slice(0, hasQuery ? 6 : 4),
  })).filter((section) => section.items.length > 0)
}

function SectionHeader({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}) {
  const palette = useSearchPalette()

  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionCopy}>
        <Text style={[styles.sectionTitle, { color: palette.title }]}>{title}</Text>
        <Text style={[styles.sectionBody, { color: palette.muted }]}>{description}</Text>
      </View>
      {onAction && actionLabel ? (
        <Pressable onPress={onAction} accessibilityRole="button" hitSlop={8}>
          <Text style={[styles.sectionAction, { color: palette.action }]}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  )
}

export function SearchScreen() {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const palette = useSearchPalette()
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<SearchFilterId>('all')

  const trimmedQuery = query.trim()

  const suggestions = useMemo(
    () => getSearchSuggestions(trimmedQuery, activeFilter),
    [activeFilter, trimmedQuery]
  )

  const results = useMemo(
    () => getSearchResults(trimmedQuery, activeFilter),
    [activeFilter, trimmedQuery]
  )

  const hasQuery = trimmedQuery.length > 0
  const sections = useMemo(
    () => buildSections(results, activeFilter, hasQuery),
    [activeFilter, hasQuery, results]
  )

  const handleSuggestionPress = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.term)
    if (activeFilter === 'all') {
      setActiveFilter(suggestion.primaryFilter)
    }
  }

  const handleResultPress = (item: SearchResultItem) => {
    if (item.route === '/(tabs)/busca') return
    router.push(item.route as never)
  }

  return (
    <View style={[styles.root, { backgroundColor: palette.pageBg }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + TOP_DISPLAY_HEADER_SCREEN_PADDING,
            paddingBottom: TAB_BAR_HEIGHT + Math.max(insets.bottom, 8) + spacing.sectionGap,
          },
        ]}
      >
        <View style={styles.headerContent}>
          <TopDisplayHeader title="BUSCA" color={palette.action} />
          <AppSearchBar
            value={query}
            onChangeText={setQuery}
            onClear={() => setQuery('')}
            placeholder="Busque cupons, lojas, programação..."
            colors={{
              background: palette.inputBg,
              border: palette.inputBorder,
              icon: palette.inputIcon,
              placeholder: palette.inputPlaceholder,
              text: palette.title,
              clear: palette.muted,
            }}
          />
          <HorizontalFilterChips
            items={SEARCH_FILTERS}
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
        </View>

        {!hasQuery ? (
          <View style={styles.highlightWrap}>
            <SearchHighlightCard
              spotlight={SEARCH_PROGRAMMING_SPOTLIGHT}
              onPress={() => {
                setQuery(SEARCH_PROGRAMMING_SPOTLIGHT.queryText)
                setActiveFilter('programacao')
              }}
            />
          </View>
        ) : null}

        {sections.length > 0 ? (
          sections.map((section) => (
            <View key={section.filterId} style={styles.sectionBlock}>
              <SectionHeader
                title={section.title}
                description={
                  hasQuery
                    ? `Resultados relevantes em ${SEARCH_FILTER_LABELS[section.filterId]}.`
                    : `Seleção curada de ${SEARCH_FILTER_LABELS[section.filterId].toLowerCase()}.`
                }
                actionLabel={activeFilter === 'all' ? 'Ver mais' : undefined}
                onAction={
                  activeFilter === 'all' ? () => setActiveFilter(section.filterId) : undefined
                }
              />
              <View style={styles.resultsStack}>
                {section.items.map((item) => (
                  <SearchResultCard
                    key={item.id}
                    item={item}
                    onPress={() => handleResultPress(item)}
                  />
                ))}
              </View>
            </View>
          ))
        ) : (
          <View style={[styles.emptyCard, { backgroundColor: palette.emptyBg }]}>
            <Text style={[styles.emptyTitle, { color: palette.emptyTitle }]}>
              Nada encontrado por enquanto
            </Text>
            <Text style={[styles.emptyBody, { color: palette.emptyBody }]}>
              Tente outro termo ou volte para o filtro `Tudo` para ampliar a busca mockada.
            </Text>
          </View>
        )}
      </ScrollView>
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
    marginBottom: 26,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 12,
  },
  sectionCopy: {
    gap: 4,
    flex: 1,
  },
  sectionTitle: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  sectionBody: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    lineHeight: 18,
  },
  sectionAction: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
  },
  highlightWrap: {
    marginBottom: 28,
  },
  sectionBlock: {
    marginBottom: 28,
  },
  resultsStack: {
    gap: 12,
    marginTop: 14,
  },
  emptyCard: {
    borderRadius: radius.xl,
    padding: spacing.screenX,
    gap: 6,
  },
  emptyTitle: {
    ...typography.title3,
  },
  emptyBody: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
  },
})
