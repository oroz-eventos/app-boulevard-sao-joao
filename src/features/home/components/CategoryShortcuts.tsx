import { useRouter, type Href } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { CATEGORY_SHORTCUTS } from '../data/mock'
import { categoryIconMap } from '../icons/categoryIcons'
import { useHomePalette } from '../hooks/useHomePalette'
import { homeLayout, radius, spacing } from '@/theme/tokens'
import { typography } from '@/theme/typography'

const COLS = 4
const ROWS = 2
const ROW_GAP = 16
const COL_GAP = spacing.cardGap
const ICON_SIZE = 26

/** Grid 4 colunas — primeira linha cheia, segunda com os atalhos restantes */
const GRID_ROWS = [
  CATEGORY_SHORTCUTS.slice(0, COLS),
  CATEGORY_SHORTCUTS.slice(COLS, COLS * ROWS),
] as const

type CategoryCellProps = {
  label: string
  iconName: (typeof CATEGORY_SHORTCUTS)[number]['icon']
  tileBg: string
  tileBorder: string
  tileBorderWidth: number
  iconColor: string
  labelColor: string
  onPress: () => void
}

function CategoryCell({
  label,
  iconName,
  tileBg,
  tileBorder,
  tileBorderWidth,
  iconColor,
  labelColor,
  onPress,
}: CategoryCellProps) {
  const Icon = categoryIconMap[iconName]

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [styles.cell, pressed && styles.cellPressed]}
    >
      <View
        style={[
          styles.tile,
          {
            backgroundColor: tileBg,
            borderColor: tileBorder,
            borderWidth: tileBorderWidth,
          },
        ]}
      >
        <View style={styles.iconArea}>
          <Icon size={ICON_SIZE} color={iconColor} weight="regular" />
        </View>
        <Text style={[styles.label, typography.caption, { color: labelColor }]} numberOfLines={2}>
          {label}
        </Text>
      </View>
    </Pressable>
  )
}

function RowPlaceholder() {
  return <View style={styles.cellPlaceholder} pointerEvents="none" />
}

export function CategoryShortcuts() {
  const palette = useHomePalette()
  const router = useRouter()

  return (
    <View style={[styles.wrap, { paddingHorizontal: spacing.screenX }]}>
      {GRID_ROWS.map((row, rowIndex) => (
        <View
          key={`row-${rowIndex}`}
          style={[styles.row, rowIndex < GRID_ROWS.length - 1 && styles.rowSpaced]}
        >
          {row.map((item) => (
            <CategoryCell
              key={item.id}
              label={item.label}
              iconName={item.icon}
              tileBg={palette.category.bg}
              tileBorder={palette.category.border}
              tileBorderWidth={palette.category.borderWidth}
              iconColor={palette.category.icon}
              labelColor={palette.category.label}
              onPress={() => router.push(item.href as Href)}
            />
          ))}
          {row.length < COLS
            ? Array.from({ length: COLS - row.length }, (_, i) => (
                <RowPlaceholder key={`placeholder-${rowIndex}-${i}`} />
              ))
            : null}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.sectionGap,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: COL_GAP,
  },
  rowSpaced: {
    marginBottom: ROW_GAP,
  },
  cell: {
    flex: 1,
    minWidth: 0,
  },
  cellPressed: {
    opacity: 0.88,
  },
  cellPlaceholder: {
    flex: 1,
    minWidth: 0,
  },
  tile: {
    width: '100%',
    height: homeLayout.categoryTileHeight,
    borderRadius: radius.lg,
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  label: {
    textAlign: 'center',
    fontFamily: typography.body.fontFamily,
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 14,
    width: '100%',
  },
})
