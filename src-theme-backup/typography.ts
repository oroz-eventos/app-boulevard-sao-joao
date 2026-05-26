import type { TextStyle } from 'react-native'

export const fontFamily = {
  display: 'Anton',
  body: 'Geist',
  bodyMedium: 'GeistMedium',
  bodyBold: 'GeistBold',
  mono: 'GeistMono',
} as const

/** Escala alinhada ao guia de tipografia do projeto */
export const typography = {
  display: {
    fontFamily: fontFamily.display,
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
  },
  title1: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700' as const,
  },
  title2: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700' as const,
  },
  title3: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700' as const,
  },
  subtitle: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const,
  },
  body: {
    fontFamily: fontFamily.body,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
  },
  bodyBold: {
    fontFamily: fontFamily.bodyBold,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700' as const,
  },
  caption: {
    fontFamily: fontFamily.body,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400' as const,
  },
  captionMono: {
    fontFamily: fontFamily.mono,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500' as const,
    letterSpacing: 1.1,
    textTransform: 'uppercase' as const,
  },
  eyebrow: {
    fontFamily: fontFamily.mono,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500' as const,
    letterSpacing: 1.3,
    textTransform: 'uppercase' as const,
  },
} satisfies Record<string, TextStyle>
