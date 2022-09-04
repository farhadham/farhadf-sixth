/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-910": "#151515",
        "neutral-950": "#101010",
        farhadLogo: "#ffffff80",
        footerSmall: "#bbbbbb",
        myGreen: "#4BFFA5",
      },
      spacing: {
        180: "600px",
        "2screen": "2160px",
      },
      backgroundImage: {
        header: "url('/images/Header.webp')",
      },
      margin: {
        "20%": "10%",
      },
      padding: {
        "4%": "2%",
        "6%": "3%",
      },
    },
  },
  plugins: [],
};
