import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, Tag, Calendar } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import EventActions from '@/src/components/EventActions'
import {
  PROGRAMACAO_EVENTS,
  PROGRAMACAO_DAYS,
  programacaoEventById,
} from '@/src/lib/data/programacao'
import { eventoBySlug } from '@/src/lib/data/eventos'

export function generateStaticParams() {
  return PROGRAMACAO_EVENTS.map((e) => ({ id: e.id }))
}

export default async function ProgramacaoDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = programacaoEventById(id)
  if (!event) notFound()

  const day = PROGRAMACAO_DAYS.find((d) => d.id === event.dayId)
  const grandeEvento = event.grandeEventoSlug ? eventoBySlug(event.grandeEventoSlug) : undefined
  const accent = grandeEvento?.themeColor ?? '#5500CC'

  return (
    <div className="animate-fade-in">
      <PageHeader
        title={day?.weekdayShort === 'HOJE' ? 'Hoje' : day?.fullLabel ?? 'Programação'}
        subtitle="Detalhes do evento"
        showBack
        backHref="/programacao"
      />

      {/* Hero */}
      <div className="relative h-56">
        <Image src={event.imageUri} alt={event.title} fill className="object-cover" sizes="430px" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        {event.categoria && (
          <div
            className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide text-white bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full"
          >
            {event.categoria}
          </div>
        )}
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-white/85 text-[12px] font-medium">{event.badge}</p>
          <h1 className="text-white font-black text-[22px] leading-tight mt-1">{event.title}</h1>
        </div>
      </div>

      <div className="p-4">
        {event.description && (
          <p className="text-[14px] text-tx-primary leading-relaxed">{event.description}</p>
        )}

        {/* Meta cards */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {event.schedule && (
            <div className="bg-app-surface rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-tx-tertiary">
                <Clock size={12} />
                <span className="text-[10px] font-semibold uppercase tracking-wide">Horário</span>
              </div>
              <p className="text-[12px] font-semibold text-tx-primary mt-1 leading-snug">
                {event.schedule}
              </p>
            </div>
          )}
          {event.duration && (
            <div className="bg-app-surface rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-tx-tertiary">
                <Tag size={12} />
                <span className="text-[10px] font-semibold uppercase tracking-wide">Duração</span>
              </div>
              <p className="text-[12px] font-semibold text-tx-primary mt-1 leading-snug">
                {event.duration}
              </p>
            </div>
          )}
          {event.local && (
            <div className="bg-app-surface rounded-xl p-3 col-span-2">
              <div className="flex items-center gap-1.5 text-tx-tertiary">
                <MapPin size={12} />
                <span className="text-[10px] font-semibold uppercase tracking-wide">Local</span>
              </div>
              <p className="text-[12px] font-semibold text-tx-primary mt-1 leading-snug">
                {event.local}
              </p>
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="mt-4">
          <EventActions
            title={event.title}
            accent={accent}
            shareText={`${event.title} · ${event.badge} no Boulevard São João`}
          />
        </div>

        <Link
          href="/mapa"
          className="block mt-2 w-full text-center rounded-xl py-3 bg-white border border-app-divider text-tx-primary font-semibold text-[13px] press-scale"
        >
          Ver no mapa
        </Link>

        {/* Grande evento vinculado */}
        {grandeEvento && (
          <Link
            href={`/eventos/${grandeEvento.slug}`}
            className="mt-5 block rounded-2xl p-4 press-scale text-white"
            style={{
              background: `linear-gradient(135deg, ${grandeEvento.themeColor}, ${grandeEvento.themeColor}88)`,
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Calendar size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                Dentro do grande evento do mês
              </span>
            </div>
            <p className="font-bold text-[15px]">{grandeEvento.title}</p>
            <p className="text-[12px] opacity-85 mt-0.5">{grandeEvento.tagline}</p>
          </Link>
        )}

        {/* Outros eventos do dia */}
        <section className="mt-6 mb-4">
          <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
            Outros do mesmo dia
          </h3>
          <div className="space-y-2">
            {PROGRAMACAO_EVENTS.filter((e) => e.dayId === event.dayId && e.id !== event.id).map(
              (e) => (
                <Link
                  key={e.id}
                  href={`/programacao/${e.id}`}
                  className="flex items-center gap-3 bg-white rounded-xl border border-app-divider p-3 press-scale"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                    <Image src={e.imageUri} alt={e.title} fill className="object-cover" sizes="48px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">
                      {e.badge}
                    </p>
                    <p className="text-[13px] font-semibold text-tx-primary leading-tight truncate">
                      {e.title}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
