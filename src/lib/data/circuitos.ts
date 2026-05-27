/**
 * Os 7 Circuitos do Boulevard São João (Mídia Kit Comercial · v.final).
 *
 * Sete trilhas permanentes do calçadão, do bandejão ao chef autoral,
 * do grafite à galeria fotográfica, da quadrilha à roda de samba.
 * Cada circuito tem nome curto e subtítulo direto pro paulistano.
 */

export type Circuito = {
  slug: string
  numero: '1' | '2' | '3' | '4' | '5' | '6' | '7'
  title: string
  shortTitle: string
  tagline: string
  summary: string
  imageUri: string
  accentColor: string
  /** Ativações associadas — cada item vira card no detail */
  ativacoes: {
    title: string
    description: string
  }[]
  /** Vinculação editorial — qual editoria do feed alimenta este circuito */
  editorialRelated?: 'centro' | 'sao-paulo' | 'arte-tela' | 'ao-vivo'
}

export const CIRCUITOS: Circuito[] = [
  {
    slug: 'gastronomico',
    numero: '1',
    title: 'Circuito Gastronômico',
    shortTitle: 'Gastronômico',
    tagline: 'Sabor, tradição e ocupação urbana',
    summary:
      'A gastronomia como âncora de permanência e convivência familiar no Centro Histórico — do bandejão ao chef autoral.',
    imageUri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F97316',
    editorialRelated: 'centro',
    ativacoes: [
      {
        title: 'Roteiros Gastronômicos',
        description:
          'Circuitos de menus promocionais ligando os bares e restaurantes clássicos do entorno do Boulevard.',
      },
      {
        title: 'Escola de Gastronomia e refeitório popular',
        description:
          'Módulos práticos de culinária e panificação em tendas cênicas, abertos ao público com chefs locais.',
      },
      {
        title: 'Feira Gastronômica',
        description:
          'Feira de rua que une culinária de alta qualidade e roda de samba paulistana.',
      },
    ],
  },
  {
    slug: 'galeria-urbana',
    numero: '2',
    title: 'Circuito Galeria Urbana',
    shortTitle: 'Galeria Urbana',
    tagline: 'A maior galeria a céu aberto da cidade',
    summary:
      'O calçadão da Avenida São João convertido em galeria pública. Grafite, murais, projeções e restauro ativo do patrimônio histórico.',
    imageUri: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#774DE8',
    editorialRelated: 'arte-tela',
    ativacoes: [
      {
        title: 'Galeria Caminhável',
        description:
          'Comissionamento de artistas de rua — consagrados, periféricos e emergentes — pra pintar empenas cênicas, tapumes e vitrines de comércios desocupados.',
      },
      {
        title: 'Arte Urbana Patrimonial',
        description:
          'Frente de zeladoria para grandes monumentos e relógios históricos. Marcos iniciais: Estátua da Mãe Preta e Relógio de Nechile.',
      },
      {
        title: 'Escola Livre de Arte Urbana',
        description:
          'Oficinas gratuitas em stencil, graffiti de rua, lambe-lambe e produção de conteúdo artístico para jovens da região.',
      },
      {
        title: 'Arte nas Telas',
        description:
          'Transposição de lambes, motion art, fotografias e videoarte urbana para o circuito de telas de LED do Boulevard ao longo do dia.',
      },
    ],
  },
  {
    slug: 'oficina-memoria',
    numero: '3',
    title: 'Circuito Oficina & Memória',
    shortTitle: 'Oficina & Memória',
    tagline: 'Transformando o Centro em sala de aula',
    summary:
      'Iniciação prática em técnicas de restauro urbano combinada com caminhadas históricas guiadas pelo eixo do Boulevard.',
    imageUri: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#5500CC',
    editorialRelated: 'centro',
    ativacoes: [
      {
        title: 'Escola de Restauro',
        description:
          'Workshop práticos de iniciação ao restauro e preservação de esculturas.',
      },
      {
        title: 'Roteiro de Memórias',
        description:
          'Caminhadas com guias capacitados, resgatando a história das ruas e fachadas.',
      },
    ],
  },
  {
    slug: 'fotografico',
    numero: '4',
    title: 'Circuito Fotográfico',
    shortTitle: 'Fotográfico',
    tagline: 'Novas perspectivas, novos olhares do Centro',
    summary:
      'Engajamento urbano que convida fotógrafos amadores e profissionais a registrar a alma, a arquitetura e a vibração do Centro.',
    imageUri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#3B5BDB',
    editorialRelated: 'sao-paulo',
    ativacoes: [
      {
        title: 'Galeria Fotográfica Urbana',
        description:
          'Painéis cênicos físicos nas praças para exposições de grande porte + transposição para as telas digitais (Galeria Digital BSJ).',
      },
      {
        title: 'Prêmio Boulevard São João',
        description:
          'Concursos mensais em 10 temas, divididos: profissional e amador. Vencedores expõem nas telas e no calçadão.',
      },
      {
        title: 'Roteiros Fotográficos',
        description:
          'Caminhadas temáticas e oficinas: Luzes do Boulevard, Fachadas Históricas, fluxo de pessoas e arquitetura clássica.',
      },
      {
        title: 'Aulas Abertas',
        description:
          'Encontros gratuitos de técnica fotográfica de rua, revelação digital e edição básica para qualquer nível.',
      },
    ],
  },
  {
    slug: 'pet',
    numero: '5',
    title: 'Circuito Pet São João',
    shortTitle: 'Pet São João',
    tagline: 'Cuidado, convivência, saúde e proteção',
    summary:
      'Uma plataforma permanente que humaniza a Avenida São João. Espaço seguro para pets, famílias e protetores.',
    imageUri: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#E91E8C',
    editorialRelated: 'centro',
    ativacoes: [
      {
        title: 'Espaço Pet Boulevard',
        description:
          'Parque cercado em madeira de reflorestamento, com áreas de convivência pet e obstáculos ecológicos de agility de uso livre diário.',
      },
      {
        title: 'Atendimento Veterinário Social',
        description:
          'Mutirões públicos de vermifugação, vacinação e consultas básicas gratuitas para tutores de baixa renda e animais de rua do Centro.',
      },
      {
        title: 'Adoção Responsável',
        description:
          'Feiras semanais de adoção de cães e gatos em parceria com ONGs e redes de proteção animal do Centro Histórico.',
      },
      {
        title: 'Educação e Adestramento',
        description:
          'Oficinas gratuitas com foco em técnicas de adestramento urbano, socialização pet e guarda responsável.',
      },
    ],
  },
  {
    slug: 'musical',
    numero: '6',
    title: 'Circuito Musical',
    shortTitle: 'Musical',
    tagline: 'A trilha sonora da revitalização do Centro',
    summary:
      'Quatro palcos fixos distribuídos pelo Boulevard, cada um com linguagem musical própria — do hip hop no Anhangabaú ao jazz na Rua dos Timbiras.',
    imageUri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#5500CC',
    editorialRelated: 'ao-vivo',
    ativacoes: [
      {
        title: 'Palco Hip Hop · Correios / Anhangabaú',
        description:
          'Batalha de MCs, dança urbana e shows de rap/trap com curadoria da cena paulistana.',
      },
      {
        title: 'Palco Rock · Largo do Paissandu',
        description:
          'Rock paulistano, indie e bandas autorais. Curadoria em diálogo com a noite do Centro.',
      },
      {
        title: 'Palco MPB / Samba · São João × Ipiranga',
        description:
          'Roda de samba paulistana, MPB e convidados no ponto-zero do Boulevard.',
      },
      {
        title: 'Palco World Music / Jazz · Rua dos Timbiras',
        description:
          'Jazz, MPB instrumental, world music e sets autorais ao anoitecer.',
      },
      {
        title: 'Palco Aberto + Rádio BSJ',
        description:
          'Música ao vivo, DJs residentes e transmissão em tempo real pelos 4 palcos. A Rádio BSJ transforma o Centro em estação permanente de cultura e entretenimento.',
      },
    ],
  },
  {
    slug: 'feiras',
    numero: '7',
    title: 'Circuito Feiras',
    shortTitle: 'Feiras',
    tagline: 'O centro da economia criativa',
    summary:
      'Curadoria de marcas autorais e feiras icônicas que transformam o calçadão em vitrine viva de design, moda circular e economia criativa do Centro.',
    imageUri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#16A34A',
    editorialRelated: 'centro',
    ativacoes: [
      {
        title: 'Feiras Convidadas',
        description:
          'Parcerias com marcas icônicas — Rosenbaum, MADE, Tijuana e Jardim Secreto — em design, arte, livros e moda.',
      },
      {
        title: 'Lojas Pop-Up de Economia Circular',
        description:
          'Contêineres e estruturas modulares focados em consumo consciente, moda circular e sustentabilidade. Parceria com a Endossa e a cooperativa Tribos Aoás.',
      },
      {
        title: 'Boulevard Talks',
        description:
          'Painéis abertos com pensadores, arquitetos e estilistas sobre o futuro urbano e a inovação cênica.',
      },
      {
        title: 'Fashion Walk',
        description:
          'Desfiles urbanos e calçadões transformados em passarela de moda sustentável e marcas locais.',
      },
    ],
  },
]

export function circuitoBySlug(slug: string): Circuito | undefined {
  return CIRCUITOS.find((c) => c.slug === slug)
}
