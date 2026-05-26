import Image from 'next/image'
import { Clock, Users } from 'lucide-react'
import { INTERAJA_SLIDES, KIND_LABELS } from '@/src/lib/data/interaja'
import PageHeader from '@/src/components/PageHeader'

export default function InterajaPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Interaja" subtitle="Experiências interativas" showBack />

      <div className="px-4 pt-4 space-y-5 pb-4">
        {INTERAJA_SLIDES.map(slide => (
          <div key={slide.id} className="bg-white rounded-2xl border border-app-divider overflow-hidden">
            {/* Image */}
            <div className="relative h-44">
              <Image
                src={slide.imageUri}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Kind badge */}
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                {KIND_LABELS[slide.kind]}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-[16px] text-tx-primary">{slide.title}</h3>
              <p className="text-[13px] text-tx-secondary mt-1.5 leading-relaxed">{slide.description}</p>

              {/* Meta */}
              <div className="flex items-center gap-4 mt-3 text-tx-tertiary">
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span className="text-[11px]">Disponível por {slide.expiresInHours}h</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={12} />
                  <span className="text-[11px]">{slide.participantsLabel}</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full mt-4 bg-brand text-white font-semibold py-3 rounded-xl press-scale text-[14px]">
                {slide.actionLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
