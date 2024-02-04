module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lekton: ['Lekton', 'sans-serif']
      },
      colors: {
        "dark-primary" : "#222222",
        "white-peimary" : "#f6f6f6",
        "txt-clr": "rgba(255, 255, 255, 0.55)"
      },
      spacing: {
        '72px': '72px',
        '128': '36rem'
      }
    },
  },
  plugins: [],
}

