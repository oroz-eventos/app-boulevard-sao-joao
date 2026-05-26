/**
 * Tokens de cor — design original Boulevard São João
 */
export const colors = {
  accent: {
    accent1: '#3B5BDB',
    accent2: '#E91E8C',
    accent3: '#F97316',
  },
  bg: {
    app: '#F9F9FB',
    white: '#FFFFFF',
    divider: '#EFEEF4',
    surface2: '#F4F3F8',
  },
  primary: {
    main: '#5500CC',
    clear: '#774DE8',
    shadow: '#2A0066',
  },
  text: {
    primary: '#141414',
    secondary: '#525252',
    tertiary: '#737373',
    disabled: '#A3A3A3',
    inverse: '#FFFFFF',
  },
  /** Paginação de carrosséis — estilo iFood */
  carousel: {
    dotActive: '#525252',
    dotInactive: '#D8D8DE',
  },
} as const

export const colorsDark = {
  accent: colors.accent,
  bg: {
    app: '#0F0E12',
    white: '#1C1A22',
    divider: '#2F2B38',
    surface2: '#25222D',
  },
  primary: {
    main: '#5500CC',
    clear: '#9966FF',
    shadow: '#18003D',
  },
  text: {
    primary: '#F5F5F4',
    secondary: '#D6D3D1',
    tertiary: '#9CA3AF',
    disabled: '#6B7280',
    inverse: '#FFFFFF',
  },
  carousel: {
    dotActive: '#D6D3D1',
    dotInactive: '#3D3848',
  },
} as const
