export const LIVE_TICKER_ITEMS = [
  'Feira do Boulevard 10–18h',
  'Roda de Samba com Ju Moraes — Palco 1',
  'Transmissão ao vivo — Palco 2 • 18h',
  'Quiz interativo no Telão 3 — participe pelo app',
  'Agora • Feira de artesanato lota o Pátio Central',
  'Cozinha ao vivo — oficina de massas na Praça das Oficinas',
  'Fila liberada • entrada rápida no show das 18h',
  'Degustação de vinhos na Praça do Vinho — até 20h',
  'Infantil • oficina de tintas naturais — Jardim das Famílias',
  'Exposição imersiva no centro — últimas vagas hoje',
  'Feira de Design — fila em movimento na ala leste',
  'Circuito de lojas criativas — mapa atualizado no app',
  'Palco 3 • DJ set ao pôr do sol — 19h30',
  'Balcão de informações — mapa impresso disponível',
  'Estacionamento sul com vagas liberadas agora',
  'Food trucks na Praça Norte — fila curta',
  'Sessão de fotos no Photo Booth — gratuito até 17h',
  'Workshop de cerâmica — inscrições na tenda 8',
  'Agora • Aula aberta de forró no Palco Rua',
  'Mercado criativo com novas marcas na Alameda 2',
]

export const CATEGORY_SHORTCUTS = [
  { id: 'prog',      label: 'Programação', icon: '📅', href: '/programacao' },
  { id: 'busca',     label: 'Busca',       icon: '🔍', href: '/busca' },
  { id: 'mapa',      label: 'Mapa',        icon: '🗺️', href: '/mapa' },
  { id: 'feira',     label: 'Feira',       icon: '🛍️', href: '/feira' },
  { id: 'feed',      label: 'Feed',        icon: '▶️', href: '/feed' },
  { id: 'telao',     label: 'Interaja',    icon: '✨', href: '/interaja' },
  { id: 'lojas',     label: 'Comércios',   icon: '🏪', href: '/comercios' },
  { id: 'vantagens', label: 'Vantagens',   icon: '🎁', href: '/vantagens' },
]

export const HERO_SLIDES = [
  {
    id: 'hero-1',
    backgroundColor: '#5500CC',
    title: 'Boulevard ao vivo',
    subtitle: 'Cultura, gastronomia e experiências na rua',
    cta: 'Explorar agora',
    ctaHref: '/programacao',
  },
  {
    id: 'hero-2',
    backgroundColor: '#F97316',
    title: 'Feira do fim de semana',
    subtitle: 'Estandes, oficinas e comércio local',
    cta: 'Ver mapa',
    ctaHref: '/mapa',
  },
]

export const FEATURED = {
  imageUri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
  tag: 'Palco 2 • 18h • Acesso Livre',
  title: 'Transmissão da Copa — Brasil contra Argentina',
  meta: 'Ao vivo no Boulevard',
}

export const PROMO_SLIDES = [
  {
    id: 'promo-1',
    title: 'Café Passarola',
    subtitle: 'Café coado grátis no seu primeiro pedido.',
    cta: 'Resgatar',
    backgroundColor: '#2A0066',
    href: '/vantagens',
  },
  {
    id: 'promo-2',
    title: 'Vantagens Boulevard',
    subtitle: 'Descontos nos comércios da região.',
    cta: 'Ver ofertas',
    backgroundColor: '#8B1454',
    href: '/vantagens',
  },
  {
    id: 'promo-3',
    title: 'Telão Interativo',
    subtitle: 'Envie seu vídeo de 15s e apareça no telão.',
    cta: 'Participar',
    backgroundColor: '#3B5BDB',
    href: '/interaja',
  },
]

export const QUICK_ACCESS = [
  {
    id: 'programacao',
    label: 'PROGRAMAÇÃO',
    imageUri: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
    href: '/programacao',
  },
  {
    id: 'gastronomia',
    label: 'GASTRONOMIA',
    imageUri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    href: '/busca',
  },
  {
    id: 'feed',
    label: 'DESCUBRA E APRENDA',
    imageUri: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    href: '/feed',
  },
]
