'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HERO_SLIDES } from '@/src/lib/data/home'

const AUTO_ADVANCE_MS = 6000

export default function HomeHero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length)
    }, AUTO_ADVANCE_MS)
    return () => clearTimeout(t)
  }, [active, paused])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setPaused(true)
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) setActive((i) => (i + 1) % HERO_SLIDES.length)
      else setActive((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
    }
    touchStartX.current = null
    setPaused(false)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="overflow-hidden rounded-2xl">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`${i === active ? 'block animate-fade-in' : 'hidden'}`}
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
            aria-label={`Ir pro slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
