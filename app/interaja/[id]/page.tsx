import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users, MapPin, Info, AlertCircle,
  Camera, Brain, Video, Footprints, Sticker, Bookmark, BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { INTERACAO_SLIDES, KIND_LABELS, type InteracaoSlide } from '@/src/lib/data/interaja'

export function generateStaticParams() {
  return INTERACAO_SLIDES.map((s) => ({ id: s.id }))
}

const CTA_ICON: Record<InteracaoSlide['kind'], LucideIcon> = {
  'foto-opp':         Camera,
  'super-quiz':       Brain,
  'envio-tela':       Video,
  'roteiro-guiado':   Footprints,
  'album-figurinhas': Sticker,
  'wishlist-endossa': Bookmark,
  'curiosidade-sp':   BookOpen,
}

export default async function InteracaoDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const slide = INTERACAO_SLIDES.find((s) => s.id === id)
  if (!slide) notFound()

  return (
    <div className="animate-fade-in">
      <PageHeader title={KIND_LABELS[slide.kind]} showBack backHref="/interaja" />

      {/* Hero */}
      <div className="relative h-56">
        <Image
          src={slide.imageUri}
          alt={slide.title}
          fill
          className="object-cover"
          sizes="430px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
          {slide.statusLabel}
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <h1 className="text-white font-black text-[24px] leading-tight">{slide.title}</h1>
        </div>
      </div>

      {/* Description */}
      <div className="p-4">
        <p className="text-[14px] text-tx-primary leading-relaxed">{slide.description}</p>

        {/* Meta */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="bg-app-surface rounded-xl p-3">
            <div className="flex items-center gap-1.5 text-tx-tertiary">
              <Users size={12} />
              <span className="text-[10px] font-semibold uppercase tracking-wide">Pessoas</span>
            </div>
            <p className="text-[12px] font-semibold text-tx-primary mt-1 leading-snug">
              {slide.participantsLabel}
            </p>
          </div>
          {slide.telao && (
            <div className="bg-app-surface rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-tx-tertiary">
                <MapPin size={12} />
                <span className="text-[10px] font-semibold uppercase tracking-wide">Onde aparece</span>
              </div>
              <p className="text-[12px] font-semibold text-tx-primary mt-1 leading-snug">
                {slide.telao}
              </p>
            </div>
          )}
        </div>

        {slide.rule && (
          <div className="mt-3 bg-brand-light rounded-xl p-3 flex gap-2">
            <Info size={14} className="text-brand shrink-0 mt-0.5" />
            <p className="text-[12px] text-brand leading-snug">{slide.rule}</p>
          </div>
        )}

        <div className="mt-5">
          {renderModeMock(slide)}
        </div>

        <button
          className="w-full mt-5 rounded-xl font-bold py-4 text-white press-scale flex items-center justify-center gap-2"
          style={{ backgroundColor: slide.accentColor }}
        >
          {(() => {
            const CtaIcon = CTA_ICON[slide.kind]
            return <CtaIcon size={18} />
          })()}
          {slide.actionLabel}
        </button>

        <div className="mt-3 bg-app-surface rounded-xl p-3 flex gap-2 items-start">
          <AlertCircle size={14} className="text-tx-tertiary shrink-0 mt-0.5" />
          <p className="text-[11px] text-tx-tertiary leading-snug">
            Pra interagir com o telão você precisa de uma conta Boulevard.
            <Link href="/cadastro" className="font-semibold text-brand ml-1">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function renderModeMock(slide: InteracaoSlide) {
  switch (slide.kind) {
    case 'super-quiz':       return <QuizMock slide={slide} />
    case 'foto-opp':         return <FotoOppMock slide={slide} />
    case 'envio-tela':       return <EnvioMock slide={slide} />
    case 'roteiro-guiado':   return <RoteiroMock slide={slide} />
    case 'album-figurinhas': return <AlbumMock slide={slide} />
    case 'wishlist-endossa': return <WishlistMock slide={slide} />
    case 'curiosidade-sp':   return <CuriosidadeMock slide={slide} />
    default:                 return null
  }
}

function QuizMock({ slide }: { slide: InteracaoSlide }) {
  const options = ['Avenida Rebouças', 'Avenida Paulista', 'Av. Brigadeiro Faria Lima']
  return (
    <div className="bg-white border border-app-divider rounded-2xl p-4">
      <p className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">Pergunta da semana</p>
      <p className="text-[14px] font-bold text-tx-primary mt-1">
        Qual famosa avenida de São Paulo já teve o nome de "Avenida da Esperança"?
      </p>
      <div className="mt-3 space-y-2">
        {options.map((o, i) => (
          <div key={o} className="border border-app-divider rounded-xl px-3 py-2.5 flex items-center justify-between">
            <span className="text-[13px] text-tx-primary">{o}</span>
            <span className="text-[10px] text-tx-tertiary">{[42, 29, 29][i]}%</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] mt-3" style={{ color: slide.accentColor }}>
        Ranking atualiza no telão a cada 10 min.
      </p>
    </div>
  )
}

function FotoOppMock({ slide }: { slide: InteracaoSlide }) {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
      <Image src={slide.imageUri} alt="Personagem Centro" fill className="object-cover" sizes="430px" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
      <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
        📸 INSTALAÇÃO PERMANENTE
      </div>
      <div className="absolute bottom-3 left-3 right-3 text-white">
        <p className="text-[11px] font-semibold opacity-80 uppercase tracking-wide">
          Espaço Cauby Peixoto
        </p>
        <p className="font-bold text-[14px] mt-1 leading-tight">
          Casaco cinza · guarda-chuva de metal · neons · calçada paulista
        </p>
      </div>
    </div>
  )
}

function EnvioMock({ slide }: { slide: InteracaoSlide }) {
  return (
    <div
      className="rounded-2xl p-4 text-white"
      style={{ background: `linear-gradient(135deg, ${slide.accentColor}, #2A0066)` }}
    >
      <p className="text-[10px] font-bold uppercase tracking-wide opacity-80">Tema da semana</p>
      <p className="font-bold text-[16px] mt-1">Semana das Embaixadinhas</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[1, 2, 3].map((n) => (
          <div key={n} className="aspect-square rounded-lg bg-white/15 flex items-center justify-center">
            <span className="text-[10px] font-semibold opacity-80">Envio {n}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] mt-3 opacity-80">
        Grava 15s · curadoria responde em até 24h.
      </p>
    </div>
  )
}

function RoteiroMock({ slide }: { slide: InteracaoSlide }) {
  return (
    <div className="bg-white border border-app-divider rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">Próxima saída</span>
        <span className="text-[12px] font-bold" style={{ color: slide.accentColor }}>Sáb · 11h</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          'Ponto-Zero · São João × Ipiranga',
          'Igreja N. Sra. do Rosário dos Homens Pretos',
          'Estátua da Mãe Preta',
          'Relógio de Nichile',
          'Espaço Cauby Peixoto · arquibancada',
        ].map((p, i) => (
          <div key={p} className="flex items-center gap-2 text-tx-secondary">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ backgroundColor: slide.accentColor }}
            >
              {i + 1}
            </span>
            <span className="text-[12px]">{p}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] mt-3" style={{ color: slide.accentColor }}>
        Duração ~90min · jovens guias capacitados.
      </p>
    </div>
  )
}

function AlbumMock({ slide }: { slide: InteracaoSlide }) {
  return (
    <div className="bg-white border border-app-divider rounded-2xl p-4">
      <p className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">Suas figurinhas</p>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[3/4] rounded-lg border border-dashed border-app-divider flex items-center justify-center text-[10px] text-tx-disabled"
          >
            #{i + 1}
          </div>
        ))}
      </div>
      <p className="text-[11px] mt-3" style={{ color: slide.accentColor }}>
        Sua próxima figurinha pode aparecer no telão Habibs.
      </p>
    </div>
  )
}

