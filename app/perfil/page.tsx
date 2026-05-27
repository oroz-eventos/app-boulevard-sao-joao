import Link from 'next/link'
import {
  Settings, Trophy, Heart, Tag, Image as ImageIcon, Bell,
  Info, LogOut, ChevronRight, Accessibility,
} from 'lucide-react'
import PageHeader from '@/src/components/PageHeader'

const STATS = [
  { label: 'Aparições no telão', value: '3' },
  { label: 'Quizzes acertados',  value: '12' },
  { label: 'Figurinhas',         value: '8' },
]

const SECTIONS: { items: { icon: typeof Heart; label: string; href: string }[] }[] = [
  {
    items: [
      { icon: Heart,      label: 'Meus envios pra tela',  href: '/interaja' },
      { icon: Trophy,     label: 'Ranking dos quizzes',   href: '/interaja' },
      { icon: ImageIcon,  label: 'Minhas figurinhas',     href: '/interaja' },
      { icon: Tag,        label: 'Meus cupons',           href: '/vantagens' },
    ],
  },
  {
    items: [
      { icon: Bell,           label: 'Notificações',          href: '/notificacoes' },
      { icon: Accessibility,  label: 'Acessibilidade',        href: '/acessibilidade' },
      { icon: Settings,       label: 'Preferências',          href: '/perfil' },
      { icon: Info,           label: 'Sobre o projeto',       href: '/sobre' },
    ],
  },
]

export default function PerfilPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Meu perfil" showBack />

      {/* Avatar block */}
      <section className="px-4 pt-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-accent-2 flex items-center justify-center text-white font-black text-[20px]">
            P
          </div>
          <div>
            <p className="font-bold text-[16px] text-tx-primary">Paulistano Convidado</p>
            <p className="text-[12px] text-tx-tertiary">Conta criada em mai · 2026</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 mt-5">
        <div className="bg-white rounded-2xl border border-app-divider p-4 grid grid-cols-3 gap-3">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[22px] font-black text-brand leading-none">{s.value}</p>
              <p className="text-[10px] font-semibold text-tx-tertiary uppercase tracking-wide mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      {SECTIONS.map((section, sIdx) => (
        <section key={sIdx} className="px-4 mt-5">
          <div className="bg-white rounded-2xl border border-app-divider overflow-hidden">
            {section.items.map((item, i) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 press-scale ${
                    i !== section.items.length - 1 ? 'border-b border-app-divider' : ''
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-app-surface flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-tx-secondary" />
                  </div>
                  <span className="flex-1 text-[14px] text-tx-primary font-medium">{item.label}</span>
                  <ChevronRight size={16} className="text-tx-tertiary" />
                </Link>
              )
            })}
          </div>
        </section>
      ))}

      {/* Logout */}
      <section className="px-4 mt-5 mb-4">
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-app-divider text-red-500 font-semibold py-3 rounded-2xl press-scale text-[14px]">
          <LogOut size={16} />
          Sair da conta
        </button>
      </section>
    </div>
  )
}
