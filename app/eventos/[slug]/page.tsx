import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Bell, Sparkles } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { GRANDES_EVENTOS, eventoBySlug } from '@/src/lib/data/eventos'

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
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            className="rounded-xl py-3 text-white font-semibold text-[13px] flex items-center justify-center gap-1.5 press-scale"
            style={{ backgroundColor: evento.themeColor }}
          >
            <Bell size={14} />
            Lembrete
          </button>
          <Link
            href="/mapa"
            className="rounded-xl py-3 bg-white border border-app-divider text-tx-primary font-semibold text-[13px] flex items-center justify-center gap-1.5 press-scale"
          >
            <MapPin size={14} />
            Ver no mapa
          </Link>
        </div>

        {/* Highlights */}
        <section className="mt-6">
          <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
            O que rola
          </h3>
          <div className="bg-white rounded-2xl border border-app-divider overflow-hidden">
            {evento.highlights.map((h, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-3 ${
                  i !== evento.highlights.length - 1 ? 'border-b border-app-divider' : ''
                }`}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: evento.themeColor + '20' }}
                >
                  <Sparkles size={14} style={{ color: evento.themeColor }} />
                </div>
                <p className="text-[13px] text-tx-primary leading-snug pt-1">{h}</p>
              </div>
            ))}
          </div>
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
