import { useEffect, useRef, useState } from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import { PROGRAMACAO_TICKER_ITEMS } from '../data/mock'
import { useProgramacaoPalette } from '../hooks/useProgramacaoPalette'
import { fontFamily, typography } from '@/theme/typography'

const ITEM_SEPARATOR = '   •   '
const TICKER_SEGMENT =
  PROGRAMACAO_TICKER_ITEMS.map((item) => item.text).join(ITEM_SEPARATOR) + ITEM_SEPARATOR
const MARQUEE_COPIES = 3
const SCROLL_MS_PER_PX = 20
const MIN_SCROLL_DURATION_MS = 28000

export function ProgramacaoTicker() {
  const palette = useProgramacaoPalette()
  const translateX = useRef(new Animated.Value(0)).current
  const [segmentWidth, setSegmentWidth] = useState(0)

  useEffect(() => {
    if (segmentWidth <= 0) return

    const duration = Math.max(MIN_SCROLL_DURATION_MS, segmentWidth * SCROLL_MS_PER_PX)
    const loop = Animated.loop(
      Animated.timing(translateX, {
        toValue: -segmentWidth,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      { resetBeforeIteration: true }
    )

    translateX.setValue(0)
    loop.start()
    return () => loop.stop()
  }, [segmentWidth, translateX])

  return (
    <View style={[styles.row, { backgroundColor: palette.tickerBg }]}>
      <View style={[styles.badge, { backgroundColor: palette.tickerBadgeBg }]}>
        <Text style={[styles.badgeText, typography.eyebrow, { color: palette.tickerText }]}>HOJE</Text>
      </View>
      <View style={styles.track}>
        <Text
          style={[styles.measure, { color: palette.tickerText }]}
          onLayout={(e) => {
            const width = Math.ceil(e.nativeEvent.layout.width)
            if (width > 0) setSegmentWidth(width)
          }}
          numberOfLines={1}
        >
          {TICKER_SEGMENT}
        </Text>
        {segmentWidth > 0 ? (
          <Animated.View style={[styles.marquee, { transform: [{ translateX }] }]}>
            {Array.from({ length: MARQUEE_COPIES }, (_, index) => (
              <Text
                key={`programacao-ticker-${index}`}
                style={[styles.tickerText, { color: palette.tickerText }]}
                numberOfLines={1}
              >
                {TICKER_SEGMENT}
              </Text>
            ))}
          </Animated.View>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    height: 28,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  badge: {
    minWidth: 42,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 9,
    lineHeight: 12,
    letterSpacing: 1.1,
  },
  track: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  measure: {
    position: 'absolute',
    opacity: 0,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fontFamily.body,
  },
  marquee: {
    flexDirection: 'row',
    flexShrink: 0,
  },
  tickerText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fontFamily.body,
    flexShrink: 0,
  },
})
