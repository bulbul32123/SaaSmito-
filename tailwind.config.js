/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#213344",
        secondary: "#F461A6",
        border: "#2057C2",
        primary: '#1666FF',
        icons: "#44C587",
      }
    },

  },
  plugins: [],
}