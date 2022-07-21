/** @type {import('tailwindcss').Config} */

/** https://tailwind.simeongriggs.dev to generate color palette */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "primary": {
        "50": "#D6FFEC",
        "100": "#ADFFD9",
        "200": "#5CFFB3",
        "300": "#0AFF8D",
        "400": "#00B862",
        "500": "#006837",
        "600": "#00522C",
        "700": "#003D21",
        "800": "#002916",
        "900": "#00140B"
      },
      "secondary": {
        "50": "#FCD4A6",
        "100": "#FBCD98",
        "200": "#FABE7A",
        "300": "#F9B05D",
        "400": "#F89F3A",
        "500": "#F7931E",
        "600": "#E77F08",
        "700": "#CA6F07",
        "800": "#A75C06",
        "900": "#854905"
      }
    },
    fontSize: {
      sm: ['10px', '18px'],
      base: ['12px', '20px'],
      lg: ['16px', '24px'],
      xl: ['24px', '32px'],
      '2xl': ['36px', '44px'],
      '3xl': ['48px', '56px']
    },
    fontFamily: {
      'sans': ['Catamaran', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
