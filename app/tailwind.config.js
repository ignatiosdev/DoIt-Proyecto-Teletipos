/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#5BC0EB",
          "base-100":"#303233",
          secondary:"#C2EDFF",
          success:"#40F99B",
          error: "#DB3A34"

        },
      },
    ],
  },
};
