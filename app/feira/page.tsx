'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Instagram, Globe, MapPin } from 'lucide-react'
import { FEIRA_FILTERS, FEIRA_STALLS, CERTIFICATION_LABELS, LOGO_TONE_COLORS } from '@/src/lib/data/feira'
import PageHeader from '@/src/components/PageHeader'

export default function FeiraPage() {
  const [filter, setFilter] = useState('todos')

  const stalls = filter === 'todos'
    ? FEIRA_STALLS
    : FEIRA_STALLS.filter(s => s.category === filter)

  return (
    <div className="animate-fade-in">
      <PageHeader title="Feira" subtitle="Estandes e produtores locais" showBack />

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3">
        {FEIRA_FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-[12px] font-semibold border transition-all press-scale ${
              filter === f.id
                ? 'bg-brand text-white border-brand'
                : 'bg-white text-tx-secondary border-app-divider'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Stalls */}
      <div className="px-4 space-y-4 pb-4">
        {stalls.map(stall => (
          <div key={stall.id} className="bg-white rounded-2xl border border-app-divider overflow-hidden">
            {/* Gallery */}
            <div className="flex gap-0.5 h-28 overflow-hidden">
              {stall.galleryImageUris.slice(0, 2).map((uri, i) => (
                <div key={i} className="relative flex-1">
                  <Image src={uri} alt={stall.name} fill className="object-cover" sizes="200px" />
                </div>
              ))}
            </div>

            <div className="p-4">
              <div className="flex items-start gap-3">
                {/* Logo badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: LOGO_TONE_COLORS[stall.logoTone] + '20' }}
                >
                  <span
                    className="text-[12px] font-black"
                    style={{ color: LOGO_TONE_COLORS[stall.logoTone] }}
                  >
                    {stall.logoText}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[14px] text-tx-primary">{stall.name}</h3>
                    <span className="text-[11px] text-tx-tertiary">• {stall.number}</span>
                  </div>
                  <p className="text-[12px] text-tx-secondary mt-1 leading-snug">{stall.summary}</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {stall.certifications.map(cert => (
                  <span key={cert} className="text-[10px] font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                    {CERTIFICATION_LABELS[cert]}
                  </span>
                ))}
              </div>

              {/* Map label + links */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-app-divider">
                <div className="flex items-center gap-1 text-tx-tertiary">
                  <MapPin size={12} />
                  <span className="text-[11px]">{stall.mapLabel}</span>
                </div>
                <div className="flex gap-2">
                  {stall.instagramUrl && (
                    <a href={stall.instagramUrl} target="_blank" rel="noreferrer" className="press-scale">
                      <Instagram size={16} className="text-tx-tertiary" />
                    </a>
                  )}
                  {stall.websiteUrl && (
                    <a href={stall.websiteUrl} target="_blank" rel="noreferrer" className="press-scale">
                      <Globe size={16} className="text-tx-tertiary" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
