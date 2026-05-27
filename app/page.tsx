import Link from 'next/link'
import Image from 'next/image'
import { IconBell, IconUserCircle } from '@tabler/icons-react'
import HomeTicker from '@/src/features/home/HomeTicker'
import HomeHero from '@/src/features/home/HomeHero'
import HomeShortcuts from '@/src/features/home/HomeShortcuts'
import HomeFeatured from '@/src/features/home/HomeFeatured'
import HomePromo from '@/src/features/home/HomePromo'
import HomeGrandesEventos from '@/src/features/home/HomeGrandesEventos'
import HomeBoulevardAgora from '@/src/features/home/HomeBoulevardAgora'
import HomeCircuitos from '@/src/features/home/HomeCircuitos'
import HomeSustentacao from '@/src/features/home/HomeSustentacao'

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Header com logo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-app-divider">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/" className="flex items-center gap-2 press-scale">
            <Image
              src="/logo-mark.png"
              alt="Boulevard São João"
              width={28}
              height={28}
              priority
            />
            <div className="leading-none">
              <p className="text-[10px] font-bold text-brand tracking-[0.1em] leading-none">
                BOULEVARD
              </p>
              <p className="text-[13px] font-bold text-tx-primary tracking-[0.06em] leading-tight">
                SÃO JOÃO
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/notificacoes"
              className="w-9 h-9 flex items-center justify-center rounded-full press-scale relative"
              aria-label="Notificações"
            >
              <IconBell size={20} stroke={1.8} className="text-tx-primary" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-2 rounded-full ring-2 ring-white" />
            </Link>
            <Link
              href="/perfil"
              className="w-9 h-9 flex items-center justify-center rounded-full press-scale"
              aria-label="Perfil"
            >
              <IconUserCircle size={22} stroke={1.6} className="text-tx-primary" />
            </Link>
          </div>
        </div>
      </header>

      <HomeTicker />

      <section className="px-4 pt-4">
        <HomeHero />
      </section>

      <section className="px-4 pt-5">
        <HomeShortcuts />
      </section>

      {/* O Boulevard agora */}
      <section className="pt-5">
        <div className="px-4 mb-3">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            O Boulevard agora
          </h2>
        </div>
        <HomeBoulevardAgora />
      </section>

      {/* Destaque · evento do mês */}
      <section className="px-4 pt-6">
        <HomeFeatured />
      </section>

      {/* Grandes Eventos · 12 cards */}
      <section className="pt-6">
        <div className="px-4 mb-3 flex items-center justify-between">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            Grandes eventos do ano
          </h2>
          <Link href="/eventos" className="text-[12px] font-semibold text-brand press-scale">
            Ver todos
          </Link>
        </div>
        <HomeGrandesEventos />
      </section>

      {/* 5 Circuitos integrados */}
      <section className="pt-6">
        <div className="px-4 mb-3 flex items-center justify-between">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            5 circuitos integrados
          </h2>
          <Link href="/circuitos" className="text-[12px] font-semibold text-brand press-scale">
            Ver todos
          </Link>
        </div>
        <HomeCircuitos />
      </section>

      {/* Atividades regulares — sempre rolando */}
      <section className="pt-6">
        <div className="px-4 mb-3">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            Sempre rolando
          </h2>
        </div>
        <HomeSustentacao />
      </section>

      {/* Central de Interação · promo */}
      <section className="pt-6 pb-4">
        <div className="px-4 mb-3">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            Central de Interação
          </h2>
        </div>
        <HomePromo />
      </section>
    </div>
  )
}
