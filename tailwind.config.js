const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Segoe UI', 'Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'background': 'rgb(15, 23, 41)',
        'deep-purple': '#6666FF',
        'light-social': '#33BBFF',
      }
    },
  },
  plugins: [],
}
