/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // Correct!
    "./src/**/*.{js,ts,jsx,tsx}" // Correct!
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#235789",
        "secondary":"#FDFFFC",
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #9B5FFF, #5FAFFF)',
      },
    },
  },
  plugins: [],
};
