import { FEED_POSTS } from '@/features/feed/data/mock'
import { ADVANTAGE_OFFERS } from '@/features/vantagens/data/mock'
import type {
  SearchFilter,
  SearchResultFilterId,
  SearchResultItem,
  SearchSpotlight,
  SearchSuggestion,
} from '../types'

export const SEARCH_FILTERS: SearchFilter[] = [
  { id: 'all', label: 'Tudo' },
  { id: 'vantagens', label: 'Vantagens' },
  { id: 'lojas', label: 'Lojas' },
  { id: 'programacao', label: 'Programação' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'feed', label: 'Feed' },
]

export const SEARCH_FILTER_LABELS: Record<SearchFilter['id'], string> = Object.fromEntries(
  SEARCH_FILTERS.map((filter) => [filter.id, filter.label]),
) as Record<SearchFilter['id'], string>

export const POPULAR_SEARCHES: SearchSuggestion[] = [
  {
    id: 'popular-1',
    term: 'programação hoje',
    monthlySearches: 2480,
    primaryFilter: 'programacao',
    relatedTerms: ['agenda', 'evento hoje', 'o que fazer'],
  },
  {
    id: 'popular-2',
    term: 'bar brahma',
    monthlySearches: 2290,
    primaryFilter: 'gastronomia',
    relatedTerms: ['chopp', 'happy hour', 'restaurante'],
  },
  {
    id: 'popular-3',
    term: 'desconto restaurante',
    monthlySearches: 2170,
    primaryFilter: 'vantagens',
    relatedTerms: ['cupom', 'off', 'vantagens'],
  },
  {
    id: 'popular-4',
    term: 'roda de samba',
    monthlySearches: 1920,
    primaryFilter: 'feed',
    relatedTerms: ['show ao vivo', 'música', 'palco 1'],
  },
  {
    id: 'popular-5',
    term: 'lojas criativas',
    monthlySearches: 1710,
    primaryFilter: 'lojas',
    relatedTerms: ['design', 'presentes', 'independente'],
  },
  {
    id: 'popular-6',
    term: 'café no centro',
    monthlySearches: 1580,
    primaryFilter: 'gastronomia',
    relatedTerms: ['cafeteria', 'café especial', 'brunch'],
  },
  {
    id: 'popular-7',
    term: 'feira do boulevard',
    monthlySearches: 1490,
    primaryFilter: 'programacao',
    relatedTerms: ['feira', 'domingo', 'artesanato'],
  },
  {
    id: 'popular-8',
    term: 'vinhos',
    monthlySearches: 1360,
    primaryFilter: 'gastronomia',
    relatedTerms: ['degustação', 'praça do vinho', 'workshop'],
  },
]

export const SEARCH_PROGRAMMING_SPOTLIGHT: SearchSpotlight = {
  id: 'spotlight-programacao-hoje',
  eyebrow: 'Pesquisa sugerida',
  title: 'Programação de hoje',
  subtitle: 'Veja o que está mais buscado agora e atalho para abrir a agenda completa.',
  queryText: 'programação hoje',
  items: [
    {
      id: 'spotlight-1',
      timeLabel: '16h30',
      title: 'Oficina de massas ao vivo',
      meta: 'Praça das Oficinas',
    },
    {
      id: 'spotlight-2',
      timeLabel: '18h00',
      title: 'Roda de Samba com Ju Moraes',
      meta: 'Palco 1',
    },
    {
      id: 'spotlight-3',
      timeLabel: '19h30',
      title: 'DJ set ao pôr do sol',
      meta: 'Palco 3',
    },
  ],
}

