'use client'
import { useState } from 'react'
import { X, MapPin } from 'lucide-react'
import Image from 'next/image'
import PageHeader from '@/src/components/PageHeader'

const MAP_FILTERS = [
  { id: 'todos',     label: 'Tudo' },
  { id: 'telas',     label: 'Telas' },
  { id: 'palcos',    label: 'Palcos' },
  { id: 'comercios', label: 'Comércios' },
]

const MAP_MARKERS = [
  { id: 'palco-1',   kind: 'palcos',    title: 'Palco 1',              x: 28,  y: 32,  color: '#5500CC' },
  { id: 'palco-2',   kind: 'palcos',    title: 'Palco 2',              x: 62,  y: 42,  color: '#5500CC' },
  { id: 'palco-3',   kind: 'palcos',    title: 'Palco 3',              x: 74,  y: 68,  color: '#5500CC' },
  { id: 'tela-1',    kind: 'telas',     title: 'Tela Interativa 1',    x: 14,  y: 75,  color: '#3B5BDB' },
  { id: 'tela-2',    kind: 'telas',     title: 'Tela Interativa 2',    x: 49,  y: 60,  color: '#3B5BDB' },
  { id: 'tela-3',    kind: 'telas',     title: 'Tela Interativa 3',    x: 10,  y: 48,  color: '#3B5BDB' },
  { id: 'tela-4',    kind: 'telas',     title: 'Tela Interativa 4',    x: 86,  y: 82,  color: '#3B5BDB' },
  { id: 'cafe-31',   kind: 'comercios', title: 'Café Estação 31',       x: 78,  y: 22,  color: '#F97316', discount: '10% off', address: 'Rua Aurora, 31', hours: 'Até 20h', imageUri: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80' },
  { id: 'casa-v',    kind: 'comercios', title: 'Casa Vitrine',          x: 88,  y: 72,  color: '#E91E8C', discount: '20% off', address: 'Galeria São João, loja 12', hours: 'Até 21h', imageUri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
  { id: 'corpo-c',   kind: 'comercios', title: 'Ateliê Corpo Calmo',    x: 82,  y: 95,  color: '#16A34A', discount: '15% off', address: 'Rua Vitória, 112', hours: 'Até 18h30', imageUri: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80' },
  { id: 'bistro',    kind: 'comercios', title: 'Bistrô do Boulevard',   x: 30,  y: 86,  color: '#F97316', discount: '10% off', address: 'Av. São João, 201', hours: 'Até 23h', imageUri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80' },
] as const

type Marker = typeof MAP_MARKERS[number]

export default function MapaPage() {
  const [filter, setFilter] = useState('todos')
  const [selected, setSelected] = useState<string | null>(null)

  const visible = MAP_MARKERS.filter(m => filter === 'todos' || m.kind === filter)
  const selectedMarker = MAP_MARKERS.find(m => m.id === selected) as Marker | undefined

  return (
    <div className="animate-fade-in">
      <PageHeader title="Mapa" showNotif />

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3">
        {MAP_FILTERS.map(f => (
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
      <div className="mx-4 rounded-2xl overflow-hidden border border-app-divider bg-[#E8EAF0] relative" style={{ height: '60vh' }}>
        {/* Grid background */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5500CC" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Boulevard label */}
        <div className="absolute top-3 left-3 bg-brand text-white text-[10px] font-bold px-2 py-1 rounded-lg">
          Av. São João
        </div>

        {/* Markers */}
        {visible.map(marker => (
          <button
            key={marker.id}
            onClick={() => setSelected(selected === marker.id ? null : marker.id)}
            className="absolute press-scale"
            style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform ${selected === marker.id ? 'scale-125' : ''}`}
              style={{ backgroundColor: marker.color }}
            >
              <MapPin size={14} className="text-white" fill="white" />
            </div>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 px-4 pt-3 pb-1">
        {[
          { color: '#5500CC', label: 'Palcos' },
          { color: '#3B5BDB', label: 'Telas' },
          { color: '#F97316', label: 'Comércios' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
            <span className="text-[11px] text-tx-tertiary">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom sheet for selected marker */}
      {selectedMarker && (
        <div className="mx-4 mt-3 bg-white rounded-2xl border border-app-divider overflow-hidden animate-fade-in">
          {'imageUri' in selectedMarker && selectedMarker.imageUri && (
            <div className="relative h-28">
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
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-[15px] text-tx-primary">{selectedMarker.title}</h3>
                {'address' in selectedMarker && (
                  <p className="text-[12px] text-tx-tertiary mt-0.5">{selectedMarker.address}</p>
                )}
              </div>
              <button onClick={() => setSelected(null)} className="press-scale">
                <X size={18} className="text-tx-tertiary" />
              </button>
            </div>
            {'hours' in selectedMarker && (
              <div className="flex gap-2 mt-2">
                <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                  {selectedMarker.hours}
                </span>
                {'discount' in selectedMarker && selectedMarker.discount && (
                  <span className="text-[11px] bg-brand-light text-brand px-2 py-0.5 rounded-full font-medium">
                    {selectedMarker.discount}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
