/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '321px',
        sm: '380px',
        md: '600px',
        lg: '1100px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.flexCol': {
          display: '1 1 100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
        '.flexRow': {
          display: '1 1 0%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
        '.clipPathCircle': {
          clipPath: 'circle(50% at 50% 50%)',
        },
      })
    },
  ],
}
