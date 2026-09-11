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
          bg: "#05060f",
          elevated: "#0b0e1f",
          panel: "#0e1224",
          border: "rgba(230,233,255,0.09)",
          borderStrong: "rgba(230,233,255,0.16)",
        },
        text: {
          primary: "#edeffb",
          muted: "#9098bf",
          faint: "#5f6690",
        },
        accent: {
          blue: "#5b7fff",
          violet: "#8b6bff",
          gold: "#cba135",
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
