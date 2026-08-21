/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          lime: "#a3e635",
          sky: "#38bdf8"
        }
      }
    }
  },
  plugins: []
};
