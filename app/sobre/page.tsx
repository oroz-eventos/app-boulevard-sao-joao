import Image from 'next/image'
import Link from 'next/link'
import { Building2, HeartHandshake, Palette, Leaf, Sprout } from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'

const PILARES = [
  {
    icon: Sprout,
    color: '#16A34A',
    title: 'Social & Ambiental',
    description:
      'Oficinas de capacitação em restauro, gastronomia, hospitalidade e arte digital. Novas áreas verdes no eixo.',
  },
  {
    icon: Building2,
    color: '#5500CC',
    title: 'Econômico',
    description:
      'Telas LED como motor de receita (cofundadoras). Estímulo à abertura de novos cafés, restaurantes e comércios.',
  },
  {
    icon: Palette,
    color: '#E91E8C',
    title: 'Urbanístico',
    description:
      'Ocupar, conservar, renovar. Restauro de monumentos, parklets, novo mobiliário urbano, Wi-Fi público, totens interativos.',
  },
  {
    icon: HeartHandshake,
    color: '#3B5BDB',
    title: 'Cultural',
    description:
      'Luz, cor e tecnologia. Curadoria contínua das 4 editorias com parceria CNN Brasil, Jovem Pan e UOL.',
  },
] as const

const SECRETARIAS = [
  { name: 'Secretaria de Saúde',                           role: 'Campanhas de conscientização, vacinação' },
  { name: 'Secretaria de Cultura e Economia Criativa',     role: 'Virada Cultural, Natal do Centro, agenda permanente' },
  { name: 'Secretaria de Educação',                        role: 'Distribuição de livros, matrícula escolar e de creches' },
  { name: 'Secretaria das Pessoas com Deficiência',        role: 'Hospitalidade Acessível e ações pra mães e cuidadoras' },
]

export default function SobrePage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Sobre o projeto" showBack />

      {/* Hero */}
      <div className="relative h-44">
        <Image
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
          alt="Centro de São Paulo"
          fill
          className="object-cover"
          sizes="430px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-shadow via-brand-shadow/60 to-brand-shadow/20" />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full">
            Cidade de SP · Fábrica de Bares · LedWave
          </span>
          <h1 className="text-white font-black text-[22px] leading-tight mt-2">
            Requalificação urbana, cultural e econômica do Centro
          </h1>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[14px] text-tx-primary leading-relaxed">
          Projeto de intervenção urbana no eixo Av. São João + Largo do Paissandu até a esquina
          com Ipiranga (5 quarteirões). Une atividades socioculturais, paisagismo, painéis
          digitais, restauro de monumentos, iluminação e novo mobiliário urbano.
          Lançamento previsto pra <strong>setembro de 2026</strong>.
        </p>

        {/* 4 Pilares */}
        <section className="mt-6">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
            4 Pilares do projeto
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {PILARES.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="bg-white rounded-2xl border border-app-divider p-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: p.color + '20' }}
                  >
                    <Icon size={18} style={{ color: p.color }} />
                  </div>
                  <p className="font-bold text-[13px] text-tx-primary mt-2 leading-tight">
                    {p.title}
                  </p>
                  <p className="text-[11px] text-tx-secondary mt-1 leading-snug">
                    {p.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Conselho Curatorial */}
        <section className="mt-6">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
            Conselho Curatorial
          </h2>
          <div className="bg-white rounded-2xl border border-app-divider p-4">
            <p className="text-[13px] text-tx-primary leading-snug">
              Define diretrizes curatoriais, contribui pra agenda cultural,
              valida conteúdos institucionais/patrocinados e acompanha a evolução do modelo
              em conjunto com a equipe de produção.
            </p>
            <p className="text-[11px] text-tx-tertiary mt-2">
              Reuniões mensais · validação CPPU · parcerias de mídia com CNN Brasil, Jovem Pan e UOL.
            </p>
          </div>
        </section>

        {/* Secretarias parceiras */}
        <section className="mt-6 mb-2">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider mb-3">
            Secretarias parceiras
          </h2>
          <div className="bg-white rounded-2xl border border-app-divider overflow-hidden">
            {SECRETARIAS.map((s, i) => (
              <div
                key={s.name}
                className={`p-3 ${i !== SECRETARIAS.length - 1 ? 'border-b border-app-divider' : ''}`}
              >
                <p className="font-bold text-[13px] text-tx-primary leading-tight">{s.name}</p>
                <p className="text-[11px] text-tx-tertiary mt-0.5">{s.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Links rápidos */}
        <section className="mt-6 mb-4 grid grid-cols-2 gap-3">
          <Link
            href="/parceiros"
            className="rounded-2xl bg-brand text-white p-4 press-scale"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-85">Comercial</p>
            <p className="font-bold text-[14px] mt-1">Marcas cofundadoras</p>
          </Link>
          <Link
            href="/eventos"
            className="rounded-2xl bg-tx-primary text-white p-4 press-scale"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-85">Calendário</p>
            <p className="font-bold text-[14px] mt-1">12 grandes eventos</p>
          </Link>
        </section>
      </div>
    </div>
  )
}
