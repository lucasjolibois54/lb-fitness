/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //background colors
        'pink': '#C03963',
        'gray-stroke': '#7E7D7D',
        'gray-subtext': '#8A8A8A',
      }
    },
  },
  plugins: [],
}