import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5500CC',
          clear: '#774DE8',
          shadow: '#2A0066',
          light: '#EDE0FF',
        },
        accent: {
          1: '#3B5BDB',
          2: '#E91E8C',
          3: '#F97316',
        },
        app: {
          bg: '#F9F9FB',
          white: '#FFFFFF',
          divider: '#EFEEF4',
          surface: '#F4F3F8',
        },
        tx: {
          primary: '#141414',
          secondary: '#525252',
          tertiary: '#737373',
          disabled: '#A3A3A3',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      screens: {
        xs: '390px',
      },
    },
  },
  plugins: [],
}

export default config
