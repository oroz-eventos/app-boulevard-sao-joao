import { ScrollView, StyleSheet, View } from 'react-native'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CategoryShortcuts } from './CategoryShortcuts'
import { FeaturedSection } from './FeaturedSection'
import { HeroBanner } from './HeroBanner'
import { HomeHeader } from './HomeHeader'
import { LiveTicker } from './LiveTicker'
import { PromoCarousel } from './PromoCarousel'
import { useHomePalette } from '../hooks/useHomePalette'

export function HomeScreen() {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const palette = useHomePalette()

  return (
    <View style={[styles.root, { backgroundColor: palette.page.bg }]}>
      <View
        style={[
          styles.headerBlock,
          {
            paddingTop: insets.top,
            backgroundColor: palette.header.bg,
            borderBottomColor: palette.header.border,
          },
        ]}
      >
        <LiveTicker />
        <HomeHeader onNotifications={() => router.push('/notificacoes' as never)} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24, paddingTop: 8 }}
      >
        <HeroBanner />
        <CategoryShortcuts />
        <FeaturedSection />
        <PromoCarousel />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  headerBlock: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
