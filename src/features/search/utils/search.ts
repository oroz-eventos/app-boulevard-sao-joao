import { POPULAR_SEARCHES, UNIVERSAL_SEARCH_ITEMS } from '../data/mock'
import type {
  SearchFilterId,
  SearchResultItem,
  SearchSuggestion,
} from '../types'

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

function matchesFilter<T extends { filterId?: string; primaryFilter?: string }>(
  item: T,
  activeFilter: SearchFilterId
) {
  if (activeFilter === 'all') return true
  return item.filterId === activeFilter || item.primaryFilter === activeFilter
}

function scoreSearchItem(item: SearchResultItem, query: string) {
  const normalizedQuery = normalize(query)
  if (!normalizedQuery) return item.popularity

  const title = normalize(item.title)
  const subtitle = normalize(item.subtitle)
  const meta = normalize(item.meta)
  const badge = normalize(item.badge)
  const keywords = item.keywords.map(normalize)

  let score = 0

  if (title === normalizedQuery) score += 320
  if (title.startsWith(normalizedQuery)) score += 180
  if (title.includes(normalizedQuery)) score += 120
  if (subtitle.includes(normalizedQuery)) score += 72
  if (meta.includes(normalizedQuery)) score += 56
  if (badge.includes(normalizedQuery)) score += 48

  for (const keyword of keywords) {
    if (keyword === normalizedQuery) score += 120
    else if (keyword.startsWith(normalizedQuery)) score += 72
    else if (keyword.includes(normalizedQuery)) score += 36
  }

  return score + item.popularity
}

function uniqueSuggestions(items: SearchSuggestion[]) {
  const seen = new Set<string>()
  return items.filter((item) => {
    const key = normalize(item.term)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function getSearchResults(query: string, activeFilter: SearchFilterId) {
  const normalizedQuery = normalize(query)
  const visibleItems = UNIVERSAL_SEARCH_ITEMS.filter((item) => matchesFilter(item, activeFilter))

  return visibleItems
    .map((item) => ({ item, score: scoreSearchItem(item, normalizedQuery) }))
    .filter(({ item, score }) => !normalizedQuery || score > item.popularity + 24)
    .sort((a, b) => b.score - a.score || b.item.popularity - a.item.popularity)
    .map(({ item }) => item)
    .slice(0, normalizedQuery ? 12 : 8)
}

export function getSearchSuggestions(query: string, activeFilter: SearchFilterId) {
  const normalizedQuery = normalize(query)

  const popularMatches = POPULAR_SEARCHES.filter((item) => matchesFilter(item, activeFilter))
    .map((item) => {
      const haystack = [item.term, ...(item.relatedTerms ?? [])].map(normalize)
      const score =
        normalizedQuery.length === 0
          ? item.monthlySearches
          : haystack.some((term) => term === normalizedQuery)
            ? 260 + item.monthlySearches
            : haystack.some((term) => term.startsWith(normalizedQuery))
              ? 160 + item.monthlySearches
              : haystack.some((term) => term.includes(normalizedQuery))
                ? 80 + item.monthlySearches
                : 0

      return { item, score }
    })
    .filter(({ score }) => score > 0)

  const derivedMatches = UNIVERSAL_SEARCH_ITEMS.filter((item) => matchesFilter(item, activeFilter))
    .map((item) => ({
      id: `derived-${item.id}`,
      term: item.title,
      monthlySearches: Math.round(item.popularity * 17),
      primaryFilter: item.filterId,
      relatedTerms: item.keywords.slice(0, 4),
      score: scoreSearchItem(item, normalizedQuery),
    }))
    .filter((item) => item.score > 120)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(({ score: _score, ...suggestion }) => suggestion)

  return uniqueSuggestions([
    ...popularMatches.sort((a, b) => b.score - a.score).map(({ item }) => item),
    ...derivedMatches,
  ]).slice(0, normalizedQuery ? 6 : 8)
}
