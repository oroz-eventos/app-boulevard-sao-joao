import { colors } from '@/theme/colors'
import type { CategoryIconName } from '../icons/categoryIcons'
import type { PromoIconName } from '../icons/promoIcons'

export type LiveTickerItem = {
  id: string
  text: string
}

export type FeaturedItem = {
  id: string
  imageUri: string
  tag: string
  title: string
  meta?: string
}

export type PromoSlide = {
  id: string
  title: string
  icon: PromoIconName
  /** Texto principal do banner (lado esquerdo) */
  subtitle?: string
  cta?: string
  backgroundColor?: string
  accentPanelColor?: string
  accentColor?: string
}

export type CategoryHref =
  | '/programacao'
  | '/feira'
  | '/lojas'
  | '/(tabs)/vantagens'
  | '/(tabs)/busca'
  | '/(tabs)/mapa'
  | '/(tabs)/feed'
  | '/interaja'

export type CategoryShortcut = {
  id: string
  label: string
  icon: CategoryIconName
  href: CategoryHref
}

export type QuickAccessItem = {
  id: string
  label: string
  imageUri: string
  route?: string
}

export const LIVE_TICKER_ITEMS: LiveTickerItem[] = [
  { id: '1', text: 'Feira do Boulevard 10–18h' },
  { id: '2', text: 'Roda de Samba com Ju Moraes — Palco 1' },
  { id: '3', text: 'Transmissão ao vivo — Palco 2 • 18h' },
  { id: '4', text: 'Quiz interativo no Telão 3 — participe pelo app' },
  { id: '5', text: 'Agora • Feira de artesanato lota o Pátio Central' },
  { id: '6', text: 'Cozinha ao vivo — oficina de massas na Praça das Oficinas' },
  { id: '7', text: 'Fila liberada • entrada rápida no show das 18h' },
  { id: '8', text: 'Degustação de vinhos na Praça do Vinho — até 20h' },
  { id: '9', text: 'Infantil • oficina de tintas naturais — Jardim das Famílias' },
  { id: '10', text: 'Exposição imersiva no centro — últimas vagas hoje' },
  { id: '11', text: 'Feira de Design — fila em movimento na ala leste' },
  { id: '12', text: 'Circuito de lojas criativas — mapa atualizado no app' },
  { id: '13', text: 'Palco 3 • DJ set ao pôr do sol — 19h30' },
  { id: '14', text: 'Balcão de informações — mapa impresso disponível' },
  { id: '15', text: 'Estacionamento sul com vagas liberadas agora' },
  { id: '16', text: 'Food trucks na Praça Norte — fila curta' },
  { id: '17', text: 'Sessão de fotos no Photo Booth — gratuito até 17h' },
  { id: '18', text: 'Workshop de cerâmica — inscrições na tenda 8' },
  { id: '19', text: 'Agora • Aula aberta de forró no Palco Rua' },
  { id: '20', text: 'Mercado criativo com novas marcas na Alameda 2' },
  { id: '21', text: 'Pocket show acústico — Escadaria Central • 17h30' },
  { id: '22', text: 'Happy hour no boulevard com combos especiais até 19h' },
  { id: '23', text: 'Oficina infantil de colagem — últimas 12 vagas' },
  { id: '24', text: 'Leitura de poesias ao vivo no Coreto • entrada livre' },
  { id: '25', text: 'Feira gastronômica com menu sazonal na Praça Sul' },
  { id: '26', text: 'Ponto de hidratação liberado ao lado do Palco 2' },
  { id: '27', text: 'Atenção • chuva leve prevista às 18h, leve sua capa' },
  { id: '28', text: 'Retratos instantâneos no Estúdio Aberto — sem fila agora' },
  { id: '29', text: 'Bazar de vinis e pôsteres raros no corredor cultural' },
  { id: '30', text: 'Intervenção de dança urbana começa em 10 minutos' },
]

export const CATEGORY_SHORTCUTS: CategoryShortcut[] = [
  { id: 'prog', label: 'Programação', icon: 'calendar', href: '/programacao' },
  { id: 'busca', label: 'Busca', icon: 'search', href: '/(tabs)/busca' },
  { id: 'mapa', label: 'Mapa', icon: 'map', href: '/(tabs)/mapa' },
  { id: 'feira', label: 'Feira', icon: 'shopping', href: '/feira' },
  { id: 'feed', label: 'Feed', icon: 'play', href: '/(tabs)/feed' },
  { id: 'telao', label: 'Interaja', icon: 'sparkles', href: '/interaja' },
  { id: 'lojas', label: 'Comércios', icon: 'store', href: '/lojas' },
  { id: 'vantagens', label: 'Vantagens', icon: 'gift', href: '/(tabs)/vantagens' },
]

export const HERO_SLIDES: PromoSlide[] = [
  {
    id: 'hero-1',
    backgroundColor: colors.primary.main,
    title: 'Boulevard ao vivo',
    subtitle: 'Cultura, gastronomia e experiências na rua',
    icon: 'interact',
    cta: 'Explorar agora',
  },
  {
    id: 'hero-2',
    backgroundColor: colors.accent.accent3,
    title: 'Feira do fim de semana',
    subtitle: 'Estandes, oficinas e comércio local',
    icon: 'discount',
    cta: 'Ver mapa',
  },
]

export const FEATURED: FeaturedItem = {
  id: 'featured-1',
  imageUri:
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
  tag: 'Palco 2 • 18h • Acesso Livre',
  title: 'Transmissão da Copa — Brasil contra Argentina',
  meta: 'Ao vivo no Boulevard',
}

export const PROMO_SLIDES: PromoSlide[] = [
  {
    id: 'promo-1',
    title: 'Café Passarola',
    icon: 'coffee',
    subtitle: 'Café coado grátis no seu primeiro pedido.',
    cta: 'Resgatar',
    backgroundColor: colors.primary.shadow,
    accentPanelColor: '#4A1A8C',
  },
  {
    id: 'promo-2',
    title: 'Vantagens Boulevard',
    icon: 'discount',
    subtitle: 'Descontos nos comércios da região.',
    cta: 'Ver ofertas',
    backgroundColor: '#8B1454',
    accentPanelColor: '#A61D66',
  },
  {
    id: 'promo-3',
    title: 'Telão Interativo',
    icon: 'interact',
    subtitle: 'Envie seu vídeo de 15s e apareça no telão.',
    cta: 'Participar',
    backgroundColor: colors.accent.accent1,
    accentPanelColor: '#4A6AD4',
  },
]

export const QUICK_ACCESS: QuickAccessItem[] = [
  {
    id: 'programacao',
    label: 'PROGRAMAÇÃO',
    imageUri:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
    route: '/busca',
  },
  {
    id: 'gastronomia',
    label: 'GASTRONOMIA',
    imageUri:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    route: '/busca',
  },
  {
    id: 'feed',
    label: 'DESCUBRA E APRENDA',
    imageUri:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    route: '/feed',
  },
]
