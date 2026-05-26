import { COMERCIO_STORES } from '@/features/comercios/data/mock'
import { INTERAJA_SLIDES } from '@/features/interaja/data/mock'
import { PROGRAMACAO_EVENTS } from '@/features/programacao/data/mock'
import type { MapFilter, MapMarker } from '../types'

export const MAP_FILTERS: MapFilter[] = [
  { id: 'todos', label: 'Tudo' },
  { id: 'telas', label: 'Telas' },
  { id: 'palcos', label: 'Palcos' },
  { id: 'comercios', label: 'Comércios' },
]

const palcoEventsA = PROGRAMACAO_EVENTS.slice(0, 3)
const palcoEventsB = PROGRAMACAO_EVENTS.slice(3, 6)
const palcoEventsC = PROGRAMACAO_EVENTS.slice(6, 9)

export const MAP_MARKERS: MapMarker[] = [
  {
    id: 'palco-1',
    kind: 'palcos',
    title: 'Palco 1',
    sectionTitle: 'Programação do palco',
    x: 210,
    y: 420,
    items: palcoEventsA.map((event) => ({
      id: event.id,
      meta: event.badge,
      title: event.title,
    })),
  },
  {
    id: 'palco-2',
    kind: 'palcos',
    title: 'Palco 2',
    sectionTitle: 'Programação do palco',
    x: 560,
    y: 520,
    items: palcoEventsB.map((event) => ({
      id: event.id,
      meta: event.badge,
      title: event.title,
    })),
  },
  {
    id: 'palco-3',
    kind: 'palcos',
    title: 'Palco 3',
    sectionTitle: 'Programação do palco',
    x: 680,
    y: 840,
    items: palcoEventsC.map((event) => ({
      id: event.id,
      meta: event.badge,
      title: event.title,
    })),
  },
  {
    id: 'tela-1',
    kind: 'telas',
    title: 'Tela Interativa 1',
    sectionTitle: 'Interações disponíveis',
    x: 120,
    y: 940,
    items: INTERAJA_SLIDES.slice(0, 2).map((item) => ({
      id: item.id,
      meta: `${item.actionLabel} • ${item.participantsLabel}`,
      title: item.title,
    })),
  },
  {
    id: 'tela-2',
    kind: 'telas',
    title: 'Tela Interativa 2',
    sectionTitle: 'Interações disponíveis',
    x: 450,
    y: 760,
    items: INTERAJA_SLIDES.slice(1, 3).map((item) => ({
      id: item.id,
      meta: `${item.actionLabel} • ${item.participantsLabel}`,
      title: item.title,
    })),
  },
  {
    id: 'tela-3',
    kind: 'telas',
    title: 'Tela Interativa 3',
    sectionTitle: 'Interações disponíveis',
    x: 88,
    y: 610,
    items: [INTERAJA_SLIDES[0], INTERAJA_SLIDES[2]].map((item) => ({
      id: item.id,
      meta: `${item.actionLabel} • ${item.participantsLabel}`,
      title: item.title,
    })),
  },
  {
    id: 'tela-4',
    kind: 'telas',
    title: 'Tela Interativa 4',
    sectionTitle: 'Interações disponíveis',
    x: 790,
    y: 1020,
    items: [INTERAJA_SLIDES[1]].map((item) => ({
      id: item.id,
      meta: `${item.actionLabel} • ${item.participantsLabel}`,
      title: item.title,
    })),
  },
  {
    id: 'comercio-1',
    kind: 'comercios',
    title: COMERCIO_STORES[0].name,
    sectionTitle: 'Detalhes do comércio',
    x: 720,
    y: 300,
    facadeImageUri: COMERCIO_STORES[0].facadeImageUri,
    summary: COMERCIO_STORES[0].summary,
    addressLine: COMERCIO_STORES[0].addressLine,
    openingHours: COMERCIO_STORES[0].openingHours,
    discountLabel: COMERCIO_STORES[0].discountLabel,
  },
  {
    id: 'comercio-2',
    kind: 'comercios',
    title: COMERCIO_STORES[1].name,
    sectionTitle: 'Detalhes do comércio',
    x: 920,
    y: 900,
    facadeImageUri: COMERCIO_STORES[1].facadeImageUri,
    summary: COMERCIO_STORES[1].summary,
    addressLine: COMERCIO_STORES[1].addressLine,
    openingHours: COMERCIO_STORES[1].openingHours,
    discountLabel: COMERCIO_STORES[1].discountLabel,
  },
  {
    id: 'comercio-3',
    kind: 'comercios',
    title: COMERCIO_STORES[4].name,
    sectionTitle: 'Detalhes do comércio',
    x: 860,
    y: 1220,
    facadeImageUri: COMERCIO_STORES[4].facadeImageUri,
    summary: COMERCIO_STORES[4].summary,
    addressLine: COMERCIO_STORES[4].addressLine,
    openingHours: COMERCIO_STORES[4].openingHours,
    discountLabel: COMERCIO_STORES[4].discountLabel,
  },
  {
    id: 'comercio-4',
    kind: 'comercios',
    title: COMERCIO_STORES[6].name,
    sectionTitle: 'Detalhes do comércio',
    x: 270,
    y: 1080,
    facadeImageUri: COMERCIO_STORES[6].facadeImageUri,
    summary: COMERCIO_STORES[6].summary,
    addressLine: COMERCIO_STORES[6].addressLine,
    openingHours: COMERCIO_STORES[6].openingHours,
    discountLabel: COMERCIO_STORES[6].discountLabel,
  },
]
