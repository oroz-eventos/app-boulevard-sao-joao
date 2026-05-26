export type FeiraStall = {
  id: string
  number: string
  name: string
  category: string
  logoText: string
  logoTone: 'brand' | 'pink' | 'orange' | 'blue' | 'green' | 'neutral'
  galleryImageUris: string[]
  summary: string
  certifications: string[]
  instagramUrl?: string
  websiteUrl?: string
  mapLabel: string
  keywords: string[]
}

export const FEIRA_FILTERS = [
  { id: 'todos',       label: 'Todas' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'artesanato',  label: 'Artesanato' },
  { id: 'organicos',   label: 'Orgânicos' },
  { id: 'bem-estar',   label: 'Bem-estar' },
  { id: 'bebidas',     label: 'Bebidas' },
]

export const CERTIFICATION_LABELS: Record<string, string> = {
  'sustentavel':    'Sustentável',
  'vegano':         'Vegano',
  'organico':       'Orgânico',
  'producao-local': 'Produção local',
  'comercio-justo': 'Comércio justo',
}

export const FEIRA_STALLS: FeiraStall[] = [
  {
    id: 'feira-1',
    number: 'A12',
    name: 'Raiz da Terra',
    category: 'organicos',
    logoText: 'RT',
    logoTone: 'green',
    galleryImageUris: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=600&q=80',
    ],
    summary: 'Hortaliças, folhas, molhos e legumes frescos de pequenos produtores da região.',
    certifications: ['organico', 'producao-local', 'sustentavel'],
    instagramUrl: 'https://instagram.com/raizdaterra.feira',
    mapLabel: 'Rua central da feira',
    keywords: ['orgânicos', 'verduras', 'hortaliças', 'produtor local'],
  },
  {
    id: 'feira-2',
    number: 'B07',
    name: 'Ateliê Fio Livre',
    category: 'artesanato',
    logoText: 'FL',
    logoTone: 'brand',
    galleryImageUris: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    ],
    summary: 'Bolsas, acessórios e peças tie-dye feitas à mão com matérias-primas reaproveitadas.',
    certifications: ['sustentavel', 'comercio-justo'],
    instagramUrl: 'https://instagram.com/atelierfiolivre',
    mapLabel: 'Corredor artesanal',
    keywords: ['artesanato', 'bolsas', 'acessórios', 'feito à mão'],
  },
  {
    id: 'feira-3',
    number: 'C03',
    name: 'Panelinha Veg',
    category: 'gastronomia',
    logoText: 'PV',
    logoTone: 'orange',
    galleryImageUris: [
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    ],
    summary: 'Pratos quentes, salgados e doces veganos preparados na hora para comer na feira.',
    certifications: ['vegano', 'sustentavel'],
    instagramUrl: 'https://instagram.com/panelinhaveg',
    mapLabel: 'Praça gastronômica',
    keywords: ['vegano', 'prato quente', 'gastronomia', 'doce'],
  },
  {
    id: 'feira-4',
    number: 'D15',
    name: 'Fermenta Brasil',
    category: 'bebidas',
    logoText: 'FB',
    logoTone: 'blue',
    galleryImageUris: [
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=600&q=80',
    ],
    summary: 'Kombuchas, sodas naturais e café gelado com receitas autorais e ingredientes frescos.',
    certifications: ['sustentavel', 'producao-local'],
    instagramUrl: 'https://instagram.com/fermentabrasil',
    mapLabel: 'Ala norte de bebidas',
    keywords: ['kombucha', 'bebidas', 'café gelado', 'soda natural'],
  },
  {
    id: 'feira-5',
    number: 'E04',
    name: 'Botânica Urbana',
    category: 'bem-estar',
    logoText: 'BU',
    logoTone: 'pink',
    galleryImageUris: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
    ],
    summary: 'Sabonetes, óleos e cuidados naturais com foco em aromaterapia e autocuidado.',
    certifications: ['sustentavel', 'comercio-justo'],
    instagramUrl: 'https://instagram.com/botanicaurbana',
    mapLabel: 'Travessa do bem-estar',
    keywords: ['bem-estar', 'cosméticos naturais', 'óleos', 'sabonetes'],
  },
  {
    id: 'feira-6',
    number: 'F09',
    name: 'Cerâmica do Centro',
    category: 'artesanato',
    logoText: 'CC',
    logoTone: 'neutral',
    galleryImageUris: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=600&q=80',
    ],
    summary: 'Xícaras, vasos e utilitários em cerâmica autoral com pequenas coleções exclusivas.',
    certifications: ['producao-local'],
    instagramUrl: 'https://instagram.com/ceramicadocentro',
    mapLabel: 'Corredor artesanal',
    keywords: ['cerâmica', 'artesanato', 'utilitários', 'xícaras'],
  },
  {
    id: 'feira-7',
    number: 'G11',
    name: 'Queijaria Serra Clara',
    category: 'gastronomia',
    logoText: 'QS',
    logoTone: 'orange',
    galleryImageUris: [
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80',
    ],
    summary: 'Queijos artesanais, manteigas e geleias com degustação guiada ao longo do dia.',
    certifications: ['producao-local', 'comercio-justo'],
    instagramUrl: 'https://instagram.com/serraclaraqueijos',
    mapLabel: 'Praça gastronômica',
    keywords: ['queijos', 'geleias', 'degustação', 'gastronomia'],
  },
  {
    id: 'feira-8',
    number: 'H02',
    name: 'Horta no Copo',
    category: 'bebidas',
    logoText: 'HC',
    logoTone: 'green',
    galleryImageUris: [
      'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=80',
    ],
    summary: 'Sucos prensados, shots funcionais e blends verdes preparados com ingredientes orgânicos.',
    certifications: ['organico', 'vegano', 'sustentavel'],
    instagramUrl: 'https://instagram.com/hortanocopo',
    mapLabel: 'Ala norte de bebidas',
    keywords: ['sucos', 'shots', 'orgânico', 'vegano'],
  },
]

export const LOGO_TONE_COLORS: Record<FeiraStall['logoTone'], string> = {
  brand:   '#5500CC',
  pink:    '#E91E8C',
  orange:  '#F97316',
  blue:    '#3B5BDB',
  green:   '#16A34A',
  neutral: '#525252',
}
