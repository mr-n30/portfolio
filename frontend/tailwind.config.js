/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          surface: 'var(--color-bg-surface)',
          elevated: 'var(--color-bg-elevated)',
          border: 'var(--color-bg-border)',
          hover: 'var(--color-bg-hover)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
        },
        muted: {
          DEFAULT: 'var(--color-text-muted)',
          dim: 'var(--color-muted-dim)',
          faint: 'var(--color-muted-faint)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'cursor-blink': 'cursorBlink 1.1s step-end infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: 'var(--glow-idle)' },
          '50%': { boxShadow: 'var(--glow-active)' },
        },
      },
    },
  },
  plugins: [],
};
