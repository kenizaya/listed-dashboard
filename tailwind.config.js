/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      backgroundColor: {
        revenueColor: '#DDEFE0',
        transactionColor: '#F4ECDD',
        likeColor: '#EFDADA',
        userColor: '#DEE0EF',
      },
    },
  },
  plugins: [require('daisyui')],
}
