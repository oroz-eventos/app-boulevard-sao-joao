'use client'
import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

type ToastEvent = CustomEvent<{ message: string; type?: 'success' | 'info' }>

declare global {
  interface WindowEventMap {
    'bsj-toast': ToastEvent
  }
}

/** Dispara um toast de qualquer lugar do app. */
export function showToast(message: string, type: 'success' | 'info' = 'success') {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('bsj-toast', { detail: { message, type } }))
}

/** Container global do Toast — adicionar no layout uma vez. */
export default function ToastHost() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null)

  useEffect(() => {
    const onToast = (e: ToastEvent) => {
      setToast({ message: e.detail.message, type: e.detail.type ?? 'success' })
      setTimeout(() => setToast(null), 2500)
    }
    window.addEventListener('bsj-toast', onToast)
    return () => window.removeEventListener('bsj-toast', onToast)
  }, [])

  if (!toast) return null

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-[95] bg-tx-primary text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-[13px] font-semibold animate-fade-in"
      style={{
        bottom: 'calc(96px + env(safe-area-inset-bottom))',
        maxWidth: 'calc(var(--max-app-width) - 2rem)',
      }}
      role="status"
      aria-live="polite"
    >
      {toast.type === 'success' && <CheckCircle2 size={16} className="text-emerald-400" />}
      <span>{toast.message}</span>
    </div>
  )
}
