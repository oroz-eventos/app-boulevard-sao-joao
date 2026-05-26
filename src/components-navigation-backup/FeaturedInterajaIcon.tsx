import { useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, View } from 'react-native'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'
import type { ComponentType } from 'react'
import type { IconProps } from 'phosphor-react-native'
import { colors, colorsDark } from '@/theme/colors'

type FeaturedInterajaIconProps = {
  Icon: ComponentType<IconProps>
  iconColor: string
  isDark?: boolean
}

export function FeaturedInterajaIcon({
  Icon,
  iconColor,
  isDark = false,
}: FeaturedInterajaIconProps) {
  const rotation = useRef(new Animated.Value(0)).current
  const gradientId = useRef(`interaja-fill-${Math.random().toString(36).slice(2)}`).current

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3800,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    )

    loop.start()
    return () => loop.stop()
  }, [rotation])

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View style={styles.wrap}>
      <View style={styles.clip}>
        <Animated.View style={[styles.gradientWrap, { transform: [{ rotate: spin }] }]}>
          <Svg width="68" height="68" viewBox="0 0 68 68">
            <Defs>
              <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                <Stop offset="0" stopColor={colors.primary.main} />
                <Stop offset="0.45" stopColor={isDark ? colorsDark.primary.clear : colors.primary.clear} />
                <Stop offset="1" stopColor={colors.accent.accent2} />
              </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width="68" height="68" fill={`url(#${gradientId})`} />
          </Svg>
        </Animated.View>
      </View>

      <View style={styles.iconLayer}>
        <Icon size={20} color={iconColor} weight="bold" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clip: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOpacity: 0.16,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  gradientWrap: {
    position: 'absolute',
    top: -10,
    left: -10,
    width: 68,
    height: 68,
  },
  iconLayer: {
    position: 'absolute',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
