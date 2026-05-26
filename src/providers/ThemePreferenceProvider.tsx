import { createContext, useContext, type ReactNode } from 'react'
import {
  useThemePreference,
  type ResolvedTheme,
  type ThemePreference,
} from '@/hooks/useThemePreference'

type ThemePreferenceContextValue = ReturnType<typeof useThemePreference>

const ThemePreferenceContext = createContext<ThemePreferenceContextValue | null>(
  null
)

export function ThemePreferenceProvider({ children }: { children: ReactNode }) {
  const value = useThemePreference()
  return (
    <ThemePreferenceContext.Provider value={value}>
      {children}
    </ThemePreferenceContext.Provider>
  )
}

export function useThemePreferenceContext() {
  const ctx = useContext(ThemePreferenceContext)
  if (!ctx) {
    throw new Error('useThemePreferenceContext must be used within ThemePreferenceProvider')
  }
  return ctx
}

export type { ThemePreference, ResolvedTheme }
