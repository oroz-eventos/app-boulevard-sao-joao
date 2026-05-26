import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { colors, colorsDark } from '@/theme/colors'

function buildPalette(c: typeof colors | typeof colorsDark, isDark: boolean) {
  const borderSubtle = isDark ? 'rgba(255, 255, 255, 0.08)' : c.bg.divider
  const brand = isDark ? c.primary.clear : c.primary.main

  return {
    pageBg: c.bg.app,
    eyebrow: isDark ? c.text.secondary : c.primary.main,
    title: c.text.primary,
    body: c.text.secondary,
    muted: c.text.tertiary,
    action: brand,
    inputBg: c.bg.white,
    inputBorder: borderSubtle,
    inputIcon: brand,
    inputPlaceholder: c.text.tertiary,
    filterBg: c.bg.white,
    filterBorder: borderSubtle,
    filterText: c.text.primary,
    filterActiveBg: brand,
    filterActiveText: c.text.inverse,
    suggestionBg: c.bg.white,
    suggestionBorder: borderSubtle,
    suggestionText: c.text.primary,
    suggestionMeta: c.text.tertiary,
    cardBg: c.bg.white,
    cardBorder: borderSubtle,
    cardTitle: c.text.primary,
    cardSubtitle: c.text.secondary,
    cardMeta: c.text.tertiary,
    emptyBg: isDark ? c.bg.white : c.bg.surface2,
    emptyTitle: c.text.primary,
    emptyBody: c.text.secondary,
    accent: {
      brand,
      pink: c.accent.accent2,
      blue: c.accent.accent1,
      orange: c.accent.accent3,
      green: '#16A34A',
    },
    accentMuted: {
      brand: isDark ? 'rgba(153, 102, 255, 0.16)' : 'rgba(85, 0, 204, 0.08)',
      pink: 'rgba(233, 30, 140, 0.12)',
      blue: 'rgba(59, 91, 219, 0.12)',
      orange: 'rgba(249, 115, 22, 0.14)',
      green: 'rgba(22, 163, 74, 0.14)',
    },
  }
}

export function useSearchPalette() {
  const { resolvedTheme } = useThemePreferenceContext()
  const isDark = resolvedTheme === 'dark'
  return isDark ? buildPalette(colorsDark, true) : buildPalette(colors, false)
}
