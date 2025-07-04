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
        'primary-blue': '#0098DB', // Headlines, CTAs, buttons
        'fresh-green': '#70BF44', // Accents, success states, iconography
        'warm-light-blue': '#E0F7FA', // Backgrounds, cards, sections
        'off-white': '#F9F9F9', // Main background
        'dark-gray': '#333333', // Text, footer
      },
    },
  },
  plugins: [],
}

export default config
