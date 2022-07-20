/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'quicksand': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] 
    },
    extend: {},
  },
  plugins: [],
}
