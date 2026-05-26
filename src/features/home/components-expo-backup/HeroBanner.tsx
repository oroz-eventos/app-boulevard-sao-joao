import { useRef, useState } from 'react'
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { CarouselDots } from './CarouselDots'
import { HERO_SLIDES, type PromoSlide } from '../data/mock'
import { useHomePalette } from '../hooks/useHomePalette'
import { homeLayout, radius, spacing } from '@/theme/tokens'
import { typography, fontFamily } from '@/theme/typography'

const GAP = 12

function HeroCard({ item, width }: { item: PromoSlide; width: number }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={item.title}>
      <View style={[styles.card, { width, backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        {item.cta ? (
          <View style={styles.cta}>
            <Text style={styles.ctaText}>{item.cta}</Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  )
}

export function HeroBanner() {
  const { width: screenWidth } = useWindowDimensions()
  const palette = useHomePalette()
  const [activeIndex, setActiveIndex] = useState(0)
  const cardWidth = screenWidth - spacing.screenX * 2

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x
    const index = Math.round(x / (cardWidth + GAP))
    setActiveIndex(Math.min(index, HERO_SLIDES.length - 1))
  }

  return (
    <View style={styles.wrap}>
      <FlatList
        data={HERO_SLIDES}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled={false}
        snapToInterval={cardWidth + GAP}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: spacing.screenX }}
        ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => <HeroCard item={item} width={cardWidth} />}
      />
      <CarouselDots
        count={HERO_SLIDES.length}
        activeIndex={activeIndex}
        activeColor={palette.promo.dotActive}
        inactiveColor={palette.promo.dotInactive}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.sectionGap - 8,
    gap: 10,
  },
  card: {
    height: homeLayout.heroHeight,
    borderRadius: radius.lg,
    padding: 16,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  title: {
    ...typography.display,
    fontSize: 22,
    lineHeight: 26,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    lineHeight: 18,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 10,
  },
  cta: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.22)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.sm,
  },
  ctaText: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 13,
    color: '#FFFFFF',
  },
})
