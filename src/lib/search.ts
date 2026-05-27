/**
 * Busca global do Boulevard São João.
 * Procura em todos os datasets do app e retorna resultados tipados.
 */

import { GRANDES_EVENTOS } from './data/eventos'
import { CIRCUITOS } from './data/circuitos'
import { LUGARES } from './data/lugares'
import { COMERCIO_STORES } from './data/comercios'
import { FEIRA_STALLS } from './data/feira'
import { FEED_POSTS, EDITORIAL_TABS } from './data/feed'
import { INTERACAO_SLIDES, KIND_LABELS as INTERACAO_LABELS } from './data/interaja'
import { PROGRAMACAO_EVENTS, PROGRAMACAO_DAYS } from './data/programacao'

export type SearchResultKind =
  | 'evento'
  | 'circuito'
  | 'lugar'
  | 'comercio'
  | 'feira'
  | 'post'
  | 'interacao'
  | 'programacao'

export type SearchResult = {
  id: string
  kind: SearchResultKind
  kindLabel: string
  title: string
  subtitle?: string
  imageUri?: string
  href: string
  /** Cor de destaque (do tipo) */
  accentColor: string
}

const KIND_ACCENT: Record<SearchResultKind, string> = {
  evento:      '#5500CC',
  circuito:    '#774DE8',
  lugar:       '#3B5BDB',
  comercio:    '#F97316',
  feira:       '#16A34A',
  post:        '#E91E8C',
  interacao:   '#5500CC',
  programacao: '#F97316',
}

const KIND_LABEL: Record<SearchResultKind, string> = {
  evento:      'Grande evento',
  circuito:    'Circuito',
  lugar:       'Lugar',
  comercio:    'Comércio',
  feira:       'Estande da feira',
  post:        'Feed',
  interacao:   'Interação',
  programacao: 'Programação',
}

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

export function search(query: string): SearchResult[] {
  const q = norm(query.trim())
  if (q.length < 2) return []

  const matches: SearchResult[] = []

  // Grandes eventos
  for (const e of GRANDES_EVENTOS) {
    const bag = norm(`${e.title} ${e.subTema} ${e.tagline} ${e.summary} ${e.monthLabel}`)
    if (bag.includes(q)) {
      matches.push({
        id: `evento-${e.slug}`,
        kind: 'evento',
        kindLabel: KIND_LABEL.evento,
        title: e.title,
        subtitle: `${e.monthLabel} · ${e.tagline}`,
        imageUri: e.imageUri,
        href: `/eventos/${e.slug}`,
        accentColor: e.themeColor,
      })
    }
  }

  // Circuitos
  for (const c of CIRCUITOS) {
    const bag = norm(`${c.title} ${c.tagline} ${c.summary} ${c.ativacoes.join(' ')}`)
    if (bag.includes(q)) {
      matches.push({
        id: `circuito-${c.slug}`,
        kind: 'circuito',
        kindLabel: KIND_LABEL.circuito,
        title: c.title,
        subtitle: c.tagline,
        imageUri: c.imageUri,
        href: `/circuitos/${c.slug}`,
        accentColor: c.accentColor,
      })
    }
  }

  // Lugares
  for (const l of LUGARES) {
    const bag = norm(`${l.title} ${l.shortDescription} ${l.longDescription} ${l.obras.join(' ')}`)
    if (bag.includes(q)) {
      matches.push({
        id: `lugar-${l.slug}`,
        kind: 'lugar',
        kindLabel: KIND_LABEL.lugar,
        title: l.title,
        subtitle: l.shortDescription,
        imageUri: l.imageUri,
        href: `/lugares/${l.slug}`,
        accentColor: KIND_ACCENT.lugar,
      })
    }
  }

  // Comércios
  for (const c of COMERCIO_STORES) {
    const bag = norm(`${c.name} ${c.summary} ${c.keywords.join(' ')} ${c.category}`)
    if (bag.includes(q)) {
      matches.push({
        id: `comercio-${c.id}`,
        kind: 'comercio',
        kindLabel: KIND_LABEL.comercio,
        title: c.name,
        subtitle: c.summary,
        imageUri: c.facadeImageUri,
        href: `/comercios/${c.id}`,
        accentColor: KIND_ACCENT.comercio,
      })
    }
  }

  // Feira
  for (const s of FEIRA_STALLS) {
    const bag = norm(`${s.name} ${s.summary} ${s.keywords.join(' ')} ${s.category}`)
    if (bag.includes(q)) {
      matches.push({
        id: `feira-${s.id}`,
        kind: 'feira',
        kindLabel: KIND_LABEL.feira,
        title: s.name,
        subtitle: `Estande ${s.number} · ${s.summary}`,
        imageUri: s.galleryImageUris[0],
        href: '/feira',
        accentColor: KIND_ACCENT.feira,
      })
    }
  }

  // Posts
  for (const p of FEED_POSTS) {
    const bag = norm(`${p.title} ${p.description} ${p.badge ?? ''}`)
    if (bag.includes(q)) {
      const editorialLabel = EDITORIAL_TABS.find((t) => t.id === p.editorial)?.label ?? ''
      matches.push({
        id: `post-${p.id}`,
        kind: 'post',
        kindLabel: editorialLabel || KIND_LABEL.post,
        title: p.title,
        subtitle: p.description,
        imageUri: p.images[0],
        href: '/feed',
        accentColor: KIND_ACCENT.post,
      })
    }
  }

  // Interações
  for (const s of INTERACAO_SLIDES) {
    const bag = norm(`${s.title} ${s.description} ${INTERACAO_LABELS[s.kind]}`)
    if (bag.includes(q)) {
      matches.push({
        id: `interacao-${s.id}`,
        kind: 'interacao',
        kindLabel: INTERACAO_LABELS[s.kind].replace(/^[^a-zA-Z]+\s/, ''),
        title: s.title,
        subtitle: s.description,
        imageUri: s.imageUri,
        href: `/interaja/${s.id}`,
        accentColor: s.accentColor,
      })
    }
  }

  // Programação (eventos por dia)
  for (const ev of PROGRAMACAO_EVENTS) {
    const bag = norm(`${ev.title} ${ev.description ?? ''} ${ev.categoria ?? ''} ${ev.local ?? ''} ${ev.badge}`)
    if (bag.includes(q)) {
      const day = PROGRAMACAO_DAYS.find((d) => d.id === ev.dayId)
      matches.push({
        id: `prog-${ev.id}`,
        kind: 'programacao',
        kindLabel: KIND_LABEL.programacao,
        title: ev.title,
        subtitle: `${day?.weekdayShort ?? ''} ${day?.dayNumber ?? ''} · ${ev.schedule ?? ev.badge}`,
        imageUri: ev.imageUri,
        href: `/programacao/${ev.id}`,
        accentColor: KIND_ACCENT.programacao,
      })
    }
  }

  return matches
}
