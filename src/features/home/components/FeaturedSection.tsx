import { Image } from 'expo-image'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FEATURED } from '../data/mock'
import { useHomePalette } from '../hooks/useHomePalette'
import { homeLayout, radius, spacing } from '@/theme/tokens'
import { fontFamily, typography } from '@/theme/typography'

export function FeaturedSection() {
  const palette = useHomePalette()
  const f = palette.featured

  return (
    <View style={styles.wrap}>
      <View style={[styles.sectionBar, { backgroundColor: f.sectionBarBg }]}>
        <Text style={[styles.sectionBarText, typography.eyebrow, { color: palette.section.eyebrow }]}>
          EM DESTAQUE
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={FEATURED.title}
        style={({ pressed }) => [{ opacity: pressed ? 0.97 : 1 }]}
      >
        <View style={[styles.block, { backgroundColor: f.cardBg }]}>
          <View style={styles.imageWrap}>
            <Image
              source={{ uri: FEATURED.imageUri }}
              style={styles.image}
              contentFit="cover"
              transition={300}
            />
            <View style={[styles.tag, { backgroundColor: f.tagBg }]}>
              <Text style={[styles.tagText, typography.captionMono, { color: f.tagText }]}>
                {FEATURED.tag}
              </Text>
            </View>
          </View>

          <View style={[styles.body, { paddingHorizontal: spacing.screenX }]}>
            {FEATURED.meta ? (
              <Text style={[styles.meta, typography.eyebrow, { color: f.meta }]}>{FEATURED.meta}</Text>
            ) : null}
            <Text style={[styles.title, { color: f.title }]}>{FEATURED.title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.sectionGap,
  },
  sectionBar: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: spacing.screenX,
  },
  sectionBarText: {},
  block: {
    width: '100%',
    overflow: 'hidden',
  },
  imageWrap: {
    width: '100%',
    height: homeLayout.featuredImageHeight,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  tag: {
    position: 'absolute',
    bottom: 14,
    left: spacing.screenX,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.sm,
  },
  tagText: {},
  body: {
    paddingTop: 14,
    paddingBottom: 16,
    gap: 4,
  },
  meta: {},
  title: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
  },
})
