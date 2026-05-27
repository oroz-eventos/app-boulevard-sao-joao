/**
 * Notificações Boulevard São João — categorias alinhadas aos
 * contextos reais do projeto (V8). Cada notificação carrega um
 * `kind` que mapeia pra um ícone Tabler na UI.
 */

export type NotificationKind =
  | 'kiss-cam'        // Kiss Cam ativada em algum telão
  | 'quiz'            // Super Quiz disponível / resultado
  | 'envio-tela'      // Envio pra tela aprovado / rejeitado / semana temática
  | 'janela-mundo'    // Janela para o Mundo conectada
  | 'evento'          // Grande evento começando / lembrete
  | 'palco'           // Atração subindo no palco
  | 'vantagem'        // Cupom novo / expirando
  | 'solidario'       // Ceia solidária / SP Invisível
  | 'lugar'           // Monumento restaurado / praça reaberta
  | 'feira'           // Feira dominical / pop-up
  | 'pet'             // Parcão / feira de adoção
  | 'aviso'           // Aviso institucional / segurança
  | 'mapa'            // Atualização de mapa
  | 'arte-tela'       // Curadoria Arte na Tela

export type NotificationItem = {
  id: string
  kind: NotificationKind
  title: string
  description: string
  timeAgo: string
  status: 'new' | 'read'
  /** Texto curto de contexto (telão, palco, lugar) */
  context?: string
  /** Link opcional pra abrir a rota referente */
  href?: string
}

export const NOTIFICATION_FILTERS = [
  { id: 'todas', label: 'Todas' },
  { id: 'novas', label: 'Novas' },
  { id: 'lidas', label: 'Lidas' },
]

/** Cor + label do ícone por categoria */
export const KIND_TONE: Record<NotificationKind, { color: string; bg: string; label: string }> = {
  'kiss-cam':     { color: '#E91E8C', bg: '#FCE4F1', label: 'Kiss Cam' },
  'quiz':         { color: '#3B5BDB', bg: '#E0E7FB', label: 'Quiz' },
  'envio-tela':   { color: '#5500CC', bg: '#EEE5FB', label: 'Telão' },
  'janela-mundo': { color: '#2A0066', bg: '#E1D7F0', label: 'Janela' },
  'evento':       { color: '#5500CC', bg: '#EEE5FB', label: 'Evento' },
  'palco':        { color: '#F97316', bg: '#FDE6D5', label: 'Palco' },
  'vantagem':     { color: '#16A34A', bg: '#DCFCE7', label: 'Vantagem' },
  'solidario':    { color: '#E91E8C', bg: '#FCE4F1', label: 'Solidário' },
  'lugar':        { color: '#774DE8', bg: '#EDE5FB', label: 'Lugar' },
  'feira':        { color: '#16A34A', bg: '#DCFCE7', label: 'Feira' },
  'pet':          { color: '#E91E8C', bg: '#FCE4F1', label: 'Pet' },
  'aviso':        { color: '#525252', bg: '#F1F1F1', label: 'Aviso' },
  'mapa':         { color: '#3B5BDB', bg: '#E0E7FB', label: 'Mapa' },
  'arte-tela':    { color: '#774DE8', bg: '#EDE5FB', label: 'Arte na Tela' },
}

