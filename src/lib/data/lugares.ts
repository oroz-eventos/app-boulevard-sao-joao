/**
 * Lugares-âncora do Boulevard São João (V8).
 * Patrimônios restaurados + intervenções urbanas listados como pontos
 * de visitação no app, com contexto histórico e detalhes da obra.
 */

export type Lugar = {
  slug: string
  title: string
  category: 'patrimonio' | 'praca' | 'ponto-de-interesse'
  shortDescription: string
  longDescription: string
  imageUri: string
  /** Lista de intervenções/obras realizadas no projeto */
  obras: string[]
  /** Endereço aproximado */
  address: string
  /** Vinculação com o id de marker no mapa, pra navegação cruzada */
  mapMarkerId: string
}

export const LUGARES: Lugar[] = [
  {
    slug: 'espaco-cauby-peixoto',
    title: 'Espaço Cauby Peixoto',
    category: 'praca',
    shortDescription: 'Praça requalificada como entrega oficial à cidade',
    longDescription:
      'A antiga praça em frente à esquina São João × Ipiranga ganhou novo desenho urbano em homenagem ao crooner paulistano Cauby Peixoto. Vira ponto de encontro, contemplação e foto-opp para o público que circula entre os palcos e telões.',
    imageUri: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    obras: [
      'Placas com nomes de músicas eternizadas por Cauby no piso',
      'Rampa acessível pra estátua do crooner',
      'Mostrador de roupas com painel de mídia integrado',
      'Arquibancada de contemplação',
      'Concierge turístico e ponto de informação',
    ],
    address: 'Av. São João, próximo à esquina com Ipiranga',
    mapMarkerId: 'espaco-cauby',
  },
  {
    slug: 'igreja-rosario',
    title: 'Igreja N. Sra. do Rosário dos Homens Pretos',
    category: 'patrimonio',
    shortDescription: 'Patrimônio histórico afro-paulistano · restauro completo da fachada',
    longDescription:
      'Construída no século XIX por irmandades de afrodescendentes, é uma das igrejas mais importantes da história afro-paulistana. O projeto restaura a fachada, instala iluminação cênica respeitosa e cria sinalização contextual sobre a história do Largo do Paissandu.',
    imageUri: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    obras: [
      'Restauro completo da fachada (estuque, esquadrias, pintura)',
      'Nova iluminação cênica destaca detalhes à noite',
      'Sinalização contextual em totens bilíngues',
      'Inauguração com cortejo afro no Boulevard Black (Nov)',
    ],
    address: 'Largo do Paissandu, s/n',
    mapMarkerId: 'igreja-rosario',
  },
  {
    slug: 'estatua-mae-preta',
    title: 'Estátua da Mãe Preta',
    category: 'patrimonio',
    shortDescription: 'Monumento à mãe preta · restauro + acessibilidade plena',
    longDescription:
      'Esculpida em 1955 por Júlio Guerra, é um dos símbolos mais importantes da resistência afro-brasileira no Centro de SP. O projeto restaura a peça, recompõe a base e instala rampa de acessibilidade pra aproximação respeitosa.',
    imageUri: 'https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?auto=format&fit=crop&w=1200&q=80',
    obras: [
      'Restauro da escultura (limpeza, pátina, tratamento anti-corrosão)',
      'Recomposição da base original em granito',
      'Rampa de acessibilidade pra aproximação respeitosa',
      'Painel interpretativo em braille e LIBRAS',
    ],
    address: 'Largo do Paissandu',
    mapMarkerId: 'estatua-mae-preta',
  },
  {
    slug: 'relogio-nichile',
    title: 'Relógio de Nichile',
    category: 'patrimonio',
    shortDescription: 'Relógio modernista icônico · restauro completo',
    longDescription:
      'O relógio assinado pelo joalheiro suíço Nichile foi durante décadas o ponto de encontro dos paulistanos no Centro. Após anos sem funcionar, o projeto restaura o mecanismo, recompõe a estrutura e devolve a hora certa pra cidade.',
    imageUri: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    obras: [
      'Restauro completo do mecanismo de relojoaria',
      'Recomposição estrutural da torre',
      'Iluminação cênica suave que dialoga com os telões',
      'Sinalização histórica sobre a casa Nichile',
    ],
    address: 'Av. São João, esquina com a Rua Conselheiro Crispiniano',
    mapMarkerId: 'relogio-nichile',
  },
  {
    slug: 'ponto-zero',
    title: 'Ponto-Zero · São João × Ipiranga',
    category: 'ponto-de-interesse',
    shortDescription: 'Esquina mais famosa do Brasil ganha marco de bronze',
    longDescription:
      'O cruzamento das avenidas São João e Ipiranga, eternizado por Caetano Veloso em "Sampa", recebe uma placa de bronze fundida no piso — co-assinatura física e conceitual entre a Prefeitura, a Fábrica de Bares e a marca master cofundadora do projeto.',
    imageUri: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    obras: [
      'Placa de bronze fundida no piso da esquina',
      'Identificação visual unificada no entorno',
      'Foto-opp permanente com molduras pro app',
    ],
    address: 'Cruzamento Av. São João × Av. Ipiranga',
    mapMarkerId: 'ponto-zero',
  },
]

export function lugarBySlug(slug: string): Lugar | undefined {
  return LUGARES.find((l) => l.slug === slug)
}
