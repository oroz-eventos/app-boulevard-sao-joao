/**
 * Atividades regulares do Boulevard São João.
 * Operam em paralelo aos Grandes Eventos mensais e datas-âncora.
 *
 * Agrupamento amigável pro usuário do app (3 grupos):
 *  - "sempre-aberto"     — instalações e serviços que ficam sempre disponíveis
 *  - "aulas-roteiros"    — workshops, escolas e caminhadas guiadas
 *  - "fds-ancora"        — atrações ícone que rolam todo sáb/dom
 *
 * (Internamente cada item carrega um campo `nivel` P/M/G que é
 * jargão comercial pra venda de cota — não exibimos no app.)
 */

export type NivelSustentacao = 'P' | 'M' | 'G'

export type GrupoAtividade = 'sempre-aberto' | 'aulas-roteiros' | 'fds-ancora'

export type AtivacaoSustentacao = {
  id: string
  /** Uso interno comercial — não exibir */
  nivel: NivelSustentacao
  /** Agrupamento visual pro usuário final */
  grupo: GrupoAtividade
  title: string
  subtitle: string
  description: string
  /** Frequência (Permanente / Sáb e Dom / Eventos pontuais) */
  frequencia: string
  /** Categoria pra agrupamento visual */
  categoria:
    | 'utilidade'
    | 'patrimonio'
    | 'gastronomia'
    | 'arte'
    | 'memoria'
    | 'foto'
    | 'pet'
    | 'lazer'
    | 'comercio'
  /** Vinculação opcional com circuito */
  circuitoSlug?: string
}

export const GRUPO_LABEL: Record<GrupoAtividade, { titulo: string; subtitulo: string; cor: string }> = {
  'sempre-aberto': {
    titulo: 'Sempre por aqui',
    subtitulo: 'Instalações abertas ao público durante toda a semana',
    cor: '#5500CC',
  },
  'aulas-roteiros': {
    titulo: 'Aulas e roteiros',
    subtitulo: 'Workshops e caminhadas guiadas com curadoria local',
    cor: '#3B5BDB',
  },
  'fds-ancora': {
    titulo: 'Todo fim de semana',
    subtitulo: 'Atrações fixas que rolam todo sábado e domingo',
    cor: '#E91E8C',
  },
}

