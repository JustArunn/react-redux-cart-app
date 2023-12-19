/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "md": "375px",
        "sm": "320px",
        "lg": "425px",
      },
    },
  },
  plugins: [],
};
