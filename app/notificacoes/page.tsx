'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { CheckCheck, BellOff } from 'lucide-react'
import {
  IconCamera,
  IconBrain,
  IconDeviceTv,
  IconWalk,
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
  IconChristmasTree,
} from '@tabler/icons-react'
import {
  NOTIFICATION_ITEMS,
  NOTIFICATION_FILTERS,
  KIND_TONE,
  type NotificationKind,
  type NotificationItem,
} from '@/src/lib/data/notificacoes'
import PageHeader from '@/src/components/PageHeader'

const ICON_MAP: Record<NotificationKind, typeof IconCamera> = {
  'foto-opp':   IconCamera,
  'quiz':       IconBrain,
  'envio-tela': IconDeviceTv,
  'roteiro':    IconWalk,
  'evento':     IconCalendarEvent,
  'palco':      IconMusic,
  'vantagem':   IconGift,
  'solidario':  IconHandStop,
  'lugar':      IconBuildingMonument,
  'feira':      IconShoppingBag,
  'pet':        IconPaw,
  'aviso':      IconInfoCircle,
  'mapa':       IconMap2,
  'arte-tela':  IconPalette,
  'natal':      IconChristmasTree,
}

const HOJE_REGEX = /^(agora|há \d+ min|há \d+ h)$/i

function isHoje(item: NotificationItem) {
  return HOJE_REGEX.test(item.timeAgo)
}

export default function NotificacoesPage() {
  const [filter, setFilter] = useState('todas')
  const [readSet, setReadSet] = useState<Set<string>>(new Set())
  const [dismissedSet, setDismissedSet] = useState<Set<string>>(new Set())

  const items = useMemo(() => {
    return NOTIFICATION_ITEMS.filter((n) => !dismissedSet.has(n.id))
      .map((n) => ({
        ...n,
        status: readSet.has(n.id) ? ('read' as const) : n.status,
      }))
      .filter((n) =>
        filter === 'todas'
          ? true
          : filter === 'novas'
            ? n.status === 'new'
            : n.status === 'read'
      )
  }, [filter, readSet, dismissedSet])

  const novasCount = NOTIFICATION_ITEMS.filter(
    (n) => !dismissedSet.has(n.id) && !readSet.has(n.id) && n.status === 'new'
  ).length

  const hoje = items.filter(isHoje)
  const anteriores = items.filter((n) => !isHoje(n))

  const handleMarkAllRead = () => {
    const all = new Set(NOTIFICATION_ITEMS.filter((n) => n.status === 'new').map((n) => n.id))
    setReadSet(all)
  }

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Notificações"
        subtitle={novasCount > 0 ? `${novasCount} novas` : 'Tudo em dia'}
        showBack
      />

      {/* Filter tabs */}
      <div className="flex items-center justify-between border-b border-app-divider px-4">
        <div className="flex gap-0 overflow-x-auto scrollbar-hide">
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
        {novasCount > 0 && (
          <button
            onClick={handleMarkAllRead}
            className="text-[11px] font-semibold text-brand flex items-center gap-1 press-scale"
          >
            <CheckCheck size={12} />
            Marcar lidas
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="px-4 pt-12 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-app-surface flex items-center justify-center mb-3">
            <BellOff size={22} className="text-tx-tertiary" />
          </div>
          <p className="text-[14px] font-semibold text-tx-primary">Tudo em dia</p>
          <p className="text-[12px] text-tx-tertiary mt-1">
            Sem notificações nesta categoria.
          </p>
        </div>
      ) : (
        <div className="pb-4">
          {hoje.length > 0 && (
            <NotifGroup title="Hoje" items={hoje} onDismiss={(id) => setDismissedSet(new Set([...dismissedSet, id]))} />
          )}
          {anteriores.length > 0 && (
            <NotifGroup title="Anteriores" items={anteriores} onDismiss={(id) => setDismissedSet(new Set([...dismissedSet, id]))} />
          )}
        </div>
      )}
    </div>
  )
}

function NotifGroup({
  title,
  items,
  onDismiss,
}: {
  title: string
  items: NotificationItem[]
  onDismiss: (id: string) => void
}) {
  return (
    <section className="px-4 pt-4">
      <p className="text-[10px] font-bold uppercase tracking-wider text-tx-tertiary mb-2">
        {title}
      </p>
      <div className="space-y-2.5">
        {items.map((notif) => (
          <NotifRow key={notif.id} notif={notif} onDismiss={onDismiss} />
        ))}
      </div>
    </section>
  )
}

function NotifRow({
  notif,
  onDismiss,
}: {
  notif: NotificationItem
  onDismiss: (id: string) => void
}) {
  const Icon = ICON_MAP[notif.kind]
  const tone = KIND_TONE[notif.kind]
  const isNew = notif.status === 'new'

  const Inner = (
    <div
      className={`flex gap-3 bg-white rounded-2xl border p-3.5 press-scale relative ${
        isNew ? 'border-brand/20' : 'border-app-divider'
      }`}
    >
      {isNew && (
        <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-brand" />
      )}

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

  return (
    <div className="relative group">
      {notif.href ? (
        <Link href={notif.href} className="block">
          {Inner}
        </Link>
      ) : (
        Inner
      )}
      <button
        onClick={() => onDismiss(notif.id)}
        className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border border-app-divider text-tx-tertiary text-[14px] leading-none flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity press-scale"
        aria-label="Dispensar"
      >
        ×
      </button>
    </div>
  )
}
