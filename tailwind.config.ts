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
        'home-gradiente-about': 'linear-gradient(90deg, rgba(223,223,231,1) 50%, rgba(255,255,255,1) 50%)',
        'home-gradiente-structure': 'linear-gradient(90deg, #484848 50%, transparent 50%)',
        'footer-texture': "url('/bg-footer.png')",
        'bgCategory': "url('/categorias.jpg')",
        'bgSlide': "url('/bg-slide.png')"
      },
      colors: {
        'orange': '#FC4C02',
        'darkGray': '#252429',
        'gray': '#484848',
        'lightGray': '#DFDFE7',
        'lighterGray': '#F5F5F7',
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
