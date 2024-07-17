import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'orange-gradient': 'linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(252,76,2,1) 50%)',
        'footer-texture': "url('/bg-footer.png')"
      },
      colors: {
        'orange': '#FC4C02',
        'darkGray': '#252429',
        'gray': '#484848',
        'lightGray': '#DFDFE7',
        'lighterGray': '#F5F5F7',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
