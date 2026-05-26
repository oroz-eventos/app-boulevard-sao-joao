import Link from 'next/link'
import { CATEGORY_SHORTCUTS } from '@/src/lib/data/home'

export default function HomeShortcuts() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {CATEGORY_SHORTCUTS.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="flex flex-col items-center gap-1.5 press-scale"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
            {item.icon}
          </div>
          <span className="text-[10px] font-medium text-tx-secondary text-center leading-tight">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
