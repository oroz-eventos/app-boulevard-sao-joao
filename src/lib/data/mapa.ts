/**
 * Marcadores oficiais do mapa do Boulevard São João (V8)
 * Eixo: Av São João + Largo do Paissandu → esquina São João × Ipiranga (5 quarteirões).
 *
 * Coordenadas (x, y) em % do canvas — não são geográficas, são posicionais
 * pro mockup. Origem (0,0) = topo-esquerda do retângulo do mapa.
 */

export type MapKind =
  | 'telas'        // 4 prédios das telas LED
  | 'palcos'       // 4 palcos pequenos da programação regular
  | 'gastronomia'  // bares + feira gastronômica
  | 'artistas'    // espaços pra artistas independentes
  | 'pets'         // parcão + feira de adoção
  | 'monumentos'   // restauro: igreja, estátua, relógio
  | 'utility'      // ponto-zero, totem de carga, wifi
  | 'esportes'     // Vertical Sports (escalada nas empenas)
  | 'comercio'     // lojas/restaurantes parceiros

export type MapMarker = {
  id: string
  kind: MapKind
  title: string
  /** Texto curto exibido no card */
  subtitle?: string
  /** Posição em % (0-100). Eixo horizontal segue a São João. */
  x: number
  y: number
  /** Cor do pin (cor brand correspondente à categoria) */
  color: string
  /** Imagem opcional pra abrir no detail */
  imageUri?: string
  /** Selo de horário (ex: "Aberto agora", "Sáb 18h–01h") */
  hours?: string
  /** Selo de destaque opcional */
  discount?: string
  /** Quando aplicável: link pra rota de detalhe */
  detailHref?: string
}

export const MAP_FILTERS: { id: 'todos' | MapKind; label: string }[] = [
  { id: 'todos',       label: 'Tudo' },
  { id: 'telas',       label: 'Telões' },
  { id: 'palcos',      label: 'Palcos' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'artistas',    label: 'Artistas' },
  { id: 'pets',        label: 'Pets' },
  { id: 'monumentos',  label: 'Monumentos' },
  { id: 'utility',     label: 'Utilidade' },
  { id: 'esportes',    label: 'Esportes' },
]

export const KIND_COLORS: Record<MapKind, string> = {
  telas:       '#3B5BDB',
  palcos:      '#5500CC',
  gastronomia: '#16A34A',
  artistas:    '#F97316',
  pets:        '#E91E8C',
  monumentos:  '#774DE8',
  utility:     '#525252',
  esportes:    '#E91E8C',
  comercio:    '#F97316',
}

export const KIND_LABEL: Record<MapKind, string> = {
  telas:       'Telão LED',
  palcos:      'Palco',
  gastronomia: 'Gastronomia',
  artistas:    'Artistas',
  pets:        'Pet',
  monumentos:  'Monumento',
  utility:     'Utilidade',
  esportes:    'Esportes',
  comercio:    'Comércio',
}

