import Link from 'next/link'
import {
  Accessibility, Ear, Eye, Hand, Construction, MapPin, Heart,
} from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'
import { COMERCIO_STORES, ACESSIBILIDADE_LABEL } from '@/src/lib/data/comercios'

const RECURSOS = [
  {
    icon: Construction,
    color: '#5500CC',
    title: 'Rampas e nivelamento',
    description:
      'Reorganização viária priorizou o pedestre. Rebaixamentos de calçada nos cruzamentos, ausência de barreiras no eixo São João.',
  },
  {
    icon: Ear,
    color: '#3B5BDB',
    title: 'LIBRAS',
    description:
      'Tradução simultânea em LIBRAS nos shows-âncora dos grandes eventos. Janela de intérprete nas transmissões dos telões.',
  },
  {
    icon: Eye,
    color: '#774DE8',
    title: 'Áudio-descrição',
    description:
      'Áudio-descrição via app durante apresentações cênicas e mapa em braille nos totens informativos das praças.',
  },
  {
    icon: Hand,
    color: '#E91E8C',
    title: 'Hospitalidade Acessível',
    description:
      'Treinamento de hospitalidade acessível pra rede ABRASEL do Centro. Bares e restaurantes parceiros com selo verde.',
  },
] as const

export default function AcessibilidadePage() {
  // Filtra comércios com pelo menos 1 flag de acessibilidade
  const acessiveis = COMERCIO_STORES.filter((s) => s.acessibilidade.length > 0)

  return (
    <div className="animate-fade-in">
      <PageHeader title="Acessibilidade" subtitle="Hospitalidade pra todos" showBack />

      {/* Hero manifesto */}
      <div className="mx-4 mt-4 rounded-2xl bg-brand-shadow p-5 text-white relative overflow-hidden">
        <Accessibility size={20} className="text-white/80" />
        <h2 className="text-[18px] font-black mt-2 leading-tight">
          Acessibilidade não é custo.
        </h2>
        <p className="text-[12px] text-white/85 mt-1.5 leading-snug">
          É experiência, receita e posicionamento ético de marca. O Boulevard São João adota a
          acessibilidade como ativo estratégico — recursos contínuos no espaço público e
          treinamento dos parceiros.
        </p>
      </div>

      {/* Recursos */}
      <section className="mt-6 px-4">
        <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
          Recursos disponíveis
        </h3>
        <div className="space-y-2">
          {RECURSOS.map((r) => {
            const Icon = r.icon
            return (
              <div key={r.title} className="flex items-start gap-3 bg-white border border-app-divider rounded-2xl p-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: r.color + '20' }}
                >
                  <Icon size={18} style={{ color: r.color }} />
                </div>
                <div>
                  <p className="font-bold text-[13px] text-tx-primary leading-tight">{r.title}</p>
                  <p className="text-[11px] text-tx-secondary mt-1 leading-snug">
                    {r.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Comércios acessíveis */}
      <section className="mt-6 px-4">
        <h3 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <MapPin size={14} />
          Comércios com selo acessível
        </h3>
        <div className="bg-white rounded-2xl border border-app-divider overflow-hidden">
          {acessiveis.map((c, i) => (
            <Link
              key={c.id}
              href={`/comercios/${c.id}`}
              className={`flex items-start gap-3 p-3 press-scale ${
                i !== acessiveis.length - 1 ? 'border-b border-app-divider' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <Accessibility size={16} className="text-emerald-700" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[13px] text-tx-primary leading-tight">{c.name}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {c.acessibilidade.map((flag) => (
                    <span
                      key={flag}
                      className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full"
                    >
                      {ACESSIBILIDADE_LABEL[flag]}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Inclusão como ativo */}
      <section className="mt-6 mb-4 mx-4 rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
        <Heart size={16} className="text-emerald-600" />
        <p className="text-[12px] text-emerald-900 mt-2 leading-relaxed">
          <strong>14,4 milhões</strong> de brasileiros têm alguma deficiência e movimentam{' '}
          <strong>R$ 400 bi</strong> em renda direta. Acessibilidade é mercado, é receita e é o
          jeito certo de fazer.
        </p>
      </section>
    </div>
  )
}
