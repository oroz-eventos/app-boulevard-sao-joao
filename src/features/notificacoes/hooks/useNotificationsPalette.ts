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
    filterBg: c.bg.white,
    filterBorder: border,
    filterText: c.text.primary,
    filterActiveBg: brand,
    filterActiveText: c.text.inverse,
    cardBg: c.bg.white,
    cardNewBg: isDark ? 'rgba(153,102,255,0.1)' : 'rgba(85,0,204,0.04)',
    cardBorder: border,
    time: c.text.tertiary,
    unreadDot: brand,
    iconBg: isDark ? 'rgba(255,255,255,0.08)' : c.bg.surface2,
    iconText: c.text.secondary,
  }
}

export function useNotificationsPalette() {
  const { resolvedTheme } = useThemePreferenceContext()
  return resolvedTheme === 'dark'
    ? buildPalette(colorsDark, true)
    : buildPalette(colors, false)
}
