/**
 * 4 editorias oficiais do Boulevard São João (V8):
 *   1. Acontece no Centro    — jornal eletrônico local
 *   2. Acontece em São Paulo — temas urbanos pra quem circula em SP
 *   3. Arte na Tela          — telas como superfície artística
 *   4. Conteúdo ao Vivo      — esportes/shows/eventos + Janelas para o Mundo
 *
 * Curadoria em parceria com CNN Brasil, Jovem Pan e UOL.
 */

export type FeedEditorial = 'centro' | 'sao-paulo' | 'arte-tela' | 'ao-vivo'

export type FeedPost = {
  id: string
  editorial: FeedEditorial
  title: string
  description: string
  images: string[]
  /** Mostrado como chip pequeno (ex: "Bar Brahma", "Palco 2", "Telão Drogaria") */
  badge?: string
  /** Crédito da curadoria (CNN Brasil, UOL, Jovem Pan, editorial próprio) */
  source?: string
}

export const EDITORIAL_TABS: { id: FeedEditorial; label: string }[] = [
  { id: 'centro',    label: 'Acontece no Centro' },
  { id: 'sao-paulo', label: 'Acontece em SP' },
  { id: 'arte-tela', label: 'Arte na Tela' },
  { id: 'ao-vivo',   label: 'Conteúdo ao Vivo' },
]

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`

export const FEED_POSTS: FeedPost[] = [
  // ============ ACONTECE NO CENTRO ============
  {
    id: 'centro-1',
    editorial: 'centro',
    title: 'Bar Brahma reabre cardápio histórico com novidades de bistrô',
    description:
      'O ícone da esquina São João × Ipiranga relança pratos do menu original de 1948 e estreia carta de vinhos paulistanos. Cardápio fica em cartaz durante todo o Festival Gastronômico.',
    images: [
      img('photo-1552566626-52f8b828add9'),
      img('photo-1414235077428-338989a2e8c0'),
      img('photo-1551218808-94e220e084d2'),
    ],
    badge: 'Bar Brahma',
    source: 'Editorial Boulevard',
  },
  {
    id: 'centro-2',
    editorial: 'centro',
    title: 'Galeria Metrópole anuncia residência aberta de grafiteiras',
    description:
      'A galeria recebe 12 artistas paulistanas pra desenvolverem peças que vão pra rotação de Arte na Tela ao longo do mês.',
    images: [
      img('photo-1541961017774-22349e4a1262'),
      img('photo-1518998053901-5348d3961a04'),
      img('photo-1500530855697-b586d89ba3ee'),
    ],
    badge: 'Galeria Metrópole',
    source: 'Editorial Boulevard',
  },
  {
    id: 'centro-3',
    editorial: 'centro',
    title: 'Parcão Boulevard inaugura agility gratuito aos domingos',
    description:
      'Pista cercada com obstáculos em madeira de reflorestamento. Monitor disponível, sem inscrição prévia. Feira de adoção rola em paralelo.',
    images: [
      img('photo-1587300003388-59208cc962cb'),
      img('photo-1450778869180-41d0601e046e'),
      img('photo-1543466835-00a7907e9de1'),
    ],
    badge: 'Parcão · Domingo',
    source: 'Editorial Boulevard',
  },
  {
    id: 'centro-4',
    editorial: 'centro',
    title: 'Restauro da fachada da Igreja Rosário dos Pretos entra em fase final',
    description:
      'Obra de conservação avança e nova iluminação cênica destaca os detalhes da fachada à noite. Inauguração com cortejo afro no Boulevard Black em novembro.',
    images: [
      img('photo-1518998053901-5348d3961a04'),
      img('photo-1525857597365-5f6dbff2e36e'),
      img('photo-1485846234645-a62644f84728'),
    ],
    badge: 'Largo do Paissandu',
    source: 'Editorial Boulevard',
  },

  // ============ ACONTECE EM SÃO PAULO ============
  {
    id: 'sp-1',
    editorial: 'sao-paulo',
    title: 'Linha 4-Amarela amplia horário aos domingos durante o Festival Gastronômico',
    description:
      'Metrô anuncia operação especial nos domingos de agosto pra absorver fluxo do Boulevard. Estação República fica como acesso oficial recomendado.',
    images: [
      img('photo-1503135935159-c1ab4ef3ce4d'),
      img('photo-1547038577-da80abbc4f19'),
      img('photo-1474900098343-3ef912654e63'),
    ],
    badge: 'Mobilidade',
    source: 'UOL',
  },
  {
    id: 'sp-2',
    editorial: 'sao-paulo',
    title: 'Virada Cultural confirma eixo no Boulevard com 24h non-stop',
    description:
      'Programação oficial integra os 4 palcos da São João com curadoria conjunta com a Secretaria de Cultura. Atrações internacionais via Janelas para o Mundo.',
    images: [
      img('photo-1493225457124-a3eb161ffa5f'),
      img('photo-1540039155733-5bb30b53aa14'),
      img('photo-1514525253161-7a46d19cd819'),
    ],
    badge: 'Virada Cultural · Maio',
    source: 'CNN Brasil',
  },
  {
    id: 'sp-3',
    editorial: 'sao-paulo',
    title: 'Pista pedonal aos sábados ganha versão piloto na Marechal Deodoro',
    description:
      'Prefeitura estende modelo de fechamento de vias do Boulevard pra próxima quadra. Teste começa em dois meses, com avaliação semestral.',
    images: [
      img('photo-1460317442991-0ec209397118'),
      img('photo-1517048676732-d65bc937f952'),
      img('photo-1547038577-da80abbc4f19'),
    ],
    badge: 'Centro Vivo',
    source: 'Jovem Pan',
  },
  {
    id: 'sp-4',
    editorial: 'sao-paulo',
    title: 'Vacinação contra gripe estendida nas estações de saúde do Boulevard',
    description:
      'Secretaria Municipal de Saúde monta posto fixo no Largo do Paissandu durante os fins de semana. Atendimento sem agendamento, das 10h às 18h.',
    images: [
      img('photo-1576091160550-2173dba999ef'),
      img('photo-1559757148-5c350d0d3c56'),
      img('photo-1583912267550-d6c2ac3196c0'),
    ],
    badge: 'Saúde Pública',
    source: 'UOL',
  },

  // ============ ARTE NA TELA ============
  {
    id: 'arte-1',
    editorial: 'arte-tela',
    title: 'Mostra "São Paulo em Stencil" ocupa o telão da Drogaria SP',
    description:
      '12 grafiteiras traduzem sua linguagem pra arte digital. Mostra rotaciona durante todo o Festival Feminino, com painéis explicativos no app.',
    images: [
      img('photo-1518998053901-5348d3961a04'),
      img('photo-1531913764164-f85c52e6e654'),
      img('photo-1541961017774-22349e4a1262'),
    ],
    badge: 'Telão Drogaria SP',
    source: 'Curadoria Boulevard',
  },
  {
    id: 'arte-2',
    editorial: 'arte-tela',
    title: 'Lambe-lambe poético invade o telão do Habibs',
    description:
      'Coletivo "Versos na Esquina" leva poesia visual de poetas paulistanos pra rotação noturna. Conteúdo muda a cada hora.',
    images: [
      img('photo-1500530855697-b586d89ba3ee'),
      img('photo-1485846234645-a62644f84728'),
      img('photo-1531913764164-f85c52e6e654'),
    ],
    badge: 'Telão Habibs',
    source: 'Curadoria Boulevard',
  },
  {
    id: 'arte-3',
    editorial: 'arte-tela',
    title: 'Projeção mapeada no Bar Brahma reconta história da São João',
    description:
      'Filme de 12 minutos com material de arquivo + animação contemporânea. Sessões ao anoitecer, sincronizadas com os outros telões.',
    images: [
      img('photo-1477959858617-67f85cf4f1df'),
      img('photo-1499364615650-ec38552f4f34'),
      img('photo-1501386761578-eac5c94b800a'),
    ],
    badge: 'Projeção Bar Brahma',
    source: 'Curadoria Boulevard',
  },
  {
    id: 'arte-4',
    editorial: 'arte-tela',
    title: 'Empena central recebe arte digital de artista consagrado',
    description:
      'Convidado especial assina obra exclusiva pra empena central do quarteirão 3. Obra fica em rotação por 30 dias.',
    images: [
      img('photo-1531913764164-f85c52e6e654'),
      img('photo-1518998053901-5348d3961a04'),
      img('photo-1485846234645-a62644f84728'),
    ],
    badge: 'Empena Central',
    source: 'Curadoria Boulevard',
  },

  // ============ CONTEÚDO AO VIVO ============
  {
    id: 'vivo-1',
    editorial: 'ao-vivo',
    title: 'Final do Paulistão hoje · 21h no telão central',
    description:
      'Transmissão integral com som liberado durante o jogo. Bares parceiros oferecem combos de happy hour estendido.',
    images: [
      img('photo-1574629810360-7efbbe195018'),
      img('photo-1542752858-5e6a2e5a8845'),
      img('photo-1471295253337-3ceaaedca402'),
    ],
    badge: 'Empena Central · 21h',
    source: 'Conteúdo ao Vivo',
  },
  {
    id: 'vivo-2',
    editorial: 'ao-vivo',
    title: 'Janela para o Mundo conectada com Times Square agora',
    description:
      'Telão central transmite, ao vivo, a Times Square. Pessoal de NY vê a São João do outro lado. Áudio liberado nos cumprimentos.',
    images: [
      img('photo-1496442226666-8d4d0e62e6e9'),
      img('photo-1485846234645-a62644f84728'),
      img('photo-1493225457124-a3eb161ffa5f'),
    ],
    badge: 'Telão Central · Ao vivo',
    source: 'Conteúdo ao Vivo',
  },
  {
    id: 'vivo-3',
    editorial: 'ao-vivo',
    title: 'Premiação Multishow de Música transmitida ao vivo nos 4 telões',
    description:
      'Programação especial nos bares com playlist do indicados. Telões integrados sincronizam transmissão sem cortes.',
    images: [
      img('photo-1493225457124-a3eb161ffa5f'),
      img('photo-1471478331149-c72f17e33c73'),
      img('photo-1501386761578-eac5c94b800a'),
    ],
    badge: 'Todos os telões · 22h',
    source: 'Conteúdo ao Vivo',
  },
  {
    id: 'vivo-4',
    editorial: 'ao-vivo',
    title: 'Cobertura ao vivo da Virada Cultural · 4 palcos integrados',
    description:
      'Câmeras nos 4 palcos do Boulevard mais 6 palcos espalhados pela cidade. Mosaico no telão central, individual nos demais.',
    images: [
      img('photo-1471478331149-c72f17e33c73'),
      img('photo-1493225457124-a3eb161ffa5f'),
      img('photo-1501386761578-eac5c94b800a'),
    ],
    badge: 'Maio · Virada',
    source: 'Conteúdo ao Vivo',
  },
]
