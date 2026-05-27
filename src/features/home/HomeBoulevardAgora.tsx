import Link from 'next/link'
import { Camera, Calendar, ShoppingBag } from 'lucide-react'

/**
 * "O Boulevard agora" — snapshot do que está rolando no eixo
 * neste momento, alinhado aos ícones do fim de semana (mídia kit):
 * Foto-Opp permanente, próximo palco, Feira/Pop-Up ativo.
 */
export default function HomeBoulevardAgora() {
  return (
    <div className="px-4 space-y-2">
      <Link
        href="/interaja/foto-opp-personagem-centro"
        className="flex items-center gap-3 bg-white border border-app-divider rounded-2xl p-3 press-scale"
      >
        <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
          <Camera size={18} className="text-brand" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand">Permanente</p>
          <p className="text-[13px] font-semibold text-tx-primary leading-tight">
            Personagem Centro tá liberado pra sua foto
          </p>
          <p className="text-[11px] text-tx-tertiary">Espaço Cauby · 8.402 retratos</p>
        </div>
      </Link>

      <Link
        href="/programacao"
        className="flex items-center gap-3 bg-white border border-app-divider rounded-2xl p-3 press-scale"
      >
        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
          <Calendar size={18} className="text-orange-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wide text-orange-500">Próximo palco</p>
          <p className="text-[13px] font-semibold text-tx-primary leading-tight">
            Roda de samba paulistana · Palco 1
          </p>
          <p className="text-[11px] text-tx-tertiary">Sábado · 19h</p>
        </div>
      </Link>

      <Link
        href="/feira"
        className="flex items-center gap-3 bg-white border border-app-divider rounded-2xl p-3 press-scale"
      >
        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
          <ShoppingBag size={18} className="text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wide text-green-600">Fim de semana</p>
          <p className="text-[13px] font-semibold text-tx-primary leading-tight">
            Feira Gastronômica & Roda de Samba
          </p>
          <p className="text-[11px] text-tx-tertiary">Sáb 18h–23h · Dom 10h–18h</p>
        </div>
      </Link>
    </div>
  )
}
