'use client'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Play, Radio, Clock, Tv, ListVideo,
} from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { FEED_POSTS, EDITORIAL_TABS, type FeedEditorial } from '@/src/lib/data/feed'

type Filter = 'todos' | FeedEditorial

const EDITORIAL_ACCENT: Record<FeedEditorial, string> = {
  'centro':    '#5500CC',
  'sao-paulo': '#3B5BDB',
  'arte-tela': '#E91E8C',
  'ao-vivo':   '#F97316',
}

const EDITORIAL_SHORT: Record<FeedEditorial, string> = {
  'centro':    'Centro',
  'sao-paulo': 'SP',
  'arte-tela': 'Arte na Tela',
  'ao-vivo':   'Ao Vivo',
}

const TELOES = [
  { id: 'brahma',   label: 'Bar Brahma',     subtitle: 'Projeção mapeada' },
  { id: 'drogaria', label: 'Drogaria SP',    subtitle: 'Tela 3D anamórfica' },
  { id: 'habibs',   label: 'Habibs',         subtitle: 'Tela digital frontal' },
  { id: 'empena',   label: 'Empena Central', subtitle: 'Empena + tela digital' },
] as const

/** Duração mock determinística baseada no id do post */
function mockDuration(id: string): string {
  const seed = id.split('').reduce((s, c) => s + c.charCodeAt(0), 0)
  const total = 60 + (seed % 540) // entre 1:00 e 10:00
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function TvBoulevardPage() {
  const [filter, setFilter] = useState<Filter>('todos')
  const [activeTelao, setActiveTelao] = useState<typeof TELOES[number]['id']>('brahma')

  // "Ao vivo" sempre o primeiro post da editoria 'ao-vivo'
  const aoVivo = useMemo(
    () => FEED_POSTS.find((p) => p.editorial === 'ao-vivo') ?? FEED_POSTS[0],
    []
  )

  // Playlist (todos exceto o que está ao vivo agora)
  const playlist = useMemo(
    () =>
      FEED_POSTS.filter((p) => p.id !== aoVivo.id).filter(
        (p) => filter === 'todos' || p.editorial === filter
      ),
    [filter, aoVivo.id]
  )

  return (
    <div className="animate-fade-in pb-6">
      <PageHeader title="TV Boulevard" subtitle="O que tá rolando nos telões" showBack />

      {/* Player ao vivo */}
      <section className="px-4 pt-4">
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-black">
          <Image
            src={aoVivo.images[0]}
            alt={aoVivo.title}
            fill
            className="object-cover"
            sizes="430px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

          {/* AO VIVO badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            AO VIVO
          </div>

          {/* Telão atual */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            <Tv size={11} />
            {TELOES.find((t) => t.id === activeTelao)?.label}
          </div>

          {/* Play button centralizado */}
          <button
            className="absolute inset-0 flex items-center justify-center press-scale"
            aria-label="Tocar"
          >
            <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl">
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Play size={20} className="text-tx-primary ml-1" fill="currentColor" />
              </span>
            </span>
          </button>

          {/* Info bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-wide text-white/90 bg-white/15 backdrop-blur-md px-2 py-0.5 rounded-full"
            >
              {EDITORIAL_SHORT[aoVivo.editorial]}
            </span>
            <h2 className="text-white font-black text-[15px] leading-tight mt-1.5">
              {aoVivo.title}
            </h2>
          </div>
        </div>

        {/* Selector dos 4 telões */}
        <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {TELOES.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTelao(t.id)}
              className={`shrink-0 px-3 py-2 rounded-xl border text-left transition-all press-scale ${
                activeTelao === t.id
                  ? 'bg-brand text-white border-brand'
                  : 'bg-white text-tx-primary border-app-divider'
              }`}
            >
              <p className="text-[11px] font-bold leading-tight">{t.label}</p>
              <p
                className={`text-[9px] leading-tight mt-0.5 ${
                  activeTelao === t.id ? 'text-white/80' : 'text-tx-tertiary'
                }`}
              >
                {t.subtitle}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Rádio BSJ row */}
      <section className="px-4 pt-4">
        <div className="rounded-2xl bg-brand-shadow text-white p-4 flex items-center gap-3 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-32 opacity-40"
            style={{
              background: 'radial-gradient(circle at top right, #E91E8C66 0%, transparent 60%)',
            }}
          />
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 relative">
            <Radio size={20} className="text-white" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          </div>
          <div className="flex-1 min-w-0 relative">
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
              Rádio BSJ · transmissão contínua
            </p>
            <p className="font-bold text-[14px] leading-tight">
              Roda de samba paulistana · Palco 1
            </p>
            <p className="text-[11px] opacity-80">Sábado · 19h–01h</p>
          </div>
          <button className="shrink-0 w-10 h-10 rounded-full bg-white text-brand flex items-center justify-center press-scale relative shadow-lg">
            <Play size={16} fill="currentColor" className="ml-0.5" />
          </button>
        </div>
      </section>

      {/* Filtros editoriais */}
      <section className="pt-5">
        <div className="px-4 mb-3 flex items-center gap-2">
          <ListVideo size={14} className="text-tx-tertiary" />
          <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            Playlist
          </h3>
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 pb-3">
          <FilterChip active={filter === 'todos'} onClick={() => setFilter('todos')} label="Todos" />
          {EDITORIAL_TABS.map((t) => (
            <FilterChip
              key={t.id}
              active={filter === t.id}
              onClick={() => setFilter(t.id)}
              label={t.label}
              color={EDITORIAL_ACCENT[t.id]}
            />
          ))}
        </div>

        {/* Lista */}
        <div className="px-4 space-y-2">
          {playlist.length === 0 ? (
            <p className="text-center text-tx-tertiary text-[13px] py-8">
              Nenhum vídeo nesta editoria.
            </p>
          ) : (
            playlist.map((p) => {
              const accent = EDITORIAL_ACCENT[p.editorial]
              return (
                <Link
                  key={p.id}
                  href="/feed"
                  className="flex items-stretch gap-3 bg-white rounded-2xl border border-app-divider overflow-hidden press-scale"
                >
                  {/* Thumb com duration overlay */}
                  <div className="relative w-32 h-20 shrink-0 bg-black">
                    <Image
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                      {mockDuration(p.id)}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
                        <Play size={12} className="text-white ml-0.5" fill="currentColor" />
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 py-2 pr-3 flex flex-col justify-center">
                    <span
                      className="text-[9px] font-bold uppercase tracking-wide"
                      style={{ color: accent }}
                    >
                      {EDITORIAL_SHORT[p.editorial]}
                    </span>
                    <p className="text-[12px] font-bold text-tx-primary leading-tight mt-0.5 line-clamp-2">
                      {p.title}
                    </p>
                    {p.badge && (
                      <p className="text-[10px] text-tx-tertiary mt-1 flex items-center gap-1">
                        <Clock size={9} />
                        {p.badge}
                      </p>
                    )}
                  </div>
                </Link>
              )
            })
          )}
        </div>
      </section>
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  label,
  color,
}: {
  active: boolean
  onClick: () => void
  label: string
  color?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-semibold border transition-all press-scale ${
        active
          ? 'bg-brand text-white border-brand'
          : 'bg-white text-tx-secondary border-app-divider'
      }`}
      style={active && color ? { backgroundColor: color, borderColor: color } : undefined}
    >
      {label}
    </button>
  )
}
