import Link from 'next/link'
import {
  IconCalendarEvent,
  IconMap2,
  IconShoppingBag,
  IconDeviceTv,
  IconHeart,
  IconBrain,
  IconPaw,
  IconGift,
} from '@tabler/icons-react'
import { CATEGORY_SHORTCUTS, type ShortcutIconName } from '@/src/lib/data/home'

const ICON_MAP = {
  calendar: IconCalendarEvent,
  map:      IconMap2,
  shopping: IconShoppingBag,
  screen:   IconDeviceTv,
  kiss:     IconHeart,
  quiz:     IconBrain,
  pet:      IconPaw,
  gift:     IconGift,
} satisfies Record<ShortcutIconName, React.ComponentType<{ size?: number; stroke?: number; className?: string }>>

export default function HomeShortcuts() {
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-4">
      {CATEGORY_SHORTCUTS.map((item) => {
        const Icon = ICON_MAP[item.icon]
        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col items-center gap-1.5 press-scale"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center">
              <Icon size={26} stroke={1.8} className="text-brand" />
            </div>
            <span className="text-[10px] font-semibold text-tx-secondary text-center leading-tight">
              {item.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
