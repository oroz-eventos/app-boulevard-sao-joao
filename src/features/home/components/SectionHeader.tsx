import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useHomePalette } from '../hooks/useHomePalette'
import { typography } from '@/theme/typography'
import { spacing } from '@/theme/tokens'

type SectionHeaderProps = {
  title: string
  actionLabel?: string
  onAction?: () => void
}

export function SectionHeader({
  title,
  actionLabel = 'Ver mais',
  onAction,
}: SectionHeaderProps) {
  const palette = useHomePalette()
  const s = palette.section

  return (
    <View style={styles.row}>
      <Text style={[styles.title, typography.title3, { color: s.title }]}>{title}</Text>
      {onAction ? (
        <Pressable onPress={onAction} hitSlop={8} accessibilityRole="button">
          <Text style={[styles.link, typography.subtitle, { color: s.link }]}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.screenX,
    marginBottom: spacing.sectionHeaderBottom,
  },
  title: {},
  link: {},
})
