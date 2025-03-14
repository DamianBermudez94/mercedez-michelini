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
        "Color-Text":"#F5E8D0",
        "Button-fondo":"#5a4646",
        "Backfround-footer":"#2e2e2e",
        "Background-propiedades-destacada":"#FFFFFF",
        "Color-title-destacada":"#555555",
        "Color-fondo-card":"",
        "Color-borde":"#C9A227",
        "Title-card":"#651616",
        "Text-card":"#2E2E2E"


      },
      fontFamily: {
        "Texto-titulo": ["Montserrat", "sans-serif"],
        "Texto-parrafo": ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}

