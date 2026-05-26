import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { colors, colorsDark } from '@/theme/colors'

function buildPalette(c: typeof colors | typeof colorsDark, isDark: boolean) {
  const brand = isDark ? c.primary.clear : c.primary.main
  const border = isDark ? 'rgba(255,255,255,0.08)' : c.bg.divider

  return {
    pageBg: isDark ? c.bg.app : '#F7F5FC',
    action: brand,
    title: c.text.primary,
    body: c.text.secondary,
    muted: c.text.tertiary,
    cardBg: c.bg.white,
    cardBorder: border,
    bannerBg: isDark ? colorsDark.bg.white : '#EEEAFB',
    bannerBorder: border,
    bannerTitle: isDark ? c.text.primary : '#141414',
    bannerBody: isDark ? c.text.secondary : '#5B5568',
    bannerMetaBg: 'transparent',
    bannerMetaText: brand,
    buttonBg: isDark ? c.primary.clear : c.primary.clear,
    buttonText: c.text.inverse,
    dotActive: brand,
    dotInactive: isDark ? 'rgba(255,255,255,0.25)' : '#D1CCDD',
    imageIconText: brand,
    participantText: brand,
  }
}

export function useInterajaPalette() {
  const { resolvedTheme } = useThemePreferenceContext()
  return resolvedTheme === 'dark'
    ? buildPalette(colorsDark, true)
    : buildPalette(colors, false)
}
