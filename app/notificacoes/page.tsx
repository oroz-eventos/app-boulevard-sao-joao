'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  IconHeart,
  IconBrain,
  IconDeviceTv,
  IconWorld,
  IconCalendarEvent,
  IconMusic,
  IconGift,
  IconHandStop,
  IconBuildingMonument,
  IconShoppingBag,
  IconPaw,
  IconInfoCircle,
  IconMap2,
  IconPalette,
} from '@tabler/icons-react'
import {
  NOTIFICATION_ITEMS,
  NOTIFICATION_FILTERS,
  KIND_TONE,
  type NotificationKind,
  type NotificationItem,
} from '@/src/lib/data/notificacoes'
import PageHeader from '@/src/components/PageHeader'

const ICON_MAP: Record<NotificationKind, typeof IconHeart> = {
  'kiss-cam':     IconHeart,
  'quiz':         IconBrain,
  'envio-tela':   IconDeviceTv,
  'janela-mundo': IconWorld,
  'evento':       IconCalendarEvent,
  'palco':        IconMusic,
  'vantagem':     IconGift,
  'solidario':    IconHandStop,
  'lugar':        IconBuildingMonument,
  'feira':        IconShoppingBag,
  'pet':          IconPaw,
  'aviso':        IconInfoCircle,
  'mapa':         IconMap2,
  'arte-tela':    IconPalette,
}

export default function NotificacoesPage() {
  const [filter, setFilter] = useState('todas')

  const items = filter === 'todas'
    ? NOTIFICATION_ITEMS
    : NOTIFICATION_ITEMS.filter((n) =>
        filter === 'novas' ? n.status === 'new' : n.status === 'read'
      )

  const novasCount = NOTIFICATION_ITEMS.filter((n) => n.status === 'new').length

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Notificações"
        subtitle={novasCount > 0 ? `${novasCount} novas` : 'Tudo em dia'}
        showBack
      />

      {/* Filter tabs */}
      <div className="flex gap-0 border-b border-app-divider overflow-x-auto scrollbar-hide px-4">
        {NOTIFICATION_FILTERS.map((f) => (
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
            {f.id === 'novas' && novasCount > 0 && (
              <span className="ml-1.5 bg-brand text-white text-[10px] font-bold rounded-full px-1.5 py-0.5">
                {novasCount}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="px-4 pt-4 space-y-2.5 pb-4">
        {items.map((notif) => (
          <NotifRow key={notif.id} notif={notif} />
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

function NotifRow({ notif }: { notif: NotificationItem }) {
  const Icon = ICON_MAP[notif.kind]
  const tone = KIND_TONE[notif.kind]
  const isNew = notif.status === 'new'

  const Inner = (
    <div
      className={`flex gap-3 bg-white rounded-2xl border p-3.5 press-scale relative ${
        isNew ? 'border-brand/20' : 'border-app-divider'
      }`}
    >
      {/* Unread dot */}
      {isNew && (
        <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-brand" />
      )}

      {/* Contextual icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: tone.bg }}
      >
        <Icon size={20} stroke={1.8} style={{ color: tone.color }} />
      </div>

      <div className="flex-1 min-w-0 pr-3">
        <div className="flex items-baseline gap-2">
          <span
            className="text-[10px] font-bold uppercase tracking-wide"
            style={{ color: tone.color }}
          >
            {tone.label}
          </span>
          <span className="text-[10px] text-tx-disabled">·</span>
          <span className="text-[10px] text-tx-disabled">{notif.timeAgo}</span>
        </div>
        <h3
          className={`text-[14px] font-semibold leading-snug mt-0.5 ${
            isNew ? 'text-tx-primary' : 'text-tx-secondary'
          }`}
        >
          {notif.title}
        </h3>
        <p className="text-[12px] text-tx-tertiary mt-1 leading-relaxed">
          {notif.description}
        </p>
        {notif.context && (
          <p className="text-[11px] font-semibold text-tx-secondary mt-1.5">
            {notif.context}
          </p>
        )}
      </div>
    </div>
  )

  return notif.href ? (
    <Link href={notif.href} className="block">
      {Inner}
    </Link>
  ) : (
    Inner
  )
}
