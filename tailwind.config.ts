import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          bg: "#0b0506",
          elevated: "#130a0b",
          panel: "#190c0e",
          border: "rgba(255,90,115,0.09)",
          borderStrong: "rgba(255,90,115,0.18)",
        },
        text: {
          primary: "#f5eded",
          muted: "#a69090",
          faint: "#735b5d",
        },
        accent: {
          blue: "#ff2d4b",
          violet: "#ff6b88",
          gold: "#ffb030",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        orbitRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbitCounter: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        driftGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        driftGlow: "driftGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
