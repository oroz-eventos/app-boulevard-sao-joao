import Link from 'next/link'
import Image from 'next/image'
import { Users, Clock, ChevronRight, Sparkles } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { INTERACAO_SLIDES, KIND_LABELS } from '@/src/lib/data/interaja'

export default function CentralInteracaoPage() {
  // Destaque: o Foto-Opp Personagem Centro (ativação ícone do circuito)
  const destaque = INTERACAO_SLIDES.find((s) => s.kind === 'foto-opp')
  const demais = INTERACAO_SLIDES.filter((s) => s.id !== destaque?.id)

  return (
    <div className="animate-fade-in">
      <PageHeader title="Central de Interação" subtitle="O Centro responde à sua câmera" showBack />

      {/* Manifesto */}
      <div className="mx-4 mt-4 rounded-2xl bg-brand-shadow p-5 text-white">
        <Sparkles size={20} className="text-white/80" />
        <h2 className="text-[18px] font-black mt-2 leading-tight">
          Assistir é só o começo.
        </h2>
        <p className="text-[12px] text-white/75 mt-1 leading-snug">
          No Boulevard você vira parte da paisagem digital — sua foto, seu vídeo e suas escolhas
          alimentam os 4 telões do eixo.
        </p>
      </div>

      {/* Destaque · Foto-Opp */}
      {destaque && (
        <section className="mt-6">
          <div className="px-4 mb-3">
            <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
              Em destaque
            </h3>
          </div>
          <div className="px-4">
            <FeaturedCard slide={destaque} />
          </div>
        </section>
      )}

      {/* Demais modos */}
      <section className="mt-6 pb-4">
        <div className="px-4 mb-3">
          <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            Mais modos de interação
          </h3>
        </div>
        <div className="px-4 grid grid-cols-1 gap-3">
          {demais.map((slide) => (
            <CompactCard key={slide.id} slide={slide} />
          ))}
        </div>
      </section>
    </div>
  )
}

function FeaturedCard({ slide }: { slide: typeof INTERACAO_SLIDES[number] }) {
  return (
    <Link
      href={`/interaja/${slide.id}`}
      className="block bg-white rounded-2xl border border-app-divider overflow-hidden press-scale"
    >
      <div className="relative h-44">
        <Image src={slide.imageUri} alt={slide.title} fill className="object-cover" sizes="430px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
          {slide.statusLabel}
        </div>
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {KIND_LABELS[slide.kind]}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="text-white font-bold text-[17px] leading-tight">{slide.title}</h4>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[13px] text-tx-secondary leading-snug line-clamp-2">{slide.description}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 text-tx-tertiary">
            <Users size={11} />
            <span className="text-[11px]">{slide.participantsLabel}</span>
          </div>
          <span
            className="text-[12px] font-bold flex items-center gap-1 press-scale"
            style={{ color: slide.accentColor }}
          >
            {slide.actionLabel}
            <ChevronRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}

function CompactCard({ slide }: { slide: typeof INTERACAO_SLIDES[number] }) {
  return (
    <Link
      href={`/interaja/${slide.id}`}
      className="flex items-center gap-3 bg-white rounded-2xl border border-app-divider p-3 press-scale"
    >
      <div
        className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0"
        style={{ backgroundColor: slide.accentColor + '20' }}
      >
        <Image src={slide.imageUri} alt={slide.title} fill className="object-cover" sizes="64px" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span
            className="text-[10px] font-bold uppercase tracking-wide"
            style={{ color: slide.accentColor }}
          >
            {KIND_LABELS[slide.kind]}
          </span>
        </div>
        <h4 className="font-bold text-[14px] text-tx-primary leading-tight truncate">{slide.title}</h4>
        <div className="flex items-center gap-3 mt-1 text-tx-tertiary">
          <span className="text-[11px] flex items-center gap-1">
            <Clock size={10} /> {slide.statusLabel}
          </span>
        </div>
      </div>
      <ChevronRight size={18} className="text-tx-tertiary shrink-0" />
    </Link>
  )
}
