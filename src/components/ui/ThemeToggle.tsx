import { Moon, Sun } from '@tamagui/lucide-icons-2'
import { Button, XStack, Paragraph } from 'tamagui'
import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'

type ThemeToggleProps = {
  /** Ícone compacto (ex.: header da Home) */
  compact?: boolean
}

export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useThemePreferenceContext()
  const isDark = resolvedTheme === 'dark'
  const Icon = isDark ? Sun : Moon
  const label = isDark ? 'Claro' : 'Escuro'
  const accessibilityLabel = isDark ? 'Ativar modo claro' : 'Ativar modo escuro'

  if (compact) {
    return (
      <Button
        size="$3"
        chromeless
        circular
        borderWidth={1}
        borderColor="$borderColor"
        bg="$surface"
        onPress={() => toggleTheme()}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        icon={<Icon size={20} color="$brand" />}
      />
    )
  }

  return (
    <Button
      size="$3"
      chromeless
      onPress={() => toggleTheme()}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
    >
      <XStack items="center" gap="$2">
        <Icon size={18} color="$brand" />
        <Paragraph size="$2" color="$muted">
          {label}
        </Paragraph>
      </XStack>
    </Button>
  )
}
