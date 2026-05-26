export type ComercioStore = {
  id: string
  name: string
  category: string
  discountLabel?: string
  logoText: string
  logoTone: 'brand' | 'pink' | 'orange' | 'blue' | 'green' | 'neutral'
  facadeImageUri: string
  summary: string
  addressLine: string
  openingHours: string
  instagramUrl?: string
  websiteUrl?: string
  keywords: string[]
}

export const COMERCIO_FILTERS = [
  { id: 'todos',     label: 'Todos' },
  { id: 'cafes',     label: 'Cafés' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'moda',      label: 'Moda' },
  { id: 'servicos',  label: 'Serviços' },
  { id: 'bem-estar', label: 'Bem-estar' },
  { id: 'cultura',   label: 'Cultura' },
]

export const COMERCIO_STORES: ComercioStore[] = [
  {
    id: 'comercio-1',
    name: 'Café Estação 31',
    category: 'cafes',
    discountLabel: '10% off',
    logoText: 'E31',
    logoTone: 'brand',
    facadeImageUri: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    summary: 'Cafés especiais, brunch o dia todo e combos rápidos para quem está circulando entre os palcos.',
    addressLine: 'Rua Aurora, 31',
    openingHours: 'Aberto hoje até 20h',
    instagramUrl: 'https://instagram.com/cafeestacao31',
    websiteUrl: 'https://estacao31.example.com',
    keywords: ['café', 'brunch', 'wifi', 'doces', 'take away', 'especial'],
  },
  {
    id: 'comercio-2',
    name: 'Casa Vitrine',
    category: 'moda',
    discountLabel: '20% off',
    logoText: 'CV',
    logoTone: 'pink',
    facadeImageUri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    summary: 'Curadoria de moda autoral, acessórios e peças leves para acompanhar a programação do boulevard.',
    addressLine: 'Galeria São João, loja 12',
    openingHours: 'Aberto hoje até 21h',
    instagramUrl: 'https://instagram.com/casavitrine',
    websiteUrl: 'https://casavitrine.example.com',
    keywords: ['moda', 'acessórios', 'autoral', 'roupas', 'design', 'estilo'],
  },
  {
    id: 'comercio-3',
    name: 'Mercado do Pátio',
    category: 'gastronomia',
    logoText: 'MP',
    logoTone: 'orange',
    facadeImageUri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Empório com frios, sanduíches, bebidas geladas e itens práticos para aproveitar os eventos por perto.',
    addressLine: 'Pátio Central, acesso leste',
    openingHours: 'Aberto hoje até 22h',
    instagramUrl: 'https://instagram.com/mercadodopatio',
    keywords: ['mercado', 'sanduíches', 'bebidas', 'empório', 'snacks', 'gastronomia'],
  },
  {
    id: 'comercio-4',
    name: 'Oficina Prisma',
    category: 'servicos',
    logoText: 'OP',
    logoTone: 'blue',
    facadeImageUri: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    summary: 'Impressão rápida, brindes personalizados e apoio gráfico para ativações e ações do boulevard.',
    addressLine: 'Travessa do Centro, 84',
    openingHours: 'Aberto hoje até 19h',
    websiteUrl: 'https://oficinaprisma.example.com',
    keywords: ['serviços', 'impressão', 'gráfica', 'brindes', 'adesivos', 'apoio'],
  },
  {
    id: 'comercio-5',
    name: 'Ateliê Corpo Calmo',
    category: 'bem-estar',
    discountLabel: '15% off',
    logoText: 'CC',
    logoTone: 'green',
    facadeImageUri: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    summary: 'Massagem express, aromaterapia e produtos de autocuidado para recarregar entre uma atração e outra.',
    addressLine: 'Rua Vitória, 112',
    openingHours: 'Sessões até 18h30',
    instagramUrl: 'https://instagram.com/corpocalmo',
    websiteUrl: 'https://corpocalmo.example.com',
    keywords: ['bem-estar', 'massagem', 'aromaterapia', 'autocuidado', 'relaxamento'],
  },
  {
    id: 'comercio-6',
    name: 'Livraria Marco Zero',
    category: 'cultura',
    logoText: 'MZ',
    logoTone: 'neutral',
    facadeImageUri: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1200&q=80',
    summary: 'Livros, zines e encontros com autores independentes em um espaço cultural perto do circuito do evento.',
    addressLine: 'Esquina da São João com Ipiranga',
    openingHours: 'Aberto hoje até 20h',
    instagramUrl: 'https://instagram.com/livrariamarcozero',
    keywords: ['livraria', 'cultura', 'zines', 'autores', 'independente', 'leituras'],
  },
  {
    id: 'comercio-7',
    name: 'Bistrô do Boulevard',
    category: 'gastronomia',
    discountLabel: '10% off',
    logoText: 'BB',
    logoTone: 'orange',
    facadeImageUri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    summary: 'Menu executivo, drinks clássicos e varanda com vista para o fluxo principal dos eventos.',
    addressLine: 'Avenida São João, 201',
    openingHours: 'Aberto hoje até 23h',
    instagramUrl: 'https://instagram.com/bistrodoboulevard',
    websiteUrl: 'https://bistroboulevard.example.com',
    keywords: ['bistrô', 'drinks', 'jantar', 'varanda', 'almoço', 'gastronomia'],
  },
  {
    id: 'comercio-8',
    name: 'Laboratório Criativo',
    category: 'servicos',
    logoText: 'LC',
    logoTone: 'brand',
    facadeImageUri: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    summary: 'Coworking, estúdio e apoio para creators e marcas locais durante a programação do boulevard.',
    addressLine: 'Edifício Central, 4º andar',
    openingHours: 'Aberto hoje até 20h',
    websiteUrl: 'https://laboratoriocriativo.example.com',
    keywords: ['coworking', 'estúdio', 'creator', 'produção', 'serviços', 'marcas'],
  },
]

export const LOGO_TONE_COLORS: Record<ComercioStore['logoTone'], string> = {
  brand:   '#5500CC',
  pink:    '#E91E8C',
  orange:  '#F97316',
  blue:    '#3B5BDB',
  green:   '#16A34A',
  neutral: '#525252',
}
