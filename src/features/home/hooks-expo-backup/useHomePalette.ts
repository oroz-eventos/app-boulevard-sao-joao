import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { homePalette } from '../theme/palette'

export function useHomePalette() {
  const { resolvedTheme } = useThemePreferenceContext()
  return resolvedTheme === 'dark' ? homePalette.dark : homePalette.light
}
