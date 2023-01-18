/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      purpleLight: '#5126B4',
      purple: '#271A45',
      background: '#D9CDF7'
    },

    extend: {
      fontFamily: {
        CrimsonPro: ["Crimson Pro", "serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