export const MAP_MARKERS: MapMarker[] = [
  // === 4 PRÉDIOS DAS TELAS LED ===
  {
    id: 'tela-bar-brahma',
    kind: 'telas',
    title: 'Projeção · Bar Brahma',
    subtitle: 'Mapping na fachada histórica · esquina SJ × Ipiranga',
    x: 78, y: 38,
    color: KIND_COLORS.telas,
    hours: 'Conteúdo das 18h às 23h',
    imageUri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tela-drogaria-sp',
    kind: 'telas',
    title: 'Tela 3D · Drogaria São Paulo',
    subtitle: 'Painel de mídia em formato 3D anamórfico',
    x: 64, y: 50,
    color: KIND_COLORS.telas,
    hours: 'Operação 5h às 23h',
    imageUri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tela-habibs',
    kind: 'telas',
    title: 'Tela Digital · Prédio Habibs',
    subtitle: 'Painel LED frontal · conteúdo cultural',
    x: 22, y: 70,
    color: KIND_COLORS.telas,
    hours: 'Operação 5h às 23h',
    imageUri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tela-empena',
    kind: 'telas',
    title: 'Empena + Tela Digital',
    subtitle: 'Quarteirão central · projeção + LED',
    x: 50, y: 32,
    color: KIND_COLORS.telas,
    hours: 'Conteúdo cultural 5h–23h',
    imageUri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },

  // === 4 PALCOS DA PROGRAMAÇÃO REGULAR ===
  {
    id: 'palco-1',
    kind: 'palcos',
    title: 'Palco 1 · Samba',
    subtitle: 'Roda de samba paulistana · sáb a partir das 19h',
    x: 18, y: 38,
    color: KIND_COLORS.palcos,
    hours: 'Sáb 19h · Dom 16h',
    imageUri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'palco-2',
    kind: 'palcos',
    title: 'Palco 2 · MPB',
    subtitle: 'MPB, jazz e contação de histórias',
    x: 38, y: 56,
    color: KIND_COLORS.palcos,
    hours: 'Sáb 20h30 · Dom 17h',
    imageUri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'palco-3',
    kind: 'palcos',
    title: 'Palco 3 · Rock & Indie',
    subtitle: 'Rock, indie e shows acústicos',
    x: 58, y: 65,
    color: KIND_COLORS.palcos,
    hours: 'Sáb 22h · Dom 18h',
    imageUri: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'palco-rua',
    kind: 'palcos',
    title: 'Palco Rua · Hip-Hop',
    subtitle: 'Hip-Hop, batalhas de MC e dança urbana',
    x: 82, y: 75,
    color: KIND_COLORS.palcos,
    hours: 'Sáb 21h · Dom 19h',
    imageUri: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80',
  },

  // === MONUMENTOS RESTAURADOS ===
  {
    id: 'igreja-rosario',
    kind: 'monumentos',
    title: 'Igreja N. Sra. do Rosário dos Homens Pretos',
    subtitle: 'Restauro completo da fachada · patrimônio do projeto',
    x: 90, y: 22,
    color: KIND_COLORS.monumentos,
    detailHref: '/lugares/igreja-rosario',
    imageUri: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'estatua-mae-preta',
    kind: 'monumentos',
    title: 'Estátua da Mãe Preta',
    subtitle: 'Restauro + rampa acessível · Largo do Paissandu',
    x: 92, y: 30,
    color: KIND_COLORS.monumentos,
    detailHref: '/lugares/estatua-mae-preta',
    imageUri: 'https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'relogio-nichile',
    kind: 'monumentos',
    title: 'Relógio de Nichile',
    subtitle: 'Restauro do icônico relógio modernista',
    x: 6, y: 60,
    color: KIND_COLORS.monumentos,
    detailHref: '/lugares/relogio-nichile',
    imageUri: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'espaco-cauby',
    kind: 'monumentos',
    title: 'Espaço Cauby Peixoto',
    subtitle: 'Praça requalificada · placas musicais + arquibancada',
    x: 88, y: 18,
    color: KIND_COLORS.monumentos,
    detailHref: '/lugares/espaco-cauby-peixoto',
    imageUri: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },

  // === UTILIDADE ===
  {
    id: 'ponto-zero',
    kind: 'utility',
    title: 'Ponto-Zero · SJ × Ipiranga',
    subtitle: 'Placa de bronze fundida · esquina mais famosa do Brasil',
    x: 72, y: 44,
    color: KIND_COLORS.utility,
    detailHref: '/lugares/ponto-zero',
  },
  {
    id: 'carga-1',
    kind: 'utility',
    title: 'Totem de Carga',
    subtitle: 'Carregamento rápido · USB-C, Lightning e wireless',
    x: 30, y: 48,
    color: KIND_COLORS.utility,
    hours: 'Aberto 5h–23h',
  },
  {
    id: 'wifi-1',
    kind: 'utility',
    title: 'Wi-Fi público Boulevard',
    subtitle: 'Sinal aberto em todo o eixo · sem cadastro',
    x: 48, y: 70,
    color: KIND_COLORS.utility,
  },

  // === GASTRONOMIA / COMÉRCIO ÂNCORA ===
  {
    id: 'bar-brahma',
    kind: 'gastronomia',
    title: 'Bar Brahma',
    subtitle: 'Choro, MPB e cardápio histórico',
    x: 80, y: 42,
    color: KIND_COLORS.gastronomia,
    hours: 'Aberto até 02h',
    discount: '10% cupom Boulevard',
    imageUri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'feira-gastronomica',
    kind: 'gastronomia',
    title: 'Feira Gastronômica (Domingos)',
    subtitle: 'Inspirada na San Telmo · culinária autoral',
    x: 42, y: 72,
    color: KIND_COLORS.gastronomia,
    hours: 'Dom 10h–18h',
    imageUri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },

  // === PET ===
  {
    id: 'parcao',
    kind: 'pets',
    title: 'Parcão Boulevard',
    subtitle: 'Parquinho pet permanente + feira de adoção dominical',
    x: 12, y: 78,
    color: KIND_COLORS.pets,
    hours: 'Aberto todos os dias · feira Dom',
    imageUri: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80',
  },

  // === ARTISTAS INDEPENDENTES ===
  {
    id: 'artistas-1',
    kind: 'artistas',
    title: 'Tenda dos Artistas',
    subtitle: 'Espaço pra artistas de rua · rotativo aos fins de semana',
    x: 56, y: 40,
    color: KIND_COLORS.artistas,
    hours: 'Sáb e Dom · 14h–22h',
  },
  {
    id: 'artistas-2',
    kind: 'artistas',
    title: 'Esquina Aberta',
    subtitle: 'Performances rápidas · slot livre pra novos artistas',
    x: 70, y: 60,
    color: KIND_COLORS.artistas,
    hours: 'Sáb e Dom · 16h–22h',
  },

  // === ESPORTES ===
  {
    id: 'vertical-sports',
    kind: 'esportes',
    title: 'Vertical Sports · Empena escalável',
    subtitle: 'Escalada esportiva em parede de 14m · com monitor',
    x: 36, y: 26,
    color: KIND_COLORS.esportes,
    hours: 'Sáb e Dom · 14h–20h',
    imageUri: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80',
  },
]
