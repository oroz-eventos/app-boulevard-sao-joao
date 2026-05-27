import Link from 'next/link'
import Image from 'next/image'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center animate-fade-in">
      <Image src="/logo-mark.png" alt="Boulevard" width={56} height={56} className="opacity-30" />
      <p className="text-[64px] font-black text-brand mt-4 leading-none">404</p>
      <h1 className="text-[18px] font-bold text-tx-primary mt-2">Página não encontrada</h1>
      <p className="text-[13px] text-tx-tertiary mt-2 max-w-xs leading-relaxed">
        O endereço que você tentou abrir não existe no Boulevard ainda. Que tal voltar pra
        rua principal?
      </p>

      <div className="mt-8 flex flex-col gap-2 w-full max-w-xs">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-brand text-white font-semibold py-3 rounded-xl press-scale text-[13px]"
        >
          <Home size={14} />
          Voltar pra home
        </Link>
        <Link
          href="/busca"
          className="flex items-center justify-center gap-2 bg-white border border-app-divider text-tx-primary font-semibold py-3 rounded-xl press-scale text-[13px]"
        >
          <Search size={14} />
          Buscar no app
        </Link>
      </div>
    </div>
  )
}
