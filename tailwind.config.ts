import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode : 'class',
  theme: {
    screens: {
      'sm': '680px',
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
        "custom-gradient-opposite": "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 5.39%, rgba(255, 255, 255, 0.00) 80.08%)",

      },
    },
  },
  plugins: [],
};
export default config;
