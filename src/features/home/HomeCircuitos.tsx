import Link from 'next/link'
import Image from 'next/image'
import { CIRCUITOS } from '@/src/lib/data/circuitos'

/** Carrossel horizontal dos 5 circuitos integrados */
export default function HomeCircuitos() {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory">
      {CIRCUITOS.map((c) => (
        <Link
          key={c.slug}
          href={`/circuitos/${c.slug}`}
          className="snap-start shrink-0 w-[150px] press-scale"
        >
          <div className="relative h-36 rounded-2xl overflow-hidden">
            <Image
              src={c.imageUri}
              alt={c.title}
              fill
              className="object-cover"
              sizes="150px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div
              className="absolute top-2 left-2 bg-white text-tx-primary text-[9px] font-black px-2 py-0.5 rounded-full"
            >
              {c.numero}
            </div>
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-white font-bold text-[12px] leading-tight">{c.title.replace('Circuito ', '')}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
