import type { ComponentType } from 'react'
import { Coffee, MonitorPlay, Percent } from 'phosphor-react-native'

export type PromoIconName = 'coffee' | 'discount' | 'interact'

type PhosphorIconProps = {
  size?: number
  color?: string
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

export const promoIconMap: Record<PromoIconName, ComponentType<PhosphorIconProps>> = {
  coffee: Coffee,
  discount: Percent,
  interact: MonitorPlay,
}
