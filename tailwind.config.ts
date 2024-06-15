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
      },
      backgroundColor: {
        primary: {
          100: "#cfebff",
          200: "#9fd7ff",
          300: "#70c2ff",
          400: "#40aeff",
          500: "#109aff",
          600: "#0d7bcc",
          700: "#0a5c99",
          800: "#063e66",
          900: "#031f33"
},
      },
      blur: {
        "soft": ".5px"
      }
    },
  },
  plugins: [],
};
export default config;
