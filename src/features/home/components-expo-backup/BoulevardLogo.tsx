import { Image } from 'expo-image'
import { StyleSheet, View } from 'react-native'
import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { brandAssets } from '@/theme/brandAssets'

type BoulevardLogoProps = {
  compact?: boolean
}

export function BoulevardLogo({ compact = false }: BoulevardLogoProps) {
  const { resolvedTheme } = useThemePreferenceContext()
  const source = brandAssets.logo[resolvedTheme]
  const height = compact ? 34 : 40

  return (
    <View style={styles.wrap}>
      <Image
        source={source}
        style={{ height, width: compact ? 140 : 168 }}
        contentFit="contain"
        accessibilityLabel="Boulevard São João"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
  },
})
