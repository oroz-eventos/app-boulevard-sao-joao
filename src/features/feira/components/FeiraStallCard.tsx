import { Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import {
  GlobeHemisphereWest,
  HandHeart,
  InstagramLogo,
  Leaf,
  MapPin,
  Plant,
  Recycle,
} from 'phosphor-react-native'
import { useRouter } from 'expo-router'
import { FEIRA_CERTIFICATIONS, FEIRA_FILTERS } from '../data/mock'
import type { FeiraStall } from '../types'
import { useFeiraPalette } from '../hooks/useFeiraPalette'
import { fontFamily } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

type FeiraStallCardProps = {
  stall: FeiraStall
}

export function FeiraStallCard({ stall }: FeiraStallCardProps) {
  const router = useRouter()
  const palette = useFeiraPalette()
  const logoTone = palette.logo[stall.logoTone]
  const categoryLabel = FEIRA_FILTERS.find((filter) => filter.id === stall.category)?.label ?? stall.category

  const openExternal = async (url?: string) => {
    if (!url) return
    try {
      await Linking.openURL(url)
    } catch {
      /* noop */
    }
  }

  return (
    <View style={[styles.card, { backgroundColor: palette.cardBg, borderColor: palette.cardBorder }]}>
      <View style={styles.galleryShell}>
        <View style={styles.galleryRow}>
          {stall.galleryImageUris.map((uri, index) => (
            <Image key={`${stall.id}-${index}`} source={{ uri }} style={styles.galleryImage} contentFit="cover" />
          ))}
        </View>
        <View style={styles.galleryMetaRow}>
          <Text style={[styles.categoryChipText, { color: palette.chipText }]}>{categoryLabel}</Text>
          <View style={styles.locatorRow}>
            <View style={[styles.numberChip, { backgroundColor: palette.cardBg }]}>
              <Text style={[styles.numberChipText, { color: palette.chipText }]}>{stall.number}</Text>
            </View>
            <Pressable
              onPress={() => router.push(stall.mapRoute)}
              accessibilityRole="button"
              accessibilityLabel={`Ver ${stall.name} no mapa`}
              style={styles.mapButton}
            >
              <MapPin size={14} color={palette.action} weight="bold" />
              <Text style={[styles.mapButtonText, { color: palette.action }]}>Ver no mapa</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.copy}>
        <Text style={[styles.title, { color: palette.title }]} numberOfLines={1}>
          {stall.mapLabel}
        </Text>
        <Text style={[styles.summary, { color: palette.body }]} numberOfLines={3}>
          {stall.summary}
        </Text>
      </View>

      {stall.certifications.length > 0 ? (
        <View style={styles.certRow}>
          {stall.certifications.map((certificationId) => {
            const certification = FEIRA_CERTIFICATIONS[certificationId]
            const Icon =
              certificationId === 'sustentavel'
                ? Recycle
                : certificationId === 'vegano'
                  ? Plant
                  : certificationId === 'organico'
                    ? Leaf
                    : certificationId === 'producao-local'
                      ? MapPin
                      : HandHeart

            return (
              <View
                key={certificationId}
                style={styles.certChip}
              >
                <Icon size={12} color={palette.certIcon} weight="bold" />
                <Text style={[styles.certText, { color: palette.certText }]}>
                  {certification.label}
                </Text>
              </View>
            )
          })}
        </View>
      ) : null}

      <View style={styles.brandRow}>
        <View style={[styles.brandAvatar, { backgroundColor: logoTone.bg }]}>
          <Text style={[styles.brandAvatarText, { color: logoTone.text }]}>{stall.logoText}</Text>
        </View>
        <View style={styles.brandCopy}>
          <View style={styles.brandHeaderRow}>
            <Text style={[styles.brandName, { color: palette.title }]} numberOfLines={1}>
              {stall.name}
            </Text>
          </View>
          {(stall.instagramUrl || stall.websiteUrl) ? (
            <View style={styles.externalButtons}>
              {stall.instagramUrl ? (
                <Pressable
                  onPress={() => openExternal(stall.instagramUrl)}
                  accessibilityRole="button"
                  accessibilityLabel={`Abrir Instagram de ${stall.name}`}
                  style={styles.linkButton}
                >
                  <InstagramLogo size={15} color={palette.outlineButtonText} weight="bold" />
                  <Text style={[styles.linkButtonText, { color: palette.outlineButtonText }]}>
                    Instagram
                  </Text>
                </Pressable>
              ) : null}

              {stall.websiteUrl ? (
                <Pressable
                  onPress={() => openExternal(stall.websiteUrl)}
                  accessibilityRole="button"
                  accessibilityLabel={`Abrir site de ${stall.name}`}
                  style={styles.linkButton}
                >
                  <GlobeHemisphereWest size={15} color={palette.outlineButtonText} weight="bold" />
                  <Text style={[styles.linkButtonText, { color: palette.outlineButtonText }]}>
                    Website
                  </Text>
                </Pressable>
              ) : null}
            </View>
          ) : null}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.xl,
    padding: spacing.screenX,
    gap: 16,
  },
  galleryShell: {
    gap: 10,
  },
  galleryRow: {
    flexDirection: 'row',
    gap: 6,
    minHeight: 112,
  },
  galleryImage: {
    flex: 1,
    height: 112,
    borderRadius: radius.lg,
  },
  galleryMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  locatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  copy: {
    gap: 6,
  },
  categoryChipText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingTop: 2,
  },
  brandAvatar: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandAvatarText: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '700',
  },
  brandCopy: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },
  brandHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 0,
  },
  numberChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.full,
  },
  numberChipText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
  brandName: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
  },
  title: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  summary: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    lineHeight: 18,
  },
  certRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  certChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  certText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
  externalButtons: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 2,
  },
  linkButtonText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mapButtonText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
})
