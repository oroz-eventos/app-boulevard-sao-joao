'use client'
import { LIVE_TICKER_ITEMS } from '@/src/lib/data/home'

export default function HomeTicker() {
  const text = LIVE_TICKER_ITEMS.join('  •  ')

  return (
    <div className="bg-brand text-white overflow-hidden py-2">
      <div className="flex whitespace-nowrap animate-ticker">
        <span className="text-[11px] font-medium px-4">{text}</span>
        <span className="text-[11px] font-medium px-4" aria-hidden>{text}</span>
      </div>
    </div>
  )
}
