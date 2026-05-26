import type { ComponentType } from 'react'
import { Gift, House, MagnifyingGlass, PlayCircle, Sparkle } from 'phosphor-react-native'
import type { IconProps } from 'phosphor-react-native'

export type BottomNavItemId = 'index' | 'feed' | 'interaja' | 'vantagens' | 'busca'

export type BottomNavItem = {
  id: BottomNavItemId
  label: string
  href: string
  Icon: ComponentType<IconProps>
  tabRoute?: 'index' | 'feed' | 'vantagens' | 'busca'
  featured?: boolean
}

export const BOTTOM_NAV_ITEMS: BottomNavItem[] = [
  { id: 'index', label: 'Início', href: '/', tabRoute: 'index', Icon: House },
  { id: 'feed', label: 'Feed', href: '/feed', tabRoute: 'feed', Icon: PlayCircle },
  { id: 'interaja', label: 'Interaja', href: '/interaja', Icon: Sparkle, featured: true },
  { id: 'vantagens', label: 'Vantagens', href: '/vantagens', tabRoute: 'vantagens', Icon: Gift },
  { id: 'busca', label: 'Busca', href: '/busca', tabRoute: 'busca', Icon: MagnifyingGlass },
]
