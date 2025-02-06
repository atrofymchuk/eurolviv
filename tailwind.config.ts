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
       
      },
    },
  },
  plugins: [],

} satisfies Config;
