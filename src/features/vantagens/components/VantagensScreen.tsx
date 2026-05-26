import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  FlatList,
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { PromoBannerCard } from '@/features/home/components/PromoCarousel'
import { ADVANTAGE_OFFERS, OFFER_FILTER_TABS, VANTAGENS_PROMO_BANNER } from '../data/mock'
import type { AdvantageOffer, OfferFilterId, OfferStatus } from '../types'
import { useVantagensPalette } from '../hooks/useVantagensPalette'
import { OfferCard } from './OfferCard'
import {
  TopDisplayHeader,
  TOP_DISPLAY_HEADER_SCREEN_PADDING,
} from '@/components/ui/TopDisplayHeader'
import { fontFamily } from '@/theme/typography'
import { spacing } from '@/theme/tokens'

const TAB_SPRING = { damping: 22, stiffness: 280, mass: 0.8 }
const TAB_BAR_HEIGHT = 56

const STATUS_BY_FILTER: Record<OfferFilterId, OfferStatus[] | null> = {
  todos: null,
  novos: ['new'],
  utilizados: ['used'],
  expirados: ['expired'],
}

type TabLayout = { x: number; width: number }

function OfferFilterTabs({
  activeId,
  onChange,
}: {
  activeId: OfferFilterId
  onChange: (id: OfferFilterId) => void
}) {
  const palette = useVantagensPalette()
  const [layouts, setLayouts] = useState<Partial<Record<OfferFilterId, TabLayout>>>({})
  const indicatorX = useSharedValue(0)
  const indicatorWidth = useSharedValue(0)

  const onTabLayout = useCallback((id: OfferFilterId, e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout
    setLayouts((prev) => ({ ...prev, [id]: { x, width } }))
  }, [])

  useEffect(() => {
    const layout = layouts[activeId]
    if (!layout) return
    indicatorX.value = withSpring(layout.x, TAB_SPRING)
    indicatorWidth.value = withSpring(layout.width, TAB_SPRING)
  }, [activeId, indicatorWidth, indicatorX, layouts])

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
    width: indicatorWidth.value,
  }))

  return (
    <View style={[styles.tabsWrap, { borderBottomColor: palette.tabBorder }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsScroll}>
        <View style={styles.tabsRow}>
          {OFFER_FILTER_TABS.map((tab) => {
            const isActive = tab.id === activeId
            return (
              <Pressable
                key={tab.id}
                onPress={() => onChange(tab.id)}
                onLayout={(e) => onTabLayout(tab.id, e)}
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
                style={styles.tab}
              >
                <Text
                  style={[
                    styles.tabLabel,
                    { color: isActive ? palette.tabActive : palette.tabInactive },
                    isActive && styles.tabLabelActive,
                  ]}
                >
                  {tab.label}
                </Text>
              </Pressable>
            )
          })}
          <Animated.View
            style={[styles.tabIndicator, { backgroundColor: palette.tabIndicator }, indicatorStyle]}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export function VantagensScreen() {
  const insets = useSafeAreaInsets()
  const { width: screenWidth } = useWindowDimensions()
  const palette = useVantagensPalette()
  const [activeFilter, setActiveFilter] = useState<OfferFilterId>('novos')
  const bannerWidth = screenWidth - spacing.screenX * 2

  const offers = useMemo(() => {
    const allowed = STATUS_BY_FILTER[activeFilter]
    if (!allowed) return ADVANTAGE_OFFERS
    return ADVANTAGE_OFFERS.filter((offer) => allowed.includes(offer.status))
  }, [activeFilter])

  return (
    <View style={[styles.root, { backgroundColor: palette.pageBg, paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TopDisplayHeader title="VANTAGENS" color={palette.action} />
      </View>

      <OfferFilterTabs activeId={activeFilter} onChange={setActiveFilter} />

      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.list,
          {
            paddingBottom:
              TAB_BAR_HEIGHT + Math.max(insets.bottom, 8) + spacing.sectionGap,
          },
        ]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.bannerWrap}>
            <PromoBannerCard item={VANTAGENS_PROMO_BANNER} width={bannerWidth} />
          </View>
        }
        ListEmptyComponent={
          <Text style={[styles.empty, { color: palette.muted }]}>
            Nenhuma oferta nesta categoria no momento.
          </Text>
        }
        renderItem={({ item }) => <OfferCard offer={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.screenX,
    paddingTop: TOP_DISPLAY_HEADER_SCREEN_PADDING,
    paddingBottom: 20,
  },
  tabsWrap: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 4,
    marginBottom: 20,
  },
  tabsScroll: {
    paddingHorizontal: spacing.screenX,
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 24,
    paddingBottom: 10,
  },
  tab: {
    paddingBottom: 8,
  },
  tabLabel: {
    fontFamily: fontFamily.body,
    fontSize: 15,
    lineHeight: 20,
  },
  tabLabelActive: {
    fontFamily: fontFamily.bodyMedium,
    fontWeight: '600',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    borderRadius: 1,
  },
  bannerWrap: {
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: spacing.screenX,
    paddingTop: 4,
  },
  separator: {
    height: 12,
  },
  empty: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    paddingVertical: 32,
  },
})
