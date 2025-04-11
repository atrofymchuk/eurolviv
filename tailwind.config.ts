import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cofo: ['CoFoSans', 'sans-serif'],
        cofoMedium: ['CoFoSans-Medium', 'sans-serif'], 
      },
    },
    variants: {
      extend: {
        display: ['last, first'],
      },
      screens: {
        'special': {'min': '1600px', 'max': '1920px'},
        "semi2xl": {'min': '1540px', 'max': '1700px'},
        'custom-range': {'min': '1540px', 'max': '1700px'},
      },
    },
  },

  plugins: [],
} satisfies Config;
