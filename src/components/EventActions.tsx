'use client'
import { Bell, Share2 } from 'lucide-react'
import { showToast } from './Toast'

type Props = {
  title: string
  accent?: string
  shareText?: string
}

export default function EventActions({ title, accent = '#5500CC', shareText }: Props) {
  const handleLembrete = () => {
    showToast(`Lembrete criado: ${title}`)
  }

  const handleShare = async () => {
    const text = shareText ?? title
    const shareData = {
      title: 'Boulevard São João',
      text,
      url: typeof window !== 'undefined' ? window.location.href : '',
    }
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        // canceled or unsupported → fallback
      }
    }
    if (typeof navigator !== 'undefined' && 'clipboard' in navigator) {
      try {
        await navigator.clipboard.writeText(shareData.url)
        showToast('Link copiado pra área de transferência', 'info')
      } catch {
        showToast('Não foi possível copiar')
      }
    }
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        onClick={handleLembrete}
        className="rounded-xl py-3 text-white font-semibold text-[13px] flex items-center justify-center gap-1.5 press-scale"
        style={{ backgroundColor: accent }}
      >
        <Bell size={14} />
        Lembrete
      </button>
      <button
        onClick={handleShare}
        className="rounded-xl py-3 bg-white border border-app-divider text-tx-primary font-semibold text-[13px] flex items-center justify-center gap-1.5 press-scale"
      >
        <Share2 size={14} />
        Compartilhar
      </button>
    </div>
  )
}
