import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        paragraph: {
          light: "#5F5F66",
          dark: "#B8B9D1",
        },
        title: {
          light: "#27272A",
          dark: "#E3ECFF",
        },
        subtitle: {
          light: "#4B4B52",
          dark: "#D1D7EB",
        },
      },
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
          900: "#031f33",
        },
      },
      blur: {
        soft: ".5px",
      },
    },
  },
  plugins: [],
};
export default config;
