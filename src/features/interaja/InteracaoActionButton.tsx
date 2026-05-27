'use client'
import {
  Camera, Brain, Video, Footprints, Sticker, Bookmark, BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { showToast } from '@/src/components/Toast'
import type { InteracaoKind } from '@/src/lib/data/interaja'

const CTA_ICON: Record<InteracaoKind, LucideIcon> = {
  'foto-opp':         Camera,
  'super-quiz':       Brain,
  'envio-tela':       Video,
  'roteiro-guiado':   Footprints,
  'album-figurinhas': Sticker,
  'wishlist-endossa': Bookmark,
  'curiosidade-sp':   BookOpen,
}

const SUCCESS_MSG: Record<InteracaoKind, string> = {
  'foto-opp':         'Aponte a câmera no QR no telão pra ativar',
  'super-quiz':       'Resposta registrada · acompanhe o ranking no telão',
  'envio-tela':       'Envio enviado pra curadoria',
  'roteiro-guiado':   'Vaga reservada pro roteiro',
  'album-figurinhas': 'Figurinha colada no álbum',
  'wishlist-endossa': 'Item adicionado à sua wishlist',
  'curiosidade-sp':   'Salvo nas suas curiosidades',
}

type Props = {
  kind: InteracaoKind
  label: string
  accent: string
}

export default function InteracaoActionButton({ kind, label, accent }: Props) {
  const Icon = CTA_ICON[kind]
  const handle = () => showToast(SUCCESS_MSG[kind])
  return (
    <button
      onClick={handle}
      className="w-full mt-5 rounded-xl font-bold py-4 text-white press-scale flex items-center justify-center gap-2"
      style={{ backgroundColor: accent }}
    >
      <Icon size={18} />
      {label}
    </button>
  )
}
