export type FeedPost = {
  id: string
  editorial: 'centro' | 'sao-paulo' | 'ao-vivo'
  title: string
  description: string
  images: string[]
}

export const EDITORIAL_TABS = [
  { id: 'centro',    label: 'Acontece no Centro' },
  { id: 'sao-paulo', label: 'Acontece em SP' },
  { id: 'ao-vivo',   label: 'Ao Vivo' },
] as const

const img = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?w=1200&q=80&auto=format&fit=crop`

export const FEED_POSTS: FeedPost[] = [
  {
    id: 'sp-1',
    editorial: 'sao-paulo',
    title: 'Seleção brasileira: quem são os jogadores convocados para a Copa',
    description: 'A CBF divulgou a lista preliminar com nomes que movimentam o mercado e reacendem o debate sobre a melhor formação tática.',
    images: [
      img('photo-1574629810360-7efbbe195018'),
      img('photo-1529156069898-49953e39b3ac'),
      img('photo-1461896836934-ffe607ba8211'),
    ],
  },
  {
    id: 'sp-2',
    editorial: 'sao-paulo',
    title: 'Novo palco cultural abre na Paulista com programação gratuita',
    description: 'O espaço recebe shows, intervenções urbanas e oficinas abertas ao público durante todo o fim de semana.',
    images: [
      img('photo-1493225457124-a3eb161ffa5f'),
      img('photo-1540039155733-5bb30b53aa14'),
      img('photo-1511578314322-379afb476865'),
    ],
  },
  {
    id: 'centro-1',
    editorial: 'centro',
    title: 'Feira gastronômica reúne chefs do centro histórico',
    description: 'Pratos autorais, música ao vivo e rotas guiadas conectam visitantes aos marcos mais antigos da região.',
    images: [
      img('photo-1517248135467-4c7edcad34c4'),
      img('photo-1555396273-367ea4eb4db5'),
      img('photo-1414235077428-338989a2e8c0'),
    ],
  },
  {
    id: 'centro-2',
    editorial: 'centro',
    title: 'Exposição imersiva transforma galeria em labirinto de luz',
    description: 'A mostra ocupa três andares e propõe uma viagem sensorial pela história da cidade em 40 minutos.',
    images: [
      img('photo-1541961017774-22349e4a1262'),
      img('photo-1485846234645-a62644f84728'),
      img('photo-1492684223066-81342ee5ff30'),
    ],
  },
  {
    id: 'live-1',
    editorial: 'ao-vivo',
    title: 'Agora • Feira de artesanato lota o Pátio Central',
    description: 'Mais de 80 expositores estão montados neste momento. Filas curtas na entrada norte.',
    images: [
      img('photo-1533174072545-7a4b6ad7a6c3'),
      img('photo-1511795409834-ef04bbd61622'),
      img('photo-1556742049-0cfed4f6a45d'),
    ],
  },
  {
    id: 'live-2',
    editorial: 'ao-vivo',
    title: 'Palco 2 • roda de samba começou há 5 minutos',
    description: 'Público reunido em frente ao palco principal. Próxima apresentação confirmada para 21h30.',
    images: [
      img('photo-1514525253161-7a46d19cd819'),
      img('photo-1516450360452-9312f5e86fc7'),
      img('photo-1493225457124-a3eb161ffa5f'),
    ],
  },
  {
    id: 'live-3',
    editorial: 'ao-vivo',
    title: 'Cozinha ao vivo • oficina de massas na Praça das Oficinas',
    description: 'Chef demonstra técnicas agora para um grupo de 40 pessoas. Vagas extras liberadas na fila lateral.',
    images: [
      img('photo-1556910103-1c02745aae4d'),
      img('photo-1414235077428-338989a2e8c0'),
      img('photo-1504674900247-0877df9cc836'),
    ],
  },
  {
    id: 'sp-3',
    editorial: 'sao-paulo',
    title: 'Mercado criativo lança circuito de lojas e estúdios independentes',
    description: 'Mapa interativo no app conecta visitantes a ateliês, vinilarias e cafés de autoria local.',
    images: [
      img('photo-1441986300917-64674bd600d8'),
      img('photo-1558618666-fcd25c85cd64'),
      img('photo-1516321318423-f06f85e504b3'),
    ],
  },
]
