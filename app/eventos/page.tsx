'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Calendar } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { GRANDES_EVENTOS, eventoDoMes } from '@/src/lib/data/eventos'

type Filter = 'todos' | 'ancora' | 'mes-atual'

export default function EventosListPage() {
  const [filter, setFilter] = useState<Filter>('todos')
  const ativo = eventoDoMes()

  const filtered = useMemo(() => {
    if (filter === 'ancora') return GRANDES_EVENTOS.filter((e) => e.isDataAncora)
    if (filter === 'mes-atual') return ativo ? [ativo] : []
    return GRANDES_EVENTOS
  }, [filter, ativo])

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Grandes Eventos"
        subtitle="12 macroeventos no calendário"
        showBack
      />

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3">
        {[
          { id: 'todos' as Filter,     label: 'Todos · 12' },
          { id: 'mes-atual' as Filter, label: `Este mês${ativo ? ` · ${ativo.monthLabel}` : ''}` },
          { id: 'ancora' as Filter,    label: 'Datas-âncora · 3' },
        ].map((f) => (
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

      {/* Destaque · evento do mês ativo (só se filtro=todos) */}
      {filter === 'todos' && ativo && (
        <Link
          href={`/eventos/${ativo.slug}`}
          className="block mx-4 mt-2 rounded-2xl overflow-hidden press-scale relative h-44"
        >
          <Image
            src={ativo.imageUri}
            alt={ativo.title}
            fill
            className="object-cover"
            sizes="430px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white text-tx-primary text-[10px] font-bold px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            ACONTECENDO AGORA · {ativo.monthLabel}
          </div>
          <div className="absolute bottom-3 left-4 right-4">
            <h3 className="text-white font-black text-[20px] leading-tight">{ativo.title}</h3>
            <p className="text-white/85 text-[13px] mt-1">{ativo.tagline}</p>
          </div>
        </Link>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="px-4 py-12 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-app-surface flex items-center justify-center mb-3">
            <Calendar size={20} className="text-tx-tertiary" />
          </div>
          <p className="text-[14px] font-semibold text-tx-primary">Nada nesse filtro</p>
        </div>
      )}

      {/* Grid */}
      <section className="mt-6 px-4 pb-4">
        {filter === 'todos' && (
          <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
            Calendário do ano
          </h3>
        )}
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((e) => (
            <Link
              key={e.slug}
              href={`/eventos/${e.slug}`}
              className="block bg-white rounded-2xl border border-app-divider overflow-hidden press-scale"
            >
              <div className="relative h-24">
                <Image
                  src={e.imageUri}
                  alt={e.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div
                  className="absolute top-2 left-2 text-[10px] font-black px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: e.themeColor }}
                >
                  {e.monthLabel}
                </div>
                {e.isDataAncora && (
                  <div className="absolute top-2 right-2 bg-white text-tx-primary text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles size={9} />
                    Âncora
                  </div>
                )}
              </div>
              <div className="p-3">
                <h4 className="font-bold text-[13px] text-tx-primary leading-tight">{e.title}</h4>
                <p className="text-[11px] text-tx-tertiary mt-1 leading-snug line-clamp-2">
                  {e.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
