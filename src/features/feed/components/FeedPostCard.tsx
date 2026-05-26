import { useCallback, useState } from 'react'
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Share,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { Image } from 'expo-image'
import { PaperPlaneTilt } from 'phosphor-react-native'
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'
import type { FeedPost } from '../types'
import { FeedDescription } from './FeedDescription'
import { CarouselDots } from '@/features/home/components/CarouselDots'
import { fontFamily } from '@/theme/typography'

const FADE_SCROLL_RATIO = 0.26

type FeedPostCardProps = {
  post: FeedPost
  index: number
  height: number
  bottomInset: number
  scrollY: SharedValue<number>
}

export function FeedPostCard({
  post,
  index,
  height,
  bottomInset,
  scrollY,
}: FeedPostCardProps) {
  const { width } = useWindowDimensions()
  const [imageIndex, setImageIndex] = useState(0)

  const onImageScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const x = e.nativeEvent.contentOffset.x
      const slideIndex = Math.round(x / width)
      setImageIndex(Math.min(slideIndex, post.images.length - 1))
    },
    [post.images.length, width]
  )

  const onShare = useCallback(async () => {
    try {
      await Share.share({
        message: `${post.title}\n\n${post.description}`,
        title: post.title,
      })
    } catch {
      /* usuário cancelou */
    }
  }, [post.description, post.title])

  const chromeOpacity = useAnimatedStyle(() => {
    const itemOffset = index * height
    const distance = Math.abs(scrollY.value - itemOffset)
    const opacity = interpolate(distance, [0, height * FADE_SCROLL_RATIO], [1, 0], Extrapolation.CLAMP)
    return { opacity }
  })

  return (
    <View style={[styles.card, { height, width }]}>
      <FlatList
        data={post.images}
        keyExtractor={(uri, slideIndex) => `${post.id}-img-${slideIndex}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onImageScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width, height }} contentFit="cover" />
        )}
      />

      <View style={styles.bottomOverlay} pointerEvents="none">
        <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
          <Defs>
            <LinearGradient id={`feedGrad-${post.id}`} x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#000000" stopOpacity="0" />
              <Stop offset="0.35" stopColor="#000000" stopOpacity="0.15" />
              <Stop offset="0.72" stopColor="#000000" stopOpacity="0.55" />
              <Stop offset="1" stopColor="#000000" stopOpacity="0.92" />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill={`url(#feedGrad-${post.id})`} />
        </Svg>
      </View>

      <Animated.View
        style={[styles.bottomStack, { bottom: bottomInset }, chromeOpacity]}
        pointerEvents="box-none"
      >
        {post.images.length > 1 ? (
          <View style={styles.dotsRow}>
            <CarouselDots
              count={post.images.length}
              activeIndex={imageIndex}
              activeColor="#FFFFFF"
              inactiveColor="rgba(255, 255, 255, 0.4)"
            />
          </View>
        ) : null}

        <View style={styles.contentRow}>
          <View style={styles.copy}>
            <Text style={styles.title}>{post.title}</Text>
            <FeedDescription text={post.description} />
          </View>

          <Pressable
            onPress={onShare}
            accessibilityRole="button"
            accessibilityLabel="Compartilhar notícia"
            style={({ pressed }) => [styles.shareBtn, pressed && styles.shareBtnPressed]}
          >
            <PaperPlaneTilt size={30} color="#FFFFFF" weight="regular" />
          </Pressable>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  bottomOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '68%',
    zIndex: 1,
  },
  bottomStack: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 2,
    alignItems: 'center',
  },
  dotsRow: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
  },
  contentRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    gap: 12,
  },
  copy: {
    flex: 1,
    gap: 10,
    paddingBottom: 2,
  },
  title: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 22,
    lineHeight: 28,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  shareBtn: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  shareBtnPressed: {
    opacity: 0.65,
  },
})
