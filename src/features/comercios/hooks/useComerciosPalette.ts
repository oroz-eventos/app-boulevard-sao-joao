import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { colors, colorsDark } from '@/theme/colors'

function buildPalette(c: typeof colors | typeof colorsDark, isDark: boolean) {
  const brand = isDark ? c.primary.clear : c.primary.main
  const border = isDark ? 'rgba(255,255,255,0.08)' : c.bg.divider

  return {
    pageBg: c.bg.app,
    action: brand,
    title: c.text.primary,
    body: c.text.secondary,
    muted: c.text.tertiary,
    searchBg: c.bg.white,
    searchBorder: border,
    searchPlaceholder: c.text.tertiary,
    filterBg: c.bg.white,
    filterBorder: border,
    filterText: c.text.primary,
    filterActiveBg: brand,
    filterActiveText: c.text.inverse,
    cardBg: c.bg.white,
    cardBorder: border,
    chipBg: c.bg.surface2,
    chipText: c.text.secondary,
    discountBg: brand,
    discountText: c.text.inverse,
    outlineButtonText: c.text.primary,
    logo: {
      brand: { bg: isDark ? 'rgba(153,102,255,0.16)' : 'rgba(85,0,204,0.08)', text: brand },
      green: { bg: 'rgba(22,163,74,0.12)', text: '#15803D' },
      orange: { bg: 'rgba(249,115,22,0.14)', text: '#C2410C' },
      blue: { bg: 'rgba(59,91,219,0.14)', text: '#1D4ED8' },
      pink: { bg: 'rgba(233,30,140,0.12)', text: '#BE185D' },
      neutral: { bg: isDark ? 'rgba(255,255,255,0.08)' : c.bg.surface2, text: c.text.primary },
    },
  }
}

export function useComerciosPalette() {
  const { resolvedTheme } = useThemePreferenceContext()
  return resolvedTheme === 'dark'
    ? buildPalette(colorsDark, true)
    : buildPalette(colors, false)
}
