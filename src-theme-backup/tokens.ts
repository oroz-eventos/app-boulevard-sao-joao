import { colors } from './colors'

export const brandColors = {
  purple: colors.primary.main,
  purpleDark: colors.primary.shadow,
  purpleLight: colors.primary.clear,
  purpleMuted: colors.bg.surface2,
  pink: colors.accent.accent2,
  tickerBg: colors.primary.shadow,
  white: colors.bg.white,
  offWhite: colors.bg.app,
} as const

export const spacing = {
  screenX: 16,
  screenY: 16,
  cardGap: 12,
  sectionGap: 28,
  sectionHeaderBottom: 12,
} as const

export const radius = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
  xxl: 12,
  full: 9999,
} as const

export const homeLayout = {
  tickerHeight: 34,
  headerIconSize: 44,
  /** Altura fixa do tile de atalho — só a largura acompanha a tela */
  categoryTileHeight: 72,
  quickAccessHeight: 96,
  /** Banner promocional horizontal (referência Uber Eats) */
  promoBannerHeight: 140,
  featuredImageHeight: 220,
  heroHeight: 140,
} as const
