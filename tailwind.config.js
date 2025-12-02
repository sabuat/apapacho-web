/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#F9F9F7',
        'brand-dark': '#2D2D2D',
        'brand-gold': '#C5A059',
        'brand-red': '#9E4747',
        'brand-blue': '#8C97AE',
        'brand-blue-bg': '#8c97ae8c',
        'brand-dark-blue': '#00719dff',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
        poiret: ['"Poiret One"', 'cursive'],
        texto: ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Usamos require aquí para evitar conflictos de importación en algunos sistemas
    require('@tailwindcss/typography'),
  ],
};