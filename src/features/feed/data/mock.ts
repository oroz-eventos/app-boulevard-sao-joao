import type { EditorialTab, FeedPost } from '../types'

export const EDITORIAL_TABS: EditorialTab[] = [
  { id: 'centro', label: 'Acontece no Centro' },
  { id: 'sao-paulo', label: 'Acontece em São Paulo' },
  { id: 'ao-vivo', label: 'Ao Vivo' },
]

/** URLs validadas (HEAD 200) — evita slides vazios por imagens removidas do Unsplash */
const img = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?w=1200&q=80&auto=format&fit=crop`

export const FEED_POSTS: FeedPost[] = [
  {
    id: 'sp-1',
    editorial: 'sao-paulo',
    title: 'Seleção brasileira: quem são os jogadores convocados para a Copa',
    description:
      'A CBF divulgou a lista preliminar com nomes que movimentam o mercado e reacendem o debate sobre a melhor formação tática. Técnicos, dirigentes e torcedores acompanham de perto cada convocação enquanto a seleção se prepara para a próxima janela de jogos internacionais.',
    images: [
      img('photo-1574629810360-7efbbe195018'),
      img('photo-1529156069898-49953e39b3ac'),
      img('photo-1523240795612-9a054b0db644'),
      img('photo-1461896836934-ffe607ba8211'),
      img('photo-1516280440614-37939bbacd81'),
    ],
  },
  {
    id: 'sp-2',
    editorial: 'sao-paulo',
    title: 'Novo palco cultural abre na Paulista com programação gratuita',
    description:
      'O espaço recebe shows, intervenções urbanas e oficinas abertas ao público durante todo o fim de semana. A programação inclui teatro de rua, DJs convidados e uma mostra de arte urbana ao longo da avenida.',
    images: [
      img('photo-1493225457124-a3eb161ffa5f'),
      img('photo-1540039155733-5bb30b53aa14'),
      img('photo-1511578314322-379afb476865'),
      img('photo-1514525253161-7a46d19cd819'),
      img('photo-1501281668745-f7f57925c3b4'),
    ],
  },
  {
    id: 'centro-1',
    editorial: 'centro',
    title: 'Feira gastronômica reúne chefs do centro histórico',
    description:
      'Pratos autorais, música ao vivo e rotas guiadas conectam visitantes aos marcos mais antigos da região. O evento ocupa praças e galerias com degustações, oficinas e mesas compartilhadas até o domingo.',
    images: [
      img('photo-1517248135467-4c7edcad34c4'),
      img('photo-1555396273-367ea4eb4db5'),
      img('photo-1414235077428-338989a2e8c0'),
      img('photo-1559339352-11d035aa65de'),
      img('photo-1551218808-94e220e084d2'),
    ],
  },
  {
    id: 'centro-2',
    editorial: 'centro',
    title: 'Exposição imersiva transforma galeria em labirinto de luz',
    description:
      'A mostra ocupa três andares e propõe uma viagem sensorial pela história da cidade em 40 minutos. Instalações interativas e projeções mapeadas guiam o visitante por salas temáticas com trilha sonora original.',
    images: [
      img('photo-1541961017774-22349e4a1262'),
      img('photo-1485846234645-a62644f84728'),
      img('photo-1492684223066-81342ee5ff30'),
      img('photo-1500530855697-b586d89ba3ee'),
      img('photo-1540575467063-178a50c2df87'),
    ],
  },
  {
    id: 'live-1',
    editorial: 'ao-vivo',
    title: 'Agora • Feira de artesanato lota o Pátio Central',
    description:
      'Mais de 80 expositores estão montados neste momento. Filas curtas na entrada norte e degustação de café especial na tenda 12, aberta até as 20h.',
    images: [
      img('photo-1533174072545-7a4b6ad7a6c3'),
      img('photo-1511795409834-ef04bbd61622'),
      img('photo-1556742049-0cfed4f6a45d'),
      img('photo-1441986300917-64674bd600d8'),
      img('photo-1558618666-fcd25c85cd64'),
    ],
  },
  {
    id: 'live-2',
    editorial: 'ao-vivo',
    title: 'Palco 2 • roda de samba começou há 5 minutos',
    description:
      'Público reunido em frente ao palco principal. Próxima apresentação confirmada para 21h30 com participação do grupo convidado da noite.',
    images: [
      img('photo-1514525253161-7a46d19cd819'),
      img('photo-1516450360452-9312f5e86fc7'),
      img('photo-1501281668745-f7f57925c3b4'),
      img('photo-1493225457124-a3eb161ffa5f'),
      img('photo-1516280440614-37939bbacd81'),
    ],
  },
  {
    id: 'live-3',
    editorial: 'ao-vivo',
    title: 'Cozinha ao vivo • oficina de massas na Praça das Oficinas',
    description:
      'Chef demonstra técnicas agora para um grupo de 40 pessoas. Vagas extras liberadas na fila lateral; amostras servidas ao final de cada rodada.',
    images: [
      img('photo-1556910103-1c02745aae4d'),
      img('photo-1414235077428-338989a2e8c0'),
      img('photo-1504674900247-0877df9cc836'),
      img('photo-1555244162-803834f70033'),
      img('photo-1556909114-f6e7ad7d3136'),
    ],
  },
  {
    id: 'live-4',
    editorial: 'ao-vivo',
    title: 'Fila liberada • entrada rápida no show das 18h',
    description:
      'Portões da área externa abertos sem espera neste momento. Equipe orienta o público para os setores A e B; últimos ingressos disponíveis no app.',
    images: [
      img('photo-1540039155733-5bb30b53aa14'),
      img('photo-1470229722913-7c0e2dbbafd3'),
      img('photo-1492684223066-81342ee5ff30'),
      img('photo-1514525253161-7a46d19cd819'),
      img('photo-1516280440614-37939bbacd81'),
    ],
  },
  {
    id: 'live-5',
    editorial: 'ao-vivo',
    title: 'Infantil • oficina de tintas naturais em andamento',
    description:
      'Atividade lotada no Jardim das Famílias com fila de espera de 10 minutos. Pais podem acompanhar pelas cadeiras laterais; próxima turma abre às 17h.',
    images: [
      img('photo-1587654780291-39c9404d746b'),
      img('photo-1509062522246-3755977927d7'),
      img('photo-1516627145497-ae6968895b74'),
      img('photo-1522071820081-009f0129c71c'),
      img('photo-1507003211169-0a1dd7228f2d'),
    ],
  },
  {
    id: 'live-6',
    editorial: 'ao-vivo',
    title: 'Agora • Degustação de vinhos na Praça do Vinho',
    description:
      'Produtores locais servem taças neste momento. Mapa de estandes atualizado no app; últimas 40 vagas para o workshop das 19h.',
    images: [
      img('photo-1504674900247-0877df9cc836'),
      img('photo-1551218808-94e220e084d2'),
      img('photo-1559339352-11d035aa65de'),
      img('photo-1555396273-367ea4eb4db5'),
    ],
  },
  {
    id: 'live-7',
    editorial: 'ao-vivo',
    title: 'Boulevard • fila da Feira de Design se move rápido',
    description:
      'Tempo de espera caiu para cerca de 8 minutos. Expositores de móveis e ilustração abrem novas mesas de atendimento na ala leste.',
    images: [
      img('photo-1441986300917-64674bd600d8'),
      img('photo-1516321318423-f06f85e504b3'),
      img('photo-1556742049-0cfed4f6a45d'),
      img('photo-1529156069898-49953e39b3ac'),
    ],
  },
  {
    id: 'sp-3',
    editorial: 'sao-paulo',
    title: 'Mercado criativo lança circuito de lojas e estúdios independentes',
    description:
      'Mapa interativo no app conecta visitantes a ateliês, vinilarias e cafés de autoria local espalhados pela zona sul. O circuito inclui open studio, degustações e descontos em parceiros selecionados.',
    images: [
      img('photo-1441986300917-64674bd600d8'),
      img('photo-1558618666-fcd25c85cd64'),
      img('photo-1516321318423-f06f85e504b3'),
      img('photo-1556742049-0cfed4f6a45d'),
      img('photo-1529156069898-49953e39b3ac'),
    ],
  },
]
