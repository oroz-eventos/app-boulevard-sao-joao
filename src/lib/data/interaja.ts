/**
 * Central de Interação Boulevard São João.
 *
 * Alinhado ao Mídia Kit Comercial: Kiss Cam e Janela para o Mundo
 * caíram do escopo. Modos atuais são focados em alimentar os 4
 * editorias das telas LED, valorizar o patrimônio e conectar
 * o paulistano com os comércios/circuitos do eixo.
 */

export type InteracaoKind =
  | 'foto-opp'             // Foto-Opp Personagem Centro (instalação cênica)
  | 'super-quiz'           // Super Quiz cultural
  | 'envio-tela'           // Envio pra telão · semana temática
  | 'album-figurinhas'     // Filtros AR · álbum do paulistano
  | 'roteiro-guiado'       // Roteiros caminháveis (memória/foto/gastro)
  | 'curiosidade-sp'       // Curiosidade do dia
  | 'wishlist-endossa'     // Pop-Up Endossa · favoritos

export type InteracaoSlide = {
  id: string
  kind: InteracaoKind
  title: string
  description: string
  statusLabel: string
  participantsLabel: string
  actionLabel: string
  telao?: string
  imageUri: string
  accentColor: string
  rule?: string
}

export const INTERACAO_SLIDES: InteracaoSlide[] = [
  {
    id: 'foto-opp-personagem-centro',
    kind: 'foto-opp',
    title: 'Envie sua foto · O Personagem Centro',
    description:
      'A instalação imersiva no Espaço Cauby — casaco cinza, guarda-chuva de metal, neons e calçada paulista — espera seu retrato. Foto entra na rotação do telão Drogaria SP.',
    statusLabel: 'Permanente · 24h',
    participantsLabel: '8.402 retratos coletados',
    actionLabel: 'Tirar minha foto',
    telao: 'Telão Drogaria São Paulo',
    imageUri: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#5500CC',
    rule: 'Sua foto passa por moderação automática · entra na fila em ~1h.',
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
    accentColor: '#E91E8C',
    rule: 'Vídeos passam por curadoria editorial · resposta em até 24h.',
  },
  {
    id: 'roteiro-memoria',
    kind: 'roteiro-guiado',
    title: 'Roteiro de Memória do Centro',
    description:
      'Caminhada histórica com jovens guias capacitados resgatando histórias das ruas, fachadas e personagens. Duração 90min · gratuito.',
    statusLabel: 'Próximo · sáb · 11h',
    participantsLabel: '24 vagas · 18 confirmadas',
    actionLabel: 'Reservar minha vaga',
    telao: 'Ponto-Zero · São João × Ipiranga',
    imageUri: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#774DE8',
    rule: 'Apadrinhamento dos jovens guias pela cota master cofundadora.',
  },
  {
    id: 'album-figurinhas',
    kind: 'album-figurinhas',
    title: 'Álbum de Figurinhas do Paulistano',
    description:
      'Filtros AR transformam você em figurinha do álbum oficial do Boulevard. Cole sua cara e troque com a galera. Conteúdo no telão Habibs.',
    statusLabel: 'Sempre disponível',
    participantsLabel: '18.402 figurinhas coladas',
    actionLabel: 'Tirar minha figurinha',
    telao: 'Telão Habibs (vitrine)',
    imageUri: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F97316',
    rule: 'Figurinhas aparecem aleatoriamente no telão Habibs.',
  },
  {
    id: 'wishlist-endossa',
    kind: 'wishlist-endossa',
    title: 'Wishlist · Pop-Up Endossa',
    description:
      'Salve os achados das pop-ups de economia circular que rolam aos finais de semana. Cupons exclusivos via Vantagens pros itens salvos.',
    statusLabel: 'Pop-up ativo · sáb e dom',
    participantsLabel: '512 wishlists ativas',
    actionLabel: 'Abrir wishlist',
    telao: 'Pop-Ups Endossa · sáb/dom',
    imageUri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#16A34A',
    rule: 'Cupons gerados em parceria com marcas autorais convidadas.',
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
]

/** Compatibilidade com código antigo que esperava INTERAJA_SLIDES */
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
  'foto-opp':         '📸 Envie sua foto',
  'super-quiz':       '🧠 Super Quiz',
  'envio-tela':       '🎬 Envio pra telão',
  'album-figurinhas': '✨ Álbum',
  'roteiro-guiado':   '🚶 Roteiro Guiado',
  'wishlist-endossa': '🛍 Wishlist',
  'curiosidade-sp':   '📚 Curiosidade SP',
}
