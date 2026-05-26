/**
 * Comércios e bares parceiros do Boulevard São João (V8).
 * Nomes plausíveis da rede ABRASEL do eixo São João + Ipiranga.
 * Cada comércio carrega flags de:
 *   - acessibilidade (rampa, libras, audiodescrição, braille)
 *   - se aceita cupom Boulevard (Vantagens)
 */

export type AcessibilidadeFlag = 'rampa' | 'libras' | 'audiodescricao' | 'braille'

export type ComercioStore = {
  id: string
  name: string
  category: string
  discountLabel?: string
  logoText: string
  logoTone: 'brand' | 'pink' | 'orange' | 'blue' | 'green' | 'neutral'
  facadeImageUri: string
  summary: string
  addressLine: string
  openingHours: string
  instagramUrl?: string
  websiteUrl?: string
  keywords: string[]
  acessibilidade: AcessibilidadeFlag[]
  aceitaCupomBoulevard: boolean
}

export const COMERCIO_FILTERS = [
  { id: 'todos',       label: 'Todos' },
  { id: 'bares',       label: 'Bares' },
  { id: 'cafes',       label: 'Cafés' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'cultura',     label: 'Cultura' },
  { id: 'servicos',    label: 'Serviços' },
  { id: 'bem-estar',   label: 'Bem-estar' },
]

export const COMERCIO_STORES: ComercioStore[] = [
  {
    id: 'bar-brahma',
    name: 'Bar Brahma',
    category: 'bares',
    discountLabel: '10% off',
    logoText: 'BB',
    logoTone: 'brand',
    facadeImageUri:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Ícone da esquina São João × Ipiranga. Choro ao vivo, MPB e cardápio histórico de bistrô paulistano desde 1948.',
    addressLine: 'Av. São João, 677',
    openingHours: 'Ter–Dom · 12h–02h',
    instagramUrl: 'https://instagram.com/barbrahmasp',
    websiteUrl: 'https://barbrahma.com.br',
    keywords: ['bar', 'choro', 'MPB', 'happy hour', 'icônico'],
    acessibilidade: ['rampa', 'audiodescricao'],
    aceitaCupomBoulevard: true,
  },
  {
    id: 'galeria-metropole',
    name: 'Galeria Metrópole',
    category: 'cultura',
    logoText: 'GM',
    logoTone: 'blue',
    facadeImageUri:
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Galeria comercial modernista com livrarias, cinemas independentes e ateliês — agora abriga residência de grafiteiras paulistanas.',
    addressLine: 'Av. São João, 474',
    openingHours: 'Seg–Sáb · 10h–22h',
    instagramUrl: 'https://instagram.com/galeriametropole',
    keywords: ['galeria', 'cultura', 'livraria', 'cinema', 'modernismo'],
    acessibilidade: ['rampa', 'libras', 'braille'],
    aceitaCupomBoulevard: false,
  },
  {
    id: 'cafe-da-republica',
    name: 'Café da República',
    category: 'cafes',
    discountLabel: '15% off',
    logoText: 'CR',
    logoTone: 'orange',
    facadeImageUri:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Café especial com torra própria + brunch aos finais de semana. Esplanada com vista pra Praça da República.',
    addressLine: 'Pça da República, 386',
    openingHours: 'Todos os dias · 7h–22h',
    instagramUrl: 'https://instagram.com/cafedarepublica',
    keywords: ['café', 'brunch', 'esplanada', 'especial'],
    acessibilidade: ['rampa'],
    aceitaCupomBoulevard: true,
  },
  {
    id: 'estadao-bar',
    name: 'Estadão Bar e Lanches',
    category: 'gastronomia',
    logoText: 'EB',
    logoTone: 'orange',
    facadeImageUri:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Famoso pelo pernil. Funcionando 24h, atende jornalistas, taxistas e moradores há mais de 50 anos.',
    addressLine: 'Viaduto 9 de Julho, 193',
    openingHours: 'Aberto 24h',
    instagramUrl: 'https://instagram.com/estadaobar',
    keywords: ['lanche', 'pernil', '24h', 'tradição'],
    acessibilidade: ['rampa'],
    aceitaCupomBoulevard: true,
  },
  {
    id: 'cinemateca-boulevard',
    name: 'Cinemateca Boulevard',
    category: 'cultura',
    logoText: 'CB',
    logoTone: 'neutral',
    facadeImageUri:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Sala independente com programação autoral. Sessões temáticas alinhadas com a editorial Arte na Tela.',
    addressLine: 'Rua Marconi, 53',
    openingHours: 'Qua–Dom · 14h–23h',
    instagramUrl: 'https://instagram.com/cinematecaboulevard',
    keywords: ['cinema', 'autoral', 'cultura', 'independente'],
    acessibilidade: ['rampa', 'libras', 'audiodescricao'],
    aceitaCupomBoulevard: false,
  },
  {
    id: 'mercado-paissandu',
    name: 'Mercado do Paissandu',
    category: 'gastronomia',
    discountLabel: '20% off',
    logoText: 'MP',
    logoTone: 'green',
    facadeImageUri:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Empório com produtores locais, sanduíches, vinhos paulistanos e cardápio rotativo dos chefs do bairro.',
    addressLine: 'Largo do Paissandu, 51',
    openingHours: 'Seg–Sáb · 9h–22h · Dom · 10h–18h',
    instagramUrl: 'https://instagram.com/mercadopaissandu',
    keywords: ['mercado', 'empório', 'vinhos', 'sanduíches', 'produtor local'],
    acessibilidade: ['rampa', 'braille'],
    aceitaCupomBoulevard: true,
  },
  {
    id: 'oficina-prisma',
    name: 'Oficina Prisma',
    category: 'servicos',
    logoText: 'OP',
    logoTone: 'blue',
    facadeImageUri:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Impressão rápida, brindes e apoio gráfico para ativações no calçadão. Atende marcas parceiras do Boulevard.',
    addressLine: 'Rua Aurora, 84',
    openingHours: 'Seg–Sex · 9h–19h',
    websiteUrl: 'https://oficinaprisma.com.br',
    keywords: ['gráfica', 'impressão', 'brindes', 'apoio', 'serviços'],
    acessibilidade: ['rampa'],
    aceitaCupomBoulevard: false,
  },
  {
    id: 'corpo-calmo',
    name: 'Ateliê Corpo Calmo',
    category: 'bem-estar',
    discountLabel: '15% off',
    logoText: 'CC',
    logoTone: 'green',
    facadeImageUri:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Massagem express, aromaterapia e autocuidado pra quem precisa recarregar entre uma atração e outra.',
    addressLine: 'Rua Vitória, 112',
    openingHours: 'Seg–Sáb · 10h–19h',
    instagramUrl: 'https://instagram.com/corpocalmoatelie',
    keywords: ['bem-estar', 'massagem', 'aromaterapia', 'autocuidado'],
    acessibilidade: ['rampa'],
    aceitaCupomBoulevard: true,
  },
]

export const LOGO_TONE_COLORS: Record<ComercioStore['logoTone'], string> = {
  brand:   '#5500CC',
  pink:    '#E91E8C',
  orange:  '#F97316',
  blue:    '#3B5BDB',
  green:   '#16A34A',
  neutral: '#525252',
}

export const ACESSIBILIDADE_LABEL: Record<AcessibilidadeFlag, string> = {
  rampa:          'Rampa',
  libras:         'LIBRAS',
  audiodescricao: 'Áudio-descrição',
  braille:        'Cardápio em braille',
}
