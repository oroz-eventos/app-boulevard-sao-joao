export type FeiraFilterId =
  | 'todos'
  | 'gastronomia'
  | 'artesanato'
  | 'organicos'
  | 'bem-estar'
  | 'bebidas'

export type FeiraCertificationId =
  | 'sustentavel'
  | 'vegano'
  | 'organico'
  | 'producao-local'
  | 'comercio-justo'

export type FeiraLogoTone = 'brand' | 'green' | 'orange' | 'blue' | 'pink' | 'neutral'

export type FeiraFilter = {
  id: FeiraFilterId
  label: string
}

export type FeiraCertification = {
  id: FeiraCertificationId
  label: string
}

export type FeiraStall = {
  id: string
  number: string
  name: string
  category: Exclude<FeiraFilterId, 'todos'>
  logoText: string
  logoTone: FeiraLogoTone
  galleryImageUris: [string, string, string]
  summary: string
  certifications: FeiraCertificationId[]
  instagramUrl?: string
  websiteUrl?: string
  mapRoute: '/(tabs)/mapa'
  mapLabel: string
  keywords: string[]
}
