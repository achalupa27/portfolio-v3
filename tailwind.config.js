/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Poppins"],
    },
    extend: {
      colors: {
        primary: "#0084ff",
        secondary: "white",
        "primary-dark": "#f59e0b",
        "secondary-dark": "#111827",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
