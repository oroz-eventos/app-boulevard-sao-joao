/**
 * Vantagens Boulevard São João — cupons e benefícios.
 * Inclui categoria "Solidário" pra ações de impacto social
 * (programa SP Invisível, contratação de pessoas em vulnerabilidade etc.).
 */

export type OfferStatus = 'new' | 'used' | 'expired' | 'solidario'

export type AdvantageOffer = {
  id: string
  status: OfferStatus
  discountLabel: string
  condition: string
  venue: string
  expiresLabel: string
  /** Para offers solidárias, valor sugerido (R$) que o usuário pode "doar" */
  doacaoSugerida?: number
}

export const OFFER_FILTER_TABS = [
  { id: 'todos',      label: 'Todos' },
  { id: 'novos',      label: 'Novos' },
  { id: 'solidario',  label: 'Solidário' },
  { id: 'utilizados', label: 'Utilizados' },
  { id: 'expirados',  label: 'Expirados' },
]

export const ADVANTAGE_OFFERS: AdvantageOffer[] = [
  // === SOLIDÁRIO (primeiro destaque) ===
  {
    id: 'sp-invisivel-ceia',
    status: 'solidario',
    discountLabel: 'CEIA SOLIDÁRIA',
    condition:
      'Apadrinhe uma ceia no Largo do Paissandu durante o Natal no Boulevard. Programa em parceria com o SP Invisível.',
    venue: 'SP Invisível · Natal no Boulevard',
    expiresLabel: 'Aceita doações até 24 DEZ',
    doacaoSugerida: 45,
  },
  {
    id: 'tribus-emprego',
    status: 'solidario',
    discountLabel: 'EMPREGABILIDADE',
    condition:
      'Patrocine 1 dia de trabalho de pessoa em vulnerabilidade na produção e zeladoria do Boulevard.',
    venue: 'Programa Tribus · Boulevard',
    expiresLabel: 'Ativo o ano todo',
    doacaoSugerida: 120,
  },

  // === NOVOS ===
  {
    id: 'brahma-50',
    status: 'new',
    discountLabel: '50% OFF',
    condition:
      'Primeiro pedido no Bar Brahma · válido até R$50. Apresente o cupom no balcão.',
    venue: 'Bar Brahma',
    expiresLabel: 'Expira em 3 dias',
  },
  {
    id: 'cafe-republica-30',
    status: 'new',
    discountLabel: '30% OFF',
    condition: 'Em pratos do brunch · sábados e domingos das 9h às 14h.',
    venue: 'Café da República',
    expiresLabel: 'Expira em 5 dias',
  },
  {
    id: 'mercado-paissandu-20',
    status: 'new',
    discountLabel: 'R$ 20 OFF',
    condition: 'Compras acima de R$ 80 no Mercado do Paissandu.',
    venue: 'Mercado do Paissandu',
    expiresLabel: 'Expira em 7 dias',
  },
  {
    id: 'corpo-calmo-15',
    status: 'new',
    discountLabel: '15% OFF',
    condition: 'Massagem express de 30min no Ateliê Corpo Calmo.',
    venue: 'Ateliê Corpo Calmo',
    expiresLabel: 'Expira em 10 dias',
  },

  // === UTILIZADOS ===
  {
    id: 'estadao-15-usado',
    status: 'used',
    discountLabel: '15% OFF',
    condition: 'Pernil no Estadão Bar · noite do show da virada.',
    venue: 'Estadão Bar',
    expiresLabel: 'Utilizado em 18/05',
  },
  {
    id: 'brahma-2x1-usado',
    status: 'used',
    discountLabel: '2x1',
    condition: 'Chope durante o happy hour de quinta.',
    venue: 'Bar Brahma',
    expiresLabel: 'Utilizado em 08/05',
  },

  // === EXPIRADOS ===
  {
    id: 'cinemateca-40-exp',
    status: 'expired',
    discountLabel: '40% OFF',
    condition: 'Sessão especial de estreia · Festival de Inverno.',
    venue: 'Cinemateca Boulevard',
    expiresLabel: 'Expirou em 28/04',
  },
]
