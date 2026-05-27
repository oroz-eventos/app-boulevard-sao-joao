/**
 * Os 5 Circuitos Integrados do Boulevard São João.
 * (Mídia Kit Comercial, plataforma integrada)
 *
 * Cinco trilhas permanentes, independentes em conteúdo e integradas em operação.
 * Cada marca cofundadora pode adotar um circuito de alta afinidade.
 */

export type Circuito = {
  slug: string
  numero: '01' | '02' | '03' | '04' | '05'
  title: string
  tagline: string
  summary: string
  imageUri: string
  accentColor: string
  /** Ativações associadas ao circuito (cruzar com mapa.ts) */
  ativacoes: string[]
  /** Vinculação editorial — qual editoria do feed alimenta este circuito */
  editorialRelated?: 'centro' | 'sao-paulo' | 'arte-tela' | 'ao-vivo'
}

export const CIRCUITOS: Circuito[] = [
  {
    slug: 'gastronomico',
    numero: '01',
    title: 'Circuito Gastronômico',
    tagline: 'Permanência, sabor e roteiros temáticos',
    summary:
      'Bares e cafés históricos do eixo São João conectados em roteiros guiados de menu. Inclui Escola de Gastronomia em tendas cênicas com chefs locais e Roteiros Gastronômicos com cupons promocionais.',
    imageUri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F97316',
    ativacoes: [
      'Escola de Gastronomia — módulos práticos com chefs',
      'Roteiros Gastronômicos — circuitos de menus promocionais',
      'Feira Gastronômica & Roda de Samba (sáb/dom · nível G)',
      'Cardápios especiais nos bares ABRASEL durante eventos',
    ],
    editorialRelated: 'centro',
  },
  {
    slug: 'galeria-urbana',
    numero: '02',
    title: 'Circuito Galeria Urbana',
    tagline: 'Grafite, murais, projeções e restauro do patrimônio',
    summary:
      'O Centro como galeria a céu aberto. Combina arte urbana contemporânea (grafite, projeções mapeadas) com restauro do patrimônio histórico (Igreja Rosário, Estátua Mãe Preta, Relógio de Nichile).',
    imageUri: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#774DE8',
    ativacoes: [
      'Arte Urbana — oficinas gratuitas de stencil e lambe-lambe',
      'Murais comissionados nas empenas (até 04 por temporada)',
      'Projeção mapeada no Bar Brahma · ao anoitecer',
      'Editorial Arte na Tela rotativa nos 4 telões',
    ],
    editorialRelated: 'arte-tela',
  },
  {
    slug: 'oficinas-memoria',
    numero: '03',
    title: 'Circuito Oficinas & Memória',
    tagline: 'Restauro vivo e laboratório cidadão',
    summary:
      'Escola de Restauro itinerante (workshops práticos de preservação em metal, gesso e pedra) + Roteiros de Memória conduzidos por jovens guias capacitados, resgatando histórias das ruas e fachadas.',
    imageUri: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#5500CC',
    ativacoes: [
      'Escola de Restauro — preservação de esculturas e fachadas',
      'Roteiros de Memória — caminhadas com jovens guias',
      'Apadrinhamento de jovens guias (cota master + pilar)',
      'Conselho Curatorial mensal com parceiros de mídia',
    ],
    editorialRelated: 'centro',
  },
  {
    slug: 'fotografico',
    numero: '04',
    title: 'Circuito Fotográfico',
    tagline: 'Olhares amadores e profissionais que viram acervo público',
    summary:
      'Galeria Fotográfica Urbana permanente no calçadão + Roteiros Fotográficos temáticos (luzes da avenida, arquitetura clássica, fluxo de pessoas). Mostras rotativas patrocinadas pela cota master.',
    imageUri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#3B5BDB',
    ativacoes: [
      'Galeria Fotográfica Urbana — mostras permanentes',
      'Roteiros Fotográficos — caminhadas temáticas guiadas',
      'Prêmio Fotográfico Boulevard · 02 edições anuais',
      'Acervo público alimentado pelos usuários do app',
    ],
    editorialRelated: 'sao-paulo',
  },
  {
    slug: 'pet',
    numero: '05',
    title: 'Circuito Pet São João',
    tagline: 'Cuidado, adoção e convivência animal',
    summary:
      'Parcão permanente com agility ecológico em madeira de reflorestamento. Feira de adoção responsável aos domingos, mutirões de saúde veterinária social, encontros de raças aos sábados.',
    imageUri: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#E91E8C',
    ativacoes: [
      'Parcão permanente · cercado com obstáculos ecológicos',
      'Feira de adoção responsável · domingos',
      'Mutirão de saúde veterinária social',
      'Encontros de raças aos sábados',
    ],
    editorialRelated: 'centro',
  },
]

export function circuitoBySlug(slug: string): Circuito | undefined {
  return CIRCUITOS.find((c) => c.slug === slug)
}
