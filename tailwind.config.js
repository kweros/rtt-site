/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rtt: {
          orange: { 500: '#FF6A00', 400: '#FF7E1F', 300: '#FFA04D' },
          coal: { 950: '#070707', 900: '#0E0E0E', 850: '#141414', 800: '#1B1B1B' },
          steel: { 700: '#2E2E2E', 600: '#454545', 500: '#6A6A6A' },
          sand: { 100: '#F5F1EB', 200: '#E8DED0' },
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        headline: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
