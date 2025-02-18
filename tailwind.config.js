/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'], // Adjust the paths as needed
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary:{
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily:{
        body:['Roberto Condesed']
      }
    },
  },
  plugins: [],
}

