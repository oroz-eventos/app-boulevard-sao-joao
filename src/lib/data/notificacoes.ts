/**
 * Notificações Boulevard São João — categorias alinhadas ao
 * mídia kit comercial (V8 sem Kiss Cam/Janela para o Mundo).
 * Cada notificação carrega um `kind` que mapeia pra um ícone Tabler.
 */

export type NotificationKind =
  | 'foto-opp'        // Foto-Opp Personagem Centro
  | 'quiz'            // Super Quiz
  | 'envio-tela'      // Envio aprovado pra tela
  | 'roteiro'         // Roteiros (memória / foto / gastro)
  | 'evento'          // Grande evento começando / lembrete
  | 'palco'           // Atração subindo no palco
  | 'vantagem'        // Cupom novo / expirando
  | 'solidario'       // Ceia solidária SP Invisível
  | 'lugar'           // Monumento restaurado / praça reaberta
  | 'feira'           // Feira dominical / pop-up Endossa
  | 'pet'             // Parcão / feira de adoção
  | 'aviso'           // Aviso institucional / segurança
  | 'mapa'            // Atualização de mapa
  | 'arte-tela'       // Curadoria Arte na Tela
  | 'natal'           // Ativações específicas do Natal do Centro

export type NotificationItem = {
  id: string
  kind: NotificationKind
  title: string
  description: string
  timeAgo: string
  status: 'new' | 'read'
  context?: string
  href?: string
}

export const NOTIFICATION_FILTERS = [
  { id: 'todas', label: 'Todas' },
  { id: 'novas', label: 'Novas' },
  { id: 'lidas', label: 'Lidas' },
]

export const KIND_TONE: Record<NotificationKind, { color: string; bg: string; label: string }> = {
  'foto-opp':   { color: '#5500CC', bg: '#EEE5FB', label: 'Foto-Opp' },
  'quiz':       { color: '#3B5BDB', bg: '#E0E7FB', label: 'Quiz' },
  'envio-tela': { color: '#E91E8C', bg: '#FCE4F1', label: 'Telão' },
  'roteiro':    { color: '#774DE8', bg: '#EDE5FB', label: 'Roteiro' },
  'evento':     { color: '#5500CC', bg: '#EEE5FB', label: 'Evento' },
  'palco':      { color: '#F97316', bg: '#FDE6D5', label: 'Palco' },
  'vantagem':   { color: '#16A34A', bg: '#DCFCE7', label: 'Vantagem' },
  'solidario':  { color: '#E91E8C', bg: '#FCE4F1', label: 'Solidário' },
  'lugar':      { color: '#774DE8', bg: '#EDE5FB', label: 'Lugar' },
  'feira':      { color: '#16A34A', bg: '#DCFCE7', label: 'Feira' },
  'pet':        { color: '#E91E8C', bg: '#FCE4F1', label: 'Pet' },
  'aviso':      { color: '#525252', bg: '#F1F1F1', label: 'Aviso' },
  'mapa':       { color: '#3B5BDB', bg: '#E0E7FB', label: 'Mapa' },
  'arte-tela':  { color: '#774DE8', bg: '#EDE5FB', label: 'Arte na Tela' },
  'natal':      { color: '#E91E8C', bg: '#FCE4F1', label: 'Natal' },
}

