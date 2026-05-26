import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { Sparkle, Question, UsersThree, VideoCamera } from 'phosphor-react-native'
import type { InterajaSlide } from '../types'
import { useInterajaPalette } from '../hooks/useInterajaPalette'
import { fontFamily } from '@/theme/typography'
import { radius } from '@/theme/tokens'

type InterajaSlideCardProps = {
  item: InterajaSlide
  width: number
  slideHeight: number
}

function formatExpiryLabel(expiresInHours: number) {
  if (expiresInHours > 24) {
    const days = Math.max(1, Math.floor(expiresInHours / 24))
    return `Expira em: ${days} ${days === 1 ? 'dia' : 'dias'}`
  }

  const hours = Math.max(1, Math.floor(expiresInHours))
  return `Expira em: ${hours}h`
}

export function InterajaSlideCard({ item, width, slideHeight }: InterajaSlideCardProps) {
  const palette = useInterajaPalette()
  const HeroIcon =
    item.kind === 'ar' ? Sparkle : item.kind === 'quiz' ? Question : VideoCamera
  const expiryLabel = formatExpiryLabel(item.expiresInHours)

  return (
    <View style={[styles.card, { width, height: slideHeight }]}>
      <View
        style={[
          styles.imageWrap,
          {
            backgroundColor: palette.cardBg,
            borderColor: palette.cardBorder,
          },
        ]}
      >
        <Image source={{ uri: item.imageUri }} style={styles.image} contentFit="cover" />
      </View>

      <View
        style={[
          styles.banner,
          {
            backgroundColor: palette.bannerBg,
            borderColor: palette.bannerBorder,
          },
        ]}
      >
        <Text style={[styles.metaText, { color: palette.bannerMetaText }]}>{expiryLabel}</Text>

        <View style={styles.titleRow}>
          <HeroIcon size={18} color={palette.imageIconText} weight="bold" />
          <Text style={[styles.title, { color: palette.bannerTitle }]}>{item.title}</Text>
        </View>

        <Text style={[styles.participantText, { color: palette.participantText }]}>
          {item.participantsLabel}
        </Text>

        <Text style={[styles.description, { color: palette.bannerBody }]}>{item.description}</Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`${item.actionLabel}: ${item.title}`}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: palette.buttonBg, opacity: pressed ? 0.9 : 1 },
          ]}
        >
          <Text style={[styles.buttonText, { color: palette.buttonText }]}>{item.actionLabel}</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    gap: 14,
  },
  imageWrap: {
    flex: 1,
    minHeight: 260,
    borderRadius: radius.xxl,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  banner: {
    borderRadius: radius.xxl,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 18,
    gap: 10,
    alignItems: 'flex-start',
  },
  metaText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    flex: 1,
  },
  participantText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
  description: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    alignSelf: 'flex-start',
    borderRadius: radius.full,
    minWidth: 132,
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 11,
    marginTop: 4,
  },
  buttonText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
  },
})
