/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      c_accent: "rgb(var(--color-accent) / <alpha-value>)",
      c_primary: "rgb(var(--color-primary) / <alpha-value>)",
      c_secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      c_bg: "rgb(var(--color-bg) / <alpha-value>)",
      c_bg_landing: "rgb(var(--color-bg-landing) / <alpha-value>)",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      borderRadius: {
        c_br: "var(--borderRadius)",
      },
      spacing: {
        c_bodyP: "var(--bodyPadding)",
        c_gap: "var(--gridSpacing)",
        c_pad: "var(--padding)",
      },
      boxShadow: {
        c_shadow: "var(--shadow)",
      },
      fontSize: {
        c_txt1: "var(--textOne)",
      },
    },
  },
};
