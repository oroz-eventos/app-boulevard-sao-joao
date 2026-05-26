import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Clock, Camera, MapPin, Info, AlertCircle } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { INTERACAO_SLIDES, KIND_LABELS, type InteracaoSlide } from '@/src/lib/data/interaja'

export function generateStaticParams() {
  return INTERACAO_SLIDES.map((s) => ({ id: s.id }))
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
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
          {slide.statusLabel === 'AO VIVO' && (
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          )}
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
                <span className="text-[10px] font-semibold uppercase tracking-wide">Telão</span>
              </div>
              <p className="text-[12px] font-semibold text-tx-primary mt-1 leading-snug">
                {slide.telao}
              </p>
            </div>
          )}
        </div>

        {/* Regras */}
        {slide.rule && (
          <div className="mt-3 bg-brand-light rounded-xl p-3 flex gap-2">
            <Info size={14} className="text-brand shrink-0 mt-0.5" />
            <p className="text-[12px] text-brand leading-snug">{slide.rule}</p>
          </div>
        )}

        {/* Mockup específico por tipo */}
        <div className="mt-5">
          {renderModeMock(slide)}
        </div>

        {/* CTA principal */}
        <button
          className="w-full mt-5 rounded-xl font-bold py-4 text-white press-scale flex items-center justify-center gap-2"
          style={{ backgroundColor: slide.accentColor }}
        >
          <Camera size={18} />
          {slide.actionLabel}
        </button>

        {/* Cadastro */}
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

/** Mockup específico que ilustra o tipo de interação */
function renderModeMock(slide: InteracaoSlide) {
  switch (slide.kind) {
    case 'super-quiz':
      return <QuizMock slide={slide} />
    case 'kiss-cam':
      return <KissCamMock slide={slide} />
    case 'envio-tela':
      return <EnvioMock slide={slide} />
    case 'jogo-online':
      return <JogoMock slide={slide} />
    case 'album-figurinhas':
      return <AlbumMock slide={slide} />
    case 'curiosidade-sp':
      return <CuriosidadeMock slide={slide} />
    case 'janela-mundo':
      return <JanelaMock slide={slide} />
    default:
      return null
  }
}

function QuizMock({ slide }: { slide: InteracaoSlide }) {
  const options = ['Avenida Rebouças', 'Avenida Paulista', 'Av. Brigadeiro Faria Lima']
  return (
    <div className="bg-white border border-app-divider rounded-2xl p-4">
      <p className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">Pergunta da semana</p>
      <p className="text-[14px] font-bold text-tx-primary mt-1">
        Qual famosa avenida de São Paulo já teve o nome de “Avenida da Esperança”?
      </p>
      <div className="mt-3 space-y-2">
        {options.map((o, i) => (
          <div
            key={o}
            className="border border-app-divider rounded-xl px-3 py-2.5 flex items-center justify-between"
          >
            <span className="text-[13px] text-tx-primary">{o}</span>
            <span className="text-[10px] text-tx-tertiary">{[42, 29, 29][i]}%</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-tx-tertiary mt-3" style={{ color: slide.accentColor }}>
        Ranking atualiza no telão a cada 10 min.
      </p>
    </div>
  )
}

function KissCamMock({ slide }: { slide: InteracaoSlide }) {
  return (
    <div className="bg-black rounded-2xl overflow-hidden aspect-video relative">
      <Image src={slide.imageUri} alt="Kiss Cam preview" fill className="object-cover opacity-90" sizes="430px" />
      <div className="absolute inset-0 ring-2 ring-pink-500 ring-inset rounded-2xl" />
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        AO VIVO · BAR BRAHMA
      </div>
      <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-md text-white text-[11px] font-medium px-3 py-2 rounded-lg">
        Aponte a câmera pro telão · sua imagem entra em loop em 3s
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

function JogoMock({ slide }: { slide: InteracaoSlide }) {
  return (
    <div className="bg-white border border-app-divider rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">Próxima rodada</span>
        <span className="text-[12px] font-bold" style={{ color: slide.accentColor }}>Sáb · 20h</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="text-[12px] text-tx-tertiary">Inscritos</p>
          <p className="text-[22px] font-black text-tx-primary leading-none">312</p>
        </div>
        <div>
          <p className="text-[12px] text-tx-tertiary">Rodadas</p>
          <p className="text-[22px] font-black text-tx-primary leading-none">5</p>
        </div>
        <div>
          <p className="text-[12px] text-tx-tertiary">Prêmio top 3</p>
          <p className="text-[22px] font-black text-tx-primary leading-none">R$ 50</p>
        </div>
      </div>
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

function JanelaMock({ slide }: { slide: InteracaoSlide }) {
  return (
    <div className="bg-black rounded-2xl overflow-hidden aspect-video relative">
      <Image src={slide.imageUri} alt="Times Square" fill className="object-cover opacity-90" sizes="430px" />
      <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
        🗽 NEW YORK · TIMES SQUARE
      </div>
      <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-md text-white text-[11px] font-medium px-3 py-2 rounded-lg">
        Acene · o pessoal de NY te vê no telão da Times Square.
      </div>
    </div>
  )
}
