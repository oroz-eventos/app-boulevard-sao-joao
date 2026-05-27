'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Menu, UserCircle2, Calendar, Building2, Camera, MapPinned,
  Accessibility, HeartHandshake, Bell, Info, LogIn, ChevronRight, Route,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import BottomDrawer from './BottomDrawer'

type MenuItem = {
  icon: LucideIcon
  label: string
  href: string
  description: string
  color: string
  bg: string
}

const SECTIONS: { title: string; items: MenuItem[] }[] = [
  {
    title: 'Explore o Boulevard',
    items: [
      { icon: Calendar,    label: 'Grandes Eventos',  href: '/eventos',       description: '12 macroeventos do calendário', color: '#5500CC', bg: '#EEE5FB' },
      { icon: Route,       label: '7 Circuitos',      href: '/circuitos',     description: 'As trilhas permanentes do calçadão', color: '#774DE8', bg: '#EDE5FB' },
      { icon: MapPinned,   label: 'Lugares',          href: '/lugares',       description: 'Patrimônios e marcos restaurados', color: '#3B5BDB', bg: '#E0E7FB' },
      { icon: Camera,      label: 'Foto-Opp',         href: '/interaja/foto-opp-personagem-centro', description: 'O Personagem Centro', color: '#E91E8C', bg: '#FCE4F1' },
    ],
  },
  {
    title: 'Sobre',
    items: [
      { icon: Info,             label: 'Sobre o projeto',      href: '/sobre',          description: 'A revitalização do Centro', color: '#5500CC', bg: '#EEE5FB' },
      { icon: Building2,        label: 'Marcas Cofundadoras',  href: '/parceiros',      description: 'Quem viabiliza essa história', color: '#F97316', bg: '#FDE6D5' },
      { icon: Accessibility,    label: 'Acessibilidade',       href: '/acessibilidade', description: 'Hospitalidade pra todos', color: '#16A34A', bg: '#DCFCE7' },
      { icon: HeartHandshake,   label: 'Apadrinhar uma Ceia',  href: '/vantagens',      description: 'SP Invisível · Natal no Boulevard', color: '#E91E8C', bg: '#FCE4F1' },
    ],
  },
  {
    title: 'Sua conta',
    items: [
      { icon: UserCircle2, label: 'Meu perfil',     href: '/perfil',        description: 'Suas figurinhas, cupons e ranking', color: '#5500CC', bg: '#EEE5FB' },
      { icon: Bell,        label: 'Notificações',   href: '/notificacoes',  description: 'Avisos e novidades', color: '#3B5BDB', bg: '#E0E7FB' },
      { icon: LogIn,       label: 'Entrar / Cadastrar', href: '/login',     description: 'Pra interagir com os telões', color: '#525252', bg: '#F1F1F1' },
    ],
  },
]

type Props = { trigger?: React.ReactNode }

export default function AppMenuDrawer({ trigger }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {trigger ? (
        <button onClick={() => setOpen(true)} className="press-scale" aria-label="Abrir menu">
          {trigger}
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-9 h-9 flex items-center justify-center rounded-full press-scale"
          aria-label="Abrir menu"
        >
          <Menu size={20} className="text-tx-primary" />
        </button>
      )}

      <BottomDrawer
        open={open}
        onClose={() => setOpen(false)}
        accentColor="#5500CC"
        ariaLabel="Menu do app"
      >
        <div className="pt-1 pb-2">
          {/* Brand header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-app-divider">
            <Image src="/logo-mark.png" alt="Boulevard São João" width={40} height={40} priority />
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em] text-brand uppercase leading-none">
                Boulevard
              </p>
              <p className="text-[15px] font-bold text-tx-primary leading-tight">
                São João
              </p>
            </div>
          </div>

          {/* Sections */}
          {SECTIONS.map((section) => (
            <section key={section.title} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-tx-tertiary mb-2 px-1">
                {section.title}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 p-2 rounded-xl press-scale hover:bg-app-surface transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: item.bg }}
                      >
                        <Icon size={18} style={{ color: item.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-tx-primary leading-tight">
                          {item.label}
                        </p>
                        <p className="text-[11px] text-tx-tertiary leading-snug truncate">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight size={16} className="text-tx-tertiary shrink-0" />
                    </Link>
                  )
                })}
              </div>
            </section>
          ))}

          <p className="text-[10px] text-tx-disabled text-center mt-4 pt-4 border-t border-app-divider">
            v1.0 · em parceria com Cidade de SP, Fábrica de Bares e LedWave
          </p>
        </div>
      </BottomDrawer>
    </>
  )
}
