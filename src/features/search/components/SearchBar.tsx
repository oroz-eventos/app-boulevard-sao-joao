import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import { MagnifyingGlass, X } from 'phosphor-react-native'
import { fontFamily } from '@/theme/typography'
import { radius } from '@/theme/tokens'
import { useSearchPalette } from '../hooks/useSearchPalette'

type SearchBarProps = {
  value: string
  onChangeText: (value: string) => void
  onClear: () => void
}

export function SearchBar({ value, onChangeText, onClear }: SearchBarProps) {
  const palette = useSearchPalette()
  const hasValue = value.trim().length > 0

  return (
    <View style={[styles.wrap, { backgroundColor: palette.inputBg, borderColor: palette.inputBorder }]}>
      <MagnifyingGlass size={18} color={palette.inputIcon} weight="bold" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Busque cupons, lojas, programação..."
        placeholderTextColor={palette.inputPlaceholder}
        style={[styles.input, { color: palette.title }]}
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
          <X size={16} color={palette.muted} weight="bold" />
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
