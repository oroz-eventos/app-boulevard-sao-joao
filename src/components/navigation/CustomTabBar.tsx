import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useRouter } from 'expo-router'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import type { IconProps } from 'phosphor-react-native'
import { colors, colorsDark } from '@/theme/colors'
import { fontFamily } from '@/theme/typography'
import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { BOTTOM_NAV_ITEMS } from './bottomNavConfig'
import { FeaturedInterajaIcon } from './FeaturedInterajaIcon'

/** Percent em fill vira um bloco sólido; Gift fica legível com bold */
function getIconWeight(route: string, isFocused: boolean): IconProps['weight'] {
  if (route === 'vantagens') return isFocused ? 'bold' : 'regular'
  return isFocused ? 'fill' : 'regular'
}

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const { resolvedTheme } = useThemePreferenceContext()
  const isDark = resolvedTheme === 'dark'
  const currentRoute = state.routes[state.index]?.name
  const isFeedTab = currentRoute === 'feed'

  const activeColor = isFeedTab
    ? '#FFFFFF'
    : isDark
      ? colorsDark.primary.clear
      : colors.primary.main
  const inactiveColor = isFeedTab
    ? 'rgba(255, 255, 255, 0.55)'
    : isDark
      ? colorsDark.text.tertiary
      : colors.text.tertiary
  const bg = isFeedTab ? 'transparent' : isDark ? colorsDark.bg.app : colors.bg.app
  const border = isFeedTab ? 'transparent' : isDark ? 'rgba(255, 255, 255, 0.08)' : colors.bg.divider

  const bottomPad = Platform.OS === 'web' ? 12 : Math.max(insets.bottom, 6)

  return (
    <View
      style={[
        styles.bar,
        isFeedTab && styles.barFloating,
        { backgroundColor: bg, borderTopColor: border, paddingBottom: bottomPad },
      ]}
      pointerEvents="box-none"
    >
      {BOTTOM_NAV_ITEMS.map((item) => {
        const isFocused = item.tabRoute ? currentRoute === item.tabRoute : false
        const color = isFocused ? activeColor : inactiveColor
        const iconWeight = getIconWeight(item.id, isFocused)

        const onPress = () => {
          if (item.id === 'interaja') {
            router.push(item.href as never)
            return
          }

          const route = state.routes.find((candidate) => candidate.name === item.tabRoute)
          if (!route || !item.tabRoute) return

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(item.tabRoute)
          }
        }

        if (item.featured) {
          return (
            <Pressable
              key={item.id}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={item.label}
              onPress={onPress}
              style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
            >
              <FeaturedInterajaIcon
                Icon={item.Icon}
                iconColor="#FFFFFF"
                isDark={isDark}
              />
              <Text
                style={[
                  styles.label,
                  {
                    color,
                    fontFamily: fontFamily.body,
                    fontWeight: isFocused ? '600' : '500',
                  },
                ]}
                numberOfLines={1}
              >
                {item.label}
              </Text>
            </Pressable>
          )
        }

        return (
          <Pressable
            key={item.id}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={item.label}
            onPress={onPress}
            style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
          >
            <item.Icon size={22} color={color} weight={iconWeight} />
            <Text
              style={[
                styles.label,
                {
                  color,
                  fontFamily: fontFamily.body,
                  fontWeight: isFocused ? '600' : '500',
                },
              ]}
              numberOfLines={1}
            >
              {item.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 8,
    minHeight: 56,
  },
  barFloating: {
    borderTopWidth: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 4,
  },
  itemPressed: {
    opacity: 0.75,
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    textAlign: 'center',
  },
})
