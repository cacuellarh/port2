/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens:{
        xs: "480px",
        hd: "1900px"
      },
      colors:{
        primary:"#0D192B",
        primary_ligth: "#182A46",
        primary_dark : "#041124",
        secondary:"#07F9A2",
        text_color:"#ACACAC",
      },
      fontFamily:{
        primary:['Consolas', 'monospace'],
        secondary:['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

