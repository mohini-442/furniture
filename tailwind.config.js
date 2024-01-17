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
      },
      backgroundImage: {
        'gradient1': 'linear-gradient(180deg, #243040 0%, #8B929B 100%)'
      },
      animation: {
        'spin-slow':'spin 3s linear'
      }
    },
  },
  plugins: [],
}

