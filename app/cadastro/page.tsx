import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/src/components/PageHeader'

export default function CadastroPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Criar conta" showBack />

      <div className="p-4">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo-mark.png" alt="Boulevard" width={36} height={36} />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-tx-tertiary">
              Boulevard São João
            </p>
            <p className="font-bold text-[15px] text-tx-primary leading-tight">
              Apareça no telão.
            </p>
          </div>
        </div>

        <form className="space-y-3">
          <label className="block">
            <span className="text-[12px] font-semibold text-tx-secondary">Nome</span>
            <input
              type="text"
              placeholder="Como você quer ser chamado"
              className="mt-1 w-full bg-app-surface rounded-xl px-3 py-3 text-[14px] outline-none focus:ring-2 focus:ring-brand/30"
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-semibold text-tx-secondary">E-mail</span>
            <input
              type="email"
              placeholder="seu@email.com"
              className="mt-1 w-full bg-app-surface rounded-xl px-3 py-3 text-[14px] outline-none focus:ring-2 focus:ring-brand/30"
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-semibold text-tx-secondary">Senha</span>
            <input
              type="password"
              placeholder="Mínimo 8 caracteres"
              className="mt-1 w-full bg-app-surface rounded-xl px-3 py-3 text-[14px] outline-none focus:ring-2 focus:ring-brand/30"
            />
          </label>

          <button
            type="button"
            className="w-full mt-2 bg-brand text-white font-bold py-3.5 rounded-xl press-scale text-[14px]"
          >
            Criar conta
          </button>
        </form>

        <p className="text-[11px] text-tx-tertiary mt-4 leading-snug text-center">
          Ao criar conta você concorda com os Termos de Uso e a Política de Privacidade.
          Curadoria de conteúdo segue diretrizes da CPPU.
        </p>

        <p className="text-[12px] text-center mt-6 text-tx-secondary">
          Já tem conta?{' '}
          <Link href="/login" className="font-semibold text-brand">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  )
}
