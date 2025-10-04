/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'bebas': ['Bebas Neue', 'cursive'],
      },
      colors: {
        'accent-gold': '#D4AF37',
        'accent-orange': '#FF5733',
      }
    },
  },
  plugins: [],
}