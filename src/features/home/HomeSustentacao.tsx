import Link from 'next/link'
import { Sparkles, Clock, Footprints, Calendar } from 'lucide-react'
import { ATIVACOES_SUSTENTACAO, GRUPO_LABEL, type GrupoAtividade } from '@/src/lib/data/sustentacao'

const GROUP_ICON = {
  'sempre-aberto':  Clock,
  'aulas-roteiros': Footprints,
  'fds-ancora':     Calendar,
} as const

/**
 * "Sempre rolando" — agrupa as atividades regulares em 3 caixas
 * amigáveis pro usuário (sem nomenclatura comercial P/M/G):
 *   - Sempre por aqui (instalações permanentes)
 *   - Aulas e roteiros (workshops + caminhadas)
 *   - Todo fim de semana (atrações âncora sáb/dom)
 */
export default function HomeSustentacao() {
  const grupos: GrupoAtividade[] = ['fds-ancora', 'aulas-roteiros', 'sempre-aberto']

  return (
    <div className="px-4 space-y-2">
      {grupos.map((g) => {
        const meta = GRUPO_LABEL[g]
        const Icon = GROUP_ICON[g]
        const count = ATIVACOES_SUSTENTACAO.filter((a) => a.grupo === g).length
        return (
          <Link
            key={g}
            href="/programacao"
            className="flex items-center gap-3 bg-white border border-app-divider rounded-2xl p-3 press-scale"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: meta.cor + '20' }}
            >
              <Icon size={18} style={{ color: meta.cor }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[13px] font-semibold text-tx-primary leading-tight">
                  {meta.titulo}
                </p>
                <span className="text-[10px] text-tx-disabled">·</span>
                <span className="text-[10px] text-tx-disabled">{count} ativações</span>
              </div>
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
