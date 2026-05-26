import '../tamagui.generated.css'

import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { DarkTheme, DefaultTheme, ThemeProvider, type Theme } from '@react-navigation/native'
import { colors, colorsDark } from '@/theme/colors'
import { Anton_400Regular } from '@expo-google-fonts/anton'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { Provider } from 'components/Provider'
import { useTheme } from 'tamagui'
import { useThemePreferenceContext } from '@/providers/ThemePreferenceProvider'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Anton: Anton_400Regular,
    Geist: require('../assets/fonts/Geist-Regular.ttf'),
    GeistMedium: require('../assets/fonts/Geist-Medium.ttf'),
    GeistBold: require('../assets/fonts/Geist-Bold.ttf'),
    GeistMono: require('../assets/fonts/GeistMono-Regular.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <Provider>
      <RootLayoutNav />
    </Provider>
  )
}

function RootLayoutNav() {
  const { resolvedTheme } = useThemePreferenceContext()
  const theme = useTheme()

  const navTheme: Theme =
    resolvedTheme === 'dark'
      ? {
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            background: colorsDark.bg.app,
            card: colorsDark.bg.app,
            border: colorsDark.bg.divider,
          },
        }
      : {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: colors.bg.app,
            card: colors.bg.app,
            border: colors.bg.divider,
          },
        }

  const stackScreenBg = resolvedTheme === 'dark' ? colorsDark.bg.app : colors.bg.app

  return (
    <ThemeProvider value={navTheme}>
      <StatusBar style={resolvedTheme === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: stackScreenBg },
          contentStyle: { backgroundColor: stackScreenBg },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="programacao" options={{ title: 'Programação', headerShown: false }} />
        <Stack.Screen name="feira" options={{ title: 'Feira', headerShown: false }} />
        <Stack.Screen name="notificacoes" options={{ title: 'Notificações', headerShown: false }} />
        <Stack.Screen name="lojas" options={{ title: 'Comércios', headerShown: false }} />
        <Stack.Screen name="interaja" options={{ title: 'Interaja', headerShown: false }} />
        <Stack.Screen name="vantagens" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            title: 'Detalhes',
            presentation: 'modal',
            animation: 'slide_from_right',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            contentStyle: {
              backgroundColor: theme.background?.val,
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  )
}
