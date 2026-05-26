import HomeTicker from '@/src/features/home/HomeTicker'
import HomeHero from '@/src/features/home/HomeHero'
import HomeShortcuts from '@/src/features/home/HomeShortcuts'
import HomeFeatured from '@/src/features/home/HomeFeatured'
import HomePromo from '@/src/features/home/HomePromo'
import HomeQuickAccess from '@/src/features/home/HomeQuickAccess'
import Link from 'next/link'
import { Bell } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-app-divider">
        <div className="flex items-center justify-between h-14 px-4">
          <div>
            <p className="text-[10px] text-tx-tertiary font-medium uppercase tracking-wider leading-none">
              Boulevard
            </p>
            <h1 className="text-[17px] font-bold text-tx-primary leading-tight">
              São João
            </h1>
          </div>
          <Link
            href="/notificacoes"
            className="w-9 h-9 flex items-center justify-center rounded-full press-scale relative"
          >
            <Bell size={20} className="text-tx-primary" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-2 rounded-full ring-1 ring-white" />
          </Link>
        </div>
      </header>

      {/* Live Ticker */}
      <HomeTicker />

      {/* Hero Carousel */}
      <section className="px-4 pt-4">
        <HomeHero />
      </section>

      {/* Category Shortcuts */}
      <section className="px-4 pt-5">
        <HomeShortcuts />
      </section>

      {/* Featured */}
      <section className="px-4 pt-5">
        <HomeFeatured />
      </section>

      {/* Promo Banners */}
      <section className="pt-5">
        <div className="px-4 mb-3">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            Vantagens e promoções
          </h2>
        </div>
        <HomePromo />
      </section>

      {/* Quick Access */}
      <section className="pt-5 pb-4">
        <div className="px-4 mb-3">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            Explore o boulevard
          </h2>
        </div>
        <HomeQuickAccess />
      </section>
    </div>
  )
}
