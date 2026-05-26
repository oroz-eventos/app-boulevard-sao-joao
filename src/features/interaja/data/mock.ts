import type { InterajaSlide } from '../types'

export const INTERAJA_SLIDES: InterajaSlide[] = [
  {
    id: 'ar-filter',
    kind: 'ar',
    title: 'Filtro AR no telão',
    description:
      'Tire uma foto com realidade aumentada e apareça como se estivesse em uma tela gigante estilo Times Square.',
    expiresInHours: 60,
    participantsLabel: '1.284 pessoas já participaram',
    actionLabel: 'Começar',
    imageUri:
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'quiz-cultura',
    kind: 'quiz',
    title: 'Quiz de cultura geral',
    description:
      'Responda perguntas rápidas, some pontos em tempo real e acompanhe seu ranking com o público do evento.',
    expiresInHours: 20,
    participantsLabel: '863 pessoas já participaram',
    actionLabel: 'Começar',
    imageUri:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'video-telao',
    kind: 'video',
    title: 'Envie um vídeo de 15s',
    description:
      'Grave, envie e reserve um horário para aparecer no telão do Boulevard com sua mensagem ou reação.',
    expiresInHours: 147,
    participantsLabel: '427 pessoas já participaram',
    actionLabel: 'Começar',
    imageUri:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
  },
]
