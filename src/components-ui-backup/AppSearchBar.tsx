import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import { MagnifyingGlass, X } from 'phosphor-react-native'
import { fontFamily } from '@/theme/typography'
import { radius } from '@/theme/tokens'

type AppSearchBarProps = {
  value: string
  onChangeText: (value: string) => void
  onClear: () => void
  placeholder: string
  colors: {
    background: string
    border: string
    icon: string
    placeholder: string
    text: string
    clear: string
  }
}

export function AppSearchBar({
  value,
  onChangeText,
  onClear,
  placeholder,
  colors,
}: AppSearchBarProps) {
  const hasValue = value.trim().length > 0

  return (
    <View style={[styles.wrap, { backgroundColor: colors.background, borderColor: colors.border }]}>
      <MagnifyingGlass size={18} color={colors.icon} weight="bold" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        style={[styles.input, { color: colors.text }]}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
      {hasValue ? (
        <Pressable
          onPress={onClear}
          accessibilityRole="button"
          accessibilityLabel="Limpar busca"
          hitSlop={8}
          style={styles.clearButton}
        >
          <X size={16} color={colors.clear} weight="bold" />
        </Pressable>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    minHeight: 52,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.xxl,
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    minWidth: 0,
    fontFamily: fontFamily.body,
    fontSize: 15,
    lineHeight: 20,
    paddingVertical: 14,
  },
  clearButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
