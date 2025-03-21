/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir la carpeta src
  ],
  theme: {
    extend: {
      colors: {

        "header-bg": "#5a4646",
        "nav-bg": "#651616",
        "text-color": "#fff",
        "button-bg": "#5a4646",
        "footer-bg": "#2e2e2e",
        "featured-properties-bg": "#FFFFFF",
        "featured-title-color": "#555555",
        "card-bg": "#F5E8D0",
        "card-border-color": "#C9A227",
        "card-title-color": "#651616",
        "card-text-color": "#2E2E2E"


      },
      fontFamily: {
        "Texto-titulo": ["Montserrat", "sans-serif"],
        "Texto-parrafo": ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}

