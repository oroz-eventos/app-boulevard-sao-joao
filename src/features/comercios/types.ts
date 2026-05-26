export type ComercioFilterId =
  | 'todos'
  | 'cafes'
  | 'gastronomia'
  | 'moda'
  | 'servicos'
  | 'bem-estar'
  | 'cultura'

export type ComercioLogoTone = 'brand' | 'green' | 'orange' | 'blue' | 'pink' | 'neutral'

export type ComercioFilter = {
  id: ComercioFilterId
  label: string
}

export type ComercioStore = {
  id: string
  name: string
  category: Exclude<ComercioFilterId, 'todos'>
  discountLabel?: string
  logoText: string
  logoTone: ComercioLogoTone
  facadeImageUri: string
  summary: string
  addressLine: string
  openingHours: string
  mapRoute: '/(tabs)/mapa'
  instagramUrl?: string
  websiteUrl?: string
  keywords: string[]
}
