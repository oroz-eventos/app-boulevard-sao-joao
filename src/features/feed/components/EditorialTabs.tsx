import { useCallback, useEffect, useState } from 'react'
import { LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { EDITORIAL_TABS } from '../data/mock'
import type { EditorialLineId } from '../types'
import { fontFamily } from '@/theme/typography'

type TabLayout = { x: number; width: number }

type EditorialTabsProps = {
  activeId: EditorialLineId
  onChange: (id: EditorialLineId) => void
}

const SPRING = { damping: 22, stiffness: 280, mass: 0.8 }

export function EditorialTabs({ activeId, onChange }: EditorialTabsProps) {
  const [layouts, setLayouts] = useState<Partial<Record<EditorialLineId, TabLayout>>>({})
  const indicatorX = useSharedValue(0)
  const indicatorWidth = useSharedValue(0)

  const onTabLayout = useCallback((id: EditorialLineId, e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout
    setLayouts((prev) => ({ ...prev, [id]: { x, width } }))
  }, [])

  useEffect(() => {
    const layout = layouts[activeId]
    if (!layout) return
    indicatorX.value = withSpring(layout.x, SPRING)
    indicatorWidth.value = withSpring(layout.width, SPRING)
  }, [activeId, indicatorWidth, indicatorX, layouts])

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
    width: indicatorWidth.value,
  }))

  return (
    <View style={styles.wrap}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.tabsRow}>
          {EDITORIAL_TABS.map((tab) => {
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
                <Text style={[styles.label, isActive ? styles.labelActive : styles.labelInactive]}>
                  {tab.label}
                </Text>
              </Pressable>
            )
          })}
          <Animated.View style={[styles.indicator, indicatorStyle]} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 12,
  },
  scroll: {
    paddingHorizontal: 16,
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 20,
    paddingBottom: 10,
  },
  tab: {
    paddingBottom: 8,
  },
  label: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 14,
    lineHeight: 18,
  },
  labelActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  labelInactive: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '500',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
  },
})
