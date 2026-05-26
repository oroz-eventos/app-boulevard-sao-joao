import { Pressable, StyleSheet, Text, View } from 'react-native'
import { CaretRight, MagnifyingGlass } from 'phosphor-react-native'
import type { SearchSpotlight } from '../types'
import { useSearchPalette } from '../hooks/useSearchPalette'
import { fontFamily, typography } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

type SearchHighlightCardProps = {
  spotlight: SearchSpotlight
  onPress: () => void
}

export function SearchHighlightCard({ spotlight, onPress }: SearchHighlightCardProps) {
  const palette = useSearchPalette()

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Buscar por ${spotlight.queryText}`}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: palette.cardBg,
          borderColor: palette.cardBorder,
          opacity: pressed ? 0.94 : 1,
        },
      ]}
    >
      <View style={styles.content}>
        <View style={[styles.badge, { backgroundColor: palette.accentMuted.brand }]}>
          <Text style={[styles.badgeText, { color: palette.action }]}>{spotlight.eyebrow}</Text>
        </View>

        <Text style={[styles.title, { color: palette.cardTitle }]}>{spotlight.title}</Text>
        <Text style={[styles.subtitle, { color: palette.cardSubtitle }]}>{spotlight.subtitle}</Text>

        <View style={styles.ctaRow}>
          <MagnifyingGlass size={14} color={palette.action} weight="bold" />
          <Text style={[styles.ctaText, { color: palette.action }]}>
            Buscar por {spotlight.queryText}
          </Text>
        </View>
      </View>
      <CaretRight size={18} color={palette.cardMeta} weight="bold" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.xxl,
    padding: spacing.screenX,
    minHeight: 108,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    minWidth: 0,
    gap: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.full,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeText: {
    ...typography.captionMono,
  },
  title: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  subtitle: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    lineHeight: 18,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  ctaText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
})
