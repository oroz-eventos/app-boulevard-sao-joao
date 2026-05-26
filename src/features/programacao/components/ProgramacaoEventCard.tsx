import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import type { ProgramacaoEvent } from '../types'
import { useProgramacaoPalette } from '../hooks/useProgramacaoPalette'
import { fontFamily } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

type ProgramacaoEventCardProps = {
  event: ProgramacaoEvent
}

export function ProgramacaoEventCard({ event }: ProgramacaoEventCardProps) {
  const palette = useProgramacaoPalette()

  return (
    <View style={[styles.card, { backgroundColor: palette.cardBg, borderColor: palette.cardBorder }]}>
      <Image source={{ uri: event.imageUri }} style={styles.image} contentFit="cover" />
      <View style={styles.body}>
        <View style={[styles.badge, { backgroundColor: palette.badgeBg }]}>
          <Text style={[styles.badgeText, { color: palette.badgeText }]}>{event.badge}</Text>
        </View>
        <Text style={[styles.title, { color: palette.title }]}>{event.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: '100%',
    aspectRatio: 1.54,
  },
  body: {
    paddingHorizontal: spacing.screenX,
    paddingTop: 10,
    paddingBottom: 18,
    gap: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  badgeText: {
    fontFamily: fontFamily.mono,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6,
  },
  title: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
  },
})
