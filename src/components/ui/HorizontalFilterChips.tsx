import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { fontFamily } from '@/theme/typography'
import { radius } from '@/theme/tokens'

export type FilterChipItem = {
  id: string
  label: string
}

type HorizontalFilterChipsProps<T extends string> = {
  items: Array<{ id: T; label: string }>
  activeId: T
  onChange: (id: T) => void
  colors: {
    activeBg: string
    activeText: string
    inactiveBg: string
    inactiveText: string
    border: string
  }
}

export function HorizontalFilterChips<T extends string>({
  items,
  activeId,
  onChange,
  colors,
}: HorizontalFilterChipsProps<T>) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scroll}>
      <View style={styles.row}>
        {items.map((item) => {
          const isActive = item.id === activeId
          return (
            <Pressable
              key={item.id}
              onPress={() => onChange(item.id)}
              accessibilityRole="button"
              accessibilityLabel={`Filtrar por ${item.label}`}
              style={[
                styles.chip,
                {
                  backgroundColor: isActive ? colors.activeBg : colors.inactiveBg,
                  borderColor: isActive ? colors.activeBg : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.label,
                  { color: isActive ? colors.activeText : colors.inactiveText },
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    paddingRight: 6,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  chip: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.full,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  label: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
})
