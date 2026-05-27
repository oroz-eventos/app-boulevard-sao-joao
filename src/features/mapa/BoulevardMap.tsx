'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, X, Layers } from 'lucide-react'
import BottomDrawer from '@/src/components/BottomDrawer'
import {
  MAP_MARKERS,
  MAP_FILTERS,
  KIND_COLORS,
  KIND_LABEL,
  type MapKind,
} from '@/src/lib/data/mapa'

/**
 * Mapa imersivo do Boulevard São João — versão full-screen.
 *
 * Layout:
 *   - Mapa SVG ocupa quase 100% da tela (fixed entre header e bottom nav)
 *   - Filter chips flutuam no topo do mapa com glass effect
 *   - Botão de legenda flutua no canto direito (abre drawer leve)
 *   - Toque num marker abre BottomDrawer com informações completas
 *
 * Composição cenográfica do SVG (mesma do mídia kit):
 *   - Avenida São João horizontal
 *   - Avenida Ipiranga vertical (cruzando no leste)
 *   - Largo do Paissandu (clareira a oeste)
 *   - Skyline esquemático ao fundo
 *   - Faixa de pedestre + lane dashes
 */
export default function BoulevardMap() {
  const [filter, setFilter] = useState<'todos' | MapKind>('todos')
  const [selected, setSelected] = useState<string | null>(null)
  const [showLegend, setShowLegend] = useState(false)

  const visible = MAP_MARKERS.filter((m) => filter === 'todos' || m.kind === filter)
  const selectedMarker = MAP_MARKERS.find((m) => m.id === selected)

  return (
    <div
      className="fixed inset-0 mx-auto"
      style={{ maxWidth: 'var(--max-app-width)' }}
    >
      {/* Mapa cenográfico full-screen */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0820] via-[#1A0F38] to-[#2A0066]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="asphalt" width="0.6" height="0.6" patternUnits="userSpaceOnUse">
              <rect width="0.6" height="0.6" fill="#1f1530" />
              <circle cx="0.3" cy="0.3" r="0.04" fill="#332550" opacity="0.7" />
            </pattern>
            <linearGradient id="streetGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5500CC" stopOpacity="0" />
              <stop offset="0.5" stopColor="#5500CC" stopOpacity="0.18" />
              <stop offset="1" stopColor="#5500CC" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Skyline */}
          <g opacity="0.55">
            <rect x="0"  y="6"  width="14" height="22" fill="#2D1F4F" />
            <rect x="14" y="3"  width="10" height="25" fill="#3A2A60" />
            <rect x="24" y="8"  width="8"  height="20" fill="#2D1F4F" />
            <rect x="32" y="2"  width="12" height="26" fill="#42306F" />
            <rect x="44" y="6"  width="9"  height="22" fill="#2D1F4F" />
            <rect x="53" y="4"  width="11" height="24" fill="#3A2A60" />
            <rect x="64" y="8"  width="8"  height="20" fill="#2D1F4F" />
            <rect x="72" y="3"  width="13" height="25" fill="#42306F" />
            <rect x="85" y="6"  width="9"  height="22" fill="#3A2A60" />
            <rect x="94" y="5"  width="6"  height="23" fill="#2D1F4F" />
            <g fill="#FFD27A" opacity="0.45">
              {Array.from({ length: 60 }).map((_, i) => (
                <rect
                  key={i}
                  x={(i * 1.7) % 100}
                  y={6 + ((i * 7) % 18)}
                  width="0.5"
                  height="0.7"
                />
              ))}
            </g>
          </g>

          {/* Av São João horizontal */}
          <rect x="0" y="36" width="100" height="28" fill="url(#asphalt)" />
          <rect x="0" y="36" width="100" height="28" fill="url(#streetGlow)" />
          <rect x="0" y="34"  width="100" height="2" fill="#3a2a55" />
          <rect x="0" y="64"  width="100" height="2" fill="#3a2a55" />

          {/* Av Ipiranga vertical */}
          <rect x="68" y="0" width="14" height="100" fill="url(#asphalt)" />
          <rect x="68" y="0" width="14" height="100" fill="url(#streetGlow)" />
          <rect x="66" y="0" width="2" height="100" fill="#3a2a55" />
          <rect x="82" y="0" width="2" height="100" fill="#3a2a55" />

          {/* Largo do Paissandu */}
          <ellipse cx="6" cy="22" rx="9" ry="6" fill="#1a3a2c" opacity="0.5" />
          <circle cx="6" cy="22" r="1.2" fill="#2d5a3f" />

          {/* Lane dashes */}
          <g stroke="#FFD27A" strokeWidth="0.18" strokeDasharray="2 1.5" opacity="0.55">
            <line x1="0" y1="44"  x2="100" y2="44"  />
            <line x1="0" y1="50"  x2="100" y2="50"  />
            <line x1="0" y1="56"  x2="100" y2="56"  />
            <line x1="71" y1="0" x2="71" y2="100" />
            <line x1="75" y1="0" x2="75" y2="100" />
            <line x1="79" y1="0" x2="79" y2="100" />
          </g>

          {/* Crosswalk no cruzamento */}
          <g fill="#FFD27A" opacity="0.7">
            {Array.from({ length: 6 }).map((_, i) => (
              <rect key={i} x={68 + i * 2.4} y="33" width="1.2" height="3" />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <rect key={i} x={68 + i * 2.4} y="64" width="1.2" height="3" />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <rect key={i} x="65" y={36 + i * 4} width="3" height="1.2" />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <rect key={i} x="82" y={36 + i * 4} width="3" height="1.2" />
            ))}
          </g>

          {/* Carrinhos */}
          <g opacity="0.7">
            <rect x="12" y="46" width="3" height="1.6" rx="0.4" fill="#E91E8C" />
            <rect x="28" y="52" width="3" height="1.6" rx="0.4" fill="#F97316" />
            <rect x="44" y="48" width="3" height="1.6" rx="0.4" fill="#3B5BDB" />
            <rect x="56" y="54" width="3" height="1.6" rx="0.4" fill="#E91E8C" />
            <rect x="86" y="58" width="3" height="1.6" rx="0.4" fill="#F97316" />
          </g>
        </svg>

        {/* Labels das ruas */}
        <div
          className="absolute bg-black/55 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded"
          style={{ top: '46%', left: '12px' }}
        >
          Av. São João
        </div>
        <div
          className="absolute bg-black/55 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded"
          style={{ top: '24px', right: '22%', transform: 'rotate(90deg)', transformOrigin: 'right top' }}
        >
          Av. Ipiranga
        </div>
        <div
          className="absolute bg-emerald-600/70 backdrop-blur-sm text-white text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded"
          style={{ top: '20%', left: '2%' }}
        >
          Lgo Paissandu
        </div>

        {/* Ponto-Zero pulsante */}
        <div
          className="absolute"
          style={{ left: '75%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="w-3 h-3 rounded-full bg-yellow-300 ring-4 ring-yellow-300/30 animate-pulse" />
        </div>

        {/* Markers */}
        {visible.map((marker) => (
          <button
            key={marker.id}
            onClick={() => setSelected(marker.id)}
            className="absolute press-scale"
            style={{
              left: `${marker.x}%`,
              top: `${marker.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            aria-label={marker.title}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center shadow-xl border-2 border-white transition-transform ${
                selected === marker.id ? 'scale-125' : ''
              }`}
              style={{
                backgroundColor: marker.color,
                boxShadow: `0 0 0 4px ${marker.color}30, 0 6px 14px rgba(0,0,0,0.45)`,
              }}
            >
              <MapPin size={16} className="text-white" fill="white" />
            </div>
          </button>
        ))}
      </div>

      {/* Filter chips overlay no topo */}
      <div className="absolute top-[calc(56px+env(safe-area-inset-top))] left-0 right-0 z-30">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3">
          {MAP_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-semibold backdrop-blur-md border transition-all press-scale ${
                filter === f.id
                  ? 'bg-white text-tx-primary border-white shadow-lg'
                  : 'bg-black/40 text-white border-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Botão legenda flutuante */}
      <button
        onClick={() => setShowLegend(true)}
        className="absolute right-4 z-30 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white press-scale shadow-lg"
        style={{ bottom: 'calc(96px + env(safe-area-inset-bottom))' }}
        aria-label="Legenda do mapa"
      >
        <Layers size={18} />
      </button>

      {/* Ponto-Zero label flutuante */}
      <div
        className="absolute z-30 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full"
        style={{ bottom: 'calc(96px + env(safe-area-inset-bottom))', left: '16px' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
        PONTO-ZERO · SJ × Ipiranga
      </div>

      {/* Drawer do marker selecionado */}
      <BottomDrawer
        open={selectedMarker !== undefined}
        onClose={() => setSelected(null)}
        accentColor={selectedMarker?.color ?? '#5500CC'}
        ariaLabel={selectedMarker?.title}
      >
        {selectedMarker && (
          <div className="pt-1 pb-2">
            {selectedMarker.imageUri && (
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={selectedMarker.imageUri}
                  alt={selectedMarker.title}
                  fill
                  className="object-cover"
                  sizes="430px"
                />
              </div>
            )}

            <span
              className="inline-block text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
              style={{ backgroundColor: selectedMarker.color + '20', color: selectedMarker.color }}
            >
              {KIND_LABEL[selectedMarker.kind]}
            </span>

            <h3 className="font-black text-[20px] text-tx-primary mt-2 leading-tight">
              {selectedMarker.title}
            </h3>

            {selectedMarker.subtitle && (
              <p className="text-[13px] text-tx-secondary mt-2 leading-relaxed">
                {selectedMarker.subtitle}
              </p>
            )}

            {(selectedMarker.hours || selectedMarker.discount) && (
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedMarker.hours && (
                  <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-semibold">
                    {selectedMarker.hours}
                  </span>
                )}
                {selectedMarker.discount && (
                  <span className="text-[11px] bg-brand-light text-brand px-2.5 py-1 rounded-full font-semibold">
                    {selectedMarker.discount}
                  </span>
                )}
              </div>
            )}

            {selectedMarker.detailHref && (
              <Link
                href={selectedMarker.detailHref}
                className="block mt-4 w-full text-center rounded-xl py-3 text-white font-semibold text-[13px] press-scale"
                style={{ backgroundColor: selectedMarker.color }}
              >
                Ver detalhes →
              </Link>
            )}
          </div>
        )}
      </BottomDrawer>

      {/* Drawer da legenda */}
      <BottomDrawer
        open={showLegend}
        onClose={() => setShowLegend(false)}
        accentColor="#5500CC"
        ariaLabel="Legenda do mapa"
      >
        <div className="pt-1 pb-2">
          <h3 className="font-black text-[18px] text-tx-primary leading-tight">Legenda</h3>
          <p className="text-[12px] text-tx-tertiary mt-1">
            Toque num filtro pra ver só os marcadores da categoria.
          </p>

          <div className="mt-4 space-y-2">
            {(Object.keys(KIND_COLORS) as MapKind[])
              .filter((k) => k !== 'comercio')
              .map((k) => {
                const count = MAP_MARKERS.filter((m) => m.kind === k).length
                return (
                  <button
                    key={k}
                    onClick={() => {
                      setFilter(k)
                      setShowLegend(false)
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl press-scale border border-app-divider"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: KIND_COLORS[k] }}
                    >
                      <MapPin size={14} className="text-white" fill="white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-[13px] font-semibold text-tx-primary leading-tight">
                        {KIND_LABEL[k]}
                      </p>
                      <p className="text-[10px] text-tx-tertiary">
                        {count} {count === 1 ? 'ponto' : 'pontos'}
                      </p>
                    </div>
                  </button>
                )
              })}
          </div>

          <button
            onClick={() => {
              setFilter('todos')
              setShowLegend(false)
            }}
            className="w-full mt-4 bg-brand text-white rounded-xl py-3 font-semibold text-[13px] press-scale"
          >
            Mostrar tudo
          </button>
        </div>
      </BottomDrawer>
    </div>
  )
}
