import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golf: {
          green: "#22C55E",
          "green-dark": "#16A34A",
          "green-light": "#86EFAC",
          "green-pale": "#DCFCE7",
        },
        bg: {
          primary: "#FFFFFF",
          secondary: "#F8F7F4",
          tertiary: "#F3F2EF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["SF Pro Display", "Inter", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
