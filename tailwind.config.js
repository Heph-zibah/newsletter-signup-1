/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "#FF6257",
        charcoalGrey: "#36384E",
        darkSlateGrey: "#242742",
        grey: "#9294A0",
      },
      listStyleImage: {
        checkmark: 'url("/src/assets/images/icon-list.svg")',
      },
    },
  },
  plugins: [],
};

