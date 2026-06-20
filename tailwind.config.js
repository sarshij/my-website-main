/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0a0f',
          glass: 'rgba(20, 20, 30, 0.5)',
          glassLight: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(0, 206, 209, 0.3)',
          accent: '#00ced1',
          purple: '#8a2be2'
        },
        luxe: {
          gold: '#ffd700',
          rose: '#ff6b9d',
          crystal: '#e0f7fa',
          void: '#05050a',
          platinum: '#e8e8f0',
          iris: '#6366f1',
          neon: '#00fafe',
          hologram: 'rgba(138, 43, 226, 0.6)',
        }
      },
      fontFamily: {
        sans: ['"Fira Code"', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { filter: 'brightness(1)', textShadow: '0 0 10px currentColor' },
          '50%': { filter: 'brightness(1.3)', textShadow: '0 0 30px currentColor' },
        },
        'data-stream': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'holographic-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'morph-gradient': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.2)', opacity: '0.4' },
          '100%': { transform: 'scale(1)', opacity: '0.8' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'data-stream': 'data-stream 8s linear infinite',
        'holographic': 'holographic-shimmer 4s ease infinite',
        'morph': 'morph-gradient 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'ping-slow': 'ping-slow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'luxe-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0a0a0f 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        'neon-glow': 'radial-gradient(circle, rgba(0,206,209,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
