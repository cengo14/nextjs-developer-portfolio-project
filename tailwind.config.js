/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-light": "#f8f8f8",
        "primary-dark": "#1f1f1f",
        orangesh: {
          100: "#E9C46A",
          200: "#F4A261",
          300: "#E76F51",
        },
        tealish: {
          100: "#A1D6B2",
          200: "#36BA98"
        }
      },
    },
  },
  varients: {
    extends: {
      typography: ["dark"]
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
