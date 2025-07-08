import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1750A4', // Headlines, CTAs, buttons
        'fresh-green': '#119A49', // Accents, success states, iconography
        'warm-light-blue': '#E0F7FA', // Backgrounds, cards, sections
        'off-white': '#F9F9F9', // Main background
        'dark-gray': '#333333', // Text, footer
      },
    },
  },
  plugins: [],
}

export default config
