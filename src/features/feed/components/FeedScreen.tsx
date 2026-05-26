import { useCallback, useMemo, useRef, useState } from 'react'
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'
import { EditorialTabs } from './EditorialTabs'
import { FeedPostCard } from './FeedPostCard'
import { FEED_POSTS } from '../data/mock'
import type { EditorialLineId, FeedPost } from '../types'
import {
  TopDisplayHeader,
  TOP_DISPLAY_HEADER_SCREEN_PADDING,
} from '@/components/ui/TopDisplayHeader'
import { fontFamily } from '@/theme/typography'

const TAB_BAR_HEIGHT = 56
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<FeedPost>)

export function FeedScreen() {
  const insets = useSafeAreaInsets()
  const { height: windowHeight } = useWindowDimensions()
  const [activeEditorial, setActiveEditorial] = useState<EditorialLineId>('centro')
  const listRef = useRef<FlatList<FeedPost>>(null)
  const scrollY = useSharedValue(0)

  const bottomInset =
    TAB_BAR_HEIGHT + (Platform.OS === 'web' ? 12 : Math.max(insets.bottom, 8)) + 12
  const headerHeight = insets.top + TOP_DISPLAY_HEADER_SCREEN_PADDING + 36 + 52

  const posts = useMemo(
    () => FEED_POSTS.filter((post) => post.editorial === activeEditorial),
    [activeEditorial]
  )

  const onEditorialChange = useCallback((id: EditorialLineId) => {
    setActiveEditorial(id)
    listRef.current?.scrollToOffset({ offset: 0, animated: false })
    scrollY.value = 0
  }, [scrollY])

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    },
  })

  return (
    <View style={styles.root}>
      <AnimatedFlatList
        ref={listRef}
        style={StyleSheet.absoluteFill}
        data={posts}
        key={`${activeEditorial}-${windowHeight}`}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <FeedPostCard
            post={item}
            index={index}
            height={windowHeight}
            bottomInset={bottomInset}
            scrollY={scrollY}
          />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={windowHeight}
        snapToAlignment="start"
        disableIntervalMomentum
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        getItemLayout={(_, index) => ({
          length: windowHeight,
          offset: windowHeight * index,
          index,
        })}
        ListEmptyComponent={
          <View style={[styles.empty, { height: windowHeight }]}>
            <Text style={styles.emptyText}>Nenhuma notícia nesta linha editorial ainda.</Text>
          </View>
        }
      />

      <View style={[styles.topChrome, { height: headerHeight + 24 }]} pointerEvents="none">
        <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
          <Defs>
            <LinearGradient id="feedTopGrad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#000000" stopOpacity="0.65" />
              <Stop offset="0.55" stopColor="#000000" stopOpacity="0.25" />
              <Stop offset="1" stopColor="#000000" stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#feedTopGrad)" />
        </Svg>
      </View>

      <View
        style={[styles.header, { paddingTop: insets.top + TOP_DISPLAY_HEADER_SCREEN_PADDING }]}
        pointerEvents="box-none"
      >
        <View style={styles.headerRow}>
          <TopDisplayHeader title="FEED" color="#FFFFFF" />
        </View>
        <EditorialTabs activeId={activeEditorial} onChange={onEditorialChange} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000000',
  },
  topChrome: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    fontFamily: fontFamily.body,
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
})
