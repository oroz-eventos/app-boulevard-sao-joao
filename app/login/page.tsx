import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/src/components/PageHeader'

export default function LoginPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Entrar" showBack />

      <div className="p-4">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo-mark.png" alt="Boulevard" width={36} height={36} />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-tx-tertiary">
              Boulevard São João
            </p>
            <p className="font-bold text-[15px] text-tx-primary leading-tight">
              Bem-vindo de volta.
            </p>
          </div>
        </div>

        <form className="space-y-3">
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
              className="mt-1 w-full bg-app-surface rounded-xl px-3 py-3 text-[14px] outline-none focus:ring-2 focus:ring-brand/30"
            />
          </label>

          <button
            type="button"
            className="w-full mt-2 bg-brand text-white font-bold py-3.5 rounded-xl press-scale text-[14px]"
          >
            Entrar
          </button>
        </form>

        <button className="w-full mt-3 text-[12px] text-tx-tertiary press-scale">
          Esqueci minha senha
        </button>

        <p className="text-[12px] text-center mt-6 text-tx-secondary">
          Ainda não tem conta?{' '}
          <Link href="/cadastro" className="font-semibold text-brand">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  )
}
