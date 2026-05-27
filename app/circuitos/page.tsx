import Link from 'next/link'
import Image from 'next/image'
import PageHeader from '@/src/components/PageHeader'
import { CIRCUITOS } from '@/src/lib/data/circuitos'

export default function CircuitosListPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="7 Circuitos" subtitle="A plataforma integrada do Boulevard" showBack />

      {/* Manifesto */}
      <div className="mx-4 mt-4 rounded-2xl bg-brand-shadow p-5 text-white">
        <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Sustentação do Boulevard</p>
        <h2 className="text-[18px] font-black mt-1 leading-tight">
          Sete circuitos, um único coração urbano.
        </h2>
        <p className="text-[12px] text-white/85 mt-1.5 leading-snug">
          A vida no calçadão acontece todos os sábados e domingos. Sete trilhas permanentes que
          habituam o paulistano a reocupar o Centro como espaço regular de lazer, cultura e
          convivência familiar.
        </p>
      </div>

      {/* Grid */}
      <section className="mt-6 px-4 pb-4 space-y-3">
        {CIRCUITOS.map((c) => (
          <Link
            key={c.slug}
            href={`/circuitos/${c.slug}`}
            className="block bg-white rounded-2xl border border-app-divider overflow-hidden press-scale"
          >
            <div className="relative h-32">
              <Image
                src={c.imageUri}
                alt={c.title}
                fill
                className="object-cover"
                sizes="430px"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${c.accentColor}cc 100%)`,
                }}
              />
              <div className="absolute top-3 left-3 bg-white text-tx-primary text-[10px] font-black px-2.5 py-1 rounded-full">
                CIRCUITO {c.numero}
              </div>
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-white font-black text-[18px] leading-tight">{c.title}</h3>
                <p className="text-white/85 text-[11px] mt-0.5">{c.tagline}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
