import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { colors, colorsDark } from '@/theme/colors'

function buildPalette(c: typeof colors | typeof colorsDark, isDark: boolean) {
  const brand = isDark ? c.primary.clear : c.primary.main
  const border = isDark ? 'rgba(255,255,255,0.08)' : c.bg.divider

  return {
    pageBg: c.bg.app,
    tickerBg: isDark ? c.primary.shadow : '#2A0066',
    tickerBadgeBg: brand,
    tickerText: c.text.inverse,
    title: c.text.primary,
    body: c.text.secondary,
    muted: c.text.tertiary,
    action: brand,
    month: brand,
    tabsUnderline: c.text.primary,
    dateChipBg: c.bg.surface2,
    dateChipText: c.text.secondary,
    dateChipActiveBg: brand,
    dateChipActiveText: c.text.inverse,
    sectionBg: isDark ? 'rgba(153,102,255,0.12)' : '#E8E0FF',
    sectionText: brand,
    cardBg: c.bg.white,
    cardBorder: border,
    badgeBg: brand,
    badgeText: c.text.inverse,
  }
}

export function useProgramacaoPalette() {
  const { resolvedTheme } = useThemePreferenceContext()
  return resolvedTheme === 'dark'
    ? buildPalette(colorsDark, true)
    : buildPalette(colors, false)
}
