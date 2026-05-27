import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Instagram, Globe, Clock, MapPin, Ticket,
  Accessibility, MessageCircle,
} from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import {
  COMERCIO_STORES,
  LOGO_TONE_COLORS,
  ACESSIBILIDADE_LABEL,
} from '@/src/lib/data/comercios'

export function generateStaticParams() {
  return COMERCIO_STORES.map((s) => ({ id: s.id }))
}

export default async function ComercioDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const store = COMERCIO_STORES.find((s) => s.id === id)
  if (!store) notFound()

  const logoColor = LOGO_TONE_COLORS[store.logoTone]

  return (
    <div className="animate-fade-in">
      <PageHeader title={store.name} showBack backHref="/comercios" />

      {/* Hero */}
      <div className="relative h-56">
        <Image
          src={store.facadeImageUri}
          alt={store.name}
          fill
          className="object-cover"
          sizes="430px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {store.discountLabel && (
          <div className="absolute top-3 right-3 bg-brand text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            {store.discountLabel}
          </div>
        )}
        <div className="absolute bottom-3 left-4 right-4 flex items-end gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-[14px]"
            style={{
              backgroundColor: logoColor,
              color: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            {store.logoText}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-white font-black text-[22px] leading-tight">{store.name}</h1>
            <p className="text-white/80 text-[12px] capitalize">{store.category}</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[14px] text-tx-primary leading-relaxed">{store.summary}</p>

        {/* Meta */}
        <div className="mt-4 grid grid-cols-1 gap-2">
          <div className="flex items-center gap-3 bg-app-surface rounded-xl p-3">
            <Clock size={16} className="text-tx-tertiary shrink-0" />
            <span className="text-[13px] text-tx-primary">{store.openingHours}</span>
          </div>
          <div className="flex items-center gap-3 bg-app-surface rounded-xl p-3">
            <MapPin size={16} className="text-tx-tertiary shrink-0" />
            <span className="text-[13px] text-tx-primary">{store.addressLine}</span>
          </div>
          {store.aceitaCupomBoulevard && (
            <Link
              href="/vantagens"
              className="flex items-center gap-3 bg-brand-light rounded-xl p-3 press-scale"
            >
              <Ticket size={16} className="text-brand shrink-0" />
              <div className="flex-1">
                <p className="text-[13px] font-semibold text-brand">Aceita cupom Boulevard</p>
                <p className="text-[11px] text-brand/80">Ver ofertas disponíveis →</p>
              </div>
            </Link>
          )}
        </div>

        {/* Acessibilidade */}
        {store.acessibilidade.length > 0 && (
          <section className="mt-6">
            <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Accessibility size={14} />
              Acessibilidade
            </h3>
            <div className="bg-white rounded-2xl border border-app-divider p-4">
              <div className="flex flex-wrap gap-2">
                {store.acessibilidade.map((flag) => (
                  <span
                    key={flag}
                    className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full"
                  >
                    {ACESSIBILIDADE_LABEL[flag]}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tags */}
        {store.keywords.length > 0 && (
          <section className="mt-6">
            <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
              O que esperar
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {store.keywords.map((k) => (
                <span
                  key={k}
                  className="text-[11px] text-tx-secondary bg-app-surface px-2.5 py-1 rounded-full"
                >
                  #{k}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        <section className="mt-6 mb-4 grid grid-cols-2 gap-2">
          {store.instagramUrl && (
            <a
              href={store.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-white border border-app-divider rounded-xl py-3 press-scale text-[13px] font-semibold text-tx-primary"
            >
              <Instagram size={14} className="text-pink-500" />
              Instagram
            </a>
          )}
          {store.websiteUrl && (
            <a
              href={store.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-white border border-app-divider rounded-xl py-3 press-scale text-[13px] font-semibold text-tx-primary"
            >
              <Globe size={14} className="text-blue-500" />
              Site
            </a>
          )}
        </section>

        <Link
          href="/mapa"
          className="block mt-2 w-full text-center rounded-xl py-3 bg-brand text-white font-semibold text-[13px] press-scale"
        >
          Ver no mapa
        </Link>

        <button className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl py-3 bg-white border border-app-divider text-tx-primary font-semibold text-[13px] press-scale">
          <MessageCircle size={14} />
          Avaliar
        </button>
      </div>
    </div>
  )
}
