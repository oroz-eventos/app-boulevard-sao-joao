/**
 * Marcas Cofundadoras do Boulevard São João (10 cotas máx, V8 + Mídia Kit).
 *
 * Estrutura comercial:
 *  - 1 cota MASTER     · R$ 1,5mi · cofundadora (naming geral, splash, 30% LED)
 *  - 3 cotas PILAR     · R$ 600mi cada · verticais (Música / Lazer / ESG)
 *  - 6 cotas APOIO     · R$ 250mi cada · ativadores (Tech, Saúde, Pet, Design...)
 *
 * Placeholders genéricos — não usar marcas reais.
 */

export type CotaTier = 'master' | 'pilar' | 'apoio'

export type Parceiro = {
  id: string
  tier: CotaTier
  label: string
  vertical?: string
  description: string
  /** Valor sugerido em milhões (R$) */
  valor: string
  /** Cor de destaque do card (paleta brand) */
  accentColor: string
}

export const COTA_TIER_LABEL: Record<CotaTier, string> = {
  master: 'Cofundadora Master',
  pilar:  'Pilar Temático',
  apoio:  'Apoio Ativador',
}

export const COTA_INVESTMENT: Record<CotaTier, string> = {
  master: 'R$ 1,5 mi',
  pilar:  'R$ 600 mil',
  apoio:  'R$ 250 mil',
}

export const PARCEIROS: Parceiro[] = [
  {
    id: 'master',
    tier: 'master',
    label: 'MARCA MASTER',
    description:
      'Cofundadora exclusiva · naming rights de todo o Boulevard, splash do app, 30% de share nas telas LED, placa de bronze no Ponto-Zero.',
    valor: COTA_INVESTMENT.master,
    accentColor: '#5500CC',
  },
  {
    id: 'pilar-musica',
    tier: 'pilar',
    label: 'PILAR MÚSICA',
    vertical: 'Música & Palcos',
    description: 'Naming exclusivo de 1 palco + Estúdio de Vidro + 02 palcos do Réveillon + Cinema ao Ar Livre de Natal.',
    valor: COTA_INVESTMENT.pilar,
    accentColor: '#E91E8C',
  },
  {
    id: 'pilar-lazer',
    tier: 'pilar',
    label: 'PILAR LAZER',
    vertical: 'Lazer, Rua & Convivência',
    description: 'Pista "Gelo do Centro" + Foto-Opp Personagem Centro + 03 barracas na Feira + Bondinho Natalino.',
    valor: COTA_INVESTMENT.pilar,
    accentColor: '#F97316',
  },
  {
    id: 'pilar-esg',
    tier: 'pilar',
    label: 'PILAR ESG',
    vertical: 'ESG & Acessibilidade',
    description: 'Hospitalidade Acessível + 10 Jovens Guias + 02 Ceias Solidárias (SP Invisível) + Feiras Tribus do Festival Black.',
    valor: COTA_INVESTMENT.pilar,
    accentColor: '#16A34A',
  },
  {
    id: 'apoio-tech',
    tier: 'apoio',
    label: 'APOIO TECH',
    vertical: 'Tech / Telefonia',
    description: '4 Pontos de Carga rápida com telas ativas de mídia próprias.',
    valor: COTA_INVESTMENT.apoio,
    accentColor: '#3B5BDB',
  },
  {
    id: 'apoio-saude',
    tier: 'apoio',
    label: 'APOIO SAÚDE',
    vertical: 'Saúde / Farma',
    description: 'Estação de Saúde & Bem-Estar fixa no Largo do Paissandu (aferição de pressão, hidratação, primeiros cuidados).',
    valor: COTA_INVESTMENT.apoio,
    accentColor: '#16A34A',
  },
  {
    id: 'apoio-design',
    tier: 'apoio',
    label: 'APOIO DESIGN',
    vertical: 'Design / Moda',
    description: 'Estande Endossa na Feira Criativa de Economia Circular e Pop-Ups de moda autoral.',
    valor: COTA_INVESTMENT.apoio,
    accentColor: '#E91E8C',
  },
  {
    id: 'apoio-pet',
    tier: 'apoio',
    label: 'APOIO PET',
    vertical: 'Pet / Animais',
    description: '01 fim de semana exclusivo no Parcão com feira de adoção, adestramento e mutirão veterinário.',
    valor: COTA_INVESTMENT.apoio,
    accentColor: '#E91E8C',
  },
  {
    id: 'apoio-alimentacao',
    tier: 'apoio',
    label: 'APOIO ALIMENTAÇÃO',
    vertical: 'Alimentação / Bebidas',
    description: 'Sampling phygital nos finais de semana + 1 barraca naming na Feira Gastronômica.',
    valor: COTA_INVESTMENT.apoio,
    accentColor: '#F97316',
  },
  {
    id: 'apoio-mobilidade',
    tier: 'apoio',
    label: 'APOIO MOBILIDADE',
    vertical: 'Mobilidade / Transporte',
    description: 'Naming da sinalização viária do eixo + apoio aos receptivos de boas-vindas.',
    valor: COTA_INVESTMENT.apoio,
    accentColor: '#3B5BDB',
  },
]
