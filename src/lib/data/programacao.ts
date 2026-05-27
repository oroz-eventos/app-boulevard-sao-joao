/**
 * Programação Boulevard São João (V8 oficial).
 *
 * Dois eixos:
 *  1. GRANDES EVENTOS — 12 macroeventos do calendário oficial (eventos.ts)
 *  2. PROGRAMAÇÃO REGULAR — toda semana, fechamento da rua sáb 18h e dom 23h
 *     com 4 palcos rotativos + atividades de feira/pet/artistas de rua
 */

import { GRANDES_EVENTOS } from './eventos'

export type ProgramacaoEvent = {
  id: string
  dayId: string
  /** Qual palco/lugar (Palco 1 · Samba, Praça Cauby Peixoto, Telão Brahma etc.) */
  badge: string
  title: string
  imageUri: string
  /** Descrição expandida pro detail */
  description?: string
  /** Horário formatado (ex: "19h00–01h00") */
  schedule?: string
  /** Local físico (ex: "Av. São João, altura do nº 677") */
  local?: string
  /** Duração estimada */
  duration?: string
  /** Categoria visual (música, oficina, gastronomia, infantil etc.) */
  categoria?: string
  /** Vinculação opcional com um grande evento do mês */
  grandeEventoSlug?: string
}

export type ProgramacaoDay = {
  id: string
  weekdayShort: string
  dayNumber: string
  monthShort: string
  fullLabel: string
  /** "REGULAR" (sáb/dom padrão) ou "ESPECIAL" (grande evento ativo no dia) */
  tipo: 'regular' | 'especial' | 'normal'
  /** Slug do grande evento ativo, se houver */
  grandeEventoSlug?: string
}

const WEEKDAY_SHORT = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'] as const
const WEEKDAY_FULL  = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO'] as const
const MONTH_SHORT   = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'] as const
const MONTH_FULL    = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'] as const

// ============================================================
// HELPERS DE DATA
// ============================================================

function startOfLocalDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
function addDays(date: Date, days: number) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}
function formatDayId(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`
}

const today = startOfLocalDay(new Date())

export const PROGRAMACAO_MONTH_TITLE = `${MONTH_FULL[today.getMonth()]} ${today.getFullYear()}`

// ============================================================
// DIAS DA SEMANA (próximos 7 dias)
// ============================================================

export const PROGRAMACAO_DAYS: ProgramacaoDay[] = Array.from({ length: 7 }, (_, i) => {
  const date = addDays(today, i)
  const weekday = date.getDay()
  const isWeekend = weekday === 0 || weekday === 6
  const grandeEvento = GRANDES_EVENTOS.find((e) => e.month === date.getMonth() + 1)

  // O grande evento do mês é considerado "ativo" no fim de semana mais próximo
  const isGrandeEventoDay = isWeekend && grandeEvento

  return {
    id: formatDayId(date),
    weekdayShort: i === 0 ? 'HOJE' : WEEKDAY_SHORT[weekday],
    dayNumber: String(date.getDate()),
    monthShort: MONTH_SHORT[date.getMonth()],
    fullLabel: `${WEEKDAY_FULL[weekday]}, ${date.getDate()} DE ${MONTH_FULL[date.getMonth()]}`,
    tipo: isGrandeEventoDay ? 'especial' : isWeekend ? 'regular' : 'normal',
    grandeEventoSlug: isGrandeEventoDay ? grandeEvento.slug : undefined,
  }
})

export const PROGRAMACAO_DEFAULT_DAY_ID = PROGRAMACAO_DAYS[0]?.id ?? formatDayId(today)

// ============================================================
// PROGRAMAÇÃO REGULAR (sábado + domingo)
// ============================================================

type EventoTemplate = Omit<ProgramacaoEvent, 'id' | 'dayId'>

/** Programação fixa do sábado (a partir das 18h) */
const SABADO_REGULAR: EventoTemplate[] = [
  {
    title: 'Abertura simbólica do Boulevard',
    badge: 'Ponto-Zero · 18h · Cerimônia',
    imageUri: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    description: 'Fechamento simbólico das ruas ao tráfego e abertura ao pedestre. Acendimento sincronizado dos 4 telões mapeados e contagem regressiva de 60 segundos pra liberar o eixo.',
    schedule: '18h–18h15',
    local: 'Ponto-Zero · esquina SJ × Ipiranga',
    duration: '15min',
    categoria: 'Cerimonial',
  },
  {
    title: 'Roda de samba paulistana',
    badge: 'Palco 1 · Samba · 19h',
    imageUri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    description: 'Roda de samba com puxadores convidados das escolas paulistanas. Repertório autoral e clássicos do samba paulista. Pé na fogueira incentivado, ingresso gratuito.',
    schedule: '19h–23h',
    local: 'Palco 1 · ala leste',
    duration: '4h',
    categoria: 'Música · Samba',
  },
  {
    title: 'MPB com convidados',
    badge: 'Palco 2 · MPB · 20h30',
    imageUri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    description: 'Banda residente do Boulevard recebe convidados especiais pra um set autoral de MPB. Curadoria atualizada semanalmente com nomes da nova geração paulistana.',
    schedule: '20h30–23h',
    local: 'Palco 2 · central',
    duration: '2h30',
    categoria: 'Música · MPB',
  },
  {
    title: 'Batalha de MC + dança urbana',
    badge: 'Palco Rua · Hip-Hop · 21h',
    imageUri: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80',
    description: 'Batalha de rimas com MCs convidados do Centro de SP + apresentações de dança urbana entre as rodadas. Inscrições abertas no app pra rimar.',
    schedule: '21h–00h',
    local: 'Palco Rua · ala oeste',
    duration: '3h',
    categoria: 'Música · Hip-Hop',
  },
  {
    title: 'Rock paulistano · banda da casa',
    badge: 'Palco 3 · Rock · 22h',
    imageUri: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    description: 'Banda residente do Boulevard toca repertório autoral de rock paulistano. Estilo independente com pegada raiz, abertura pra convidados.',
    schedule: '22h–01h',
    local: 'Palco 3 · pista',
    duration: '3h',
    categoria: 'Música · Rock',
  },
  {
    title: 'Pop-Ups Endossa · Economia Circular',
    badge: 'Eixo central · 14h–22h',
    imageUri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    description: 'Contêineres modulares com marcas autorais paulistanas, foco em consumo consciente e moda circular. Wishlist no app pra cupons.',
    schedule: '14h–22h',
    local: 'Eixo central · quarteirão 3',
    duration: '8h',
    categoria: 'Comércio · Economia Circular',
  },
]

/** Programação fixa do domingo */
const DOMINGO_REGULAR: EventoTemplate[] = [
  {
    title: 'Feira Gastronômica & Roda de Samba',
    badge: 'Eixo todo · 10h–18h · Inspirada na San Telmo',
    imageUri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    description: 'Feira de rua dominical inspirada na Feira de San Telmo (Buenos Aires) — culinária autoral, artesanato e produtores locais. Roda de samba paulistana no Palco 1 entre as barracas.',
    schedule: '10h–18h',
    local: 'Eixo todo · 5 quarteirões',
    duration: '8h',
    categoria: 'Gastronomia · Feira',
  },
  {
    title: 'Parcão + feira de adoção',
    badge: 'Espaço Pet · 10h–17h',
    imageUri: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80',
    description: 'Parcão aberto com pista de agility ecológica + feira de adoção responsável com ONGs parceiras. Mutirão de vermifugação e castração gratuita.',
    schedule: '10h–17h',
    local: 'Parcão · ala leste',
    duration: '7h',
    categoria: 'Pet · Adoção',
  },
  {
    title: 'Artistas independentes na Tenda',
    badge: 'Tenda dos Artistas · 14h–22h',
    imageUri: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    description: 'Slots rotativos pra artistas de rua se apresentarem na Tenda dos Artistas: música, performance, mímica, ilusionismo. Inscrição rápida na hora.',
    schedule: '14h–22h',
    local: 'Tenda dos Artistas · central',
    duration: '8h',
    categoria: 'Arte de rua',
  },
  {
    title: 'Roda de samba dominical',
    badge: 'Palco 1 · Samba · 16h',
    imageUri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    description: 'Roda de samba intimista no domingo, com convidadas do quintal paulistano. Repertório nostálgico e participação aberta.',
    schedule: '16h–20h',
    local: 'Palco 1 · ala leste',
    duration: '4h',
    categoria: 'Música · Samba',
  },
  {
    title: 'Contação de histórias para crianças',
    badge: 'Palco Rua · 15h · Gratuito',
    imageUri: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    description: 'Contadores convidados narram histórias do folclore brasileiro pra crianças de 3 a 10 anos. Tapete + almofadas no chão · entrada gratuita.',
    schedule: '15h–16h',
    local: 'Palco Rua',
    duration: '1h',
    categoria: 'Infantil',
  },
  {
    title: 'Jogos de botequim · final dos torneios',
    badge: 'Bar Brahma · 19h · Inscrição na hora',
    imageUri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    description: 'Finais dos torneios de truco, dominó e sinuca rolam no Bar Brahma. Premiação simbólica com cerveja artesanal da casa pra equipe campeã.',
    schedule: '19h–23h',
    local: 'Bar Brahma · Av. São João, 677',
    duration: '4h',
    categoria: 'Lazer · Botequim',
  },
]

/** Programação leve seg–sex (telões e ativações pontuais) */
const SEMANA_REGULAR: EventoTemplate[] = [
  {
    title: 'Curadoria Arte na Tela rotativa',
    badge: 'Telões · 5h–23h',
    imageUri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    description: 'Editorial Arte na Tela em rotação permanente nos 4 telões durante a semana. Conteúdo curado pelo Conselho Curatorial Boulevard.',
    schedule: '5h–23h',
    local: 'Todos os 4 telões',
    duration: '18h',
    categoria: 'Arte na Tela',
  },
  {
    title: 'Acendimento sincronizado dos telões',
    badge: 'Todos os telões · 18h',
    imageUri: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    description: 'Acendimento sincronizado dos 4 telões mapeados do eixo São João todo dia às 18h, marcando o início da noite no Boulevard. 60s de coreografia visual + som ambiente.',
    schedule: '18h–18h05',
    local: 'Eixo São João',
    duration: '5min',
    categoria: 'Cenografia',
  },
  {
    title: 'Projeção mapeada no Bar Brahma',
    badge: 'Bar Brahma · 19h–23h',
    imageUri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    description: 'Filme de 12 minutos sobre a história da São João projetado em mapping na fachada do Bar Brahma. Rotação contínua entre 19h e 23h.',
    schedule: '19h–23h',
    local: 'Fachada Bar Brahma',
    duration: '4h (loop de 12min)',
    categoria: 'Arte · Projeção',
  },
]

// ============================================================
// MONTA OS EVENTOS POR DIA
// ============================================================

export const PROGRAMACAO_EVENTS: ProgramacaoEvent[] = PROGRAMACAO_DAYS.flatMap((day) => {
  const weekday = new Date(day.id).getDay()
  // sáb = 6, dom = 0
  const template =
    weekday === 6 ? SABADO_REGULAR :
    weekday === 0 ? DOMINGO_REGULAR :
    SEMANA_REGULAR

  return template.map((ev, ei) => ({
    id: `${day.id}-${ei}`,
    dayId: day.id,
    title: ev.title,
    badge: ev.badge,
    imageUri: ev.imageUri,
    description: ev.description,
    schedule: ev.schedule,
    local: ev.local,
    duration: ev.duration,
    categoria: ev.categoria,
    grandeEventoSlug: day.grandeEventoSlug,
  }))
})

export function programacaoEventById(id: string): ProgramacaoEvent | undefined {
  return PROGRAMACAO_EVENTS.find((e) => e.id === id)
}
