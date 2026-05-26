import { Image } from 'expo-image'
import { ChevronRight } from '@tamagui/lucide-icons-2'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { QUICK_ACCESS } from '../data/mock'
import { SectionHeader } from './SectionHeader'
import { useHomePalette } from '../hooks/useHomePalette'
import { homeLayout, radius, spacing } from '@/theme/tokens'
import { typography, fontFamily } from '@/theme/typography'

export function QuickAccessGrid() {
  const palette = useHomePalette()

  return (
    <View style={styles.wrap}>
      <SectionHeader title="Acesso rápido" />
      <View style={styles.grid}>
        {QUICK_ACCESS.map((item) => (
          <Pressable
            key={item.id}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            style={({ pressed }) => [{ opacity: pressed ? 0.92 : 1 }]}
          >
            <View style={styles.card}>
              <Image source={{ uri: item.imageUri }} style={StyleSheet.absoluteFill} contentFit="cover" />
              <View style={[styles.overlay, { backgroundColor: palette.quickAccess.overlay }]}>
                <Text style={[styles.label, typography.eyebrow, { color: palette.quickAccess.label }]}>
                  {item.label}
                </Text>
                <ChevronRight size={20} color={palette.quickAccess.label} />
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    paddingBottom: 32,
  },
  grid: {
    paddingHorizontal: spacing.screenX,
    gap: spacing.cardGap,
  },
  card: {
    height: homeLayout.quickAccessHeight,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    flex: 1,
    fontFamily: fontFamily.display,
    fontSize: 16,
    letterSpacing: 0.8,
  },
})
