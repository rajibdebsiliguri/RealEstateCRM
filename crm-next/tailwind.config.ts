import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './features/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e3efff',
          200: '#c6ddff',
          300: '#9fc3ff',
          400: '#6aa2ff',
          500: '#3f83f8',
          600: '#2e6ae6',
          700: '#2555be',
          800: '#204a9c',
          900: '#1e407f',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;