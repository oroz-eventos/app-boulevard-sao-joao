import type { ReactNode } from 'react'
import { YStack, type YStackProps } from 'tamagui'
import { radius } from '@/theme/tokens'

type CardProps = YStackProps & {
  children: ReactNode
}

export function Card({ children, ...props }: CardProps) {
  return (
    <YStack
      bg="$surface"
      rounded={radius.lg}
      p="$4"
      borderWidth={1}
      borderColor="$borderColor"
      shadowColor="$shadowColor"
      shadowOffset={{ width: 0, height: 4 }}
      shadowOpacity={0.08}
      shadowRadius={12}
      elevation={2}
      {...props}
    >
      {children}
    </YStack>
  )
}
