import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "widht",
      },
      animation: {
        "width-grow": "widthGrow 1s cubic-bezier(.02,.37,.2,.99)",
      },
      keyframes: {
        widthGrow: {
          "0%": { width: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
