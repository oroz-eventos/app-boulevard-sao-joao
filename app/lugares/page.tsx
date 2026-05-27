import Link from 'next/link'
import Image from 'next/image'
import PageHeader from '@/src/components/PageHeader'
import { LUGARES } from '@/src/lib/data/lugares'

const CATEGORY_LABEL: Record<string, string> = {
  patrimonio:            'Patrimônio restaurado',
  praca:                 'Praça requalificada',
  'ponto-de-interesse':  'Ponto de interesse',
}

const CATEGORY_COLOR: Record<string, string> = {
  patrimonio:            '#774DE8',
  praca:                 '#16A34A',
  'ponto-de-interesse':  '#5500CC',
}

export default function LugaresListPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Lugares" subtitle="Patrimônios e marcos do eixo São João" showBack />

      <div className="mx-4 mt-4 rounded-2xl bg-brand-shadow p-5 text-white">
        <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
          Eixo restaurado
        </p>
        <h2 className="text-[18px] font-black mt-1 leading-tight">
          Cinco marcos que voltam a pulsar.
        </h2>
        <p className="text-[12px] text-white/80 mt-1.5 leading-snug">
          O projeto restaura patrimônios históricos, requalifica praças e marca a esquina mais
          famosa do Brasil. Cada um conta uma história do Centro paulistano.
        </p>
      </div>

      <div className="mt-6 px-4 pb-4 space-y-3">
        {LUGARES.map((l) => {
          const color = CATEGORY_COLOR[l.category]
          return (
            <Link
              key={l.slug}
              href={`/lugares/${l.slug}`}
              className="block bg-white rounded-2xl border border-app-divider overflow-hidden press-scale"
            >
              <div className="relative h-32">
                <Image
                  src={l.imageUri}
                  alt={l.title}
                  fill
                  className="object-cover"
                  sizes="430px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, ${color}cc 100%)`,
                  }}
                />
                <div className="absolute top-2 left-2 bg-white text-tx-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {CATEGORY_LABEL[l.category]}
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-white font-black text-[16px] leading-tight">{l.title}</h3>
                  <p className="text-white/85 text-[11px] mt-0.5 line-clamp-1">
                    {l.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
