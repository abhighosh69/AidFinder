/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#235789"
      },
      /* create account button color */
      backgroundImage: {
        "gradient-custom-color": "linear-gradient(to right, #9B5FFF, #5FAFFF)",
      },
      gridTemplateColumns: {
        'auto':'repeat(auto-fill, minmax(210px, 1fr))'
      },
    },
  },
  plugins: [],
}