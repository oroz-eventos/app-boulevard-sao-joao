import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Wrench, Building2 } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { LUGARES, lugarBySlug } from '@/src/lib/data/lugares'

export function generateStaticParams() {
  return LUGARES.map((l) => ({ slug: l.slug }))
}

const CATEGORY_LABEL: Record<string, string> = {
  patrimonio:          'Patrimônio restaurado',
  praca:               'Praça requalificada',
  'ponto-de-interesse':'Ponto de interesse',
}

export default async function LugarDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lugar = lugarBySlug(slug)
  if (!lugar) notFound()

  return (
    <div className="animate-fade-in">
      <PageHeader title={CATEGORY_LABEL[lugar.category]} showBack backHref="/mapa" />

      {/* Hero */}
      <div className="relative h-56">
        <Image src={lugar.imageUri} alt={lugar.title} fill className="object-cover" sizes="430px" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white/85 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full">
            {CATEGORY_LABEL[lugar.category]}
          </span>
          <h1 className="text-white font-black text-[22px] leading-tight mt-2">{lugar.title}</h1>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[14px] text-tx-primary leading-relaxed">{lugar.longDescription}</p>

        {/* Endereço + Mapa */}
        <div className="mt-4 flex items-center gap-2 text-tx-secondary">
          <MapPin size={14} />
          <span className="text-[12px]">{lugar.address}</span>
        </div>
        <Link
          href="/mapa"
          className="block mt-3 bg-brand text-white rounded-xl py-3 text-center text-[13px] font-semibold press-scale"
        >
          Abrir no mapa
        </Link>

        {/* Obras */}
        <section className="mt-6">
          <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Wrench size={14} />
            Intervenções do projeto
          </h3>
          <div className="bg-white rounded-2xl border border-app-divider overflow-hidden">
            {lugar.obras.map((o, i) => (
              <div
                key={i}
                className={`flex gap-3 p-3 ${
                  i !== lugar.obras.length - 1 ? 'border-b border-app-divider' : ''
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
                  <Building2 size={14} className="text-brand" />
                </div>
                <p className="text-[13px] text-tx-primary leading-snug pt-1">{o}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 mb-4 bg-app-surface rounded-2xl p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">
            Parceria
          </p>
          <p className="text-[12px] text-tx-primary mt-1 leading-snug">
            Restauro e intervenção em parceria com a Prefeitura de São Paulo, órgãos de patrimônio
            e marcas cofundadoras do Boulevard São João.
          </p>
        </section>
      </div>
    </div>
  )
}
