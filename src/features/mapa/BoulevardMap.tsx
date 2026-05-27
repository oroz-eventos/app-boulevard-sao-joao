'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, X } from 'lucide-react'
import {
  MAP_MARKERS,
  MAP_FILTERS,
  KIND_COLORS,
  KIND_LABEL,
  type MapKind,
} from '@/src/lib/data/mapa'

/**
 * Mapa do Boulevard renderizado num "panorama urbano" do cruzamento
 * São João × Ipiranga. O background é construído com SVG (sem imagem
 * externa) representando esquematicamente:
 *  - Avenida São João horizontal (eixo principal)
 *  - Avenida Ipiranga vertical (cruzando do lado direito)
 *  - Largo do Paissandu (lado oeste)
 *  - Skyline esquemático ao fundo
 *  - Carros parados (cor) e linha de via pintada
 *
 * Markers são posicionados em % sobre essa "planta" cenográfica.
 */
export default function BoulevardMap() {
  const [filter, setFilter] = useState<'todos' | MapKind>('todos')
  const [selected, setSelected] = useState<string | null>(null)
  const visible = MAP_MARKERS.filter((m) => filter === 'todos' || m.kind === filter)
  const selectedMarker = MAP_MARKERS.find((m) => m.id === selected)

  return (
    <>
      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3">
        {MAP_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-[12px] font-semibold border transition-all press-scale ${
              filter === f.id
                ? 'bg-brand text-white border-brand'
                : 'bg-white text-tx-secondary border-app-divider'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Map canvas */}
      <div
        className="mx-4 rounded-2xl overflow-hidden border border-app-divider relative bg-gradient-to-b from-[#0F0820] via-[#1A0F38] to-[#2A0066]"
        style={{ height: '60vh' }}
      >
        {/* SVG cenográfico do cruzamento */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Pattern de asfalto sutil */}
            <pattern id="asphalt" width="0.6" height="0.6" patternUnits="userSpaceOnUse">
              <rect width="0.6" height="0.6" fill="#1f1530" />
              <circle cx="0.3" cy="0.3" r="0.04" fill="#332550" opacity="0.7" />
            </pattern>
            {/* Glow nas avenidas */}
            <linearGradient id="streetGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5500CC" stopOpacity="0" />
              <stop offset="0.5" stopColor="#5500CC" stopOpacity="0.18" />
              <stop offset="1" stopColor="#5500CC" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Skyline ao fundo · silhuetas dos prédios */}
          <g opacity="0.55">
            {/* Quarteirão norte */}
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

            {/* Janelas acesas (pontinhos) */}
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

          {/* AVENIDA SÃO JOÃO (faixa principal horizontal) */}
          <rect x="0" y="36" width="100" height="28" fill="url(#asphalt)" />
          {/* Glow eixo SJ */}
          <rect x="0" y="36" width="100" height="28" fill="url(#streetGlow)" />
          {/* Calçada superior + inferior */}
          <rect x="0" y="34"  width="100" height="2" fill="#3a2a55" />
          <rect x="0" y="64"  width="100" height="2" fill="#3a2a55" />

          {/* AVENIDA IPIRANGA (vertical) cruzando no lado direito */}
          <rect x="68" y="0" width="14" height="100" fill="url(#asphalt)" />
          <rect x="68" y="0" width="14" height="100" fill="url(#streetGlow)" />
          <rect x="66" y="0" width="2" height="100" fill="#3a2a55" />
          <rect x="82" y="0" width="2" height="100" fill="#3a2a55" />

          {/* LARGO DO PAISSANDU (clareira do lado oeste) */}
          <ellipse cx="6" cy="22" rx="9" ry="6" fill="#1a3a2c" opacity="0.5" />
          <circle cx="6" cy="22" r="1.2" fill="#2d5a3f" />

          {/* Linhas de pista (dashes) na São João */}
          <g stroke="#FFD27A" strokeWidth="0.18" strokeDasharray="2 1.5" opacity="0.55">
            <line x1="0" y1="44"  x2="100" y2="44"  />
            <line x1="0" y1="50"  x2="100" y2="50"  />
            <line x1="0" y1="56"  x2="100" y2="56"  />
          </g>
          {/* Linhas de pista na Ipiranga */}
          <g stroke="#FFD27A" strokeWidth="0.18" strokeDasharray="2 1.5" opacity="0.55">
            <line x1="71" y1="0" x2="71" y2="100" />
            <line x1="75" y1="0" x2="75" y2="100" />
            <line x1="79" y1="0" x2="79" y2="100" />
          </g>

          {/* Faixa de pedestre cruzamento */}
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

          {/* Carrinhos (luzes vermelhas/brancas) */}
          <g opacity="0.7">
            <rect x="12" y="46" width="3" height="1.6" rx="0.4" fill="#E91E8C" />
            <rect x="28" y="52" width="3" height="1.6" rx="0.4" fill="#F97316" />
            <rect x="44" y="48" width="3" height="1.6" rx="0.4" fill="#3B5BDB" />
            <rect x="56" y="54" width="3" height="1.6" rx="0.4" fill="#E91E8C" />
            <rect x="86" y="58" width="3" height="1.6" rx="0.4" fill="#F97316" />
          </g>
        </svg>

        {/* Labels das ruas */}
        <div className="absolute top-[42%] left-3 bg-black/55 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded">
          Av. São João
        </div>
        <div
          className="absolute top-3 right-[18%] bg-black/55 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded"
          style={{ transform: 'rotate(90deg) translate(20%, 0)', transformOrigin: 'center' }}
        >
          Av. Ipiranga
        </div>
        <div className="absolute top-[16%] left-[2%] bg-emerald-600/70 backdrop-blur-sm text-white text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded">
          Lgo Paissandu
        </div>

        {/* Marker do Ponto-Zero · cruzamento (selo especial) */}
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
            onClick={() => setSelected(selected === marker.id ? null : marker.id)}
            className="absolute press-scale"
            style={{
              left: `${marker.x}%`,
              top: `${marker.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            aria-label={marker.title}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-xl border-2 border-white transition-transform ${
                selected === marker.id ? 'scale-125' : ''
              }`}
              style={{
                backgroundColor: marker.color,
                boxShadow: `0 0 0 4px ${marker.color}30, 0 6px 14px rgba(0,0,0,0.4)`,
              }}
            >
              <MapPin size={14} className="text-white" fill="white" />
            </div>
          </button>
        ))}

        {/* Compass / legend overlay */}
        <div className="absolute bottom-2 right-2 bg-black/55 backdrop-blur-sm rounded-lg px-2 py-1 text-white text-[9px] font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
          PONTO-ZERO · SJ × Ipiranga
        </div>
      </div>

      {/* Legenda */}
      <div className="flex gap-3 flex-wrap px-4 pt-3 pb-1">
        {(Object.keys(KIND_COLORS) as MapKind[])
          .filter((k) => filter === 'todos' || k === filter)
          .filter((k) => k !== 'comercio')
          .map((k) => (
            <div key={k} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: KIND_COLORS[k] }} />
              <span className="text-[11px] text-tx-tertiary">{KIND_LABEL[k]}</span>
            </div>
          ))}
      </div>

      {/* Bottom sheet do marker */}
      {selectedMarker && (
        <div className="mx-4 mt-3 mb-2 bg-white rounded-2xl border border-app-divider overflow-hidden animate-fade-in">
          {selectedMarker.imageUri && (
            <div className="relative h-32">
              <Image
                src={selectedMarker.imageUri}
                alt={selectedMarker.title}
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          )}
          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <span
                  className="text-[10px] font-bold uppercase tracking-wide"
                  style={{ color: selectedMarker.color }}
                >
                  {KIND_LABEL[selectedMarker.kind]}
                </span>
                <h3 className="font-bold text-[15px] text-tx-primary leading-tight mt-0.5">
                  {selectedMarker.title}
                </h3>
                {selectedMarker.subtitle && (
                  <p className="text-[12px] text-tx-secondary mt-1 leading-snug">
                    {selectedMarker.subtitle}
                  </p>
                )}
              </div>
              <button onClick={() => setSelected(null)} className="press-scale">
                <X size={18} className="text-tx-tertiary" />
              </button>
            </div>
            {(selectedMarker.hours || selectedMarker.discount) && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {selectedMarker.hours && (
                  <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                    {selectedMarker.hours}
                  </span>
                )}
                {selectedMarker.discount && (
                  <span className="text-[11px] bg-brand-light text-brand px-2 py-0.5 rounded-full font-medium">
                    {selectedMarker.discount}
                  </span>
                )}
              </div>
            )}
            {selectedMarker.detailHref && (
              <Link
                href={selectedMarker.detailHref}
                className="mt-3 inline-block text-[12px] font-semibold text-brand press-scale"
              >
                Ver detalhes →
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  )
}
