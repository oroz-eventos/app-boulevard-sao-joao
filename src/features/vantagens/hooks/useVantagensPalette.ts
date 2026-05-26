import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { colors, colorsDark } from '@/theme/colors'

export function useVantagensPalette() {
  const { resolvedTheme } = useThemePreferenceContext()
  const isDark = resolvedTheme === 'dark'
  const c = isDark ? colorsDark : colors

  return {
    pageBg: c.bg.app,
    action: isDark ? c.primary.clear : c.primary.main,
    cardBg: c.bg.white,
    cardBorder: c.bg.divider,
    discount: isDark ? c.primary.clear : c.primary.main,
    venue: c.text.primary,
    body: c.text.secondary,
    muted: c.text.tertiary,
    tabActive: c.text.primary,
    tabInactive: c.text.tertiary,
    tabIndicator: c.text.primary,
    tabBorder: c.bg.divider,
    icon: c.text.tertiary,
    eyebrow: c.text.secondary,
  }
}
