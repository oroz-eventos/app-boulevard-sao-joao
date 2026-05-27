/**
 * Dados oficiais Home Boulevard São João (V8).
 * Tudo aqui está alinhado ao calendário oficial dos 12 grandes eventos
 * e às funcionalidades reais do app mostradas no V8 (Kiss Cam, Quizzes,
 * envio pra telão, Janelas para o Mundo etc.).
 */

import { GRANDES_EVENTOS, eventoDoMes } from './eventos'

export const LIVE_TICKER_ITEMS = [
  'Palco 2 às 19h · Roda de samba paulistana',
  'Envie sua foto no Personagem Centro · aparece no telão Drogaria SP',
  'Feira Gastronômica & Roda de Samba · sáb 18h–23h',
  'Pista Gelo do Centro aberta nas praças · sáb e dom 14h–22h',
  'Super Quiz da semana liberado · prêmio do Bar Brahma',
  'Pop-Ups Endossa · economia circular no calçadão',
  'Semana das Embaixadinhas · envie seu vídeo pra aparecer no telão',
  'Parcão abriu · feira de adoção com 12 cães',
  'Cinema ao Ar Livre no Espaço Cauby às 20h',
  'Telão Drogaria SP com mostra "SP em Stencil" · 12 grafiteiras paulistanas',
  'Palco Rua às 21h · batalha de MC convida MCs do Centro',
  'Cortejo afro sai do Paissandu às 17h · Boulevard Black',
  'Bar Brahma com choro ao vivo · happy hour até 19h',
  'Roteiro de Memória sai do Ponto-Zero · sáb 11h · com jovens guias',
  'Editorial Acontece no Centro · novo café da Marechal abre amanhã',
  'Bondinho Natalino circulando · 20min de viagem emocional',
  'Quiz da Avenida da Esperança no app · 1.243 jogando agora',
  'Acendimento sincronizado dos 4 telões às 18h',
  'Cantata das Sacadas hoje · clássicos do Cauby na Praça',
  'Show de drones no Réveillon · contagem regressiva nas fachadas',
]

/** Atalhos da home — todos os 8 levam pra rotas reais do app */
export type ShortcutIconName =
  | 'calendar' | 'map' | 'shopping' | 'screen'
  | 'circuitos' | 'quiz' | 'foto-opp' | 'gift'

export const CATEGORY_SHORTCUTS: {
  id: string
  label: string
  icon: ShortcutIconName
  href: string
}[] = [
  { id: 'prog',      label: 'Programação', icon: 'calendar',  href: '/programacao' },
  { id: 'mapa',      label: 'Mapa',        icon: 'map',       href: '/mapa' },
  { id: 'circuitos', label: 'Circuitos',   icon: 'circuitos', href: '/circuitos' },
  { id: 'tv',        label: 'TV Boulevard',icon: 'screen',    href: '/tv' },
  { id: 'feira',     label: 'Feira',       icon: 'shopping',  href: '/feira' },
  { id: 'foto-opp',  label: 'Envie sua foto', icon: 'foto-opp',  href: '/interaja/foto-opp-personagem-centro' },
  { id: 'quiz',      label: 'Quizzes',     icon: 'quiz',      href: '/interaja' },
  { id: 'vantagens', label: 'Vantagens',   icon: 'gift',      href: '/vantagens' },
]

/** Hero rotativa — evento do mês ativo + abertura sábado */
export type HeroSlide = {
  id: string
  backgroundColor: string
  title: string
  subtitle: string
  cta: string
  ctaHref: string
}

const evento = eventoDoMes()

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-evento',
    backgroundColor: evento?.themeColor ?? '#5500CC',
    title: evento ? evento.title : 'Boulevard São João',
    subtitle: evento ? evento.tagline : 'O Centro de SP volta a pulsar',
    cta: evento ? 'Ver programação' : 'Explorar',
    ctaHref: evento ? `/eventos/${evento.slug}` : '/programacao',
  },
  {
    id: 'hero-sabado',
    backgroundColor: '#E91E8C',
    title: 'Sábado, a rua se abre',
    subtitle: 'Abertura simbólica às 18h · 4 palcos no eixo',
    cta: 'Ver palcos',
    ctaHref: '/mapa',
  },
  {
    id: 'hero-domingo',
    backgroundColor: '#3B5BDB',
    title: 'Domingo é dia de feira',
    subtitle: 'Gastronomia, artesanato, parcão e arte de rua',
    cta: 'Explorar feira',
    ctaHref: '/feira',
  },
]

/** Destaque agora — sempre o evento do mês */
export const FEATURED = evento
  ? {
      imageUri: evento.imageUri,
      tag: `${evento.monthLabel} · Grande evento do mês`,
      title: evento.title,
      meta: evento.tagline,
      href: `/eventos/${evento.slug}`,
    }
  : {
      imageUri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      tag: 'Boulevard São João',
      title: 'O Centro de SP volta a pulsar',
      meta: 'Programação contínua de eventos',
      href: '/programacao',
    }

/** Promo carousel — Central de Interação alinhada ao mídia kit */
export const PROMO_SLIDES = [
  {
    id: 'promo-foto-opp',
    title: 'Envie sua foto · Personagem Centro',
    subtitle: 'Casaco cinza, guarda-chuva de metal, neons. Sua foto vai pro telão Drogaria SP.',
    cta: 'Tirar foto',
    backgroundColor: '#5500CC',
    href: '/interaja/foto-opp-personagem-centro',
  },
  {
    id: 'promo-quiz',
    title: 'Super Quiz da semana',
    subtitle: 'Responda em tempo real e suba no ranking dos paulistanos.',
    cta: 'Jogar agora',
    backgroundColor: '#3B5BDB',
    href: '/interaja/super-quiz-semana',
  },
  {
    id: 'promo-telao',
    title: 'Envie pra tela',
    subtitle: 'Semana das Embaixadinhas · grava 15s e aparece no telão.',
    cta: 'Participar',
    backgroundColor: '#E91E8C',
    href: '/interaja/envio-embaixadinhas',
  },
  {
    id: 'promo-roteiro',
    title: 'Roteiro de Memória',
    subtitle: 'Caminhada de 90min com jovens guias capacitados pelo Centro.',
    cta: 'Reservar vaga',
    backgroundColor: '#774DE8',
    href: '/interaja/roteiro-memoria',
  },
]

/**
 * Quick access — sempre os 3 próximos Grandes Eventos do calendário,
 * a partir do mês atual.
 */
function proximosTresEventos() {
  const mesAtual = new Date().getMonth() + 1
  const ordenados = [...GRANDES_EVENTOS].sort((a, b) => {
    const diffA = (a.month - mesAtual + 12) % 12
    const diffB = (b.month - mesAtual + 12) % 12
    return diffA - diffB
  })
  return ordenados.slice(0, 3)
}

export const QUICK_ACCESS = proximosTresEventos().map((e) => ({
  id: e.slug,
  label: e.title.toUpperCase(),
  imageUri: e.imageUri,
  href: `/eventos/${e.slug}`,
}))
