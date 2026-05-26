import type { ReactNode } from 'react'
import { ScrollView, type ScrollViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { YStack, type YStackProps } from 'tamagui'
import { spacing } from '@/theme/tokens'

type ScreenProps = YStackProps & {
  children: ReactNode
  scrollable?: boolean
  scrollProps?: ScrollViewProps
  safeTop?: boolean
  safeBottom?: boolean
}

export function Screen({
  children,
  scrollable = false,
  scrollProps,
  safeTop = true,
  safeBottom = true,
  ...stackProps
}: ScreenProps) {
  const insets = useSafeAreaInsets()

  const content = (
    <YStack
      flex={1}
      bg="$background"
      pt={safeTop ? insets.top : 0}
      pb={safeBottom ? insets.bottom : 0}
      px={spacing.screenX}
      {...stackProps}
    >
      {children}
    </YStack>
  )

  if (!scrollable) return content

  return (
    <YStack flex={1} bg="$background" pt={safeTop ? insets.top : 0}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: safeBottom ? insets.bottom : 0 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        {...scrollProps}
      >
        <YStack px={spacing.screenX} {...stackProps}>
          {children}
        </YStack>
      </ScrollView>
    </YStack>
  )
}
