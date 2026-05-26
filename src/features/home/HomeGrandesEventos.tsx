import Link from 'next/link'
import Image from 'next/image'
import { GRANDES_EVENTOS, eventoDoMes } from '@/src/lib/data/eventos'

/** Carrossel horizontal dos 12 grandes eventos do calendário oficial */
export default function HomeGrandesEventos() {
  const mesAtual = new Date().getMonth() + 1
  const ativo = eventoDoMes()

  // Ordena começando pelo mês ativo
  const ordenados = [...GRANDES_EVENTOS].sort((a, b) => {
    const diffA = (a.month - mesAtual + 12) % 12
    const diffB = (b.month - mesAtual + 12) % 12
    return diffA - diffB
  })

  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory">
      {ordenados.map((e) => {
        const isAtivo = e.slug === ativo?.slug
        return (
          <Link
            key={e.slug}
            href={`/eventos/${e.slug}`}
            className="snap-start shrink-0 w-[160px] press-scale"
          >
            <div className="relative h-44 rounded-2xl overflow-hidden">
              <Image
                src={e.imageUri}
                alt={e.title}
                fill
                className="object-cover"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div
                className="absolute top-2 left-2 text-[10px] font-black px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: e.themeColor }}
              >
                {e.monthLabel}
              </div>
              {isAtivo && (
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-white text-tx-primary text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                  AGORA
                </div>
              )}
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white font-bold text-[13px] leading-tight">{e.title}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
