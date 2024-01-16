/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'roboto': "'roboto',sans-serif",
        'poppins': "'poppins',sans-serif",
      },
      backgroundSize: {
        'size': '100% 100%'
      }
    },
  },
  plugins: [],
}

