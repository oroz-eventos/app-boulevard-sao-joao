'use client'
import { useMemo, useState } from 'react'
import { Search, X, SearchX } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import PageHeader from '@/src/components/PageHeader'
import { search } from '@/src/lib/search'

const POPULAR = [
  'Bar Brahma',
  'Foto-Opp',
  'Túnel de Luzes',
  'Roda de samba',
  'Feira gastronômica',
  'Cauby Peixoto',
  'Quiz',
  'Réveillon',
  'Festival Black',
  'Pet',
]

const CATEGORIES = [
  { label: 'Programação', href: '/programacao', color: '#5500CC' },
  { label: 'Grandes eventos', href: '/eventos',    color: '#E91E8C' },
  { label: 'Circuitos',   href: '/circuitos',  color: '#774DE8' },
  { label: 'Comércios',   href: '/comercios',  color: '#F97316' },
  { label: 'Feira',       href: '/feira',      color: '#16A34A' },
  { label: 'Vantagens',   href: '/vantagens',  color: '#E91E8C' },
  { label: 'Central de Interação', href: '/interaja', color: '#3B5BDB' },
  { label: 'Feed',        href: '/feed',       color: '#525252' },
]

export default function BuscaPage() {
  const [query, setQuery] = useState('')
  const results = useMemo(() => search(query), [query])
  const hasQuery = query.trim().length >= 2

  return (
    <div className="animate-fade-in">
      <PageHeader title="Busca" subtitle="Eventos, lugares, comércios e mais" />

      <div className="px-4 pt-4 space-y-5">
        {/* Search bar */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-tx-tertiary" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar no Boulevard…"
            className="w-full bg-app-surface rounded-xl pl-9 pr-9 py-2.5 text-[14px] text-tx-primary placeholder:text-tx-disabled outline-none focus:ring-2 focus:ring-brand/30"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 press-scale"
              aria-label="Limpar busca"
            >
              <X size={14} className="text-tx-tertiary" />
            </button>
          )}
        </div>

        {/* Resultados */}
        {hasQuery && (
          <div>
            <p className="text-[11px] font-semibold text-tx-tertiary uppercase tracking-wider mb-2">
              {results.length === 0
                ? 'Sem resultados'
                : `${results.length} ${results.length === 1 ? 'resultado' : 'resultados'}`}
            </p>

            {results.length === 0 ? (
              <div className="bg-white rounded-2xl border border-app-divider p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-app-surface flex items-center justify-center mb-3">
                  <SearchX size={20} className="text-tx-tertiary" />
                </div>
                <p className="text-[14px] font-semibold text-tx-primary">
                  Nada por aqui ainda
                </p>
                <p className="text-[12px] text-tx-tertiary mt-1">
                  Tente outras palavras — bares, eventos, palcos, lugares…
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {results.map((r) => (
                  <Link
                    key={r.id}
                    href={r.href}
                    className="flex items-center gap-3 bg-white rounded-2xl border border-app-divider p-3 press-scale"
                  >
                    {r.imageUri ? (
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                        <Image src={r.imageUri} alt={r.title} fill className="object-cover" sizes="56px" />
                      </div>
                    ) : (
                      <div
                        className="w-14 h-14 rounded-xl shrink-0"
                        style={{ backgroundColor: r.accentColor + '20' }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wide"
                        style={{ color: r.accentColor }}
                      >
                        {r.kindLabel}
                      </span>
                      <p className="text-[13px] font-semibold text-tx-primary leading-tight truncate">
                        {r.title}
                      </p>
                      {r.subtitle && (
                        <p className="text-[11px] text-tx-tertiary leading-snug line-clamp-1 mt-0.5">
                          {r.subtitle}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Sugestões quando query vazia */}
        {!hasQuery && (
          <>
            <div>
              <p className="text-[11px] font-semibold text-tx-tertiary uppercase tracking-wider mb-2">
                Pesquisas populares
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map((term) => (
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

            <div>
              <p className="text-[11px] font-semibold text-tx-tertiary uppercase tracking-wider mb-3">
                Explorar por categoria
              </p>
              <div className="grid grid-cols-2 gap-3">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-app-divider press-scale"
                  >
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="text-[13px] font-medium text-tx-primary leading-tight">
                      {cat.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
