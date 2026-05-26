'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HERO_SLIDES } from '@/src/lib/data/home'

export default function HomeHero() {
  const [active, setActive] = useState(0)

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`transition-all duration-300 ${i === active ? 'block' : 'hidden'}`}
          >
            <div
              className="rounded-2xl p-5 h-36 flex flex-col justify-between"
              style={{ backgroundColor: slide.backgroundColor }}
            >
              <div>
                <h2 className="text-white font-bold text-xl leading-tight">{slide.title}</h2>
                <p className="text-white/80 text-[13px] mt-1">{slide.subtitle}</p>
              </div>
              <Link
                href={slide.ctaHref}
                className="self-start bg-white/20 hover:bg-white/30 text-white text-[12px] font-semibold px-4 py-1.5 rounded-full press-scale"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all ${
              i === active ? 'w-5 h-1.5 bg-tx-secondary' : 'w-1.5 h-1.5 bg-app-divider'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