export const NOTIFICATION_ITEMS: NotificationItem[] = [
  {
    id: 'notif-foto-opp',
    kind: 'foto-opp',
    title: 'Personagem Centro · sua foto agora',
    description: 'A instalação imersiva no Espaço Cauby está liberada. Tire seu retrato e veja no telão Drogaria SP.',
    context: 'Espaço Cauby Peixoto · Permanente',
    timeAgo: 'Agora',
    status: 'new',
    href: '/interaja/foto-opp-personagem-centro',
  },
  {
    id: 'notif-palco',
    kind: 'palco',
    title: 'Roda de samba começa em 10min',
    description: 'Palco 1 abre com convidados especiais. Programa-se: bloco circular pela São João.',
    context: 'Palco 1 · Samba · 19h',
    timeAgo: 'há 8 min',
    status: 'new',
    href: '/mapa',
  },
  {
    id: 'notif-envio',
    kind: 'envio-tela',
    title: 'Seu vídeo entrou no telão!',
    description: '"Embaixadinha de bicicleta" foi aprovado pela curadoria e está na rotação do Telão Drogaria SP.',
    context: 'Semana das Embaixadinhas',
    timeAgo: 'há 23 min',
    status: 'new',
    href: '/interaja/envio-embaixadinhas',
  },
  {
    id: 'notif-quiz',
    kind: 'quiz',
    title: 'Resultado do Super Quiz',
    description: '"Avenida da Esperança" era a Rebouças. Você acertou e subiu pra 12º no ranking.',
    context: 'Telão Drogaria SP',
    timeAgo: 'há 41 min',
    status: 'new',
    href: '/interaja/super-quiz-semana',
  },
  {
    id: 'notif-roteiro',
    kind: 'roteiro',
    title: 'Roteiro de Memória amanhã às 11h',
    description: '90min de caminhada pelo Centro com jovens guias. Última chamada · 6 vagas restantes.',
    context: 'Ponto-Zero · saída sáb 11h',
    timeAgo: 'há 1 h',
    status: 'new',
    href: '/interaja/roteiro-memoria',
  },
  {
    id: 'notif-evento',
    kind: 'evento',
    title: 'Virada Cultural começa amanhã',
    description: '24h non-stop nos 4 palcos do Boulevard. Confira o line-up integrado.',
    context: 'MAI · Grande evento do mês',
    timeAgo: 'há 2 h',
    status: 'new',
    href: '/eventos/virada-cultural',
  },
  {
    id: 'notif-natal',
    kind: 'natal',
    title: 'Show do Acendimento · contagem regressiva',
    description: 'A árvore-monumento do Paissandu acende às 18h. 50m de túnel de luzes sincronizado em sequência.',
    context: 'Natal no Boulevard · 6 dez',
    timeAgo: 'há 3 h',
    status: 'read',
    href: '/eventos/natal-no-boulevard',
  },
  {
    id: 'notif-vantagem',
    kind: 'vantagem',
    title: 'Cupom 50% off no Bar Brahma',
    description: 'Disponível para resgate no primeiro pedido. Mostre o cupom no balcão.',
    context: 'Expira em 3 dias',
    timeAgo: 'há 3 h',
    status: 'read',
    href: '/vantagens',
  },
  {
    id: 'notif-solidario',
    kind: 'solidario',
    title: 'Apadrinhe uma Ceia Solidária',
    description: 'Programa SP Invisível serve ceias dignas no Paissandu durante o Natal. Sua doação financia uma noite.',
    context: 'A partir de R$ 45',
    timeAgo: 'há 5 h',
    status: 'read',
    href: '/vantagens',
  },
  {
    id: 'notif-lugar',
    kind: 'lugar',
    title: 'Espaço Cauby Peixoto reaberto',
    description: 'A praça requalificada já está aberta ao público. Placas musicais, arquibancada e rampa instaladas.',
    context: 'Patrimônio · entrega à cidade',
    timeAgo: 'há 7 h',
    status: 'read',
    href: '/lugares/espaco-cauby-peixoto',
  },
  {
    id: 'notif-arte-tela',
    kind: 'arte-tela',
    title: 'Mostra "SP em Stencil" estreia',
    description: '12 grafiteiras paulistanas no telão Drogaria SP durante todo o Festival Feminino.',
    context: 'Editorial Arte na Tela',
    timeAgo: 'há 8 h',
    status: 'read',
    href: '/feed',
  },
  {
    id: 'notif-feira',
    kind: 'feira',
    title: 'Feira dominical abriu',
    description: '80 estandes abertos até 18h · gastronomia, artesanato e produtores locais inspirados na San Telmo.',
    context: 'Eixo todo · 10h–18h',
    timeAgo: 'há 1 d',
    status: 'read',
    href: '/feira',
  },
  {
    id: 'notif-pet',
    kind: 'pet',
    title: 'Feira de adoção rola amanhã',
    description: '12 cães prontos pra adoção responsável no Parcão Boulevard. Mutirão veterinário social em paralelo.',
    context: 'Parcão · Dom 10h–17h',
    timeAgo: 'há 1 d',
    status: 'read',
    href: '/mapa',
  },
  {
    id: 'notif-mapa',
    kind: 'mapa',
    title: 'Pop-Ups Endossa abriram',
    description: 'Contêineres de economia circular instalados no calçadão. Marcas autorais e moda circular até domingo 20h.',
    context: 'Eixo central · sáb/dom',
    timeAgo: 'há 1 d',
    status: 'read',
    href: '/mapa',
  },
  {
    id: 'notif-aviso',
    kind: 'aviso',
    title: 'Fechamento da São João às 18h',
    description: 'Reforce o planejamento: a partir das 18h a avenida fica liberada apenas para pedestres.',
    context: 'Programação regular · sábado',
    timeAgo: 'há 2 d',
    status: 'read',
  },
]
