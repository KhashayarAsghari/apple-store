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
          500: "#FF510C",
        },
      },
    },
  },
  plugins: [],
};
