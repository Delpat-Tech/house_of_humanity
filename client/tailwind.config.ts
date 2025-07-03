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
        primary: '#FF69B4', // Hot Pink
        'primary-dark': '#C71585', // Medium Violet Red, a darker shade for hover states or active elements
        // Add more custom colors here as needed
      },
    },
  },
  plugins: [],
}

export default config
