export type OfferFilterId = 'todos' | 'novos' | 'utilizados' | 'expirados'

export type OfferStatus = 'new' | 'used' | 'expired'

export type AdvantageOffer = {
  id: string
  status: OfferStatus
  discountLabel: string
  condition: string
  venue: string
  expiresLabel: string
}

export type OfferFilterTab = {
  id: OfferFilterId
  label: string
}
