/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir la carpeta src
  ],
  theme: {
    extend: {
      colors: {

        "Background-color-header-top": "#5a4646",
        "Background-color-nav": "#651616",


      },
      fontFamily: {
        "Texto-titulo": ["Montserrat", "sans-serif"],
        "Texto-parrafo": ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}

