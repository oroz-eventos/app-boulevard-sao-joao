/**
 * Calendário oficial Boulevard São João (V8, abr/2026)
 * 12 Grandes Eventos — um por mês.
 * Sujeito a alteração pela curadoria/CPPU.
 */

export type GrandeEvento = {
  slug: string
  month: number               // 1-12
  monthLabel: string
  title: string
  tagline: string
  summary: string
  imageUri: string
  themeColor: string          // accent específico do mês (paleta brand)
  highlights: string[]        // 3-5 ativações
  palcos?: string[]           // quais dos 4 palcos participam
  partnerSlot?: 'master' | 'pilar-musica' | 'pilar-lazer' | 'pilar-esg' | 'apoio'
}

export const GRANDES_EVENTOS: GrandeEvento[] = [
  {
    slug: 'aniversario-sao-paulo',
    month: 1,
    monthLabel: 'JAN',
    title: 'Aniversário de São Paulo',
    tagline: 'Sampa faz aniversário no Boulevard',
    summary:
      'A cidade ganha sua festa de aniversário no eixo São João — projeções mapeadas em fachadas históricas, cortejo dos blocos pioneiros e shows ao longo dos quatro palcos.',
    imageUri: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#5500CC',
    highlights: [
      'Projeção “SP 472” em fachadas da São João',
      'Cortejo de blocos cariocas e paulistanos',
      'Roda de samba paulistana com convidados',
      'Cardápio especial nos bares parceiros',
    ],
    palcos: ['Palco 1 · Samba', 'Palco 2 · MPB', 'Palco Rua · Hip-Hop'],
    partnerSlot: 'master',
  },
  {
    slug: 'carnaval-do-boulevard',
    month: 2,
    monthLabel: 'FEV',
    title: 'Carnaval do Boulevard',
    tagline: 'O Centro vira chão de bloco',
    summary:
      'Fim de semana de carnaval com blocos convidados, marchinhas no Bar Brahma, oficina de samba no pé e arquibancada da Praça Cauby Peixoto liberada para foliões.',
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
    slug: 'festival-feminino',
    month: 3,
    monthLabel: 'MAR',
    title: 'Festival Feminino de Música e Artes',
    tagline: 'Vozes que ocupam o Centro',
    summary:
      'Programação 100% assinada por mulheres no mês do Dia Internacional da Mulher — shows, intervenções urbanas, oficinas de estêncil e curadoria de Arte na Tela com grafiteiras paulistanas.',
    imageUri: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#E91E8C',
    highlights: [
      'Line-up 100% feminino nos 4 palcos',
      'Mural ao vivo no prédio Habibs',
      'Oficina de estêncil + lambe-lambe',
      'Editorial Arte na Tela com grafiteiras',
    ],
    palcos: ['Palco 1', 'Palco 2', 'Palco 3', 'Palco Rua'],
    partnerSlot: 'pilar-esg',
  },
  {
    slug: 'festival-artes-centro',
    month: 4,
    monthLabel: 'ABR',
    title: 'Festival de Artes do Centro',
    tagline: 'Arte ocupa a São João',
    summary:
      'Galerias do Centro abrem ao mesmo tempo; intervenções de arte urbana ao longo dos cinco quarteirões; exposição itinerante na Praça Cauby Peixoto.',
    imageUri: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#3B5BDB',
    highlights: [
      'Open studios nas galerias do Centro',
      'Exposição itinerante na Cauby Peixoto',
      'Performances ao vivo nas empenas',
      'Talks com artistas paulistanos',
    ],
    palcos: ['Palco 1', 'Palco Rua'],
    partnerSlot: 'pilar-esg',
  },
  {
    slug: 'virada-cultural',
    month: 5,
    monthLabel: 'MAI',
    title: 'Virada Cultural',
    tagline: 'A maior maratona cultural ocupa o Boulevard',
    summary:
      'Boulevard São João recebe um eixo dedicado da Virada — 24h de programação contínua, integração com palcos da Prefeitura e transmissão ao vivo pra outros pontos da cidade.',
    imageUri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#774DE8',
    highlights: [
      '24h non-stop nos 4 palcos',
      'Integração com a Virada Cultural oficial',
      'Streaming ao vivo no telão Drogaria SP',
      'Janelas para o Mundo · Nova York e Tóquio',
    ],
    palcos: ['Palco 1', 'Palco 2', 'Palco 3', 'Palco Rua'],
    partnerSlot: 'master',
  },
  {
    slug: 'sao-joao-na-sao-joao',
    month: 6,
    monthLabel: 'JUN',
    title: 'São João na São João',
    tagline: 'A festa junina mais paulistana do Brasil',
    summary:
      'Fogueira simbólica no Largo do Paissandu, quadrilha no Palco Rua, comidas típicas nos bares parceiros, telões com projeção de bandeirinhas no eixo todo.',
    imageUri: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#F97316',
    highlights: [
      'Quadrilha aberta no Palco Rua',
      'Bandeirinhas projetadas nos telões',
      'Menu junino nos bares ABRASEL',
      'Fogueira simbólica no Paissandu',
    ],
    palcos: ['Palco 1 · Forró', 'Palco Rua · Quadrilha'],
    partnerSlot: 'pilar-lazer',
  },
  {
    slug: 'festival-inverno',
    month: 7,
    monthLabel: 'JUL',
    title: 'Festival de Inverno',
    tagline: 'Boulevard de cobertor, vinho e MPB',
    summary:
      'Curadoria intimista pro mês mais frio — sets acústicos, cinema ao ar livre aquecido, vinho quente nos bares e curadoria de MPB nas telas.',
    imageUri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#3B5BDB',
    highlights: [
      'Sets acústicos nos 4 palcos',
      'Cinema ao ar livre com cobertor',
      'Curadoria MPB nos telões',
      'Vinho quente nos bares parceiros',
    ],
    palcos: ['Palco 2 · MPB', 'Palco 3 · Acústico'],
    partnerSlot: 'pilar-musica',
  },
  {
    slug: 'festival-gastronomico',
    month: 8,
    monthLabel: 'AGO',
    title: 'Festival Gastronômico',
    tagline: 'A São João come bem',
    summary:
      'Bares e restaurantes do eixo lançam pratos exclusivos pro festival, com rota gastronômica oficial no app + cupons no Vantagens.',
    imageUri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#F97316',
    highlights: [
      'Pratos autorais nos bares ABRASEL',
      'Rota gastronômica oficial no app',
      'Cupons exclusivos no Vantagens',
      'Aulas-show no Palco 2',
    ],
    palcos: ['Palco 2 · Aulas-show'],
    partnerSlot: 'pilar-lazer',
  },
  {
    slug: 'boulevard-festival',
    month: 9,
    monthLabel: 'SET',
    title: 'Boulevard Festival',
    tagline: 'A inauguração do novo Centro',
    summary:
      'Evento de lançamento do Boulevard São João — abertura simbólica das ruas ao pedestre, acendimento das telas LED dos 4 prédios e show internacional na Cauby Peixoto.',
    imageUri: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#5500CC',
    highlights: [
      'Abertura simbólica do eixo ao pedestre',
      'Acendimento sincronizado dos 4 telões',
      'Show de lançamento na Cauby Peixoto',
      'Cerimônia oficial com Prefeitura',
    ],
    palcos: ['Palco 1', 'Palco 2', 'Palco 3', 'Palco Rua'],
    partnerSlot: 'master',
  },
  {
    slug: 'boulevard-kids',
    month: 10,
    monthLabel: 'OUT',
    title: 'Boulevard Kids',
    tagline: 'O Centro é das crianças',
    summary:
      'Fim de semana lúdico no mês das crianças — infláveis gigantes, lona de circo, oficinas de pintura e cinema infantil ao ar livre.',
    imageUri: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#E91E8C',
    highlights: [
      'Infláveis gigantes nas praças',
      'Lona de circo no Palco Rua',
      'Oficinas de pintura e colagem',
      'Cinema infantil ao ar livre',
    ],
    palcos: ['Palco Rua · Circo'],
    partnerSlot: 'pilar-lazer',
  },
  {
    slug: 'boulevard-black',
    month: 11,
    monthLabel: 'NOV',
    title: 'Boulevard Black',
    tagline: 'Celebração da cultura preta paulistana',
    summary:
      'Semana do Dia da Consciência Negra com cortejo afro no Paissandu, feira de gastronomia preta, painéis no Largo e shows de rap, samba e MPB.',
    imageUri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#F97316',
    highlights: [
      'Cortejo afro no Largo do Paissandu',
      'Feira de gastronomia preta',
      'Painéis na Igreja Rosário dos Pretos',
      'Line-up de rap, samba e MPB',
    ],
    palcos: ['Palco 1 · Samba', 'Palco 3 · Rap', 'Palco Rua · MPB'],
    partnerSlot: 'pilar-esg',
  },
  {
    slug: 'natal-no-boulevard',
    month: 12,
    monthLabel: 'DEZ',
    title: 'Natal no Boulevard',
    tagline: 'O coração da cidade se acende',
    summary:
      'Cenografia natalina nas fachadas históricas, túnel de luzes na São João, cantata nas sacadas e ceias solidárias no Largo do Paissandu.',
    imageUri: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#E91E8C',
    highlights: [
      'Túnel de luzes na São João',
      'Cantata das sacadas (homenagem Cauby)',
      'Ceias solidárias no Paissandu',
      'Projeção mapeada no Bar Brahma',
    ],
    palcos: ['Palco 2 · Cantata', 'Palco Rua · Coral'],
    partnerSlot: 'master',
  },
]

export function eventoBySlug(slug: string): GrandeEvento | undefined {
  return GRANDES_EVENTOS.find((e) => e.slug === slug)
}

export function eventoDoMes(date = new Date()): GrandeEvento | undefined {
  return GRANDES_EVENTOS.find((e) => e.month === date.getMonth() + 1)
}
