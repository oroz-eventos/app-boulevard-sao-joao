'use client'
import { useState } from 'react'
import { Tag } from 'lucide-react'
import { ADVANTAGE_OFFERS, OFFER_FILTER_TABS, type OfferStatus } from '@/src/lib/data/vantagens'
import PageHeader from '@/src/components/PageHeader'

const STATUS_STYLE: Record<OfferStatus, { bg: string; text: string; label: string }> = {
  new:     { bg: 'bg-brand-light',   text: 'text-brand',   label: 'Novo' },
  used:    { bg: 'bg-gray-100',      text: 'text-gray-500', label: 'Utilizado' },
  expired: { bg: 'bg-red-50',        text: 'text-red-400',  label: 'Expirado' },
}

export default function VantagensPage() {
  const [tab, setTab] = useState('todos')

  const filtered = tab === 'todos'
    ? ADVANTAGE_OFFERS
    : ADVANTAGE_OFFERS.filter(o =>
        tab === 'novos'      ? o.status === 'new'     :
        tab === 'utilizados' ? o.status === 'used'    :
        tab === 'expirados'  ? o.status === 'expired' : true
      )

  return (
    <div className="animate-fade-in">
      <PageHeader title="Vantagens" showNotif />

      {/* Banner */}
      <div className="mx-4 mt-4 rounded-2xl p-5 flex items-start gap-3" style={{ backgroundColor: '#8B1454' }}>
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
          <Tag size={20} className="text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-[15px]">Parceiros Boulevard</p>
          <p className="text-white/75 text-[12px] mt-0.5">40% off nos seus próximos 3 pedidos em restaurantes parceiros.</p>
          <button className="mt-2 bg-white/20 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full press-scale">
            Resgatar agora
          </button>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-0 border-b border-app-divider mt-4 overflow-x-auto scrollbar-hide px-4">
        {OFFER_FILTER_TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`shrink-0 px-4 py-2.5 text-[12px] font-semibold border-b-2 transition-colors ${
              tab === t.id
                ? 'border-brand text-brand'
                : 'border-transparent text-tx-tertiary'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Offers */}
      <div className="p-4 space-y-3">
        {filtered.map(offer => {
          const style = STATUS_STYLE[offer.status]
          return (
            <div
              key={offer.id}
              className={`bg-white rounded-2xl border border-app-divider p-4 ${
                offer.status !== 'new' ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[20px] font-black ${offer.status === 'new' ? 'text-brand' : 'text-tx-tertiary'}`}>
                      {offer.discountLabel}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                      {style.label}
                    </span>
                  </div>
                  <p className="text-[13px] text-tx-secondary leading-snug">{offer.condition}</p>
                  <p className="text-[12px] font-semibold text-tx-primary mt-1">{offer.venue}</p>
                  <p className="text-[11px] text-tx-disabled mt-0.5">{offer.expiresLabel}</p>
                </div>
                {offer.status === 'new' && (
                  <button className="shrink-0 bg-brand text-white text-[12px] font-semibold px-3 py-1.5 rounded-full press-scale">
                    Resgatar
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
