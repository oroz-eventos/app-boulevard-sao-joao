import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { ATIVACOES_SUSTENTACAO, NIVEL_LABEL } from '@/src/lib/data/sustentacao'

/**
 * "Sustentação · todo fim de semana" — mostra os 3 níveis (P/M/G)
 * resumidos com contadores. Diferencia o ritmo entre grandes
 * eventos mensais e a vida regular do calçadão.
 */
export default function HomeSustentacao() {
  const counts = {
    P: ATIVACOES_SUSTENTACAO.filter((a) => a.nivel === 'P').length,
    M: ATIVACOES_SUSTENTACAO.filter((a) => a.nivel === 'M').length,
    G: ATIVACOES_SUSTENTACAO.filter((a) => a.nivel === 'G').length,
  }
  const niveis: ('P' | 'M' | 'G')[] = ['G', 'M', 'P']

  return (
    <div className="px-4 space-y-2">
      {niveis.map((n) => {
        const meta = NIVEL_LABEL[n]
        return (
          <Link
            key={n}
            href="/programacao"
            className="flex items-center gap-3 bg-white border border-app-divider rounded-2xl p-3 press-scale"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-[18px]"
              style={{ backgroundColor: meta.cor }}
            >
              {n}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: meta.cor }}>
                  Nível {n}
                </p>
                <span className="text-[10px] text-tx-disabled">·</span>
                <span className="text-[10px] text-tx-disabled">{counts[n]} ativações</span>
              </div>
              <p className="text-[13px] font-semibold text-tx-primary leading-tight">
                {meta.titulo}
              </p>
              <p className="text-[11px] text-tx-tertiary mt-0.5 leading-snug">
                {meta.subtitulo}
              </p>
            </div>
            <Sparkles size={14} className="text-tx-tertiary shrink-0" />
          </Link>
        )
      })}
    </div>
  )
}
