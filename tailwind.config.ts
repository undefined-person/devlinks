import { type Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#633cff',
        'secondary': '#beadff',
        'pink-100': '#efebff',
        'gray-100': '#fafafa',
        'gray-300': '#d9d9d9',
        'gray-400': '#737373',
        'black-500': '#333333',
        'red-500': '#ff3939',
      }
    },
  },
  plugins: [],
} satisfies Config
