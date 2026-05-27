import Link from 'next/link'
import { ArrowLeft, Bell, Menu } from 'lucide-react'
import AppMenuDrawer from './AppMenuDrawer'

interface PageHeaderProps {
  title: string
  showBack?: boolean
  backHref?: string
  showNotif?: boolean
  subtitle?: string
  /** Esconde o botão de menu (default: visível) */
  hideMenu?: boolean
}

export default function PageHeader({
  title,
  showBack = false,
  backHref = '/',
  showNotif = false,
  subtitle,
  hideMenu = false,
}: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-app-divider">
      <div className="flex items-center h-14 px-4 gap-3">
        {showBack && (
          <Link
            href={backHref}
            className="w-8 h-8 flex items-center justify-center rounded-full -ml-1 press-scale"
            aria-label="Voltar"
          >
            <ArrowLeft size={20} className="text-tx-primary" />
          </Link>
        )}
        <div className="flex-1 min-w-0">
          <h1 className="font-semibold text-[15px] text-tx-primary leading-tight truncate">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[11px] text-tx-tertiary leading-tight">{subtitle}</p>
          )}
        </div>
        {showNotif && (
          <Link
            href="/notificacoes"
            className="w-8 h-8 flex items-center justify-center rounded-full press-scale relative"
            aria-label="Notificações"
          >
            <Bell size={20} className="text-tx-primary" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent-2 rounded-full" />
          </Link>
        )}
        {!hideMenu && (
          <AppMenuDrawer
            trigger={
              <span className="w-8 h-8 flex items-center justify-center rounded-full">
                <Menu size={20} className="text-tx-primary" />
              </span>
            }
          />
        )}
      </div>
    </header>
  )
}
