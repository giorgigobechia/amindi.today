import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode : 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1441px',
      // => @media (min-width: 1280px) { ... }
      'xxl': '1640px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(96deg, #00000013 0%, rgba(255, 255, 255, 0.1) 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
