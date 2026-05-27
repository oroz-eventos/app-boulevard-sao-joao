'use client'
import { useEffect, useState } from 'react'
import { Download, X } from 'lucide-react'

const DISMISSED_KEY = 'bsj-install-dismissed'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

/**
 * Prompt sutil pra instalar o app como PWA.
 * Aparece após 15s na primeira sessão, ou nunca se foi dispensado.
 * Esconde se o app já estiver instalado (standalone).
 */
export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Já dispensado? Não mostra.
    if (localStorage.getItem(DISMISSED_KEY)) return

    // Já em standalone? Não mostra.
    if (window.matchMedia('(display-mode: standalone)').matches) return

    const onBeforeInstall = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Mostra prompt depois de 15s pra não atrapalhar
      setTimeout(() => setShow(true), 15_000)
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstall)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted' || outcome === 'dismissed') {
      localStorage.setItem(DISMISSED_KEY, '1')
      setShow(false)
    }
  }

  const handleDismiss = () => {
    localStorage.setItem(DISMISSED_KEY, '1')
    setShow(false)
  }

  if (!show || !deferredPrompt) return null

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-[80] w-[calc(100%-2rem)] bg-white rounded-2xl shadow-2xl border border-app-divider p-3 flex items-center gap-3 animate-fade-in"
      style={{
        maxWidth: 'calc(var(--max-app-width) - 2rem)',
        bottom: 'calc(82px + env(safe-area-inset-bottom))',
      }}
    >
      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
        <Download size={18} className="text-brand" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-bold text-tx-primary leading-tight">
          Instalar Boulevard SP
        </p>
        <p className="text-[11px] text-tx-tertiary leading-snug">
          Acesso rápido na tela inicial · funciona offline
        </p>
      </div>
      <button
        onClick={handleInstall}
        className="shrink-0 bg-brand text-white text-[12px] font-bold px-3 py-1.5 rounded-full press-scale"
      >
        Instalar
      </button>
      <button
        onClick={handleDismiss}
        aria-label="Dispensar"
        className="shrink-0 w-7 h-7 rounded-full hover:bg-app-surface flex items-center justify-center press-scale"
      >
        <X size={14} className="text-tx-tertiary" />
      </button>
    </div>
  )
}
