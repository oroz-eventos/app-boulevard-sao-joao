'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PROGRAMACAO_DAYS, PROGRAMACAO_EVENTS } from '@/src/lib/data/programacao'
import PageHeader from '@/src/components/PageHeader'

export default function ProgramacaoPage() {
  const [selectedDay, setSelectedDay] = useState(PROGRAMACAO_DAYS[0]?.id ?? '')

  const events = PROGRAMACAO_EVENTS.filter((e) => e.dayId === selectedDay)
  const dayInfo = PROGRAMACAO_DAYS.find((d) => d.id === selectedDay)

  return (
    <div className="animate-fade-in">
      <PageHeader title="Programação" showBack />

      {/* Day selector */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 py-3">
        {PROGRAMACAO_DAYS.map((day) => (
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

      {/* Day label + tipo */}
      {dayInfo && (
        <div className="px-4 pb-2 flex items-center gap-2">
          <p className="text-[11px] font-semibold text-tx-tertiary uppercase tracking-wider">
            {dayInfo.fullLabel}
          </p>
          {dayInfo.tipo === 'especial' && (
            <span className="text-[10px] font-bold text-white bg-brand px-2 py-0.5 rounded-full uppercase tracking-wide">
              Grande evento
            </span>
          )}
          {dayInfo.tipo === 'regular' && (
            <span className="text-[10px] font-bold text-brand bg-brand-light px-2 py-0.5 rounded-full uppercase tracking-wide">
              FDS regular
            </span>
          )}
        </div>
      )}

      {/* Events */}
      <div className="px-4 space-y-3 pb-4">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/programacao/${event.id}`}
            className="block bg-white rounded-2xl border border-app-divider overflow-hidden press-scale"
          >
            <div className="relative h-36">
              <Image
                src={event.imageUri}
                alt={event.title}
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              {event.categoria && (
                <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wide text-white bg-white/15 backdrop-blur-md px-2 py-0.5 rounded-full">
                  {event.categoria}
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white/85 text-[10px] font-medium">{event.badge}</span>
                <h3 className="text-white font-bold text-[14px] leading-snug">{event.title}</h3>
              </div>
            </div>
          </Link>
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
