const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      padauk: ["Padauk", ...defaultTheme.fontFamily.sans],
      poppings: ["Poppins", "Georgia", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        biovitoria: "#00406c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
