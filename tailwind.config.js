module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0D0D0D",
        "primary-light": "#F2F2F2",
        "primary": "#42b983",
      },
      fontFamily: {
        'ave': ['Avenir, Helvetica, Arial, sans-serif'],
      }
    },
  },
  plugins: [],
}
