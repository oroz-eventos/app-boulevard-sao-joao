import { StyleSheet, View } from 'react-native'

const DOT_SIZE = 6
const DOT_GAP = 6

type CarouselDotsProps = {
  count: number
  activeIndex: number
  activeColor: string
  inactiveColor: string
}

/** Marcadores discretos — bolinhas uniformes, ativo escuro (referência iFood) */
export function CarouselDots({
  count,
  activeIndex,
  activeColor,
  inactiveColor,
}: CarouselDotsProps) {
  return (
    <View style={styles.dots}>
      {Array.from({ length: count }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: index === activeIndex ? activeColor : inactiveColor,
            },
          ]}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: DOT_GAP,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
  },
})
