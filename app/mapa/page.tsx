'use client'
import { useState } from 'react'
import { X, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/src/components/PageHeader'
import { MAP_FILTERS, MAP_MARKERS, KIND_COLORS, KIND_LABEL, type MapKind } from '@/src/lib/data/mapa'

export default function MapaPage() {
  const [filter, setFilter] = useState<'todos' | MapKind>('todos')
  const [selected, setSelected] = useState<string | null>(null)

  const visible = MAP_MARKERS.filter((m) => filter === 'todos' || m.kind === filter)
  const selectedMarker = MAP_MARKERS.find((m) => m.id === selected)

  return (
    <div className="animate-fade-in">
      <PageHeader title="Mapa" subtitle="Av. São João · 5 quarteirões" showNotif />

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

      {/* Map area */}
      <div
        className="mx-4 rounded-2xl overflow-hidden border border-app-divider bg-[#E8EAF0] relative"
        style={{ height: '60vh' }}
      >
        {/* Grid background */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5500CC" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Avenue line (visual reference of São João) */}
        <div
          className="absolute inset-x-0 top-1/2 h-px bg-brand/30"
          style={{ transform: 'translateY(-50%)' }}
        />

        {/* Boulevard labels */}
        <div className="absolute top-3 left-3 bg-brand text-white text-[10px] font-bold px-2 py-1 rounded-lg">
          Av. São João
        </div>
        <div className="absolute bottom-3 right-3 bg-brand-shadow text-white text-[10px] font-bold px-2 py-1 rounded-lg">
          × Ipiranga
        </div>

        {/* Markers */}
        {visible.map((marker) => (
          <button
            key={marker.id}
            onClick={() => setSelected(selected === marker.id ? null : marker.id)}
            className="absolute press-scale"
            style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: 'translate(-50%, -50%)' }}
            aria-label={marker.title}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform ${
                selected === marker.id ? 'scale-125' : ''
              }`}
              style={{ backgroundColor: marker.color }}
            >
              <MapPin size={14} className="text-white" fill="white" />
            </div>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-3 flex-wrap px-4 pt-3 pb-1">
        {(Object.keys(KIND_COLORS) as MapKind[])
          .filter((k) => filter === 'todos' || k === filter)
          .filter((k) => k !== 'comercio') // mantém legenda sucinta
          .map((k) => (
            <div key={k} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: KIND_COLORS[k] }} />
              <span className="text-[11px] text-tx-tertiary">{KIND_LABEL[k]}</span>
            </div>
          ))}
      </div>

      {/* Bottom sheet for selected marker */}
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
    </div>
  )
}
