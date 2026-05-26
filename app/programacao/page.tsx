'use client'
import { useState } from 'react'
import Image from 'next/image'
import { PROGRAMACAO_DAYS, PROGRAMACAO_EVENTS } from '@/src/lib/data/programacao'
import PageHeader from '@/src/components/PageHeader'

export default function ProgramacaoPage() {
  const [selectedDay, setSelectedDay] = useState(PROGRAMACAO_DAYS[0]?.id ?? '')

  const events = PROGRAMACAO_EVENTS.filter(e => e.dayId === selectedDay)
  const dayInfo = PROGRAMACAO_DAYS.find(d => d.id === selectedDay)

  return (
    <div className="animate-fade-in">
      <PageHeader title="Programação" showBack />

      {/* Day selector */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3">
        {PROGRAMACAO_DAYS.map(day => (
          <button
            key={day.id}
            onClick={() => setSelectedDay(day.id)}
            className={`shrink-0 flex flex-col items-center px-3 py-2 rounded-xl border transition-all press-scale min-w-[52px] ${
              selectedDay === day.id
                ? 'bg-brand text-white border-brand'
                : 'bg-white text-tx-secondary border-app-divider'
            }`}
          >
            <span className="text-[9px] font-bold uppercase leading-none">
              {day.weekdayShort}
            </span>
            <span className="text-[18px] font-black leading-tight">{day.dayNumber}</span>
            <span className="text-[9px] leading-none opacity-70">{day.monthShort}</span>
          </button>
        ))}
      </div>

      {/* Day label */}
      {dayInfo && (
        <div className="px-4 pb-2">
          <p className="text-[11px] font-semibold text-tx-tertiary uppercase tracking-wider">
            {dayInfo.fullLabel}
          </p>
        </div>
      )}

      {/* Events */}
      <div className="px-4 space-y-4 pb-4">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-2xl border border-app-divider overflow-hidden press-scale">
            <div className="relative h-36">
              <Image
                src={event.imageUri}
                alt={event.title}
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white/80 text-[10px] font-medium">{event.badge}</span>
                <h3 className="text-white font-bold text-[14px] leading-snug">{event.title}</h3>
              </div>
            </div>
          </div>
        ))}
        {events.length === 0 && (
          <p className="text-center text-tx-tertiary text-[14px] py-12">
            Sem eventos para este dia.
          </p>
        )}
      </div>
    </div>
  )
}
