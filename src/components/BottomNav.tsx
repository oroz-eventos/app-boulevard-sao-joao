'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Rss, MapPin, Tag } from 'lucide-react'

const TABS = [
  { href: '/',          label: 'Início',    Icon: Home    },
  { href: '/busca',     label: 'Busca',     Icon: Search  },
  { href: '/feed',      label: 'Feed',      Icon: Rss     },
  { href: '/mapa',      label: 'Mapa',      Icon: MapPin  },
  { href: '/vantagens', label: 'Vantagens', Icon: Tag     },
] as const

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white border-t border-app-divider z-50"
      style={{
        maxWidth: 'var(--max-app-width)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-center justify-around h-[60px]">
        {TABS.map(({ href, label, Icon }) => {
          const active =
            href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full press-scale"
            >
              <Icon
                size={22}
                strokeWidth={active ? 2.5 : 1.8}
                className={active ? 'text-brand' : 'text-tx-tertiary'}
              />
              <span
                className={`text-[10px] font-medium leading-none ${
                  active ? 'text-brand' : 'text-tx-tertiary'
                }`}
              >
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
