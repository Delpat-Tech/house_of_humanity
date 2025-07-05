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
        primary: '#4FC3F7', // Sky Blue
        'primary-dark': '#0288D1', // Darker Sky Blue
        secondary: '#81C784', // Light Green
        'secondary-dark': '#388E3C', // Darker Green
        // Add more custom colors here as needed
      },
    },
  },
  plugins: [],
}

export default config
