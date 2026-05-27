'use client'
import { useEffect, useState } from 'react'

/**
 * Indica se o Boulevard está "aberto ao pedestre" agora.
 * Regra (V8/mídia kit): fechamento ao tráfego sáb 18h → dom 23h.
 */
function isBoulevardOpen(date = new Date()) {
  const day = date.getDay() // 0=dom, 6=sáb
  const hour = date.getHours()

  // Sábado a partir das 18h
  if (day === 6 && hour >= 18) return true
  // Domingo até 23h
  if (day === 0 && hour < 23) return true
  return false
}

export default function BoulevardStatus() {
  const [open, setOpen] = useState<boolean | null>(null)

  useEffect(() => {
    setOpen(isBoulevardOpen())
    const id = setInterval(() => setOpen(isBoulevardOpen()), 60_000)
    return () => clearInterval(id)
  }, [])

  if (open === null) return null

  return (
    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-app-surface">
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          open ? 'bg-emerald-500 animate-pulse' : 'bg-tx-disabled'
        }`}
      />
      <span className="text-[10px] font-semibold tracking-wide uppercase text-tx-secondary">
        {open ? 'Aberto · ao vivo' : 'Volta sábado 18h'}
      </span>
    </div>
  )
}
