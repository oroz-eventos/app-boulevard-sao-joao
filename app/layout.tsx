import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import BottomNav from '@/src/components/BottomNav'
import ServiceWorkerRegistrar from '@/src/components/ServiceWorkerRegistrar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Boulevard São João',
  description: 'Cultura, gastronomia e experiências na rua',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Boulevard SP',
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/icon-192.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#5500CC',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-app-bg`}
      >
        <ServiceWorkerRegistrar />
        <div className="mx-auto" style={{ maxWidth: 'var(--max-app-width)' }}>
          <main className="pb-safe min-h-screen">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
