module.exports = {
  theme: {
    fontFamily: {
      base: 'Fjalla One',
    },
    extend: {
      colors: {
        'rocasole-gray': '#ECECEC',
      },
      letterSpacing: {
        widest: '.25em',
        _widest: '0.3em',
        __widest: '.5em',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
