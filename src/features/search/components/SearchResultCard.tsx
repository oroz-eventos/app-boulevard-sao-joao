import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import {
  CalendarBlank,
  CaretRight,
  Gift,
  PlayCircle,
  Storefront,
  ForkKnife,
} from 'phosphor-react-native'
import type { SearchResultItem } from '../types'
import { useSearchPalette } from '../hooks/useSearchPalette'
import { SEARCH_FILTER_LABELS } from '../data/mock'
import { fontFamily, typography } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

type SearchResultCardProps = {
  item: SearchResultItem
  onPress?: () => void
}

export function SearchResultCard({ item, onPress }: SearchResultCardProps) {
  const palette = useSearchPalette()
  const accentColor = palette.accent[item.accent]
  const metaLabel =
    item.filterId === 'vantagens'
      ? 'Vantagens'
      : item.filterId === 'lojas'
        ? 'Lojas'
        : item.filterId === 'programacao'
          ? 'Programação'
          : item.filterId === 'gastronomia'
            ? 'Gastronomia'
            : 'Feed'

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${item.title}. ${item.subtitle}`}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: palette.cardBg,
          borderColor: palette.cardBorder,
          opacity: pressed ? 0.94 : 1,
        },
      ]}
    >
      {item.imageUri ? (
        <Image source={item.imageUri} style={styles.thumb} contentFit="cover" />
      ) : (
        <View style={[styles.thumbFallback, { borderColor: palette.cardBorder }]}>
          {item.filterId === 'vantagens' ? (
            <Gift size={18} color={accentColor} weight="bold" />
          ) : item.filterId === 'lojas' ? (
            <Storefront size={18} color={accentColor} weight="bold" />
          ) : item.filterId === 'programacao' ? (
            <CalendarBlank size={18} color={accentColor} weight="bold" />
          ) : item.filterId === 'gastronomia' ? (
            <ForkKnife size={18} color={accentColor} weight="bold" />
          ) : (
            <PlayCircle size={18} color={accentColor} weight="bold" />
          )}
        </View>
      )}

      <View style={styles.content}>
        <Text style={[styles.title, { color: palette.cardTitle }]}>{item.title}</Text>
        <Text style={[styles.metaLine, { color: palette.cardSubtitle }]} numberOfLines={1}>
          <Text style={[styles.metaLabel, { color: accentColor }]}>{metaLabel}</Text>
          {' • '}
          {item.meta}
        </Text>
        <Text style={[styles.badgeLine, { color: palette.cardMeta }]} numberOfLines={1}>
          {item.badge}
        </Text>
      </View>

      <CaretRight size={18} color={palette.cardMeta} weight="bold" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.xl,
    padding: spacing.screenX,
  },
  content: {
    flex: 1,
    minWidth: 0,
    gap: 2,
  },
  thumb: {
    width: 82,
    height: 82,
    borderRadius: radius.xl,
    backgroundColor: '#EDECF3',
  },
  thumbFallback: {
    width: 82,
    height: 82,
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  metaLine: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  metaLabel: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
  badgeLine: {
    ...typography.caption,
  },
  title: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
})