const STORE_RESULTS: SearchResultItem[] = [
  {
    id: 'store-1',
    filterId: 'lojas',
    kind: 'loja',
    accent: 'brand',
    imageUri:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80&auto=format&fit=crop',
    title: 'Loja Boulevard Concept',
    subtitle: 'Moda, objetos e collabs exclusivas de criadores do centro.',
    meta: 'Galeria principal • aberta até 22h',
    badge: 'Selecionada',
    route: '/lojas',
    popularity: 91,
    keywords: ['loja', 'concept store', 'design', 'presentes', 'curadoria'],
  },
  {
    id: 'store-2',
    filterId: 'lojas',
    kind: 'loja',
    accent: 'pink',
    imageUri:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80&auto=format&fit=crop',
    title: 'Moda & Design',
    subtitle: 'Coleção autoral com peças urbanas, acessórios e vitrine rotativa.',
    meta: 'Ala leste • provador expresso',
    badge: 'Nova coleção',
    route: '/lojas',
    popularity: 82,
    keywords: ['moda', 'roupas', 'design', 'coleção de inverno', 'acessórios'],
  },
  {
    id: 'store-3',
    filterId: 'lojas',
    kind: 'loja',
    accent: 'orange',
    imageUri:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80&auto=format&fit=crop',
    title: 'Ateliê das Artes',
    subtitle: 'Cerâmica, gravuras e workshops curtos com artistas convidados.',
    meta: 'Pátio criativo • vagas para oficina às 17h',
    badge: 'Workshop hoje',
    route: '/lojas',
    popularity: 79,
    keywords: ['ateliê', 'arte', 'cerâmica', 'gravura', 'oficina'],
  },
  {
    id: 'store-4',
    filterId: 'lojas',
    kind: 'loja',
    accent: 'blue',
    imageUri:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80&auto=format&fit=crop',
    title: 'Vinilaria Central',
    subtitle: 'Discos, toca-discos e sessões comentadas com curadores independentes.',
    meta: 'Esquina da praça • open studio 19h',
    badge: 'Ao vivo hoje',
    route: '/lojas',
    popularity: 74,
    keywords: ['vinil', 'música', 'discos', 'independente', 'loja criativa'],
  },
]

const PROGRAMMING_RESULTS: SearchResultItem[] = [
  {
    id: 'program-1',
    filterId: 'programacao',
    kind: 'evento',
    accent: 'brand',
    imageUri:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80&auto=format&fit=crop',
    title: 'Feira do Boulevard',
    subtitle: 'Circuito com expositores, oficinas abertas e experiências ao ar livre.',
    meta: 'Hoje • 10h às 18h • acesso livre',
    badge: 'Em andamento',
    route: '/programacao',
    popularity: 98,
    keywords: ['feira', 'boulevard', 'agenda', 'domingo', 'artesanato'],
  },
  {
    id: 'program-2',
    filterId: 'programacao',
    kind: 'evento',
    accent: 'pink',
    imageUri:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80&auto=format&fit=crop',
    title: 'Roda de Samba com Ju Moraes',
    subtitle: 'Show ao vivo no Palco 1 com repertório brasileiro e convidados.',
    meta: 'Hoje • 18h • Palco 1',
    badge: 'Últimas vagas',
    route: '/programacao',
    popularity: 95,
    keywords: ['samba', 'show', 'palco 1', 'ao vivo', 'música'],
  },
  {
    id: 'program-3',
    filterId: 'programacao',
    kind: 'evento',
    accent: 'blue',
    imageUri:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80&auto=format&fit=crop',
    title: 'Exposição imersiva da cidade',
    subtitle: 'Instalações de luz e som ocupam três andares da galeria central.',
    meta: 'Sessões a cada 40 min • entrada contínua',
    badge: 'Mais buscado',
    route: '/programacao',
    popularity: 89,
    keywords: ['exposição', 'imersiva', 'galeria', 'arte', 'instalação'],
  },
  {
    id: 'program-4',
    filterId: 'programacao',
    kind: 'evento',
    accent: 'orange',
    imageUri:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80&auto=format&fit=crop',
    title: 'Oficina de massas ao vivo',
    subtitle: 'Demonstração com chef convidado e degustação ao fim da aula.',
    meta: 'Praça das Oficinas • 16h30',
    badge: 'Inscrições abertas',
    route: '/programacao',
    popularity: 84,
    keywords: ['oficina', 'massas', 'chef', 'gastronomia', 'degustação'],
  },
]

