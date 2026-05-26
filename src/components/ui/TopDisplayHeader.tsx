import type { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fontFamily } from '@/theme/typography'

export const TOP_DISPLAY_HEADER_SCREEN_PADDING = 12

type TopDisplayHeaderProps = {
  title: string
  color: string
  leading?: ReactNode
}

export function TopDisplayHeader({ title, color, leading }: TopDisplayHeaderProps) {
  return (
    <View style={styles.wrap}>
      {leading ? <View style={styles.leading}>{leading}</View> : null}
      <Text style={[styles.title, { color }]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  leading: {
    marginTop: 1,
  },
  title: {
    fontFamily: fontFamily.display,
    fontSize: 32,
    lineHeight: 36,
    letterSpacing: 0.5,
  },
})
