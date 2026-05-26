export type SearchFilterId =
  | 'all'
  | 'vantagens'
  | 'lojas'
  | 'programacao'
  | 'gastronomia'
  | 'feed'

export type SearchResultFilterId = Exclude<SearchFilterId, 'all'>

export type SearchAccentTone = 'brand' | 'pink' | 'blue' | 'orange' | 'green'

export type SearchResultKind = 'cupom' | 'loja' | 'evento' | 'gastronomia' | 'conteudo'

export type SearchFilter = {
  id: SearchFilterId
  label: string
}

export type SearchSuggestion = {
  id: string
  term: string
  monthlySearches: number
  primaryFilter: SearchResultFilterId
  relatedTerms?: string[]
}

export type SearchSpotlightItem = {
  id: string
  timeLabel: string
  title: string
  meta: string
}

export type SearchSpotlight = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  queryText: string
  items: SearchSpotlightItem[]
}

export type SearchResultItem = {
  id: string
  filterId: SearchResultFilterId
  kind: SearchResultKind
  accent: SearchAccentTone
  imageUri?: string
  title: string
  subtitle: string
  meta: string
  badge: string
  route: string
  popularity: number
  keywords: string[]
}
