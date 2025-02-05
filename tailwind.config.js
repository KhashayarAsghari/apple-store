/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        5.75: "23px",
      },
      colors: {
        prm: {
          200: "#FFF1EB",
          500: "#FF510C",
        },
        grayscale: {
          500: "#A6A6A6"
        }
      },
    },
  },
  plugins: [],
};
