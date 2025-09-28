/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'mono': ['Fira Code', 'monospace'],
      },
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#C778DD',
          50: '#F5E8FA',
          100: '#E8C7F0',
          200: '#D4A5E6',
          300: '#C084DC',
          400: '#C778DD',
          500: '#B85FD1',
          600: '#A347C5',
          700: '#8E2FB9',
          800: '#7A17AD',
          900: '#650FA1',
        },
        // Secondary/text colors
        secondary: {
          DEFAULT: '#ABB2BF',
          50: '#F7F8F9',
          100: '#E8EAED',
          200: '#D1D5DB',
          300: '#ABB2BF',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Background system
        background: {
          DEFAULT: '#282C33',
          primary: '#282C33',
          secondary: '#2C3036',
          tertiary: '#1E2227',
          card: '#2C3036',
          overlay: 'rgba(40, 44, 51, 0.95)',
        },
        // Text system
        text: {
          primary: '#FFFFFF',
          secondary: '#ABB2BF',
          muted: '#6B7280',
          accent: '#C778DD',
        },
        // Status colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(199, 120, 221, 0.3)',
        'glow-lg': '0 0 40px rgba(199, 120, 221, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(199, 120, 221, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(199, 120, 221, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}