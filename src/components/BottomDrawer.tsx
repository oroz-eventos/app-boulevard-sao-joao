'use client'
import { useEffect } from 'react'
import { X } from 'lucide-react'

type BottomDrawerProps = {
  open: boolean
  onClose: () => void
  /** Cor de destaque opcional pro topo (handle bar) */
  accentColor?: string
  /** Conteúdo do drawer */
  children: React.ReactNode
  /** Título opcional pro screen reader */
  ariaLabel?: string
}

/**
 * Bottom drawer mobile-first com backdrop, swipe pra fechar (em click no backdrop),
 * lock de scroll e botão de fechar. Sem libs externas.
 */
export default function BottomDrawer({
  open,
  onClose,
  accentColor = '#5500CC',
  children,
  ariaLabel,
}: BottomDrawerProps) {
  // Lock body scroll + ESC pra fechar
  useEffect(() => {
    if (!open) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/50 backdrop-blur-[2px] transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className={`fixed left-1/2 -translate-x-1/2 bottom-0 z-[91] w-full bg-white rounded-t-3xl shadow-2xl
          transition-transform duration-300 ease-out
          ${open ? 'translate-y-0' : 'translate-y-full'}
        `}
        style={{
          maxWidth: 'var(--max-app-width)',
          maxHeight: '85vh',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {/* Handle bar */}
        <div className="pt-2.5 pb-1.5 flex justify-center">
          <span
            className="block w-10 h-1.5 rounded-full"
            style={{ backgroundColor: accentColor + '40' }}
          />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-app-surface flex items-center justify-center press-scale"
        >
          <X size={16} className="text-tx-tertiary" />
        </button>

        {/* Content (scrollable) */}
        <div className="overflow-y-auto px-5 pb-6" style={{ maxHeight: '78vh' }}>
          {children}
        </div>
      </div>
    </>
  )
}
