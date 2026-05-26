import { router } from 'expo-router'
import { Paragraph, YStack } from 'tamagui'
import { AppButton, Screen } from '@/components/ui'

export default function ModalScreen() {
  return (
    <Screen justify="center" items="center" gap="$4">
      <YStack gap="$2" maxW={320}>
        <Paragraph size="$5" fontWeight="600" text="center">
          Modal de exemplo
        </Paragraph>
        <Paragraph color="$muted" text="center">
          Use modais para fluxos curtos: filtros, confirmações ou detalhes rápidos.
        </Paragraph>
      </YStack>
      <AppButton onPress={() => router.back()}>Fechar</AppButton>
    </Screen>
  )
}
