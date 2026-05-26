'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const STORAGE_KEY = 'bsj-splash-shown'

/**
 * Splash screen do app — aparece uma vez por sessão.
 * Inclui placeholder pra co-assinatura da marca master cofundadora
 * (entrega comercial real do projeto: "splash screen exclusiva").
 */
export default function SplashScreen() {
  const [show, setShow] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(STORAGE_KEY)) return

    setShow(true)
    sessionStorage.setItem(STORAGE_KEY, '1')

    const fadeTimer = setTimeout(() => setFadeOut(true), 1800)
    const hideTimer = setTimeout(() => setShow(false), 2400)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!show) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-brand flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden={fadeOut}
    >
      <div className="flex flex-col items-center animate-fade-in">
        <Image
          src="/logo-mark.png"
          alt="Boulevard São João"
          width={96}
          height={96}
          priority
        />
        <p className="text-white font-black text-[22px] tracking-[0.06em] mt-4">
          BOULEVARD
        </p>
        <p className="text-white/85 font-bold text-[16px] tracking-[0.12em] -mt-1">
          SÃO JOÃO
        </p>
      </div>

      {/* Placeholder pra cofundadora master · entrega comercial */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
          Co-fundadora
        </p>
        <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
          <p className="text-white font-bold text-[13px] tracking-wider">MARCA MASTER</p>
        </div>
      </div>
    </div>
  )
}
