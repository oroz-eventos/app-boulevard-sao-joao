import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, MapPin } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { CIRCUITOS, circuitoBySlug } from '@/src/lib/data/circuitos'

export function generateStaticParams() {
  return CIRCUITOS.map((c) => ({ slug: c.slug }))
}

export default async function CircuitoDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = circuitoBySlug(slug)
  if (!c) notFound()

  return (
    <div className="animate-fade-in">
      <PageHeader title={`Circuito ${c.numero}`} subtitle="Plataforma integrada" showBack backHref="/circuitos" />

      {/* Hero */}
      <div className="relative h-56">
        <Image src={c.imageUri} alt={c.title} fill className="object-cover" sizes="430px" priority />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 0%, ${c.accentColor}40 50%, ${c.accentColor}cc 100%)`,
          }}
        />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full">
            CIRCUITO {c.numero} · permanente
          </span>
          <h1 className="text-white font-black text-[24px] leading-tight mt-2">{c.title}</h1>
          <p className="text-white/90 text-[13px] mt-0.5">{c.tagline}</p>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[14px] text-tx-primary leading-relaxed">{c.summary}</p>

        {/* Ativações */}
        <section className="mt-6">
          <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
            Ativações principais
          </h3>
          <div className="bg-white rounded-2xl border border-app-divider overflow-hidden">
            {c.ativacoes.map((a, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-3 ${
                  i !== c.ativacoes.length - 1 ? 'border-b border-app-divider' : ''
                }`}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: c.accentColor + '20' }}
                >
                  <Sparkles size={14} style={{ color: c.accentColor }} />
                </div>
                <p className="text-[13px] text-tx-primary leading-snug pt-1">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="mt-6 mb-4 grid grid-cols-2 gap-2">
          <Link
            href="/mapa"
            className="rounded-xl py-3 bg-white border border-app-divider text-tx-primary font-semibold text-[13px] flex items-center justify-center gap-1.5 press-scale"
          >
            <MapPin size={14} />
            Ver no mapa
          </Link>
          {c.editorialRelated && (
            <Link
              href="/feed"
              className="rounded-xl py-3 text-white font-semibold text-[13px] flex items-center justify-center press-scale"
              style={{ backgroundColor: c.accentColor }}
            >
              Ver editorial
            </Link>
          )}
        </section>
      </div>
    </div>
  )
}
