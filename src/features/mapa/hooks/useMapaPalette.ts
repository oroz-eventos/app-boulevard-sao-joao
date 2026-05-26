import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { colors, colorsDark } from '@/theme/colors'

function buildPalette(c: typeof colors | typeof colorsDark, isDark: boolean) {
  const brand = isDark ? c.primary.clear : c.primary.main
  const border = isDark ? 'rgba(255,255,255,0.08)' : c.bg.divider

  return {
    pageBg: c.bg.app,
    title: c.text.primary,
    body: c.text.secondary,
    muted: c.text.tertiary,
    action: brand,
    searchBg: c.bg.white,
    searchBorder: border,
    mapBase: isDark ? '#17151D' : '#EDEAF6',
    mapRoad: isDark ? '#2A2733' : '#DAD6E6',
    mapBlock: isDark ? '#211E2A' : '#F7F4FB',
    filterActiveText: c.text.primary,
    filterInactiveText: c.text.tertiary,
    filterUnderline: c.text.primary,
    marker: {
      telas: '#FF6A2A',
      palcos: '#2F56FF',
      comercios: '#D31CFF',
    },
    markerIcon: c.text.inverse,
    markerSelectedRing: isDark ? '#0F0E12' : '#24164B',
    sheetBg: c.bg.white,
    sheetBorder: border,
    sheetCardBg: isDark ? 'rgba(153,102,255,0.08)' : '#F3EEFF',
    sheetMeta: brand,
    discountBg: brand,
    discountText: c.text.inverse,
    zoomBg: c.bg.white,
    zoomBorder: border,
  }
}

export function useMapaPalette() {
  const { resolvedTheme } = useThemePreferenceContext()
  return resolvedTheme === 'dark'
    ? buildPalette(colorsDark, true)
    : buildPalette(colors, false)
}
