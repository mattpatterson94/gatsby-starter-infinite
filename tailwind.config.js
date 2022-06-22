const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4281A4",
        secondary: "#EAD2AC",
        tertiary: "#FE938C",
        link: "#4281A4",
        body: colors.gray["800"],
        light: colors.gray["500"],
        heading: colors.gray["900"],
      },
      spacing: {
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "6rem",
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.body"),
            "--tw-prose-headings": theme("colors.headings"),
            "--tw-prose-links": theme("colors.link"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
