'use client'
import { useState } from 'react'
import { NOTIFICATION_ITEMS, NOTIFICATION_FILTERS, TONE_COLORS } from '@/src/lib/data/notificacoes'
import PageHeader from '@/src/components/PageHeader'

export default function NotificacoesPage() {
  const [filter, setFilter] = useState('todas')

  const items = filter === 'todas'
    ? NOTIFICATION_ITEMS
    : NOTIFICATION_ITEMS.filter(n =>
        filter === 'novas' ? n.status === 'new' : n.status === 'read'
      )

  return (
    <div className="animate-fade-in">
      <PageHeader title="Notificações" showBack />

      {/* Filter tabs */}
      <div className="flex gap-0 border-b border-app-divider overflow-x-auto scrollbar-hide px-4">
        {NOTIFICATION_FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`shrink-0 px-4 py-2.5 text-[12px] font-semibold border-b-2 transition-colors ${
              filter === f.id
                ? 'border-brand text-brand'
                : 'border-transparent text-tx-tertiary'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="px-4 pt-4 space-y-3 pb-4">
        {items.map(notif => (
          <div
            key={notif.id}
            className={`flex gap-3 bg-white rounded-2xl border p-4 press-scale ${
              notif.status === 'new' ? 'border-brand/20' : 'border-app-divider'
            }`}
          >
            {/* Tone dot */}
            <div className="shrink-0 pt-0.5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: TONE_COLORS[notif.tone] }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className={`text-[14px] font-semibold leading-snug ${
                  notif.status === 'new' ? 'text-tx-primary' : 'text-tx-secondary'
                }`}>
                  {notif.title}
                </h3>
                <span className="text-[11px] text-tx-disabled shrink-0">{notif.timeAgo}</span>
              </div>
              <p className="text-[12px] text-tx-tertiary mt-1 leading-relaxed">{notif.description}</p>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-center text-tx-tertiary text-[14px] py-12">
            Sem notificações nesta categoria.
          </p>
        )}
      </div>
    </div>
  )
}