export const NOTIFICATION_ITEMS: NotificationItem[] = [
  {
    id: 'notif-1',
    kind: 'kiss-cam',
    title: 'Kiss Cam ativada agora',
    description: 'Câmera focada no telão do Bar Brahma. Aponte a sua câmera no QR e participe.',
    context: 'Telão Bar Brahma',
    timeAgo: 'Agora',
    status: 'new',
    href: '/interaja/kiss-cam',
  },
  {
    id: 'notif-2',
    kind: 'palco',
    title: 'Roda de samba começa em 10min',
    description: 'Palco 1 abre com convidados especiais. Programa-se: bloco circular pela São João.',
    context: 'Palco 1 · Samba · 19h',
    timeAgo: 'há 8 min',
    status: 'new',
    href: '/mapa',
  },
  {
    id: 'notif-3',
    kind: 'envio-tela',
    title: 'Seu vídeo entrou no telão!',
    description: '"Embaixadinha de bicicleta" foi aprovado pela curadoria e está na rotação do Telão Drogaria SP.',
    context: 'Semana das Embaixadinhas',
    timeAgo: 'há 23 min',
    status: 'new',
    href: '/interaja/envio-embaixadinhas',
  },
  {
    id: 'notif-4',
    kind: 'quiz',
    title: 'Resultado do Super Quiz',
    description: '"Avenida da Esperança" era a Rebouças. Você acertou e subiu pra 12º no ranking.',
    context: 'Telão Drogaria SP',
    timeAgo: 'há 41 min',
    status: 'new',
    href: '/interaja/super-quiz-semana',
  },
  {
    id: 'notif-5',
    kind: 'janela-mundo',
    title: 'Janela com Times Square abre em 5min',
    description: 'Conexão ao vivo com NY no telão central. Janela aberta das 11h30 às 12h.',
    context: 'Telão Central · Empena',
    timeAgo: 'há 1 h',
    status: 'new',
    href: '/interaja/janela-ny',
  },
  {
    id: 'notif-6',
    kind: 'evento',
    title: 'Virada Cultural começa amanhã',
    description: '24h non-stop nos 4 palcos do Boulevard. Confira o line-up integrado.',
    context: 'MAI · Grande evento do mês',
    timeAgo: 'há 2 h',
    status: 'new',
    href: '/eventos/virada-cultural',
  },
  {
    id: 'notif-7',
    kind: 'vantagem',
    title: 'Cupom 50% off no Bar Brahma',
    description: 'Disponível para resgate no primeiro pedido. Mostre o cupom no balcão.',
    context: 'Expira em 3 dias',
    timeAgo: 'há 3 h',
    status: 'read',
    href: '/vantagens',
  },
  {
    id: 'notif-8',
    kind: 'solidario',
    title: 'Apadrinhe uma ceia · Natal no Boulevard',
    description: 'Sua doação financia ceias servidas no Largo do Paissandu em parceria com o SP Invisível.',
    context: 'A partir de R$ 45',
    timeAgo: 'há 5 h',
    status: 'read',
    href: '/vantagens',
  },
  {
    id: 'notif-9',
    kind: 'lugar',
    title: 'Espaço Cauby Peixoto reaberto',
    description: 'A praça requalificada já está aberta ao público. Placas musicais, arquibancada e rampa instaladas.',
    context: 'Patrimônio · entrega à cidade',
    timeAgo: 'há 7 h',
    status: 'read',
    href: '/lugares/espaco-cauby-peixoto',
  },
  {
    id: 'notif-10',
    kind: 'arte-tela',
    title: 'Mostra "SP em Stencil" estreia',
    description: '12 grafiteiras paulistanas no telão Drogaria SP durante todo o Festival Feminino.',
    context: 'Editorial Arte na Tela',
    timeAgo: 'há 8 h',
    status: 'read',
    href: '/feed',
  },
  {
    id: 'notif-11',
    kind: 'feira',
    title: 'Feira dominical abriu',
    description: '80 estandes abertos até 18h · gastronomia, artesanato e produtores locais inspirados na San Telmo.',
    context: 'Eixo todo · 10h–18h',
    timeAgo: 'há 1 d',
    status: 'read',
    href: '/feira',
  },
  {
    id: 'notif-12',
    kind: 'pet',
    title: 'Feira de adoção rola amanhã',
    description: '12 cães prontos pra adoção responsável no Parcão Boulevard. Mutirão veterinário social em paralelo.',
    context: 'Parcão · Dom 10h–17h',
    timeAgo: 'há 1 d',
    status: 'read',
    href: '/mapa',
  },
  {
    id: 'notif-13',
    kind: 'mapa',
    title: 'Vertical Sports na empena central',
    description: 'Escalada esportiva liberada com monitor das 14h às 20h. Aparece como novo ponto no mapa.',
    context: 'Empena central · 14h–20h',
    timeAgo: 'há 1 d',
    status: 'read',
    href: '/mapa',
  },
  {
    id: 'notif-14',
    kind: 'aviso',
    title: 'Fechamento da São João às 18h',
    description: 'Reforce o planejamento: a partir das 18h a avenida fica liberada apenas para pedestres.',
    context: 'Programação regular · sábado',
    timeAgo: 'há 2 d',
    status: 'read',
  },
]