export const ATIVACOES_SUSTENTACAO: AtivacaoSustentacao[] = [
  // ===================== NÍVEL P · PERMANENTE =====================
  {
    id: 'p-ponto-zero',
    nivel: 'P',
    grupo: 'sempre-aberto',
    title: 'Ponto-Zero · SJ × Ipiranga',
    subtitle: 'Esquina São João & Ipiranga',
    description:
      'Co-assinatura física e conceitual no piso da esquina mais famosa do Brasil. Placa de bronze fundida.',
    frequencia: 'Permanente',
    categoria: 'patrimonio',
  },
  {
    id: 'p-totens-carga',
    nivel: 'P',
    grupo: 'sempre-aberto',
    title: 'Totens de utilidade pública',
    subtitle: 'Rede de 6 a 8 totens de carregamento rápido',
    description:
      'Carregamento rápido (USB-C, Lightning, wireless). Tempo de espera vira exposição de conteúdo institucional na tela LED do totem.',
    frequencia: 'Permanente · 5h–23h',
    categoria: 'utilidade',
  },
  {
    id: 'p-foto-opp-personagem-centro',
    nivel: 'P',
    grupo: 'sempre-aberto',
    title: 'Envie sua foto · O Personagem Centro',
    subtitle: 'Instalação imersiva assinada por artista paulistano',
    description:
      'Casaco cinza, guarda-chuva de metal, neons e calçada paulista compõem o personagem-monumento. Pronto pra foto instagramável + envio pra telão.',
    frequencia: 'Permanente',
    categoria: 'arte',
  },
  {
    id: 'p-estacao-saude',
    nivel: 'P',
    grupo: 'sempre-aberto',
    title: 'Estação de Saúde & Bem-Estar',
    subtitle: 'Posto físico gratuito',
    description:
      'Aferição de pressão, protetor solar, hidratação e primeiros cuidados. Patrocinada por marca da vertical Saúde.',
    frequencia: 'Permanente',
    categoria: 'utilidade',
  },
  {
    id: 'p-parcao',
    nivel: 'P',
    grupo: 'sempre-aberto',
    title: 'Parcão Boulevard · Pet & Agility',
    subtitle: 'Parque urbano permanente',
    description:
      'Parque cercado com obstáculos ecológicos em madeira de reflorestamento, túneis e rampas de uso livre diário.',
    frequencia: 'Permanente',
    categoria: 'pet',
    circuitoSlug: 'pet',
  },
  {
    id: 'p-galeria-fotografica',
    nivel: 'P',
    grupo: 'sempre-aberto',
    title: 'Galeria Fotográfica Urbana',
    subtitle: 'Exposições no calçadão',
    description:
      'Suportes permanentes que abrigam mostras de fotografia em grande escala. Acervo curado pelo Conselho Curatorial.',
    frequencia: 'Permanente · mostras rotativas',
    categoria: 'foto',
    circuitoSlug: 'fotografico',
  },

  // ===================== NÍVEL M · MÉDIA INTENSIDADE =====================
  {
    id: 'm-escola-gastronomia',
    nivel: 'M',
    grupo: 'aulas-roteiros',
    title: 'Escola de Gastronomia',
    subtitle: 'Módulos práticos com chefs locais',
    description:
      'Aulas abertas de culinária e panificação em tendas cênicas. Cardápio rotativo seguindo o tema do mês.',
    frequencia: 'Eventos pontuais · sáb',
    categoria: 'gastronomia',
    circuitoSlug: 'gastronomico',
  },
  {
    id: 'm-arte-urbana',
    nivel: 'M',
    grupo: 'aulas-roteiros',
    title: 'Escola de Arte Urbana',
    subtitle: 'Oficinas gratuitas',
    description:
      'Stencil, graffiti, lambe-lambe e produção de conteúdo artístico. Material incluso, certificado opcional.',
    frequencia: 'Sáb · 14h–18h',
    categoria: 'arte',
    circuitoSlug: 'galeria-urbana',
  },
  {
    id: 'm-escola-restauro',
    nivel: 'M',
    grupo: 'aulas-roteiros',
    title: 'Escola de Restauro',
    subtitle: 'Workshops práticos de preservação',
    description:
      'Iniciação ao restauro urbano e preservação de esculturas em metal, gesso e pedra. Pratica em peças reais do entorno.',
    frequencia: 'Dom · 10h–13h',
    categoria: 'memoria',
    circuitoSlug: 'oficinas-memoria',
  },
  {
    id: 'm-roteiros-fotograficos',
    nivel: 'M',
    grupo: 'aulas-roteiros',
    title: 'Roteiros Fotográficos',
    subtitle: 'Caminhadas temáticas',
    description:
      'Foco em luzes da avenida, arquitetura clássica e fluxo de pessoas. Conduzido por fotógrafos parceiros.',
    frequencia: 'Sáb · 17h e Dom · 16h',
    categoria: 'foto',
    circuitoSlug: 'fotografico',
  },
  {
    id: 'm-roteiros-memoria',
    nivel: 'M',
    grupo: 'aulas-roteiros',
    title: 'Roteiros de Memória',
    subtitle: 'Caminhadas históricas',
    description:
      'Jovens guias capacitados resgatam histórias das ruas, fachadas e personagens do Centro. Apadrinhamento pela cota master.',
    frequencia: 'Sáb · 11h e 15h',
    categoria: 'memoria',
    circuitoSlug: 'oficinas-memoria',
  },
  {
    id: 'm-roteiros-gastronomicos',
    nivel: 'M',
    grupo: 'aulas-roteiros',
    title: 'Roteiros Gastronômicos',
    subtitle: 'Circuitos de menus promocionais',
    description:
      'Conexão entre os bares e restaurantes clássicos do entorno do Boulevard. Cupons no app Vantagens.',
    frequencia: 'Sáb · 19h e Dom · 13h',
    categoria: 'gastronomia',
    circuitoSlug: 'gastronomico',
  },

  // ===================== NÍVEL G · GRANDE INTENSIDADE =====================
  {
    id: 'g-feira-gastronomica',
    nivel: 'G',
    grupo: 'fds-ancora',
    title: 'Feira Gastronômica & Roda de Samba',
    subtitle: 'Nominada pela cofundadora master',
    description:
      'Feira de rua que une culinária de alta qualidade e roda de samba paulistana. Inspirada na San Telmo (Buenos Aires).',
    frequencia: 'Sáb · 18h–23h · Dom · 10h–18h',
    categoria: 'gastronomia',
    circuitoSlug: 'gastronomico',
  },
  {
    id: 'g-gelo-do-centro',
    nivel: 'G',
    grupo: 'fds-ancora',
    title: 'Pista "Gelo do Centro"',
    subtitle: 'Patinação familiar',
    description:
      'Pista de patinação no gelo montada nas praças do calçadão. Grande ímã de entretenimento familiar nos fins de semana.',
    frequencia: 'Sáb e Dom · 14h–22h (sazonal)',
    categoria: 'lazer',
  },
  {
    id: 'g-pop-up-endossa',
    nivel: 'G',
    grupo: 'fds-ancora',
    title: 'Pop-Ups de Economia Circular',
    subtitle: 'Endossa + Tribos Aoás',
    description:
      'Contêineres e estruturas modulares focados em consumo consciente, moda circular e sustentabilidade. Parceria com Endossa e cooperativa Tribos Aoás.',
    frequencia: 'Sáb e Dom · 12h–20h',
    categoria: 'comercio',
    circuitoSlug: 'feiras',
  },
  {
    id: 'g-radio-bsj',
    nivel: 'G',
    grupo: 'fds-ancora',
    title: 'Rádio BSJ · ao vivo',
    subtitle: 'Estação permanente de cultura e entretenimento',
    description:
      'Música ao vivo, DJs residentes e transmissão em tempo real pelos 4 palcos. Transforma o Centro em estação permanente de cultura.',
    frequencia: 'Sempre que a rua está aberta',
    categoria: 'lazer',
    circuitoSlug: 'musical',
  },
  {
    id: 'm-boulevard-talks',
    nivel: 'M',
    grupo: 'aulas-roteiros',
    title: 'Boulevard Talks',
    subtitle: 'Painéis abertos sobre o futuro urbano',
    description:
      'Painéis com pensadores, arquitetos e estilistas sobre o futuro urbano e a inovação cênica. Streaming nos telões.',
    frequencia: 'Sáb · 16h e 18h',
    categoria: 'arte',
    circuitoSlug: 'feiras',
  },
  {
    id: 'g-fashion-walk',
    nivel: 'G',
    grupo: 'fds-ancora',
    title: 'Fashion Walk',
    subtitle: 'Passarela urbana sustentável',
    description:
      'Desfiles urbanos e calçadões transformados em passarela de moda sustentável e marcas locais.',
    frequencia: 'Dom · 18h',
    categoria: 'comercio',
    circuitoSlug: 'feiras',
  },
  {
    id: 'g-ativacao-animal',
    nivel: 'G',
    grupo: 'fds-ancora',
    title: 'Ativação Animal',
    subtitle: 'Parcão · adoção e adestramento',
    description:
      'Mutirões de saúde veterinária social, feiras de adoção responsável aos domingos, encontros de raças aos sábados.',
    frequencia: 'Sáb · Encontros · Dom · Feira de adoção',
    categoria: 'pet',
    circuitoSlug: 'pet',
  },
]

export function ativacoesPorNivel(nivel: NivelSustentacao) {
  return ATIVACOES_SUSTENTACAO.filter((a) => a.nivel === nivel)
}

export function ativacoesPorGrupo(grupo: GrupoAtividade) {
  return ATIVACOES_SUSTENTACAO.filter((a) => a.grupo === grupo)
}
