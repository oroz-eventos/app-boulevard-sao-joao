import { Moon, Sun } from '@tamagui/lucide-icons-2'
import { Pressable, StyleSheet } from 'react-native'
import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { useHomePalette } from '../hooks/useHomePalette'
import { homeLayout, radius } from '@/theme/tokens'

export function ThemeToggleButton() {
  const { resolvedTheme, toggleTheme } = useThemePreferenceContext()
  const palette = useHomePalette()
  const h = palette.header
  const isDark = resolvedTheme === 'dark'

  const Icon = isDark ? Sun : Moon
  const accessibilityLabel = isDark
    ? 'Ativar modo claro'
    : 'Ativar modo escuro'

  return (
    <Pressable
      onPress={() => toggleTheme()}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [
        styles.btn,
        {
          opacity: pressed ? 0.75 : 1,
          backgroundColor: h.iconBg,
          borderColor: h.iconBorder,
          borderWidth: h.iconBorderWidth,
        },
      ]}
    >
      <Icon size={20} color={h.icon} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: homeLayout.headerIconSize,
    height: homeLayout.headerIconSize,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
