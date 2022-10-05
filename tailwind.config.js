/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1350px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '750px' },
      //
    },
    extend: {
      backgroundImage: {
        'pune': "url('/src/pune.jpg')",

      },
      colors: {
        // Configure your color palette here
        "dodger-blue": {
          DEFAULT: "#3B82F6",
          50: "#EBF2FE",
          100: "#D7E6FD",
          200: "#B0CDFB",
          300: "#89B4FA",
          400: "#629BF8",
          500: "#3B82F6",
          600: "#0B61EE",
          700: "#084BB8",
          800: "#063583",
          900: "#041F4D",
        },
      },
    },
  },
  plugins: [],
};
