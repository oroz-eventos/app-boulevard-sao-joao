import { StyleSheet, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type BottomBarTopOutlineProps = {
  stroke: string
  fill?: string
}

export function BottomBarTopOutline({ stroke, fill = 'transparent' }: BottomBarTopOutlineProps) {
  return (
    <View pointerEvents="none" style={styles.wrap}>
      <Svg width="100%" height="100%" viewBox="0 0 100 80" preserveAspectRatio="none">
        <Path
          d="M0 18 Q0 0 18 0 H34 C41 0 41 18 50 18 C59 18 59 0 66 0 H82 Q100 0 100 18 V80 H0 Z"
          fill={fill}
        />
        <Path
          d="M0 1 H34 C41 1 41 18 50 18 C59 18 59 1 66 1 H100"
          fill="none"
          stroke={stroke}
          strokeWidth={1}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
})
