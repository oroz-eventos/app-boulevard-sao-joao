import { YStack, H2, Paragraph } from 'tamagui'
import { Screen } from '@/components/ui/Screen'

type PlaceholderScreenProps = {
  title: string
  description: string
}

export function PlaceholderScreen({ title, description }: PlaceholderScreenProps) {
  return (
    <Screen justify="center" items="center" gap="$4">
      <YStack gap="$2" items="center" maxW={300}>
        <H2 text="center">{title}</H2>
        <Paragraph color="$muted" text="center">
          {description}
        </Paragraph>
      </YStack>
    </Screen>
  )
}
