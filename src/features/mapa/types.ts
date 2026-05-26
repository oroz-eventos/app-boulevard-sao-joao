export type MapFilterId = 'todos' | 'telas' | 'palcos' | 'comercios'

export type MapMarkerKind = Exclude<MapFilterId, 'todos'>

export type MapFilter = {
  id: MapFilterId
  label: string
}

export type MapDetailCard = {
  id: string
  meta: string
  title: string
}

type MapMarkerBase = {
  id: string
  kind: MapMarkerKind
  title: string
  x: number
  y: number
}

export type MapPalcoMarker = MapMarkerBase & {
  kind: 'palcos'
  sectionTitle: string
  items: MapDetailCard[]
}

export type MapTelaMarker = MapMarkerBase & {
  kind: 'telas'
  sectionTitle: string
  items: MapDetailCard[]
}

export type MapComercioMarker = MapMarkerBase & {
  kind: 'comercios'
  sectionTitle: string
  facadeImageUri: string
  summary: string
  addressLine: string
  openingHours: string
  discountLabel?: string
}

export type MapMarker = MapPalcoMarker | MapTelaMarker | MapComercioMarker
