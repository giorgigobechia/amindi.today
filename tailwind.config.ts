import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(96deg, #00000013 0%, rgba(255, 255, 255, 0.1) 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
