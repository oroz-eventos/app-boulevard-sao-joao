import Link from 'next/link'
import Image from 'next/image'
import { IconBell } from '@tabler/icons-react'
import HomeTicker from '@/src/features/home/HomeTicker'
import HomeHero from '@/src/features/home/HomeHero'
import HomeShortcuts from '@/src/features/home/HomeShortcuts'
import HomeFeatured from '@/src/features/home/HomeFeatured'
import HomePromo from '@/src/features/home/HomePromo'
import HomeQuickAccess from '@/src/features/home/HomeQuickAccess'

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
          <Link
            href="/notificacoes"
            className="w-9 h-9 flex items-center justify-center rounded-full press-scale relative"
          >
            <IconBell size={20} stroke={1.8} className="text-tx-primary" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-2 rounded-full ring-2 ring-white" />
          </Link>
        </div>
      </header>

      <HomeTicker />

      <section className="px-4 pt-4">
        <HomeHero />
      </section>

      <section className="px-4 pt-5">
        <HomeShortcuts />
      </section>

      <section className="px-4 pt-5">
        <HomeFeatured />
      </section>

      <section className="pt-5">
        <div className="px-4 mb-3">
          <h2 className="text-[13px] font-semibold text-tx-secondary uppercase tracking-wider">
            Vantagens e promoções
          </h2>
        </div>
        <HomePromo />
      </section>

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
