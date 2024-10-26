/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#5F6FFF"
      },
      backgroundImage: {
        "gradient-custom-color": "linear-gradient(to right, #9B5FFF, #5FAFFF)",
      },
    },
  },
  plugins: [],
}