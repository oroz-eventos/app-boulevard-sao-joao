import { StyleSheet, Text, View } from 'react-native'
import {
  BellRinging,
  CalendarBlank,
  Gift,
  MapPin,
  Storefront,
  Ticket,
} from 'phosphor-react-native'
import type { NotificationItem } from '../types'
import { useNotificationsPalette } from '../hooks/useNotificationsPalette'
import { fontFamily } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

type NotificationCardProps = {
  item: NotificationItem
}

export function NotificationCard({ item }: NotificationCardProps) {
  const palette = useNotificationsPalette()

  const Icon =
    item.kind === 'programacao'
      ? CalendarBlank
      : item.kind === 'vantagens'
        ? Gift
        : item.kind === 'mapa'
          ? MapPin
          : item.kind === 'lojas'
            ? Storefront
            : item.kind === 'feira'
              ? Ticket
              : BellRinging

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: item.status === 'new' ? palette.cardNewBg : palette.cardBg,
          borderColor: palette.cardBorder,
        },
      ]}
    >
      <View
        style={[
          styles.iconWrap,
          { backgroundColor: palette.iconBg },
        ]}
      >
        <Icon size={18} color={palette.iconText} weight="bold" />
      </View>

      <View style={styles.copy}>
        <View style={styles.topRow}>
          <Text style={[styles.title, { color: palette.title }]} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={[styles.time, { color: palette.time }]}>{item.timeAgo}</Text>
        </View>

        <Text style={[styles.description, { color: palette.body }]}>{item.description}</Text>

        {item.status === 'new' ? (
          <View style={styles.metaRow}>
            <View style={[styles.unreadDot, { backgroundColor: palette.unreadDot }]} />
            <Text style={[styles.metaText, { color: palette.action }]}>Nova</Text>
          </View>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.xl,
    padding: spacing.screenX,
    flexDirection: 'row',
    gap: 12,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  copy: {
    flex: 1,
    gap: 6,
    minWidth: 0,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  title: {
    flex: 1,
    fontFamily: fontFamily.bodyMedium,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
  },
  time: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
  description: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  unreadDot: {
    width: 7,
    height: 7,
    borderRadius: radius.full,
  },
  metaText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
})
