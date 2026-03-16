import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color, #000000)",
        foreground: {
          DEFAULT: "var(--fg-color, #e0e0e0)",
          muted: "var(--fg-muted, #a3a3a3)",
        },
        muted: "var(--fg-muted, #a3a3a3)",
        accent: {
          DEFAULT: "var(--accent-color, #bda1c9)",
          hover: "var(--accent-hover, #e5ccf0)",
        },
        border: "var(--border-color, rgba(255, 255, 255, 0.07))",
        box: "var(--box-color, #0d0d0d)",
      },
      maxWidth: {
        "container-sm": "650px",
        "container-md": "700px",
        "container-lg": "800px",
      },
      width: {
        "profile": "220px",
      },
      gridTemplateColumns: {
        "profile-layout": "clamp(250px,30vw,320px) 1fr",
      },
      aspectRatio: {
        "book": "2 / 3",
      },
      fontFamily: {
        mono: ['var(--font-dm-mono)', 'DM Mono', 'JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.85rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "body-lg": "1.15rem",
        "caption": "13px",
      },
      letterSpacing: {
        "widest": "0.1em",
        "tracking-section": "0.5em"
      },
      backgroundColor: {
        "prose-code": "rgba(255, 255, 255, 0.05)",
      },
      lineHeight: {
        body: "1.6",
        heading: "1.2",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
