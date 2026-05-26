import { useEffect, useRef, useState } from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import { LIVE_TICKER_ITEMS } from '../data/mock'
import { useHomePalette } from '../hooks/useHomePalette'
import { homeLayout } from '@/theme/tokens'
import { fontFamily, typography } from '@/theme/typography'

const ITEM_SEPARATOR = '   •   '

const TICKER_SEGMENT = LIVE_TICKER_ITEMS.map((item) => item.text).join(ITEM_SEPARATOR) + ITEM_SEPARATOR

/** Múltiplas cópias idênticas evitam qualquer “fim” visível do conteúdo */
const MARQUEE_COPIES = 3

const SCROLL_MS_PER_PX = 20
const MIN_SCROLL_DURATION_MS = 28000

export function LiveTicker() {
  const palette = useHomePalette()
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
    <View style={[styles.row, { height: homeLayout.tickerHeight }]}>
      <View style={[styles.badge, { backgroundColor: palette.liveBadge.bg }]}>
        <Text style={[styles.badgeText, typography.eyebrow, { color: palette.liveBadge.text }]}>
          • AO VIVO
        </Text>
      </View>
      <View style={[styles.track, { backgroundColor: palette.ticker.bg }]}>
        <Text
          style={[styles.measure, { color: palette.ticker.text }]}
          onLayout={(e) => {
            const w = Math.ceil(e.nativeEvent.layout.width)
            if (w > 0) setSegmentWidth(w)
          }}
          numberOfLines={1}
        >
          {TICKER_SEGMENT}
        </Text>
        {segmentWidth > 0 ? (
          <Animated.View style={[styles.marquee, { transform: [{ translateX }] }]}>
            {Array.from({ length: MARQUEE_COPIES }, (_, index) => (
              <Text
                key={`ticker-copy-${index}`}
                style={[styles.tickerText, { color: palette.ticker.text }]}
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
  row: { flexDirection: 'row', overflow: 'hidden' },
  badge: {
    minWidth: 84,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    letterSpacing: 1.1,
  },
  track: { flex: 1, overflow: 'hidden', justifyContent: 'center' },
  measure: {
    position: 'absolute',
    opacity: 0,
    fontSize: 12,
    fontFamily: fontFamily.body,
    flexShrink: 0,
  },
  marquee: { flexDirection: 'row', flexShrink: 0 },
  tickerText: {
    fontSize: 12,
    fontFamily: fontFamily.body,
    lineHeight: 16,
    flexShrink: 0,
  },
})
