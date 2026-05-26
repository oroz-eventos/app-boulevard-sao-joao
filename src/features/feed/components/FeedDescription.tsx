import { useState } from 'react'
import {
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native'
import { fontFamily } from '@/theme/typography'

const COLLAPSED_LINES = 3
const LONG_TEXT_THRESHOLD = 100

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

type FeedDescriptionProps = {
  text: string
}

export function FeedDescription({ text }: FeedDescriptionProps) {
  const [expanded, setExpanded] = useState(false)
  const canExpand = text.length > LONG_TEXT_THRESHOLD

  const onExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(220, 'easeInEaseOut', 'opacity'))
    setExpanded(true)
  }

  return (
    <View>
      <Text style={styles.text} numberOfLines={expanded ? undefined : COLLAPSED_LINES}>
        {text}
      </Text>
      {canExpand && !expanded ? (
        <Pressable
          onPress={onExpand}
          accessibilityRole="button"
          accessibilityLabel="Ler mais da notícia"
          hitSlop={8}
        >
          <Text style={styles.more}>...ler mais</Text>
        </Pressable>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.92)',
  },
  more: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.92)',
    marginTop: 2,
  },
})
