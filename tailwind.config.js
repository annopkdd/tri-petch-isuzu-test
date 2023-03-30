/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "roboto-regular": ["Roboto-Regular"],
    },
    fontSize: {
      lg: ["18px", "21px"],
      xl: ["20px", "28px"],
      "4xl": ["36px", "42px"],
    },
    colors: {
      textprimary: "#000000",
      textsecondary: "#E7E7E7",
      textthird: "#C2C2C2",
      purple: "#603EBE",
    },
    extend: {},
  },
  plugins: [],
};
