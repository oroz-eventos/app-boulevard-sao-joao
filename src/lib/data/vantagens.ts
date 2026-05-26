export type OfferStatus = 'new' | 'used' | 'expired'

export type AdvantageOffer = {
  id: string
  status: OfferStatus
  discountLabel: string
  condition: string
  venue: string
  expiresLabel: string
}

export const OFFER_FILTER_TABS = [
  { id: 'todos',      label: 'Todos' },
  { id: 'novos',      label: 'Novos' },
  { id: 'utilizados', label: 'Utilizados' },
  { id: 'expirados',  label: 'Expirados' },
]

export const ADVANTAGE_OFFERS: AdvantageOffer[] = [
  {
    id: 'offer-1',
    status: 'new',
    discountLabel: '50% OFF',
    condition: 'Para o primeiro pedido, até R$50',
    venue: 'Bar Brahma',
    expiresLabel: 'Expira em 3 dias',
  },
  {
    id: 'offer-2',
    status: 'new',
    discountLabel: '30% OFF',
    condition: 'Em pratos selecionados do cardápio',
    venue: 'Café no Centro',
    expiresLabel: 'Expira em 5 dias',
  },
  {
    id: 'offer-3',
    status: 'new',
    discountLabel: 'R$ 20 OFF',
    condition: 'Compras acima de R$ 80 na loja parceira',
    venue: 'Loja Boulevard Concept',
    expiresLabel: 'Expira em 7 dias',
  },
  {
    id: 'offer-4',
    status: 'used',
    discountLabel: '15% OFF',
    condition: 'Válido para ingressos antecipados',
    venue: 'Palco 1 — Shows',
    expiresLabel: 'Utilizado em 12/05',
  },
  {
    id: 'offer-5',
    status: 'used',
    discountLabel: '2x1',
    condition: 'Em bebidas não alcoólicas',
    venue: 'Praça Gastronômica',
    expiresLabel: 'Utilizado em 08/05',
  },
  {
    id: 'offer-6',
    status: 'expired',
    discountLabel: '40% OFF',
    condition: 'Primeira visita ao estúdio parceiro',
    venue: 'Ateliê das Artes',
    expiresLabel: 'Expirou em 01/05',
  },
  {
    id: 'offer-7',
    status: 'expired',
    discountLabel: '10% OFF',
    condition: 'Em toda a coleção de inverno',
    venue: 'Moda & Design',
    expiresLabel: 'Expirou em 28/04',
  },
]
