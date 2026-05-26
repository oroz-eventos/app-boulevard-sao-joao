'use client'
import { useState } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

const POPULAR = [
  'Roda de samba',
  'Café especial',
  'Feira de artesanato',
  'Moda autoral',
  'Orgânicos',
  'Quiz interativo',
  'DJ set',
  'Yoga urbana',
]

const CATEGORIES = [
  { label: 'Programação', href: '/programacao', color: '#5500CC' },
  { label: 'Comércios',   href: '/comercios',   color: '#F97316' },
  { label: 'Feira',       href: '/feira',        color: '#16A34A' },
  { label: 'Vantagens',   href: '/vantagens',    color: '#E91E8C' },
  { label: 'Interaja',    href: '/interaja',     color: '#3B5BDB' },
  { label: 'Feed',        href: '/feed',         color: '#525252' },
]

export default function BuscaPage() {
  const [query, setQuery] = useState('')

  return (
    <div className="animate-fade-in">
      {/* Header fixo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-app-divider">
        <div className="flex items-center h-14 px-4 gap-3">
          <h1 className="font-semibold text-[15px] text-tx-primary">Busca</h1>
        </div>
      </header>

      <div className="px-4 pt-4 space-y-5">
        {/* Search bar */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-tx-tertiary" />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar no boulevard…"
            className="w-full bg-app-surface rounded-xl pl-9 pr-9 py-2.5 text-[14px] text-tx-primary placeholder:text-tx-disabled outline-none focus:ring-2 focus:ring-brand/30"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X size={14} className="text-tx-tertiary" />
            </button>
          )}
        </div>

        {/* Popular searches */}
        <div>
          <p className="text-[11px] font-semibold text-tx-tertiary uppercase tracking-wider mb-2">
            Pesquisas populares
          </p>
          <div className="flex flex-wrap gap-2">
            {POPULAR.map(term => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="bg-app-surface text-tx-secondary text-[13px] px-3 py-1.5 rounded-full press-scale hover:bg-brand-light hover:text-brand transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Browse categories */}
        <div>
          <p className="text-[11px] font-semibold text-tx-tertiary uppercase tracking-wider mb-3">
            Explorar por categoria
          </p>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.href}
                href={cat.href}
                className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-app-divider press-scale"
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-[14px] font-medium text-tx-primary">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
