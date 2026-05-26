'use client'
import Link from 'next/link'
import { useState } from 'react'
import { PROMO_SLIDES } from '@/src/lib/data/home'

export default function HomePromo() {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory">
        {PROMO_SLIDES.map((slide, i) => (
          <Link
            key={slide.id}
            href={slide.href}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className="snap-start shrink-0 w-[80vw] max-w-[300px] rounded-2xl p-4 flex flex-col gap-2 press-scale"
            style={{ backgroundColor: slide.backgroundColor }}
          >
            <p className="text-white font-bold text-[15px] leading-snug">{slide.title}</p>
            <p className="text-white/75 text-[12px] leading-snug">{slide.subtitle}</p>
            <span className="self-start mt-1 bg-white/20 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
              {slide.cta}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {PROMO_SLIDES.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all ${
              i === active ? 'w-5 h-1.5 bg-tx-secondary' : 'w-1.5 h-1.5 bg-app-divider'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
