import { useEffect } from 'react'
import * as SystemUI from 'expo-system-ui'
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { useTheme } from 'tamagui'
import { CurrentToast } from './CurrentToast'
import { config } from '../tamagui.config'
import { ThemePreferenceProvider, useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'

export function Provider({
  children,
  ...rest
}: Omit<TamaguiProviderProps, 'config' | 'defaultTheme'>) {
  return (
    <ThemePreferenceProvider>
      <TamaguiProviderWithTheme {...rest}>{children}</TamaguiProviderWithTheme>
    </ThemePreferenceProvider>
  )
}

function TamaguiProviderWithTheme({
  children,
}: {
  children: React.ReactNode
}) {
  const { resolvedTheme, isReady } = useThemePreferenceContext()

  if (!isReady) {
    return null
  }

  return (
    <TamaguiProvider config={config} defaultTheme={resolvedTheme}>
      <SystemUIBridge />
      <ToastProvider swipeDirection="horizontal" duration={5000}>
        {children}
        <CurrentToast />
        <ToastViewport top="$8" left={0} right={0} />
      </ToastProvider>
    </TamaguiProvider>
  )
}

/** Sincroniza cor de fundo nativa (splash, status bar area) com o tema Tamagui */
function SystemUIBridge() {
  const theme = useTheme()

  useEffect(() => {
    const bg = theme.background?.val
    if (bg) SystemUI.setBackgroundColorAsync(bg)
  }, [theme.background?.val])

  return null
}
