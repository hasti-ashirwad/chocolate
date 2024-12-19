module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#bc482f', // You can name this whatever you like
        'secondary': '#a78058', // Example for a secondary color (for the border)
        'darkcoffy':"#5a3320"
      },
    },
  },
  plugins: [],
};
