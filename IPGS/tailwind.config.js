/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── IPGS Brand Palette ──
        'gold': '#B89B5E',
        'light-gold': '#D4B97A',
        'dark-gold': '#8B7340',
        'navy': '#1F3A5F',
        'dark-navy': '#0E1B2A',
        'light-navy': '#2A4A6F',
        // ── Neutral ──
        'white': '#FFFFFF',
        'dark-grey': '#1D1D1F',
        'secondary-grey': '#6E6E73',
        // ── Warm backgrounds ──
        'cream': '#F8F6F1',
        'warm-cream': '#F5F2EB',
        'ivory': '#FAF8F4',
        'soft-cream': '#F0EDE6',
        'light-cream': '#FCFBF8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 24px -4px rgba(0, 0, 0, 0.08)',
        'premium-hover': '0 8px 32px -4px rgba(0, 0, 0, 0.12)',
        'gold': '0 4px 16px -4px rgba(184, 155, 94, 0.4)',
        'navy': '0 4px 16px -4px rgba(31, 58, 95, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
