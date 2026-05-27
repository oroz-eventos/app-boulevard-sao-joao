'use client'
import Link from 'next/link'
import { ArrowLeft, Menu } from 'lucide-react'
import BoulevardMap from '@/src/features/mapa/BoulevardMap'
import AppMenuDrawer from '@/src/components/AppMenuDrawer'

export default function MapaPage() {
  return (
    <div className="animate-fade-in">
      {/* Header overlay flutuante sobre o mapa */}
      <header
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 px-4 pt-3"
        style={{
          maxWidth: 'var(--max-app-width)',
          paddingTop: 'calc(env(safe-area-inset-top) + 12px)',
        }}
      >
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 press-scale shadow-lg"
            aria-label="Voltar pra home"
          >
            <ArrowLeft size={20} className="text-white" />
          </Link>
          <div className="flex-1 min-w-0 text-center px-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/70 leading-none">
              Mapa
            </p>
            <p className="text-[13px] font-bold text-white leading-tight truncate">
              Av. São João × Ipiranga
            </p>
          </div>
          <AppMenuDrawer
            trigger={
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-lg">
                <Menu size={20} className="text-white" />
              </span>
            }
          />
        </div>
      </header>

      <BoulevardMap />
    </div>
  )
}
