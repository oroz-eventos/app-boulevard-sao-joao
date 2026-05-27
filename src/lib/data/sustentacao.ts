/**
 * Sustentação do Boulevard São João (Mídia Kit Comercial).
 * "A vida no calçadão acontece todos os sábados e domingos."
 *
 * Três níveis de intensidade que operam em paralelo aos
 * Grandes Eventos mensais e às 3 datas-âncora:
 *
 *  - NÍVEL P (Permanente)        — 6 ativações silenciosas de
 *                                   utilidade pública
 *  - NÍVEL M (Média intensidade) — 6 ativações editoriais &
 *                                   caminháveis (formação)
 *  - NÍVEL G (Grande intensidade) — 4 ativações âncora de
 *                                    fim de semana (sáb/dom)
 */

export type NivelSustentacao = 'P' | 'M' | 'G'

export type AtivacaoSustentacao = {
  id: string
  nivel: NivelSustentacao
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

export const NIVEL_LABEL: Record<NivelSustentacao, { titulo: string; subtitulo: string; cor: string }> = {
  P: {
    titulo: 'Permanente',
    subtitulo: 'Infraestrutura silenciosa de utilidade e lazer',
    cor: '#5500CC',
  },
  M: {
    titulo: 'Média intensidade',
    subtitulo: 'Trilha editorial, formação e caminhada',
    cor: '#3B5BDB',
  },
  G: {
    titulo: 'Grande intensidade',
    subtitulo: 'Ícones visuais de fim de semana · sáb e dom',
    cor: '#E91E8C',
  },
}

export const ATIVACOES_SUSTENTACAO: AtivacaoSustentacao[] = [
  // ===================== NÍVEL P · PERMANENTE =====================
  {
    id: 'p-ponto-zero',
    nivel: 'P',
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
    title: 'Foto-Opp · O Personagem Centro',
    subtitle: 'Instalação imersiva assinada por artista paulistano',
    description:
      'Casaco cinza, guarda-chuva de metal, neons e calçada paulista compõem o personagem-monumento. Pronto pra foto instagramável + envio pra telão.',
    frequencia: 'Permanente',
    categoria: 'arte',
  },
  {
    id: 'p-estacao-saude',
    nivel: 'P',
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
    title: 'Pop-Ups de Economia Circular',
    subtitle: 'Endossa + Tribus',
    description:
      'Contêineres modulares focados em consumo consciente, moda circular e marcas autorais locais. Lojas rotativas.',
    frequencia: 'Sáb e Dom · 12h–20h',
    categoria: 'comercio',
  },
  {
    id: 'g-ativacao-animal',
    nivel: 'G',
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
