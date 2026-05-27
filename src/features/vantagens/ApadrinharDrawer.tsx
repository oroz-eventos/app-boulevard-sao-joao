'use client'
import { useState } from 'react'
import { Heart, HandHeart, CheckCircle2 } from 'lucide-react'
import BottomDrawer from '@/src/components/BottomDrawer'
import type { AdvantageOffer } from '@/src/lib/data/vantagens'

type Props = {
  open: boolean
  onClose: () => void
  offer: AdvantageOffer | null
}

const VALORES = [25, 45, 80, 120]

export default function ApadrinharDrawer({ open, onClose, offer }: Props) {
  const [valor, setValor] = useState<number>(45)
  const [confirmed, setConfirmed] = useState(false)

  const handleConfirm = () => {
    setConfirmed(true)
    setTimeout(() => {
      setConfirmed(false)
      onClose()
    }, 2400)
  }

  if (!offer) return null

  return (
    <BottomDrawer
      open={open}
      onClose={onClose}
      accentColor="#E91E8C"
      ariaLabel={`Apadrinhar ${offer.venue}`}
    >
      {confirmed ? (
        <div className="py-12 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-pink-100 flex items-center justify-center mb-4">
            <CheckCircle2 size={32} className="text-pink-600" />
          </div>
          <h3 className="font-black text-[20px] text-tx-primary">Obrigado!</h3>
          <p className="text-[13px] text-tx-secondary mt-2 leading-snug">
            Seu apadrinhamento de <strong>R$ {valor},00</strong> foi registrado.
            <br />
            Você vai receber confirmação no e-mail cadastrado.
          </p>
        </div>
      ) : (
        <div className="pt-1 pb-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
              <HandHeart size={20} className="text-pink-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-pink-600">
                {offer.discountLabel}
              </p>
              <p className="font-bold text-[15px] text-tx-primary leading-tight">
                {offer.venue}
              </p>
            </div>
          </div>

          <p className="text-[13px] text-tx-secondary leading-relaxed">{offer.condition}</p>

          <p className="text-[11px] font-bold uppercase tracking-wider text-tx-tertiary mt-5 mb-2">
            Escolha o valor
          </p>
          <div className="grid grid-cols-4 gap-2">
            {VALORES.map((v) => (
              <button
                key={v}
                onClick={() => setValor(v)}
                className={`rounded-xl py-3 border-2 transition-all press-scale ${
                  valor === v
                    ? 'border-pink-500 bg-pink-50 text-pink-600'
                    : 'border-app-divider bg-white text-tx-secondary'
                }`}
              >
                <span className="text-[10px] block opacity-60">R$</span>
                <span className="text-[15px] font-black block">{v}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 bg-app-surface rounded-xl p-3 text-[11px] text-tx-tertiary leading-relaxed">
            100% do valor é repassado direto ao programa do SP Invisível. O Boulevard cobre as
            taxas de operação.
          </div>

          <button
            onClick={handleConfirm}
            className="mt-4 w-full bg-pink-600 text-white font-bold py-4 rounded-xl press-scale flex items-center justify-center gap-2"
          >
            <Heart size={16} fill="white" />
            Apadrinhar com R$ {valor},00
          </button>

          <p className="text-[10px] text-tx-disabled text-center mt-3">
            Pagamento processado de forma segura · Pix ou cartão · Recibo por e-mail
          </p>
        </div>
      )}
    </BottomDrawer>
  )
}
