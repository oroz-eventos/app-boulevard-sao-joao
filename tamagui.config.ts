import { defaultConfig } from '@tamagui/config/v5'
import { createFont, createTamagui } from 'tamagui'
import { appThemes } from './src/theme/themes'

const geistSize = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 22,
  9: 28,
  10: 32,
} as const

const bodyFont = createFont({
  family: 'Geist, system-ui, sans-serif',
  size: geistSize,
  lineHeight: {
    1: 14,
    2: 16,
    3: 18,
    4: 20,
    5: 22,
    6: 24,
    7: 26,
    8: 28,
    9: 32,
    10: 36,
  },
  weight: {
    4: '400',
    5: '500',
    7: '700',
  },
  letterSpacing: {
    4: 0,
    8: -0.5,
  },
  face: {
    400: { normal: 'Geist' },
    500: { normal: 'GeistMedium' },
    700: { normal: 'GeistBold' },
  },
})

const displayFont = createFont({
  family: 'Anton, system-ui, sans-serif',
  size: geistSize,
  lineHeight: {
    1: 14,
    2: 16,
    3: 18,
    4: 20,
    5: 22,
    6: 24,
    7: 26,
    8: 28,
    9: 32,
    10: 36,
  },
  weight: {
    4: '400',
  },
  face: {
    400: { normal: 'Anton' },
  },
})

export const config = createTamagui({
  ...defaultConfig,
  fonts: {
    ...defaultConfig.fonts,
    body: bodyFont,
    heading: displayFont,
  },
  themes: {
    ...defaultConfig.themes,
    ...appThemes,
  },
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
