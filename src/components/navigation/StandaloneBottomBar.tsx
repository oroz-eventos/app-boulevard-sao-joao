import { usePathname, useRouter } from 'expo-router'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, colorsDark } from '@/theme/colors'
import { fontFamily } from '@/theme/typography'
import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'
import { BOTTOM_NAV_ITEMS } from './bottomNavConfig'
import { FeaturedInterajaIcon } from './FeaturedInterajaIcon'

type StandaloneBottomBarProps = {
  variant?: 'default' | 'overlay'
}

export function StandaloneBottomBar({ variant = 'default' }: StandaloneBottomBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const insets = useSafeAreaInsets()
  const { resolvedTheme } = useThemePreferenceContext()
  const isDark = resolvedTheme === 'dark'

  const activeColor =
    variant === 'overlay'
      ? '#FFFFFF'
      : isDark
        ? colorsDark.primary.clear
        : colors.primary.main
  const inactiveColor =
    variant === 'overlay'
      ? 'rgba(255, 255, 255, 0.62)'
      : isDark
        ? colorsDark.text.tertiary
        : colors.text.tertiary
  const border =
    variant === 'overlay'
      ? 'rgba(255, 255, 255, 0.14)'
      : isDark
        ? 'rgba(255, 255, 255, 0.08)'
        : colors.bg.divider
  const bg =
    variant === 'overlay' ? 'transparent' : isDark ? colorsDark.bg.app : colors.bg.app
  const bottomPad = Platform.OS === 'web' ? 12 : Math.max(insets.bottom, 6)

  const activeId =
    pathname === '/'
      ? 'index'
      : pathname === '/feed'
        ? 'feed'
        : pathname === '/interaja'
          ? 'interaja'
          : pathname === '/vantagens'
            ? 'vantagens'
            : pathname === '/busca'
              ? 'busca'
              : null

  return (
    <View style={[styles.bar, { backgroundColor: bg, borderTopColor: border, paddingBottom: bottomPad }]}>
      {BOTTOM_NAV_ITEMS.map((item) => {
        const isFocused = activeId === item.id
        const color = isFocused ? activeColor : inactiveColor

        if (item.featured) {
          return (
            <Pressable
              key={item.id}
              onPress={() => router.replace(item.href as never)}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={item.label}
              style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
            >
              <FeaturedInterajaIcon
                Icon={item.Icon}
                iconColor="#FFFFFF"
                isDark={isDark}
              />
              <Text style={[styles.label, { color }]} numberOfLines={1}>
                {item.label}
              </Text>
            </Pressable>
          )
        }

        return (
          <Pressable
            key={item.id}
            onPress={() => router.replace(item.href as never)}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={item.label}
            style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
          >
            <item.Icon size={22} color={color} weight={isFocused ? 'fill' : 'regular'} />
            <Text style={[styles.label, { color }]} numberOfLines={1}>
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
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 8,
    minHeight: 56,
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
    fontFamily: fontFamily.body,
    fontSize: 11,
    lineHeight: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
})
