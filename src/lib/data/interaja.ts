/**
 * Central de Interação — alinhado ao V8 oficial.
 * Tipos de interação reais mostrados nos mockups do app:
 * Kiss Cam, Super Quizzes, Envio pra telão (semanas temáticas),
 * Filtros (álbum de figurinhas), Jogos online, Curiosidades de SP,
 * Janelas para o Mundo.
 */

export type InteracaoKind =
  | 'kiss-cam'
  | 'super-quiz'
  | 'envio-tela'
  | 'album-figurinhas'
  | 'jogo-online'
  | 'curiosidade-sp'
  | 'janela-mundo'

export type InteracaoSlide = {
  id: string
  kind: InteracaoKind
  title: string
  description: string
  /** Texto curto pro chip de status (ex: "Ao vivo", "Termina em 3 dias") */
  statusLabel: string
  /** Chip de público ativo (ex: "1.284 pessoas participando") */
  participantsLabel: string
  /** Texto do CTA principal */
  actionLabel: string
  /** Telão onde aparece (visível no detail) */
  telao?: string
  imageUri: string
  /** Cor de destaque (pelo tipo) */
  accentColor: string
  /** Pra detail: linha extra de regra/instrução */
  rule?: string
}

export const INTERACAO_SLIDES: InteracaoSlide[] = [
  {
    id: 'kiss-cam',
    kind: 'kiss-cam',
    title: 'Kiss Cam Boulevard',
    description:
      'A Kiss Cam está rodando agora no telão do Bar Brahma. Mostre seu carinho — o público escolhe os beijos que ficam em loop.',
    statusLabel: 'AO VIVO',
    participantsLabel: '4.180 pessoas assistindo agora',
    actionLabel: 'Ativar Kiss Cam',
    telao: 'Telão Bar Brahma',
    imageUri: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#E91E8C',
    rule: 'Conteúdo passa por moderação automática · só beijos passam.',
  },
  {
    id: 'super-quiz-semana',
    kind: 'super-quiz',
    title: 'Super Quiz · Curiosidades de SP',
    description:
      'Qual famosa avenida de São Paulo já teve o nome de "Avenida da Esperança" antes de ser conhecida como tal? Responda em tempo real e suba no ranking.',
    statusLabel: 'Termina sábado · 23h',
    participantsLabel: '1.243 paulistanos jogando',
    actionLabel: 'Responder agora',
    telao: 'Telão Drogaria São Paulo',
    imageUri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#3B5BDB',
    rule: 'Ranking aparece no telão a cada 10 minutos.',
  },
  {
    id: 'envio-embaixadinhas',
    kind: 'envio-tela',
    title: 'Semana das Embaixadinhas',
    description:
      'Grave 15 segundos da sua melhor sequência de embaixadinhas. Os melhores vão entrar no rolê das telas durante o final de semana.',
    statusLabel: 'Aceita envios até dom 22h',
    participantsLabel: '2.871 envios na fila',
    actionLabel: 'Gravar vídeo',
    telao: 'Todos os 4 telões',
    imageUri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#5500CC',
    rule: 'Vídeos passam por curadoria · resposta em até 24h.',
  },
  {
    id: 'album-figurinhas',
    kind: 'album-figurinhas',
    title: 'Álbum de Figurinhas do Paulistano',
    description:
      'Filtros divertidos transformam você em figurinha do álbum oficial do Boulevard. Cole sua cara e troque com a galera.',
    statusLabel: 'Sempre disponível',
    participantsLabel: '18.402 figurinhas coladas',
    actionLabel: 'Tirar minha figurinha',
    telao: 'Telão Habibs (vitrine)',
    imageUri: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F97316',
    rule: 'Suas figurinhas aparecem aleatoriamente no telão Habibs.',
  },
  {
    id: 'jogo-paulistano',
    kind: 'jogo-online',
    title: 'Jogo Boulevard · Multiplayer',
    description:
      'Quiz multiplayer com competição ao vivo. Cinco rodadas, perguntas sobre o Centro de SP, ranking projetado no telão central.',
    statusLabel: 'Próxima rodada · sáb 20h',
    participantsLabel: '312 jogadores inscritos',
    actionLabel: 'Entrar na sala',
    telao: 'Empena central',
    imageUri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#774DE8',
    rule: 'Top 3 ganha cupom de R$50 nos bares parceiros.',
  },
  {
    id: 'curiosidade-sp',
    kind: 'curiosidade-sp',
    title: 'Curiosidade do dia · SP',
    description:
      'Você sabia que o Bar Brahma foi inaugurado em 1948 e era o ponto de encontro dos jornalistas das rádios da São João?',
    statusLabel: 'Nova a cada dia',
    participantsLabel: '8.124 paulistanos viram hoje',
    actionLabel: 'Ver curiosidade',
    imageUri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#16A34A',
  },
  {
    id: 'janela-ny',
    kind: 'janela-mundo',
    title: 'Janela para o Mundo · Nova York',
    description:
      'Telão central conectado em tempo real com a Times Square. Acene, cumprimente, dance — o pessoal de NY te vê.',
    statusLabel: 'Ao vivo · 09:30 lá / 11:30 aqui',
    participantsLabel: 'Conectado com 1 cidade agora',
    actionLabel: 'Ver câmera ao vivo',
    telao: 'Empena central',
    imageUri: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#2A0066',
    rule: 'Áudio liberado apenas durante os horários de cumprimento.',
  },
]

/** Compatibilidade com código antigo que esperava INTERAJA_SLIDES e KIND_LABELS */
export const INTERAJA_SLIDES = INTERACAO_SLIDES.map((s) => ({
  id: s.id,
  kind: s.kind,
  title: s.title,
  description: s.description,
  expiresInHours: 0,
  participantsLabel: s.participantsLabel,
  actionLabel: s.actionLabel,
  imageUri: s.imageUri,
}))

export const KIND_LABELS: Record<InteracaoKind, string> = {
  'kiss-cam':         '💋 Kiss Cam',
  'super-quiz':       '🧠 Super Quiz',
  'envio-tela':       '🎬 Envio pra telão',
  'album-figurinhas': '✨ Álbum de figurinhas',
  'jogo-online':      '🎮 Jogo Boulevard',
  'curiosidade-sp':   '📚 Curiosidade SP',
  'janela-mundo':     '🌐 Janela para o Mundo',
}
