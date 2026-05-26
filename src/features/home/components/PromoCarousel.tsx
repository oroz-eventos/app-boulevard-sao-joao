import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { Image } from 'expo-image'
import { CaretRight } from 'phosphor-react-native'
import { PROMO_SLIDES, type PromoSlide } from '../data/mock'
import { promoAssets } from '../theme/promoAssets'
import { SectionHeader } from './SectionHeader'
import { homeLayout, radius, spacing } from '@/theme/tokens'
import { fontFamily } from '@/theme/typography'

const CARD_GAP = spacing.cardGap
const ON_CARD = '#FFFFFF'
const PROMO_CARD_VIEWPORT_RATIO = 0.6
const MAX_PROMO_CARD_WIDTH = 280
const MIN_PROMO_CARD_WIDTH = 200

export function PromoBannerCard({ item, width }: { item: PromoSlide; width: number }) {
  const leftBg = item.backgroundColor ?? '#2A0066'
  const rightBg = item.accentPanelColor ?? '#3D1580'
  const isUnified = leftBg === rightBg
  const imagePanelWidth = Math.min(132, Math.max(76, Math.round(width * 0.4)))

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={[item.subtitle ?? item.title, item.cta].filter(Boolean).join('. ')}
      style={({ pressed }) => [{ opacity: pressed ? 0.94 : 1 }]}
    >
      <View
        style={[
          styles.card,
          { width, height: homeLayout.promoBannerHeight },
          isUnified && { backgroundColor: leftBg },
        ]}
      >
        <View style={[styles.leftPanel, !isUnified && { backgroundColor: leftBg }]}>
          <Text style={styles.headline} numberOfLines={3}>
            {item.subtitle ?? item.title}
          </Text>
          {item.cta ? (
            <View style={styles.ctaRow}>
              <Text style={styles.ctaText}>{item.cta}</Text>
              <CaretRight size={14} color={ON_CARD} weight="bold" />
            </View>
          ) : null}
        </View>

        <View
          style={[
            styles.rightPanel,
            { width: imagePanelWidth },
            !isUnified && { backgroundColor: rightBg },
          ]}
        >
          <Image
            source={promoAssets[item.icon]}
            style={styles.promoImage}
            contentFit="cover"
            accessibilityIgnoresInvertColors
          />
        </View>
      </View>
    </Pressable>
  )
}

export function PromoCarousel() {
  const { width: screenWidth } = useWindowDimensions()

  const availableWidth = screenWidth - spacing.screenX * 2
  const targetCardWidth = Math.floor(screenWidth * PROMO_CARD_VIEWPORT_RATIO)
  const cardWidth = Math.max(
    MIN_PROMO_CARD_WIDTH,
    Math.min(availableWidth, MAX_PROMO_CARD_WIDTH, targetCardWidth),
  )
  const snapInterval = cardWidth + CARD_GAP

  return (
    <View style={styles.wrap}>
      <SectionHeader title="Ofertas e parceiros" />
      <FlatList
        data={PROMO_SLIDES}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapInterval}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ width: CARD_GAP }} />}
        renderItem={({ item }) => <PromoBannerCard item={item} width={cardWidth} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.sectionGap,
    gap: 10,
  },
  listContent: {
    paddingHorizontal: spacing.screenX,
  },
  card: {
    flexDirection: 'row',
    borderRadius: radius.xxl,
    overflow: 'hidden',
  },
  leftPanel: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 16,
    justifyContent: 'space-between',
    minWidth: 0,
  },
  headline: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
    color: ON_CARD,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 10,
  },
  ctaText: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 18,
    color: ON_CARD,
  },
  rightPanel: {
    overflow: 'hidden',
    position: 'relative',
  },
  promoImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
})
