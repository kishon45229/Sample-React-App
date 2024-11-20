/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B3CC9',
        secondary: '#F28D35',
        gradient1: '#1CBDDD',
        gradient2: '#4DCA79'
      }
    },
  },
  plugins: [],
}

