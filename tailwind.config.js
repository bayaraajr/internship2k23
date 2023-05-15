module.exports = {
  // darkTheme: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      "dark": "#212121",
      "warning": "#ffc107",
      "primary": {
        100: "#ff90a9",
        200: "#fe7195",
        300: "#f84d82",
        400: "#f2056f",
        500: "#cc165f",
        600: "#a81b4f",
        700: "#841c3f",
        800: "#841c3f",
      },
      "secondary": {
        50: "#FFFFFF",
        100: "#c5f0fd",
        200: "#b0eafd",
        300: "#99e5fc",
        400: "#7fdffc",
        500: "#61dafb",
        600: "#55b8d3",
        700: "#4896ac",
        800: "#3c7687",
        900: "#305864",
      }
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')]
}