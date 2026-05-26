'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  IconHome,
  IconHomeFilled,
  IconSearch,
  IconRss,
  IconMapPin,
  IconMapPinFilled,
  IconTag,
  IconTagFilled,
  IconSparkles,
} from '@tabler/icons-react'

type Tab = {
  href: string
  label: string
  Icon: typeof IconHome
  IconActive: typeof IconHome
  featured?: boolean
}

const TABS: Tab[] = [
  { href: '/',          label: 'Início',    Icon: IconHome,     IconActive: IconHomeFilled    },
  { href: '/busca',     label: 'Busca',     Icon: IconSearch,   IconActive: IconSearch        },
  { href: '/interaja',  label: 'Interaja',  Icon: IconSparkles, IconActive: IconSparkles, featured: true },
  { href: '/mapa',      label: 'Mapa',      Icon: IconMapPin,   IconActive: IconMapPinFilled  },
  { href: '/vantagens', label: 'Vantagens', Icon: IconTag,      IconActive: IconTagFilled     },
]

export default function BottomNav() {
  const pathname = usePathname()
  const immersive = pathname.startsWith('/feed')

  const activeColor = immersive ? 'text-white' : 'text-brand'
  const inactiveColor = immersive ? 'text-white/55' : 'text-tx-tertiary'

  return (
    <nav
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-50 transition-colors ${
        immersive
          ? 'bg-gradient-to-t from-black/80 to-transparent border-transparent'
          : 'bg-white border-t border-app-divider'
      }`}
      style={{
        maxWidth: 'var(--max-app-width)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-end justify-around h-[64px] relative">
        {TABS.map((tab) => {
          const active =
            tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href)
          const IconComp = active ? tab.IconActive : tab.Icon

          if (tab.featured) {
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex flex-col items-center flex-1 h-full press-scale relative"
              >
                {/* Elevated gradient button */}
                <div
                  className="absolute -top-5 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      'conic-gradient(from 0deg at 50% 50%, #5500CC, #E91E8C, #F97316, #5500CC)',
                    boxShadow:
                      '0 8px 24px -4px rgba(85, 0, 204, 0.5), 0 2px 6px rgba(233, 30, 140, 0.3)',
                  }}
                >
                  <div className="w-[52px] h-[52px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <IconSparkles size={26} stroke={2.4} className="text-white drop-shadow" />
                  </div>
                </div>
                <span
                  className={`absolute bottom-2 text-[10px] font-semibold leading-none ${
                    active ? activeColor : inactiveColor
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            )
          }

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full press-scale pt-2"
            >
              <IconComp
                size={22}
                stroke={active ? 2.2 : 1.7}
                className={active ? activeColor : inactiveColor}
              />
              <span
                className={`text-[10px] font-medium leading-none ${
                  active ? activeColor : inactiveColor
                }`}
              >
                {tab.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
