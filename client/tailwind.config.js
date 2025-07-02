/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],

} 