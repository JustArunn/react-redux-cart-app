/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "430px",
        sm: "330px",
        lg: "770px",
      },
    },
  },
  plugins: [],
};
