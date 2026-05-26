import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'
import { THEME_STORAGE_KEY } from '@/constants/app'

export type ThemePreference = 'system' | 'light' | 'dark'
export type ResolvedTheme = 'light' | 'dark'

export function useThemePreference() {
  const systemScheme = useColorScheme()
  const [preference, setPreferenceState] = useState<ThemePreference>('light')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY)
      .then((stored) => {
        if (stored === 'light' || stored === 'dark' || stored === 'system') {
          setPreferenceState(stored)
        }
      })
      .finally(() => setIsReady(true))
  }, [])

  const resolvedTheme: ResolvedTheme = useMemo(() => {
    if (preference === 'system') {
      return systemScheme === 'dark' ? 'dark' : 'light'
    }
    return preference
  }, [preference, systemScheme])

  const setPreference = useCallback(async (next: ThemePreference) => {
    setPreferenceState(next)
    await AsyncStorage.setItem(THEME_STORAGE_KEY, next)
  }, [])

  /** Alterna entre claro e escuro conforme o tema atual (um toque). */
  const toggleTheme = useCallback(async () => {
    const next: ThemePreference = resolvedTheme === 'dark' ? 'light' : 'dark'
    await setPreference(next)
  }, [resolvedTheme, setPreference])

  return {
    preference,
    resolvedTheme,
    isReady,
    setPreference,
    toggleTheme,
  }
}
