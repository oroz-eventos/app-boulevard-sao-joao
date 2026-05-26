import type { ComponentType } from 'react'
import {
  CalendarBlank,
  ForkKnife,
  MagnifyingGlass,
  MapPin,
  Gift,
  PlayCircle,
  ShoppingBag,
  Sparkle,
  Storefront,
} from 'phosphor-react-native'

export type CategoryIconName =
  | 'calendar'
  | 'kitchen'
  | 'map'
  | 'shopping'
  | 'play'
  | 'search'
  | 'store'
  | 'sparkles'
  | 'gift'

type PhosphorIconProps = {
  size?: number
  color?: string
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

export const categoryIconMap: Record<
  CategoryIconName,
  ComponentType<PhosphorIconProps>
> = {
  calendar: CalendarBlank,
  kitchen: ForkKnife,
  map: MapPin,
  shopping: ShoppingBag,
  play: PlayCircle,
  search: MagnifyingGlass,
  store: Storefront,
  sparkles: Sparkle,
  gift: Gift,
}
