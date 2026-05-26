/**
 * Logos e ícones por aparência (clear = modo claro, dark = modo escuro).
 */
export const brandAssets = {
  logo: {
    light: require('../../assets/images/logo-clear.png'),
    dark: require('../../assets/images/logo-dark.png'),
  },
  icon: {
    light: require('../../assets/images/icon-clear.png'),
    dark: require('../../assets/images/icon-dark.png'),
  },
} as const

export type BrandAppearance = keyof typeof brandAssets.logo
