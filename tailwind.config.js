/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
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
      }
    },
  },
  plugins: [],
}
