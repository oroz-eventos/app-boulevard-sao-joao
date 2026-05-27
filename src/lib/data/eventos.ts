/**
 * Calendário oficial Boulevard São João — Mídia Kit Comercial
 * (temporada 2026-2027, agência → cliente final).
 *
 * 12 Grandes Eventos macro (1 por mês) + 3 datas-âncora
 * destacadas (Dia das Crianças, Festival Black, Réveillon).
 *
 * Realização: Fábrica de Bares · ABRASEL-SP · Conexão Corporativa & BTO+
 */

export type EventoHighlight = {
  title: string
  /** Texto curto que aparece como linha no card */
  shortLine: string
  /** Descrição completa pro bottom drawer */
  description: string
  /** Horário/cronograma (ex: "Sáb 18h", "Permanente", "Dom 10h-18h") */
  schedule?: string
  /** Onde acontece (ex: "Palco Rua", "Telão Drogaria SP", "Largo do Paissandu") */
  local?: string
  /** Vinculação opcional com circuito/lugar/interação pra deep-link */
  link?: { label: string; href: string }
  /** Imagem ilustrativa opcional pro drawer */
  imageUri?: string
}

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
  highlights: EventoHighlight[]
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
      {
        title: 'Acendimento sincronizado dos 4 telões',
        shortLine: 'Acendimento sincronizado dos 4 telões mapeados',
        description:
          'No marco de abertura do Boulevard, as quatro telas LED dos prédios Bar Brahma, Drogaria São Paulo, Habibs e empena central se acendem ao mesmo tempo, em coreografia sincronizada com som ambiente espacializado pelo eixo.',
        schedule: 'Sáb · 19h em ponto',
        local: 'Eixo São João · 4 prédios mapeados',
        link: { label: 'Ver telões no mapa', href: '/mapa' },
      },
      {
        title: 'Cerimônia oficial',
        shortLine: 'Cerimônia oficial com Prefeitura + cofundadora master',
        description:
          'Discurso conjunto entre Prefeitura de São Paulo, Fábrica de Bares e a marca cofundadora master. Inauguração da placa de bronze fundida no Ponto-Zero (esquina São João × Ipiranga).',
        schedule: 'Sáb · 18h30',
        local: 'Ponto-Zero · SJ × Ipiranga',
        link: { label: 'Conhecer o Ponto-Zero', href: '/lugares/ponto-zero' },
      },
      {
        title: 'Show de inauguração',
        shortLine: 'Show de inauguração no Espaço Cauby Peixoto',
        description:
          'Show de lançamento com artista nacional convidado na praça requalificada do Espaço Cauby Peixoto. Arquibancada liberada pra contemplação · capacidade pra 800 pessoas.',
        schedule: 'Sáb · 20h30',
        local: 'Espaço Cauby Peixoto',
        link: { label: 'Conhecer o espaço', href: '/lugares/espaco-cauby-peixoto' },
      },
      {
        title: 'Curadoria Moda & Street Culture',
        shortLine: 'Curadoria de Moda & Street Culture nas telas',
        description:
          'Editorial Arte na Tela dedicado ao tema do mês: ensaios fotográficos de street style paulistano, peças autorais de jovens estilistas e curadoria de fashion films assinada por nomes do mercado.',
        schedule: 'SET · todo o mês',
        local: 'Todos os 4 telões',
      },
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
      {
        title: 'Praças tomadas pelas crianças',
        shortLine: 'Praças · 04 infláveis gigantes + oficinas de pintura',
        description:
          'Quatro infláveis gigantes ocupam as praças do calçadão, com monitoria pra crianças de 3 a 12 anos. Oficinas paralelas de pintura, colagem e arte manual com material gratuito.',
        schedule: 'Sáb · 10h–18h',
        local: 'Praças do eixo',
      },
      {
        title: 'Espaço Circo Livre',
        shortLine: 'Espaço Circo Livre · malabares, palhaçaria e acrobacias',
        description:
          'Lona de circo montada no calçadão com apresentações gratuitas a cada 45min. Palhaçaria de rua, malabares aéreos, acrobacias e contação de histórias circenses.',
        schedule: 'Sáb e Dom · 11h, 14h, 16h e 18h',
        local: 'Palco Rua · Cênico',
      },
      {
        title: 'Cinema ao Ar Livre infantil',
        shortLine: 'Cinema ao ar livre · animações clássicas com som imersivo',
        description:
          'Sessões de animações clássicas brasileiras e internacionais ao anoitecer, em estrutura modular com som imersivo de alta qualidade. Pufes disponíveis para as primeiras 200 famílias.',
        schedule: 'Sáb e Dom · a partir das 19h',
        local: 'Praça Cauby Peixoto',
        link: { label: 'Espaço Cauby', href: '/lugares/espaco-cauby-peixoto' },
      },
      {
        title: 'Fechamento total · trânsito infantil',
        shortLine: 'Fechamento total para trânsito infantil',
        description:
          'Reforço de bloqueios viários e monitoria pra liberar 100% do eixo pra circulação livre das crianças. Equipe de segurança triplicada, postos de hidratação a cada quarteirão.',
        schedule: 'Sex 18h → Dom 23h',
        local: 'Av. São João · 5 quarteirões',
      },
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
      {
        title: 'Feira Tribos Aoás',
        shortLine: 'Tribos Aoás · feira criativa com 30+ empreendedores negros',
        description:
          'Feira criativa com gastronomia afro, tranças, acessórios e moda autoral. Mais de 30 empreendedores negros locais com curadoria assinada pelo programa Tribos Aoás. Patrocínio exclusivo da cota pilar ESG.',
        schedule: 'Sáb e Dom · 10h–22h',
        local: 'Eixo central do calçadão',
      },
      {
        title: 'Patrimônio & Memória no Paissandu',
        shortLine: 'Paissandu · painéis históricos + valorização patrimonial',
        description:
          'Painéis interpretativos e rodas de conversa no Largo do Paissandu valorizando a Estátua da Mãe Preta e a Igreja do Rosário dos Homens Pretos. Sinalização permanente em braille e LIBRAS.',
        schedule: 'Sáb · 14h-18h (rodas)',
        local: 'Largo do Paissandu',
        link: { label: 'Estátua da Mãe Preta', href: '/lugares/estatua-mae-preta' },
      },
      {
        title: 'Programação musical Black',
        shortLine: 'Palcos · rap, trap, samba de raiz e MPB',
        description:
          'Shows de rap, trap, samba de raiz e MPB nos palcos temáticos, com cortejos de afoxé conectando o circuito. Naming rights de 1 palco pra cota pilar Música.',
        schedule: 'Sáb · 17h–01h · Dom · 14h–22h',
        local: 'Palcos 1, 3 e Rua',
      },
      {
        title: 'Cortejos de afoxé',
        shortLine: 'Cortejos de afoxé conectando o circuito',
        description:
          'Cortejos de afoxé saem a cada 2h conectando o Paissandu, o Cauby e o Ponto-Zero. Convite aberto pra acompanhar com pano branco no cabelo · roteiro divulgado no app.',
        schedule: 'Sáb e Dom · 15h, 17h, 19h',
        local: 'Eixo Boulevard',
        link: { label: 'Ver eixo no mapa', href: '/mapa' },
      },
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
      {
        title: 'Túnel Imersivo de Luzes',
        shortLine: 'Túnel Imersivo de Luzes · 50m de LED sincronizado',
        description:
          'Instalação monumental de 50 metros — arcos de LED sincronizados que reagem ao movimento do público criando o principal ponto de fotos e engajamento digital da cidade nesse Natal.',
        schedule: 'Permanente · 6 dez → 6 jan',
        local: 'Av. São João · quarteirão central',
      },
      {
        title: 'Show do Acendimento',
        shortLine: 'Show do Acendimento · árvore-monumento no Paissandu',
        description:
          'Espetáculo diário ao anoitecer onde a iluminação cênica do Boulevard e a projeção mapeada nas fachadas realizam contagem regressiva sincronizada para acender a Árvore-Monumento do Paissandu.',
        schedule: 'Todo dia · 18h em ponto',
        local: 'Largo do Paissandu',
        link: { label: 'Igreja do Rosário', href: '/lugares/igreja-rosario' },
      },
      {
        title: 'Cantata das Sacadas',
        shortLine: 'Cantata das Sacadas · clássicos do Cauby Peixoto',
        description:
          'Corais infantis e vozes líricas das sacadas dos prédios históricos cantam clássicos consagrados por Cauby Peixoto. A iluminação arquitetônica pulsa com a música.',
        schedule: 'Sáb e Dom · 19h–21h',
        local: 'Sacadas do entorno · Cauby Peixoto',
      },
      {
        title: 'Bondinho Natalino',
        shortLine: 'Bondinho Natalino · 20min de viagem emocional',
        description:
          'Bondinho histórico recriado em versão contemporânea totalmente iluminada percorrendo o eixo do Boulevard. Coral ao vivo de samba paulistana e canções natalinas — 20 minutos de viagem emocional.',
        schedule: 'Sáb e Dom · saídas a cada 30min',
        local: 'Embarque no Largo do Paissandu',
      },
      {
        title: 'Ceias Solidárias',
        shortLine: 'Ceias Solidárias · SP Invisível no Paissandu',
        description:
          'Jantares e ceias cênicas no calçadão pra pessoas em situação de rua — dignidade e PR real. Patrocínio compartilhado pelas cotas master + pilar ESG. Apadrinhe uma ceia direto pelo app.',
        schedule: 'Véspera de Natal e Réveillon',
        local: 'Largo do Paissandu',
        link: { label: 'Apadrinhar', href: '/vantagens' },
      },
      {
        title: 'Réveillon · A virada do Centro',
        shortLine: 'Réveillon · 4 palcos virada · fogos silenciosos',
        description:
          'Programação musical estendida 20h–02h em 4 palcos integrados. Contagem regressiva unificada em todas as telas LED e projeção mapeada nas fachadas históricas, com queima de fogos silenciosa (mapping). Acessibilidade plena com audiodescrição + LIBRAS.',
        schedule: '31 dez · 20h–02h',
        local: '4 palcos do eixo',
      },
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
      {
        title: 'Projeção "SP 472"',
        shortLine: 'Projeção "SP 472" em fachadas da São João',
        description:
          'Projeção mapeada de 12min nas fachadas históricas do Bar Brahma e da Drogaria São Paulo contando a história da cidade através de imagens de arquivo e animação contemporânea. Sincronizada com os 4 telões.',
        schedule: 'Sáb · 20h e 22h',
        local: 'Fachadas Bar Brahma e Drogaria SP',
      },
      {
        title: 'Cortejo de blocos pioneiros',
        shortLine: 'Cortejo de blocos pioneiros paulistanos',
        description:
          'Cortejo coletivo dos blocos paulistanos mais antigos saindo do Ponto-Zero até o Largo do Paissandu. Marchinhas históricas, fantasias autorais e a participação especial das matriarcas dos blocos.',
        schedule: 'Sáb · 17h',
        local: 'Saída do Ponto-Zero',
        link: { label: 'Ponto-Zero', href: '/lugares/ponto-zero' },
      },
      {
        title: 'Roda de samba paulistana',
        shortLine: 'Roda de samba paulistana com convidados',
        description:
          'Roda de samba ao ar livre com convidados especiais celebrando o aniversário de Sampa. Repertório autoral dos sambistas do Centro de SP.',
        schedule: 'Sáb · 19h–01h',
        local: 'Palco 1 · Samba',
      },
      {
        title: 'Cardápio especial ABRASEL',
        shortLine: 'Cardápio especial nos bares ABRASEL parceiros',
        description:
          'Bares e restaurantes da rede ABRASEL do eixo lançam pratos exclusivos pra semana do aniversário, com cupons no Vantagens e selo "menu pioneiro" no balcão.',
        schedule: 'JAN · semana 18-25',
        local: 'Bares do eixo São João',
        link: { label: 'Cupons no Vantagens', href: '/vantagens' },
      },
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
    imageUri: 'https://images.unsplash.com/photo-1520531158340-44015069e78e?auto=format&fit=crop&w=1200&q=80',
    themeColor: '#E91E8C',
    highlights: [
      {
        title: 'Blocos convidados',
        shortLine: 'Blocos convidados todos os dias',
        description:
          'Calendário de blocos paulistanos passando pelo eixo durante toda a folia. Curadoria assinada com a Liga das Escolas. Cordão aberto · sem ingresso.',
        schedule: 'Todos os dias · saídas variadas',
        local: 'Eixo São João',
      },
      {
        title: 'Marchinhas no Bar Brahma',
        shortLine: 'Marchinhas no Bar Brahma',
        description:
          'Banda residente do Bar Brahma toca repertório de marchinhas históricas. Concursos de fantasia, baile no salão e happy hour estendido.',
        schedule: 'Qua a Dom · 18h–00h',
        local: 'Bar Brahma',
      },
      {
        title: 'Oficina de samba no pé',
        shortLine: 'Oficina de samba no pé',
        description:
          'Workshop gratuito conduzido por passistas premiadas das escolas paulistanas. Ideal pra preparar pro carnaval ou pra quem só quer aprender.',
        schedule: 'Sáb · 14h–17h',
        local: 'Palco 2 · MPB',
      },
      {
        title: 'Arquibancada Cauby Peixoto',
        shortLine: 'Arquibancada Cauby Peixoto pro pré-bloco',
        description:
          'A arquibancada de contemplação do Espaço Cauby liberada como ponto de concentração pro pré-bloco. Sombra, banheiro químico e ponto de hidratação.',
        schedule: 'Todo dia · a partir das 14h',
        local: 'Espaço Cauby Peixoto',
        link: { label: 'Conhecer o espaço', href: '/lugares/espaco-cauby-peixoto' },
      },
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
      {
        title: 'Line-up 100% feminino',
        shortLine: 'Line-up 100% feminino nos 4 palcos',
        description:
          'Programação musical com mais de 40 artistas mulheres distribuídas nos 4 palcos durante o mês. Curadoria de gênero, raça e geração assinada pelo Conselho Curatorial.',
        schedule: 'MAR · sáb e dom · todo o mês',
        local: '4 palcos integrados',
      },
      {
        title: 'Mural ao vivo no Habibs',
        shortLine: 'Mural ao vivo no prédio Habibs',
        description:
          'Grafiteira convidada pinta mural autoral na empena lateral do prédio Habibs durante todo o fim de semana de abertura. Vídeo time-lapse no telão.',
        schedule: 'Fim de semana de abertura',
        local: 'Empena Habibs',
      },
      {
        title: 'Escola de Arte Urbana · oficina',
        shortLine: 'Oficina de estêncil + lambe-lambe',
        description:
          'Oficinas gratuitas de stencil, lambe-lambe e graffiti pra mulheres e meninas a partir de 14 anos. Material incluso · certificado opcional.',
        schedule: 'Sáb · 14h–18h',
        local: 'Tenda na Praça do Paissandu',
      },
      {
        title: 'Mostra "SP em Stencil"',
        shortLine: 'Editorial Arte na Tela · grafiteiras paulistanas',
        description:
          '12 grafiteiras paulistanas traduzem sua linguagem em conteúdo digital. Mostra rotaciona no Telão Drogaria SP durante todo o mês, com painéis explicativos no app.',
        schedule: 'MAR · todo o mês',
        local: 'Telão Drogaria SP',
        link: { label: 'Editorial Arte na Tela', href: '/feed' },
      },
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
      {
        title: 'Feiras convidadas',
        shortLine: 'Feiras convidadas · Rosenbaum, MADE, Tijuana, Jardim Secreto',
        description:
          'Parcerias com marcas icônicas do design e mobiliário paulistano. Estandes rotativos de Rosenbaum, MADE, Tijuana e Jardim Secreto, com curadoria conjunta.',
        schedule: 'ABR · todos os fins de semana',
        local: 'Eixo central',
      },
      {
        title: 'Boulevard Talks',
        shortLine: 'Boulevard Talks · arquitetos e estilistas',
        description:
          'Painéis abertos com pensadores, arquitetos e estilistas sobre o futuro urbano e a inovação cênica. Streaming pelo telão Drogaria SP.',
        schedule: 'Sáb · 16h e 18h',
        local: 'Lounge de Design',
      },
      {
        title: 'Fashion Walk',
        shortLine: 'Fashion Walk · passarela urbana sustentável',
        description:
          'Desfiles urbanos com calçadões transformados em passarela de moda sustentável e marcas locais. Convite aberto pra modelos paulistanas via call no app.',
        schedule: 'Dom · 18h',
        local: 'Eixo São João',
      },
      {
        title: 'Lounge de Design master',
        shortLine: 'Lounge de Design assinado por cofundadora master',
        description:
          'Espaço de descanso com mobiliário curado e cocktail bar assinado pela cofundadora master. Naming exclusivo · acesso aberto ao público.',
        schedule: 'ABR · todo o mês',
        local: 'Tenda principal',
      },
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
      {
        title: '24h non-stop',
        shortLine: '24h non-stop nos 4 palcos integrados',
        description:
          'Programação ininterrupta nos 4 palcos do Boulevard durante 24 horas. Banheiros físicos via ABRASEL, postos de hidratação e estação de saúde 24h.',
        schedule: 'Sáb 18h → Dom 18h',
        local: '4 palcos integrados',
      },
      {
        title: 'Integração com a Virada oficial',
        shortLine: 'Integração oficial com a Virada Cultural da Prefeitura',
        description:
          'O Boulevard São João vira eixo dedicado da Virada Cultural, com programação integrada à Secretaria de Cultura e curadoria conjunta dos palcos.',
        schedule: 'MAI · noite da Virada',
        local: 'Eixo Boulevard',
      },
      {
        title: 'Streaming entre palcos',
        shortLine: 'Streaming entre palcos no Telão Drogaria SP',
        description:
          'Câmeras nos 4 palcos do Boulevard transmitem mosaico no Telão Drogaria SP e individual nos demais telões. Quem está num palco vê o que rola no outro.',
        schedule: 'Durante toda a Virada',
        local: 'Telão Drogaria SP',
      },
      {
        title: 'Curadoria "Música do Boulevard"',
        shortLine: 'Curadoria editorial Música do Boulevard nas telas',
        description:
          'Editorial Arte na Tela dedicado à música do Centro: registros históricos, clipes de bandas paulistanas e ensaios visuais com curadoria de musicistas locais.',
        schedule: 'MAI · todo o mês',
        local: 'Todos os 4 telões',
      },
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
      {
        title: 'Quadrilha aberta',
        shortLine: 'Quadrilha aberta no Palco Rua',
        description:
          'Quadrilha aberta ao público com puxador convidado. Aulas-relâmpago de passos básicos antes da apresentação · roupa caipira opcional, não obrigatória.',
        schedule: 'Sáb · 20h',
        local: 'Palco Rua',
      },
      {
        title: 'Bandeirinhas projetadas',
        shortLine: 'Bandeirinhas projetadas nos 4 telões',
        description:
          'Mapping de bandeirinhas juninas animadas nos 4 telões, com tons e padrões clássicos. Visual reforça a atmosfera de festa pelo eixo todo.',
        schedule: 'JUN · todo o mês · à noite',
        local: 'Todos os 4 telões',
      },
      {
        title: 'Menu junino ABRASEL',
        shortLine: 'Menu junino nos bares ABRASEL',
        description:
          'Bares e restaurantes do eixo lançam menu junino exclusivo: caldos, milho na palha, quentão, canjica e pratos autorais. Cupons no Vantagens.',
        schedule: 'JUN · todo o mês',
        local: 'Bares do eixo',
        link: { label: 'Cupons no Vantagens', href: '/vantagens' },
      },
      {
        title: 'Fogueira simbólica',
        shortLine: 'Fogueira simbólica no Paissandu',
        description:
          'Fogueira cênica de LED + projeção mapeada no chão do Largo do Paissandu. Sem fogo real, mas com o calor visual de uma fogueira tradicional.',
        schedule: 'Sáb e Dom · 18h–23h',
        local: 'Largo do Paissandu',
      },
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
      {
        title: 'Sets acústicos',
        shortLine: 'Sets acústicos nos 4 palcos',
        description:
          'Curadoria intimista pro mês mais frio. Sets de violão, voz e instrumentos acústicos. Som de baixa intensidade favorecendo conversa e permanência no entorno.',
        schedule: 'Sáb e Dom · 17h–22h',
        local: 'Todos os palcos',
      },
      {
        title: 'Cinema ao Ar Livre',
        shortLine: 'Cinema ao Ar Livre com cobertor',
        description:
          'Sessões noturnas de cinema clássico nacional sob as estrelas. Aluguel de cobertor e chocolate quente nas bilheterias da Praça Cauby.',
        schedule: 'Sex, Sáb e Dom · 20h',
        local: 'Praça Cauby Peixoto',
        link: { label: 'Espaço Cauby', href: '/lugares/espaco-cauby-peixoto' },
      },
      {
        title: 'Curadoria MPB nos telões',
        shortLine: 'Curadoria MPB nos telões',
        description:
          'Editorial Arte na Tela com clipes, registros históricos e ensaios visuais sobre a MPB. Rotação noturna nos 4 telões.',
        schedule: 'JUL · todo o mês · à noite',
        local: 'Todos os 4 telões',
      },
      {
        title: 'Vinho quente nos bares',
        shortLine: 'Vinho quente nos bares ABRASEL',
        description:
          'Drink-tema do mês: vinho quente artesanal nos bares parceiros. Cupom 2x1 disponível no Vantagens.',
        schedule: 'JUL · todo o mês',
        local: 'Bares ABRASEL do eixo',
        link: { label: 'Cupons', href: '/vantagens' },
      },
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
      {
        title: 'Pratos autorais ABRASEL',
        shortLine: 'Pratos autorais nos bares ABRASEL do eixo',
        description:
          'Cada bar e restaurante do eixo cria um prato exclusivo pro Festival Gastronômico. Identidade visual unificada nas placas, cardápio temático e curadoria assinada por chefs paulistanos.',
        schedule: 'AGO · todo o mês',
        local: 'Bares e restaurantes do eixo',
      },
      {
        title: 'Rota gastronômica no app',
        shortLine: 'Rota gastronômica oficial no app',
        description:
          'Roteiro gastronômico oficial integrado ao Mapa do app. Check-in nos comércios visitados dá pontos pra cupons no Vantagens.',
        schedule: 'AGO · todo o mês',
        local: 'Mapa Boulevard',
        link: { label: 'Ver no mapa', href: '/mapa' },
      },
      {
        title: 'Cupons exclusivos',
        shortLine: 'Cupons exclusivos no Vantagens',
        description:
          'Aba especial no Vantagens com cupons exclusivos do Festival: 2x1, 30% off na entrada e degustações grátis no primeiro pedido.',
        schedule: 'AGO · todo o mês',
        local: 'Vantagens',
        link: { label: 'Abrir cupons', href: '/vantagens' },
      },
      {
        title: 'Aulas-show no Palco 2',
        shortLine: 'Aulas-show no Palco 2 com chefs locais',
        description:
          'Chefs paulistanos sobem ao Palco 2 pra aulas-show de 45min. Degustação ao final, ingredientes patrocinados.',
        schedule: 'Sáb · 16h e 18h',
        local: 'Palco 2',
      },
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
