import { Pressable, StyleSheet, Text, View } from 'react-native'
import { ArrowSquareOut } from 'phosphor-react-native'
import type { AdvantageOffer } from '../types'
import { useVantagensPalette } from '../hooks/useVantagensPalette'
import { fontFamily } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

type OfferCardProps = {
  offer: AdvantageOffer
  onPress?: () => void
}

export function OfferCard({ offer, onPress }: OfferCardProps) {
  const palette = useVantagensPalette()

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${offer.discountLabel} em ${offer.venue}`}
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
        <Text style={[styles.discount, { color: palette.discount }]}>{offer.discountLabel}</Text>
        <Text style={[styles.condition, { color: palette.body }]}>{offer.condition}</Text>
        <Text style={[styles.venue, { color: palette.venue }]}>{offer.venue}</Text>
        <Text style={[styles.expires, { color: palette.muted }]}>{offer.expiresLabel}</Text>
      </View>
      <ArrowSquareOut size={20} color={palette.icon} weight="regular" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
    padding: spacing.screenX,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
  },
  content: {
    flex: 1,
    gap: 4,
    minWidth: 0,
  },
  discount: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
  },
  condition: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    lineHeight: 18,
  },
  venue: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    marginTop: 4,
  },
  expires: {
    fontFamily: fontFamily.body,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 2,
  },
})
