import { FlatList, StyleSheet, View, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { INTERAJA_SLIDES } from '../data/mock'
import { useInterajaPalette } from '../hooks/useInterajaPalette'
import { InterajaSlideCard } from './InterajaSlideCard'
import { StandaloneBottomBar } from '@/components/navigation/StandaloneBottomBar'
import {
  TopDisplayHeader,
  TOP_DISPLAY_HEADER_SCREEN_PADDING,
} from '@/components/ui/TopDisplayHeader'
import { spacing } from '@/theme/tokens'

const TAB_BAR_HEIGHT = 78
const HEADER_BLOCK_HEIGHT = 72

export function InterajaScreen() {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const palette = useInterajaPalette()

  const cardWidth = screenWidth
  const bottomInset = Math.max(insets.bottom, 8)
  const slideHeight = Math.max(
    420,
    screenHeight -
      (insets.top + TOP_DISPLAY_HEADER_SCREEN_PADDING + HEADER_BLOCK_HEIGHT) -
      (TAB_BAR_HEIGHT + bottomInset + 24)
  )

  return (
    <View style={[styles.root, { backgroundColor: palette.pageBg }]}>
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top + TOP_DISPLAY_HEADER_SCREEN_PADDING,
          },
        ]}
      >
        <TopDisplayHeader title="INTERAJA" color={palette.action} />
      </View>

      <View style={[styles.sliderSection, { paddingBottom: TAB_BAR_HEIGHT + bottomInset + 24 }]}>
        <FlatList
          data={INTERAJA_SLIDES}
          keyExtractor={(item) => item.id}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          renderItem={({ item }) => (
            <InterajaSlideCard item={item} width={cardWidth} slideHeight={slideHeight} />
          )}
        />
      </View>

      <StandaloneBottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.screenX,
    paddingBottom: 18,
  },
  sliderSection: {
    flex: 1,
  },
})
