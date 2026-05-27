import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import EventActions from '@/src/components/EventActions'
import { GRANDES_EVENTOS, eventoBySlug } from '@/src/lib/data/eventos'
import HighlightsList from '@/src/features/eventos/HighlightsList'

export function generateStaticParams() {
  return GRANDES_EVENTOS.map((e) => ({ slug: e.slug }))
}

export default async function EventoDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const evento = eventoBySlug(slug)
  if (!evento) notFound()

  return (
    <div className="animate-fade-in">
      <PageHeader title={evento.monthLabel} subtitle="Grande Evento" showBack backHref="/eventos" />

      {/* Hero */}
      <div className="relative h-64 -mt-px">
        <Image
          src={evento.imageUri}
          alt={evento.title}
          fill
          className="object-cover"
          sizes="430px"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 0%, ${evento.themeColor}40 50%, ${evento.themeColor}cc 100%)`,
          }}
        />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full">
            {evento.monthLabel} · Calendário Boulevard
          </span>
          <h1 className="text-white font-black text-[28px] leading-tight mt-2">
            {evento.title}
          </h1>
          <p className="text-white/90 text-[14px] mt-1">{evento.tagline}</p>
        </div>
      </div>

      <div className="p-4">
        {/* Summary */}
        <p className="text-[14px] text-tx-primary leading-relaxed">{evento.summary}</p>

        {/* CTAs */}
        <div className="mt-4">
          <EventActions
            title={evento.title}
            accent={evento.themeColor}
            shareText={`${evento.title} · ${evento.tagline}`}
          />
          <Link
            href="/mapa"
            className="mt-2 rounded-xl py-3 bg-white border border-app-divider text-tx-primary font-semibold text-[13px] flex items-center justify-center gap-1.5 press-scale"
          >
            <MapPin size={14} />
            Ver no mapa
          </Link>
        </div>

        {/* Highlights · cards clicáveis com drawer */}
        <section className="mt-6">
          <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
            O que rola · toque pra ver mais
          </h3>
          <HighlightsList highlights={evento.highlights} accentColor={evento.themeColor} />
        </section>

        {/* Palcos */}
        {evento.palcos && evento.palcos.length > 0 && (
          <section className="mt-6">
            <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
              Palcos envolvidos
            </h3>
            <div className="flex flex-wrap gap-2">
              {evento.palcos.map((p) => (
                <span
                  key={p}
                  className="text-[11px] font-semibold bg-brand-light text-brand px-3 py-1.5 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Patrocínio */}
        <section className="mt-6 mb-4">
          <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
            Marcas cofundadoras
          </h3>
          <div className="bg-app-surface rounded-2xl p-4">
            <div className="grid grid-cols-3 gap-3">
              {['MASTER', 'PILAR MÚSICA', 'APOIO'].map((label) => (
                <div
                  key={label}
                  className="aspect-square rounded-xl border border-dashed border-app-divider flex flex-col items-center justify-center text-center px-2"
                >
                  <Calendar size={18} className="text-tx-disabled mb-1" />
                  <span className="text-[9px] font-bold uppercase tracking-wide text-tx-tertiary leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-tx-tertiary text-center mt-3">
              Espaço reservado pra marcas parceiras desta edição.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
