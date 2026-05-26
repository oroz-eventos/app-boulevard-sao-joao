import Link from 'next/link'
import Image from 'next/image'
import { QUICK_ACCESS } from '@/src/lib/data/home'

export default function HomeQuickAccess() {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
      {QUICK_ACCESS.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="shrink-0 relative w-36 h-24 rounded-xl overflow-hidden press-scale"
        >
          <Image
            src={item.imageUri}
            alt={item.label}
            fill
            className="object-cover"
            sizes="144px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-2 left-2 right-2 text-white text-[10px] font-bold leading-tight">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
