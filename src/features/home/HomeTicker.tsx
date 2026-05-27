'use client'
import { useState } from 'react'
import { LIVE_TICKER_ITEMS } from '@/src/lib/data/home'

/**
 * Live ticker do Boulevard. Roda em loop horizontal contínuo,
 * pausa ao toque/hover, com fade nas bordas pra suavizar a entrada/saída.
 */
export default function HomeTicker() {
  const [paused, setPaused] = useState(false)
  const text = LIVE_TICKER_ITEMS.join('  •  ')

  return (
    <div
      className="relative bg-brand text-white overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      aria-live="polite"
    >
      {/* Live dot · só decorativo */}
      <span
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"
        aria-hidden
      />
      {/* Fade gradient nas bordas */}
      <div
        className="absolute inset-y-0 left-0 w-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #5500CC, transparent)' }}
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-8 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #5500CC)' }}
        aria-hidden
      />

      <div
        className="flex whitespace-nowrap animate-ticker pl-5"
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        <span className="text-[11px] font-medium px-4">{text}</span>
        <span className="text-[11px] font-medium px-4" aria-hidden>{text}</span>
      </div>
    </div>
  )
}
