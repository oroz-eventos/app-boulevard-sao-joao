import { useMemo, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StandaloneBottomBar } from '@/components/navigation/StandaloneBottomBar'
import { HorizontalFilterChips } from '@/components/ui/HorizontalFilterChips'
import {
  TopDisplayHeader,
  TOP_DISPLAY_HEADER_SCREEN_PADDING,
} from '@/components/ui/TopDisplayHeader'
import { NOTIFICATION_FILTERS, NOTIFICATION_ITEMS } from '../data/mock'
import { useNotificationsPalette } from '../hooks/useNotificationsPalette'
import type { NotificationFilterId } from '../types'
import { NotificationCard } from './NotificationCard'
import { fontFamily } from '@/theme/typography'
import { spacing } from '@/theme/tokens'

const TAB_BAR_HEIGHT = 56

export function NotificationsScreen() {
  const insets = useSafeAreaInsets()
  const palette = useNotificationsPalette()
  const [activeFilter, setActiveFilter] = useState<NotificationFilterId>('todas')

  const items = useMemo(() => {
    if (activeFilter === 'todas') return NOTIFICATION_ITEMS
    return NOTIFICATION_ITEMS.filter((item) =>
      activeFilter === 'novas' ? item.status === 'new' : item.status === 'read'
    )
  }, [activeFilter])

  return (
    <View style={[styles.root, { backgroundColor: palette.pageBg }]}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + TOP_DISPLAY_HEADER_SCREEN_PADDING,
            paddingBottom: TAB_BAR_HEIGHT + Math.max(insets.bottom, 8) + spacing.sectionGap,
          },
        ]}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.headerContent}>
            <TopDisplayHeader title="NOTIFICAÇÕES" color={palette.action} />
            <HorizontalFilterChips
              items={NOTIFICATION_FILTERS}
              activeId={activeFilter}
              onChange={setActiveFilter}
              colors={{
                activeBg: palette.filterActiveBg,
                activeText: palette.filterActiveText,
                inactiveBg: palette.filterBg,
                inactiveText: palette.filterText,
                border: palette.filterBorder,
              }}
            />
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <Text style={[styles.emptyTitle, { color: palette.title }]}>
              Nada por aqui
            </Text>
            <Text style={[styles.emptyBody, { color: palette.body }]}>
              Não há notificações nessa aba no momento.
            </Text>
          </View>
        }
        renderItem={({ item }) => <NotificationCard item={item} />}
      />
      <StandaloneBottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.screenX,
  },
  headerContent: {
    gap: 16,
    marginBottom: 24,
  },
  separator: {
    height: 12,
  },
  emptyWrap: {
    paddingVertical: 28,
    alignItems: 'center',
    gap: 6,
  },
  emptyTitle: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  emptyBody: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
})
