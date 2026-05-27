'use client'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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
 * Bottom drawer mobile-first com backdrop, lock de scroll e ESC pra fechar.
 *
 * - Drawer ocupa até o topo da BottomNav (94px + safe area).
 * - Conteúdo é scrollável.
 * - Backdrop escuro com blur cobre toda a viewport por trás do drawer.
 */
export default function BottomDrawer({
  open,
  onClose,
  accentColor = '#5500CC',
  children,
  ariaLabel,
}: BottomDrawerProps) {
  const [mounted, setMounted] = useState(false)
  const handleClose = useCallback(() => onClose(), [onClose])

  // Render via portal só depois do mount (SSR safe)
  useEffect(() => setMounted(true), [])

  // Lock body scroll quando aberto
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // ESC pra fechar
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!mounted) return null

  return createPortal(
    <>
      {/* Backdrop · cobre toda a viewport (z-[90]) */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
        aria-hidden={!open}
      />

      {/* Drawer panel · sempre montado, translada quando fecha */}
      <div
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label={ariaLabel}
        className={`fixed left-1/2 -translate-x-1/2 bottom-0 z-[91] w-full bg-white rounded-t-3xl shadow-2xl flex flex-col
          transition-transform duration-300 ease-out
          ${open ? 'translate-y-0' : 'translate-y-full pointer-events-none'}
        `}
        style={{
          maxWidth: 'var(--max-app-width)',
          // Vai até quase o topo da viewport, descontando a notch
          maxHeight: 'calc(100dvh - env(safe-area-inset-top) - 24px)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {/* Handle bar */}
        <div className="pt-2.5 pb-1.5 flex justify-center shrink-0">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fechar"
            className="block w-12 h-1.5 rounded-full transition-colors"
            style={{ backgroundColor: accentColor + '40' }}
          />
        </div>

        {/* Close button absoluto no canto */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-app-surface hover:bg-app-divider transition-colors flex items-center justify-center press-scale z-10"
        >
          <X size={18} className="text-tx-primary" />
        </button>

        {/* Content scrollable, ocupa o resto do drawer */}
        <div className="flex-1 overflow-y-auto px-5 pt-2 pb-6">{children}</div>
      </div>
    </>,
    document.body
  )
}
