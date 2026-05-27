/**
 * Calendário oficial Boulevard São João — Mídia Kit Comercial
 * (temporada 2026-2027, agência → cliente final).
 *
 * 12 Grandes Eventos macro (1 por mês) + 3 datas-âncora
 * destacadas (Dia das Crianças, Festival Black, Réveillon).
 *
 * Realização: Fábrica de Bares · ABRASEL-SP · Conexão Corporativa & BTO+
 */

export type GrandeEvento = {
  slug: string
  month: number               // 1-12
  monthLabel: string
  title: string
  /** Sub-tema editorial mensal (ex: "Moda & Street Culture") */
  subTema: string
  tagline: string
  summary: string
  imageUri: string
  themeColor: string
  highlights: string[]
  palcos?: string[]
  partnerSlot?: 'master' | 'pilar-musica' | 'pilar-lazer' | 'pilar-esg' | 'apoio'
  /** Marca como data-âncora se o evento é uma das 3 grandes ativações tatuadas */
  isDataAncora?: boolean
  /** Texto de data específica (ex: "Semana do 20", "31 dez · noite", "6 dez → 6 jan") */
  janelaData?: string
}

export const GRANDES_EVENTOS: GrandeEvento[] = [
  {
    slug: 'boulevard-festival',
    month: 9,
    monthLabel: 'SET',
    title: 'Boulevard Festival',
    subTema: 'Inauguração · Moda & Street Culture',
    tagline: 'O Centro de SP se reabre ao paulistano',
    summary:
      'Evento de inauguração oficial do Boulevard São João. Abertura simbólica das ruas ao pedestre, acendimento sincronizado das telas LED nos 4 prédios mapeados e show de lançamento no Espaço Cauby Peixoto.',
    imageUri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#5500CC',
    highlights: [
      'Acendimento sincronizado dos 4 telões mapeados',
      'Cerimônia oficial com Prefeitura + cofundadora master',
      'Show de inauguração no Espaço Cauby Peixoto',
      'Curadoria de Moda & Street Culture nas telas',
    ],
    palcos: ['Palco 1', 'Palco 2', 'Palco 3', 'Palco Rua'],
    partnerSlot: 'master',
  },
  {
    slug: 'boulevard-kids',
    month: 10,
    monthLabel: 'OUT',
    title: 'Boulevard Kids',
    subTema: 'Ilustração + Crianças',
    tagline: 'A rua é o nosso playground',
    summary:
      'Data-âncora do mês das crianças. Fechamento total para trânsito infantil, 04 infláveis gigantes nas praças, lona de circo no calçadão e cinema infantil sob as estrelas.',
    imageUri: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#E91E8C',
    highlights: [
      'Praças · 04 infláveis gigantes + oficinas de pintura',
      'Espaço Circo Livre · malabares, palhaçaria e acrobacias',
      'Cinema ao ar livre · animações clássicas com som imersivo',
      'Fechamento total para trânsito infantil',
    ],
    palcos: ['Palco Rua · Circo'],
    partnerSlot: 'pilar-lazer',
    isDataAncora: true,
    janelaData: 'Outubro · fim de semana',
  },
  {
    slug: 'arte-digital-festival-black',
    month: 11,
    monthLabel: 'NOV',
    title: 'Arte Digital · O Centro Negro',
    subTema: 'Festival Black · Consciência Negra',
    tagline: 'Cultura afrodiaspórica ocupa o Paissandu',
    summary:
      'Data-âncora da semana do 20. Cortejos de afoxé conectando o circuito, feira criativa com 30+ empreendedores negros, painéis históricos no Largo do Paissandu valorizando a Estátua da Mãe Preta e a Igreja do Rosário.',
    imageUri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#F97316',
    highlights: [
      'Tribus · feira criativa com 30+ empreendedores negros',
      'Paissandu · painéis históricos + valorização patrimonial',
      'Palcos · rap, trap, samba de raiz e MPB',
      'Cortejos de afoxé conectando o circuito',
    ],
    palcos: ['Palco 1 · Samba', 'Palco 3 · Rap', 'Palco Rua · MPB'],
    partnerSlot: 'pilar-esg',
    isDataAncora: true,
    janelaData: 'Novembro · semana do 20',
  },
  {
    slug: 'natal-no-boulevard',
    month: 12,
    monthLabel: 'DEZ',
    title: 'Natal no Boulevard',
    subTema: 'O coração se acende',
    tagline: 'Manifesto de orgulho paulistano, acolhimento e luz',
    summary:
      'Janela de 6 DEZ → 6 JAN. Túnel imersivo de luzes de 50m, Show do Acendimento da árvore-monumento no Paissandu, Cantata das Sacadas (clássicos do Cauby), Bondinho Natalino, Cinema ao Ar Livre, Ceias Solidárias (SP Invisível) e Réveillon com 4 palcos.',
    imageUri: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#E91E8C',
    highlights: [
      'Túnel Imersivo de Luzes · 50m de LED sincronizado',
      'Show do Acendimento · árvore-monumento no Paissandu',
      'Cantata das Sacadas · clássicos do Cauby Peixoto',
      'Bondinho Natalino · 20min de viagem emocional',
      'Ceias Solidárias · SP Invisível no Paissandu',
      'Réveillon · 4 palcos virada · fogos silenciosos',
    ],
    palcos: ['Palco 1', 'Palco 2', 'Palco 3', 'Palco Rua'],
    partnerSlot: 'master',
    isDataAncora: true,
    janelaData: '6 DEZ → 6 JAN · Réveillon 31 dez 20h–02h',
  },
  {
    slug: 'sp-criativa',
    month: 1,
    monthLabel: 'JAN',
    title: 'SP Criativa',
    subTema: 'Aniversário da cidade',
    tagline: 'Sampa faz aniversário no Boulevard',
    summary:
      'Sampa aniversaria no eixo São João. Projeções mapeadas em fachadas históricas, cortejo dos blocos pioneiros e shows ao longo dos quatro palcos integrados.',
    imageUri: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#5500CC',
    highlights: [
      'Projeção "SP 472" em fachadas da São João',
      'Cortejo de blocos pioneiros paulistanos',
      'Roda de samba paulistana com convidados',
      'Cardápio especial nos bares ABRASEL parceiros',
    ],
    palcos: ['Palco 1 · Samba', 'Palco 2 · MPB', 'Palco Rua · Hip-Hop'],
    partnerSlot: 'master',
  },
  {
    slug: 'carnaval-do-boulevard',
    month: 2,
    monthLabel: 'FEV',
    title: 'Carnaval do Boulevard',
    subTema: 'Arte urbana de rua',
    tagline: 'O Centro vira chão de bloco',
    summary:
      'Blocos convidados todos os dias, marchinhas no Bar Brahma, oficina de samba no pé e arquibancada da Praça Cauby Peixoto liberada pro pré-bloco.',
    imageUri: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#E91E8C',
    highlights: [
      'Blocos convidados todos os dias',
      'Marchinhas no Bar Brahma',
      'Oficina de samba no pé',
      'Arquibancada Cauby Peixoto pro pré-bloco',
    ],
    palcos: ['Palco 1 · Samba', 'Palco 2 · MPB', 'Palco 3 · Rock', 'Palco Rua · Hip-Hop'],
    partnerSlot: 'pilar-musica',
  },
  {
    slug: 'mulheres-criativas',
    month: 3,
    monthLabel: 'MAR',
    title: 'Mulheres Criativas',
    subTema: 'Festival das criadoras',
    tagline: 'Vozes que ocupam o Centro',
    summary:
      'Programação 100% assinada por mulheres no mês do 8M. Shows, intervenções urbanas, oficinas de estêncil/lambe-lambe e curadoria de Arte na Tela com grafiteiras paulistanas.',
    imageUri: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#E91E8C',
    highlights: [
      'Line-up 100% feminino nos 4 palcos',
      'Mural ao vivo no prédio Habibs',
      'Oficina de estêncil + lambe-lambe (Escola de Arte Urbana)',
      'Editorial Arte na Tela · grafiteiras paulistanas',
    ],
    palcos: ['Palco 1', 'Palco 2', 'Palco 3', 'Palco Rua'],
    partnerSlot: 'pilar-esg',
  },
  {
    slug: 'design-brasileiro',
    month: 4,
    monthLabel: 'ABR',
    title: 'Design Brasileiro',
    subTema: 'Mobiliário & objetos',
    tagline: 'A Feira de Design ocupa o calçadão',
    summary:
      'Curadoria de feiras icônicas (Rosenbaum, MADE, Tijuana, Jardim Secreto). Talks com arquitetos e estilistas sobre o futuro urbano + Fashion Walk no calçadão.',
    imageUri: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#3B5BDB',
    highlights: [
      'Feiras convidadas · Rosenbaum, MADE, Tijuana, Jardim Secreto',
      'Boulevard Talks · arquitetos e estilistas',
      'Fashion Walk · passarela urbana sustentável',
      'Lounge de Design assinado por cofundadora master',
    ],
    palcos: ['Palco 1', 'Palco Rua'],
    partnerSlot: 'pilar-esg',
  },
  {
    slug: 'virada-cultural',
    month: 5,
    monthLabel: 'MAI',
    title: 'Virada Cultural',
    subTema: 'Música do Boulevard',
    tagline: 'A maior maratona cultural ocupa o Boulevard',
    summary:
      'Boulevard São João recebe um eixo dedicado da Virada. 24h de programação contínua, integração com palcos da Prefeitura, transmissão ao vivo entre palcos e curadoria nas telas LED.',
    imageUri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#774DE8',
    highlights: [
      '24h non-stop nos 4 palcos integrados',
      'Integração oficial com a Virada Cultural da Prefeitura',
      'Streaming entre palcos no Telão Drogaria SP',
      'Curadoria editorial Música do Boulevard nas telas',
    ],
    palcos: ['Palco 1', 'Palco 2', 'Palco 3', 'Palco Rua'],
    partnerSlot: 'master',
  },
  {
    slug: 'sao-joao-contemporaneo',
    month: 6,
    monthLabel: 'JUN',
    title: 'São João Contemporâneo',
    subTema: 'Festa junina',
    tagline: 'A festa junina mais paulistana do Brasil',
    summary:
      'Fogueira simbólica no Largo do Paissandu, quadrilha no Palco Rua, comidas típicas nos bares ABRASEL, bandeirinhas projetadas no eixo todo.',
    imageUri: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#F97316',
    highlights: [
      'Quadrilha aberta no Palco Rua',
      'Bandeirinhas projetadas nos 4 telões',
      'Menu junino nos bares ABRASEL',
      'Fogueira simbólica no Paissandu',
    ],
    palcos: ['Palco 1 · Forró', 'Palco Rua · Quadrilha'],
    partnerSlot: 'pilar-lazer',
  },
  {
    slug: 'inverno-criativo',
    month: 7,
    monthLabel: 'JUL',
    title: 'Inverno Criativo',
    subTema: 'Festival sazonal',
    tagline: 'Boulevard de cobertor, vinho e MPB',
    summary:
      'Curadoria intimista pro mês mais frio. Sets acústicos, Cinema ao Ar Livre aquecido, vinho quente nos bares parceiros e curadoria de MPB nas telas.',
    imageUri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#3B5BDB',
    highlights: [
      'Sets acústicos nos 4 palcos',
      'Cinema ao Ar Livre com cobertor',
      'Curadoria MPB nos telões',
      'Vinho quente nos bares ABRASEL',
    ],
    palcos: ['Palco 2 · MPB', 'Palco 3 · Acústico'],
    partnerSlot: 'pilar-musica',
  },
  {
    slug: 'gastronomia-paulistana',
    month: 8,
    monthLabel: 'AGO',
    title: 'Gastronomia Paulistana',
    subTema: 'ABRASEL',
    tagline: 'A São João come bem',
    summary:
      'Bares e restaurantes do eixo lançam pratos exclusivos. Rota gastronômica oficial no app, cupons no Vantagens e aulas-show no Palco 2.',
    imageUri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#F97316',
    highlights: [
      'Pratos autorais nos bares ABRASEL do eixo',
      'Rota gastronômica oficial no app',
      'Cupons exclusivos no Vantagens',
      'Aulas-show no Palco 2 com chefs locais',
    ],
    palcos: ['Palco 2 · Aulas-show'],
    partnerSlot: 'pilar-lazer',
  },
]

export function eventoBySlug(slug: string): GrandeEvento | undefined {
  return GRANDES_EVENTOS.find((e) => e.slug === slug)
}

export function eventoDoMes(date = new Date()): GrandeEvento | undefined {
  return GRANDES_EVENTOS.find((e) => e.month === date.getMonth() + 1)
}

export function datasAncora(): GrandeEvento[] {
  return GRANDES_EVENTOS.filter((e) => e.isDataAncora)
}
