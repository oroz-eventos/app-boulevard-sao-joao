import { colors, colorsDark } from '@/theme/colors'

function buildPalette(c: typeof colors | typeof colorsDark, isDark: boolean) {
  const borderSubtle = isDark ? 'rgba(255, 255, 255, 0.08)' : c.bg.divider

  return {
    ticker: {
      bg: isDark ? '#080012' : '#12002E',
      text: c.text.inverse,
    },
    liveBadge: {
      bg: c.accent.accent2,
      text: c.text.inverse,
    },
    header: {
      bg: c.bg.app,
      border: borderSubtle,
      logoText: isDark ? c.primary.clear : c.primary.main,
      logoMark: isDark ? c.primary.clear : c.primary.main,
      logoMarkIcon: c.text.inverse,
      icon: isDark ? c.primary.clear : c.primary.main,
      iconBg: isDark ? c.bg.white : c.bg.surface2,
      iconBorder: isDark ? 'transparent' : c.bg.divider,
      iconBorderWidth: isDark ? 0 : 1,
    },
    section: {
      title: c.text.primary,
      link: isDark ? c.primary.clear : c.primary.main,
      eyebrow: isDark ? c.text.secondary : c.primary.main,
    },
    featured: {
      cardBg: c.bg.app,
      sectionBarBg: isDark ? c.bg.white : c.bg.surface2,
      title: c.text.primary,
      meta: c.text.tertiary,
      tagBg: isDark ? c.primary.clear : c.primary.main,
      tagText: c.text.inverse,
    },
    promo: {
      cardBg: isDark ? c.bg.white : c.bg.surface2,
      cardBorder: borderSubtle,
      icon: isDark ? c.primary.clear : c.primary.main,
      label: c.text.primary,
      badgeBg: '#16A34A',
      badgeText: c.text.inverse,
      dotActive: c.carousel.dotActive,
      dotInactive: c.carousel.dotInactive,
    },
    category: {
      bg: isDark ? c.bg.white : c.bg.surface2,
      border: isDark ? 'transparent' : c.bg.divider,
      borderWidth: isDark ? 0 : 1,
      label: c.text.primary,
      icon: isDark ? c.primary.clear : c.primary.main,
    },
    quickAccess: {
      overlay: isDark ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.42)',
      label: c.text.inverse,
    },
    page: {
      bg: c.bg.app,
    },
  }
}

export const homePalette = {
  light: buildPalette(colors, false),
  dark: buildPalette(colorsDark, true),
} as const
