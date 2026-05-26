import { Sparkles, Building2 } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { PARCEIROS, COTA_TIER_LABEL, COTA_INVESTMENT } from '@/src/lib/data/parceiros'

export default function ParceirosPage() {
  const master = PARCEIROS.find((p) => p.tier === 'master')
  const pilares = PARCEIROS.filter((p) => p.tier === 'pilar')
  const apoios = PARCEIROS.filter((p) => p.tier === 'apoio')

  return (
    <div className="animate-fade-in">
      <PageHeader title="Marcas Cofundadoras" subtitle="Construindo o novo Centro" showBack />

      {/* Manifesto */}
      <div className="mx-4 mt-4 rounded-2xl bg-brand p-5 text-white">
        <Sparkles size={20} className="text-white/85" />
        <h2 className="text-[18px] font-black mt-2 leading-tight">
          De anunciante a marca cofundadora.
        </h2>
        <p className="text-[12px] text-white/85 mt-1 leading-snug">
          Aqui ninguém compra mídia. As marcas que entram nesse projeto viabilizam cultura,
          financiam inclusão e devolvem conforto à cidade. Política rigorosa de não-concorrência:
          máximo 10 cotas.
        </p>
      </div>

      {/* Master */}
      {master && (
        <section className="mt-6 px-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-tx-tertiary mb-2">
            {COTA_TIER_LABEL[master.tier]} · 1 marca
          </p>
          <div
            className="rounded-2xl p-5 text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${master.accentColor}, #2A0066)` }}
          >
            <div className="flex items-start justify-between">
              <Building2 size={28} />
              <span className="text-[11px] font-bold bg-white/15 backdrop-blur px-2.5 py-1 rounded-full">
                {COTA_INVESTMENT.master}
              </span>
            </div>
            <h3 className="font-black text-[22px] mt-3">{master.label}</h3>
            <p className="text-[12px] text-white/85 mt-2 leading-snug">{master.description}</p>
            <button className="mt-4 bg-white text-brand-shadow font-bold text-[12px] px-4 py-2 rounded-full press-scale">
              Ser cofundadora master
            </button>
          </div>
        </section>
      )}

      {/* Pilares */}
      <section className="mt-6 px-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-tx-tertiary mb-2">
          Pilares Temáticos · 3 marcas
        </p>
        <div className="space-y-3">
          {pilares.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-app-divider p-4 flex gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: p.accentColor + '20' }}
              >
                <Building2 size={18} style={{ color: p.accentColor }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-[14px] text-tx-primary leading-tight">
                    {p.label}
                  </p>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ backgroundColor: p.accentColor + '20', color: p.accentColor }}
                  >
                    {p.valor}
                  </span>
                </div>
                {p.vertical && (
                  <p className="text-[11px] font-medium text-tx-tertiary mt-0.5">{p.vertical}</p>
                )}
                <p className="text-[12px] text-tx-secondary mt-2 leading-snug">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apoios */}
      <section className="mt-6 px-4 pb-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-tx-tertiary mb-2">
          Apoios Ativadores · 6 marcas
        </p>
        <div className="grid grid-cols-2 gap-3">
          {apoios.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-app-divider p-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                style={{ backgroundColor: p.accentColor + '20' }}
              >
                <Building2 size={14} style={{ color: p.accentColor }} />
              </div>
              <p className="font-bold text-[12px] text-tx-primary leading-tight">{p.label}</p>
              {p.vertical && (
                <p className="text-[10px] text-tx-tertiary mt-0.5">{p.vertical}</p>
              )}
              <p className="text-[11px] text-tx-secondary mt-2 leading-snug line-clamp-3">
                {p.description}
              </p>
              <p
                className="text-[10px] font-bold mt-2"
                style={{ color: p.accentColor }}
              >
                {p.valor}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-app-surface rounded-2xl p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-tx-tertiary">
            Sua marca aqui?
          </p>
          <p className="text-[12px] text-tx-primary mt-1 leading-snug">
            Falar com o comercial sobre as cotas disponíveis e o modelo de não-concorrência.
          </p>
          <button className="mt-3 bg-brand text-white text-[12px] font-bold px-4 py-2 rounded-full press-scale">
            Quero ser cofundadora
          </button>
        </div>
      </section>
    </div>
  )
}
