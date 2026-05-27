'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Clock, MapPin, ArrowRight } from 'lucide-react'
import BottomDrawer from '@/src/components/BottomDrawer'
import type { EventoHighlight } from '@/src/lib/data/eventos'

type Props = {
  highlights: EventoHighlight[]
  accentColor: string
}

export default function HighlightsList({ highlights, accentColor }: Props) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const active = activeIdx !== null ? highlights[activeIdx] : null

  return (
    <>
      <div className="bg-white rounded-2xl border border-app-divider overflow-hidden">
        {highlights.map((h, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`w-full flex items-start gap-3 p-3 text-left press-scale ${
              i !== highlights.length - 1 ? 'border-b border-app-divider' : ''
            }`}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: accentColor + '20' }}
            >
              <Sparkles size={14} style={{ color: accentColor }} />
            </div>
            <p className="text-[13px] text-tx-primary leading-snug pt-1 flex-1 min-w-0">
              {h.shortLine}
            </p>
            <ArrowRight size={14} className="text-tx-tertiary shrink-0 mt-1.5" />
          </button>
        ))}
      </div>

      <BottomDrawer
        open={active !== null}
        onClose={() => setActiveIdx(null)}
        accentColor={accentColor}
        ariaLabel={active?.title}
      >
        {active && (
          <div className="pt-1">
            {active.imageUri && (
              <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4">
                <Image src={active.imageUri} alt={active.title} fill className="object-cover" sizes="430px" />
              </div>
            )}

            <span
              className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ backgroundColor: accentColor + '20', color: accentColor }}
            >
              Ativação do evento
            </span>

            <h3 className="font-black text-[20px] text-tx-primary mt-2 leading-tight">
              {active.title}
            </h3>

            <p className="text-[14px] text-tx-secondary mt-3 leading-relaxed">
              {active.description}
            </p>

            {(active.schedule || active.local) && (
              <div className="mt-4 grid grid-cols-1 gap-2">
                {active.schedule && (
                  <div className="flex items-center gap-2 bg-app-surface rounded-xl px-3 py-2.5">
                    <Clock size={14} style={{ color: accentColor }} />
                    <span className="text-[12px] font-medium text-tx-primary">
                      {active.schedule}
                    </span>
                  </div>
                )}
                {active.local && (
                  <div className="flex items-center gap-2 bg-app-surface rounded-xl px-3 py-2.5">
                    <MapPin size={14} style={{ color: accentColor }} />
                    <span className="text-[12px] font-medium text-tx-primary">
                      {active.local}
                    </span>
                  </div>
                )}
              </div>
            )}

            {active.link && (
              <Link
                href={active.link.href}
                className="block mt-4 w-full text-center rounded-xl py-3 text-white font-semibold text-[13px] press-scale"
                style={{ backgroundColor: accentColor }}
              >
                {active.link.label} →
              </Link>
            )}
          </div>
        )}
      </BottomDrawer>
    </>
  )
}
