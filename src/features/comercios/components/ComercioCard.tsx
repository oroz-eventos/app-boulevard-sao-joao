import { Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { Clock, GlobeHemisphereWest, InstagramLogo, MapPin } from 'phosphor-react-native'
import { useRouter } from 'expo-router'
import { COMERCIO_FILTERS } from '../data/mock'
import type { ComercioStore } from '../types'
import { useComerciosPalette } from '../hooks/useComerciosPalette'
import { fontFamily } from '@/theme/typography'
import { radius, spacing } from '@/theme/tokens'

type ComercioCardProps = {
  store: ComercioStore
}

export function ComercioCard({ store }: ComercioCardProps) {
  const router = useRouter()
  const palette = useComerciosPalette()
  const logoTone = palette.logo[store.logoTone]
  const categoryLabel = COMERCIO_FILTERS.find((filter) => filter.id === store.category)?.label ?? store.category

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
      <View style={styles.imageWrap}>
        <Image source={{ uri: store.facadeImageUri }} style={styles.image} contentFit="cover" />
        {store.discountLabel ? (
          <View pointerEvents="none" style={styles.discountOverlay}>
            <View style={[styles.discountChip, { backgroundColor: palette.discountBg }]}>
              <Text style={[styles.discountText, { color: palette.discountText }]}>
                {store.discountLabel}
              </Text>
            </View>
          </View>
        ) : null}
      </View>

      <View style={styles.metaRow}>
        <Text style={[styles.category, { color: palette.chipText }]}>{categoryLabel}</Text>
        <Pressable
          onPress={() => router.push(store.mapRoute)}
          accessibilityRole="button"
          accessibilityLabel={`Ver ${store.name} no mapa`}
          style={styles.mapButton}
        >
          <MapPin size={14} color={palette.action} weight="bold" />
          <Text style={[styles.mapButtonText, { color: palette.action }]}>Ver no mapa</Text>
        </Pressable>
      </View>

      <View style={styles.copy}>
        <Text style={[styles.title, { color: palette.title }]}>{store.name}</Text>
        <Text style={[styles.summary, { color: palette.body }]} numberOfLines={3}>
          {store.summary}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <MapPin size={14} color={palette.muted} weight="bold" />
          <Text style={[styles.infoText, { color: palette.muted }]} numberOfLines={1}>
            {store.addressLine}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Clock size={14} color={palette.muted} weight="bold" />
          <Text style={[styles.infoText, { color: palette.muted }]} numberOfLines={1}>
            {store.openingHours}
          </Text>
        </View>
      </View>

      <View style={styles.brandRow}>
        <View style={[styles.brandAvatar, { backgroundColor: logoTone.bg }]}>
          <Text style={[styles.brandAvatarText, { color: logoTone.text }]}>{store.logoText}</Text>
        </View>
        <View style={styles.links}>
          {store.instagramUrl ? (
            <Pressable
              onPress={() => openExternal(store.instagramUrl)}
              accessibilityRole="button"
              accessibilityLabel={`Abrir Instagram de ${store.name}`}
              style={styles.linkButton}
            >
              <InstagramLogo size={15} color={palette.outlineButtonText} weight="bold" />
              <Text style={[styles.linkText, { color: palette.outlineButtonText }]}>Instagram</Text>
            </Pressable>
          ) : null}
          {store.websiteUrl ? (
            <Pressable
              onPress={() => openExternal(store.websiteUrl)}
              accessibilityRole="button"
              accessibilityLabel={`Abrir site de ${store.name}`}
              style={styles.linkButton}
            >
              <GlobeHemisphereWest size={15} color={palette.outlineButtonText} weight="bold" />
              <Text style={[styles.linkText, { color: palette.outlineButtonText }]}>Website</Text>
            </Pressable>
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
    gap: 14,
  },
  imageWrap: {
    borderRadius: radius.xl,
    overflow: 'hidden',
    position: 'relative',
  },
  discountOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 3,
  },
  discountChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radius.full,
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  discountText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  image: {
    width: '100%',
    height: 154,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  category: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
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
  copy: {
    gap: 6,
  },
  title: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  summary: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
  },
  infoRow: {
    gap: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    flex: 1,
    fontFamily: fontFamily.body,
    fontSize: 12,
    lineHeight: 16,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
  links: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 2,
  },
  linkText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
})
