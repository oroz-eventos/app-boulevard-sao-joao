import type { ReactNode } from 'react'
import { Bell, User } from '@tamagui/lucide-icons-2'
import { Pressable, StyleSheet, View } from 'react-native'
import { XStack } from 'tamagui'
import { BoulevardLogo } from './BoulevardLogo'
import { ThemeToggleButton } from './ThemeToggleButton'
import { useHomePalette } from '../hooks/useHomePalette'
import { homeLayout, radius } from '@/theme/tokens'

type HomeHeaderProps = {
  onNotifications?: () => void
  onProfile?: () => void
}

function HeaderIconButton({
  onPress,
  children,
  accessibilityLabel,
  bg,
  border,
  borderWidth,
}: {
  onPress?: () => void
  children: ReactNode
  accessibilityLabel: string
  bg: string
  border: string
  borderWidth: number
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [
        styles.iconBtn,
        {
          opacity: pressed ? 0.75 : 1,
          backgroundColor: bg,
          borderColor: border,
          borderWidth,
        },
      ]}
    >
      {children}
    </Pressable>
  )
}

export function HomeHeader({ onNotifications, onProfile }: HomeHeaderProps) {
  const palette = useHomePalette()
  const h = palette.header

  return (
    <View style={styles.wrapper}>
      <XStack px="$4" py="$3" items="center" justify="space-between">
        <BoulevardLogo />
        <XStack gap="$2">
          <HeaderIconButton
            onPress={onNotifications}
            accessibilityLabel="Notificações"
            bg={h.iconBg}
            border={h.iconBorder}
            borderWidth={h.iconBorderWidth}
          >
            <Bell size={20} color={h.icon} />
          </HeaderIconButton>
          <ThemeToggleButton />
          <HeaderIconButton
            onPress={onProfile}
            accessibilityLabel="Perfil"
            bg={h.iconBg}
            border={h.iconBorder}
            borderWidth={h.iconBorderWidth}
          >
            <User size={20} color={h.icon} />
          </HeaderIconButton>
        </XStack>
      </XStack>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  iconBtn: {
    width: homeLayout.headerIconSize,
    height: homeLayout.headerIconSize,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
