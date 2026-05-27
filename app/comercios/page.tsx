'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Globe, Clock, Accessibility, Ticket } from 'lucide-react'
import { COMERCIO_FILTERS, COMERCIO_STORES, LOGO_TONE_COLORS } from '@/src/lib/data/comercios'
import PageHeader from '@/src/components/PageHeader'

export default function ComerciosPage() {
  const [filter, setFilter] = useState('todos')

  const stores =
    filter === 'todos'
      ? COMERCIO_STORES
      : COMERCIO_STORES.filter((s) => s.category === filter)

  return (
    <div className="animate-fade-in">
      <PageHeader title="Comércios" subtitle="Bares e serviços do eixo" showBack />

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3">
        {COMERCIO_FILTERS.map((f) => (
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

      <div className="px-4 space-y-3 pb-4">
        {stores.map((store) => (
          <Link
            key={store.id}
            href={`/comercios/${store.id}`}
            className="block bg-white rounded-2xl border border-app-divider overflow-hidden press-scale"
          >
            <div className="relative h-32">
              <Image
                src={store.facadeImageUri}
                alt={store.name}
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {store.discountLabel && (
                <div className="absolute top-3 right-3 bg-brand text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {store.discountLabel}
                </div>
              )}
              {store.aceitaCupomBoulevard && (
                <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <Ticket size={11} />
                  Aceita cupom
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-[12px]"
                  style={{
                    backgroundColor: LOGO_TONE_COLORS[store.logoTone] + '20',
                    color: LOGO_TONE_COLORS[store.logoTone],
                  }}
                >
                  {store.logoText}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[14px] text-tx-primary">{store.name}</h3>
                  <p className="text-[12px] text-tx-secondary mt-1 leading-snug line-clamp-2">
                    {store.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-app-divider">
                <div className="flex items-center gap-1 text-tx-tertiary flex-1 min-w-0">
                  <Clock size={12} />
                  <span className="text-[11px] truncate">{store.openingHours}</span>
                </div>
                {store.acessibilidade.length > 0 && (
                  <span className="flex items-center gap-1 text-emerald-600">
                    <Accessibility size={12} />
                    <span className="text-[10px] font-semibold">{store.acessibilidade.length}</span>
                  </span>
                )}
                <div className="flex gap-2 shrink-0">
                  {store.instagramUrl && (
                    <Instagram size={14} className="text-tx-tertiary" />
                  )}
                  {store.websiteUrl && <Globe size={14} className="text-tx-tertiary" />}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