function WishlistMock({ slide }: { slide: InteracaoSlide }) {
  const itens = [
    { label: 'Camiseta upcycle · Tribus', valor: 'R$ 89' },
    { label: 'Capa de tablet em couro reciclado', valor: 'R$ 145' },
    { label: 'Kit zero-waste cozinha', valor: 'R$ 76' },
  ]
  return (
    <div className="bg-white border border-app-divider rounded-2xl p-4">
      <p className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">Salvos pra esse fim de semana</p>
      <div className="mt-3 space-y-2">
        {itens.map((i) => (
          <div key={i.label} className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg shrink-0"
              style={{ backgroundColor: slide.accentColor + '20' }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-tx-primary leading-tight">{i.label}</p>
              <p className="text-[11px] text-tx-tertiary">{i.valor}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] mt-3" style={{ color: slide.accentColor }}>
        Cupons no Vantagens pros itens salvos.
      </p>
    </div>
  )
}

function CuriosidadeMock({ slide }: { slide: InteracaoSlide }) {
  return (
    <div className="bg-white border border-app-divider rounded-2xl p-4">
      <p className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">Hoje</p>
      <p className="text-[14px] text-tx-primary mt-1 leading-snug">
        O <strong>Bar Brahma</strong> foi inaugurado em 1948 e era ponto de encontro dos jornalistas
        das rádios da São João.
      </p>
      <p className="text-[11px] mt-3" style={{ color: slide.accentColor }}>
        Próxima curiosidade amanhã às 10h.
      </p>
    </div>
  )
}
