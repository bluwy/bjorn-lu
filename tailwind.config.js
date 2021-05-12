const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "16px",
        sm: "16px",
        md: "32px",
        lg: "120px",
        xl: "240px",
      },
    },
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: {
        100: "#fff1f8",
        200: "#ffe4f1",
        300: "#ffd6eb",
        400: "#ffc9e4",
        500: "#ffbbdd",
        600: "#e6a8c7",
        700: "#ba7b9a",
        800: "#a95a81",
        900: "#874867",
      },
      warning: {
        100: "#fff7dc",
        200: "#ffefb9",
        300: "#ffe696",
        400: "#ffde73",
        500: "#ffd650",
        600: "#e6c148",
        700: "#b39638",
        800: "#806b28",
        900: "#4c4018",
      },
    },
    opacity: {
      "0": "0",
      "10": ".1",
      "20": ".2",
      "30": ".3",
      "40": ".4",
      "50": ".5",
      "60": ".6",
      "70": ".7",
      "80": ".8",
      "90": ".9",
      "100": "1",
    },
    extend: {
      screens: {
        dark: {
          raw: "(prefers-color-scheme: dark)",
        },
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', "sans-serif"],
        mono: ['"Ubuntu Mono"', "monospace"],
      },
      borderWidth: {
        "6": "6px",
        "10": "10px",
        "12": "12px",
      },
      fontSize: {
        "7xl": "7rem",
      },
    },
  },
  variants: {},
}
