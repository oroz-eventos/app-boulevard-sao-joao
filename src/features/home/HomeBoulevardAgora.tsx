import Link from 'next/link'
import { Radio, Calendar, MapPin } from 'lucide-react'

/**
 * "O Boulevard agora" — snapshot do que está rolando no eixo neste
 * momento (próximo palco, ativação em curso, telões ao vivo).
 * Cards estáticos com link pras respectivas seções.
 */
export default function HomeBoulevardAgora() {
  return (
    <div className="px-4 space-y-2">
      <Link
        href="/interaja"
        className="flex items-center gap-3 bg-white border border-app-divider rounded-2xl p-3 press-scale"
      >
        <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0 relative">
          <Radio size={18} className="text-red-500" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wide text-red-500">Ao vivo</p>
          <p className="text-[13px] font-semibold text-tx-primary leading-tight">
            Kiss Cam Boulevard rodando no telão Brahma
          </p>
          <p className="text-[11px] text-tx-tertiary">4.180 pessoas assistindo</p>
        </div>
      </Link>

      <Link
        href="/programacao"
        className="flex items-center gap-3 bg-white border border-app-divider rounded-2xl p-3 press-scale"
      >
        <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
          <Calendar size={18} className="text-brand" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand">Próximo palco</p>
          <p className="text-[13px] font-semibold text-tx-primary leading-tight">
            Roda de samba paulistana · Palco 1
          </p>
          <p className="text-[11px] text-tx-tertiary">Sábado · 19h</p>
        </div>
      </Link>

      <Link
        href="/mapa"
        className="flex items-center gap-3 bg-white border border-app-divider rounded-2xl p-3 press-scale"
      >
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
          <MapPin size={18} className="text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wide text-blue-600">Acontecendo</p>
          <p className="text-[13px] font-semibold text-tx-primary leading-tight">
            Vertical Sports na empena central
          </p>
          <p className="text-[11px] text-tx-tertiary">Escalada com monitor · até 20h</p>
        </div>
      </Link>
    </div>
  )
}
