module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'Helvetica', 'Arial', 'sans-serif']
      },
      cursor: {
        'grab': 'grab',
        'grabbing': 'grabbing'
      }
    }
  },
  variants: {},
  plugins: []
};