const GASTRONOMY_RESULTS: SearchResultItem[] = [
  {
    id: 'food-1',
    filterId: 'gastronomia',
    kind: 'gastronomia',
    accent: 'orange',
    imageUri:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80&auto=format&fit=crop',
    title: 'Bar Brahma',
    subtitle: 'Clássicos de boteco, chope gelado e descontos para o primeiro pedido.',
    meta: 'Praça central • atendimento até 23h',
    badge: '50% OFF',
    route: '/(tabs)/vantagens',
    popularity: 94,
    keywords: ['bar brahma', 'bar', 'chope', 'restaurante', 'desconto restaurante'],
  },
  {
    id: 'food-2',
    filterId: 'gastronomia',
    kind: 'gastronomia',
    accent: 'brand',
    imageUri:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80&auto=format&fit=crop',
    title: 'Café no Centro',
    subtitle: 'Cafés especiais, brunch enxuto e pratos selecionados do dia.',
    meta: 'Galeria norte • menu até 19h',
    badge: '30% OFF',
    route: '/(tabs)/vantagens',
    popularity: 88,
    keywords: ['café', 'cafeteria', 'café no centro', 'brunch', 'especial'],
  },
  {
    id: 'food-3',
    filterId: 'gastronomia',
    kind: 'gastronomia',
    accent: 'pink',
    imageUri:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80&auto=format&fit=crop',
    title: 'Praça do Vinho',
    subtitle: 'Degustações guiadas, taças avulsas e workshop rápido com sommeliers.',
    meta: 'Hoje • até 20h • praça sul',
    badge: 'Degustação',
    route: '/programacao',
    popularity: 85,
    keywords: ['vinho', 'vinhos', 'degustação', 'praça do vinho', 'sommelier'],
  },
  {
    id: 'food-4',
    filterId: 'gastronomia',
    kind: 'gastronomia',
    accent: 'green',
    imageUri:
      'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=400&q=80&auto=format&fit=crop',
    title: 'Food trucks da Praça Norte',
    subtitle: 'Fila curta, combos rápidos e opções vegetarianas.',
    meta: 'Agora • fluxo livre • praça norte',
    badge: 'Fila curta',
    route: '/programacao',
    popularity: 81,
    keywords: ['food truck', 'praça norte', 'lanche', 'jantar', 'rápido'],
  },
]

const FEED_RESULTS: SearchResultItem[] = FEED_POSTS.slice(0, 7).map((post) => ({
  id: `feed-${post.id}`,
  filterId: 'feed' as SearchResultFilterId,
  kind: 'conteudo',
  accent:
    post.editorial === 'ao-vivo'
      ? 'pink'
      : post.editorial === 'sao-paulo'
        ? 'blue'
        : 'brand',
  imageUri: post.images[0],
  title: post.title,
  subtitle: post.description,
  meta:
    post.editorial === 'ao-vivo'
      ? 'Feed • ao vivo'
      : post.editorial === 'sao-paulo'
        ? 'Feed • São Paulo'
        : 'Feed • centro',
  badge:
    post.editorial === 'ao-vivo'
      ? 'Ao vivo'
      : post.editorial === 'sao-paulo'
        ? 'São Paulo'
        : 'Centro',
  route: '/(tabs)/feed',
  popularity: post.editorial === 'ao-vivo' ? 90 : 76,
  keywords: [post.editorial, ...post.title.split(' '), ...post.description.split(' ').slice(0, 12)],
}))

const ADVANTAGE_RESULTS: SearchResultItem[] = ADVANTAGE_OFFERS.map((offer) => ({
  id: `offer-${offer.id}`,
  filterId: 'vantagens' as SearchResultFilterId,
  kind: 'cupom',
  accent: offer.discountLabel.includes('2x1') ? 'green' : 'brand',
  imageUri:
    offer.venue === 'Bar Brahma'
      ? 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80&auto=format&fit=crop'
      : offer.venue === 'Café no Centro'
        ? 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80&auto=format&fit=crop'
        : offer.venue === 'Loja Boulevard Concept'
          ? 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80&auto=format&fit=crop'
          : offer.venue === 'Palco 1 — Shows'
            ? 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80&auto=format&fit=crop'
            : offer.venue === 'Praça Gastronômica'
              ? 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80&auto=format&fit=crop'
              : offer.venue === 'Ateliê das Artes'
                ? 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80&auto=format&fit=crop'
                : 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80&auto=format&fit=crop',
  title: offer.venue,
  subtitle: offer.condition,
  meta: offer.expiresLabel,
  badge: offer.discountLabel,
  route: '/(tabs)/vantagens',
  popularity: offer.status === 'new' ? 92 : offer.status === 'used' ? 65 : 52,
  keywords: [
    offer.discountLabel,
    offer.venue,
    offer.condition,
    offer.status,
    'cupom',
    'desconto',
    'oferta',
    'vantagens',
  ],
}))

export const UNIVERSAL_SEARCH_ITEMS: SearchResultItem[] = [
  ...ADVANTAGE_RESULTS,
  ...STORE_RESULTS,
  ...PROGRAMMING_RESULTS,
  ...GASTRONOMY_RESULTS,
  ...FEED_RESULTS,
]
