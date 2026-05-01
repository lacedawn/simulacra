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
        background: "var(--bg-color, #f7f5f2)",
        foreground: {
          DEFAULT: "var(--fg-color, #1a1918)",
          muted: "var(--fg-muted, #595653)",
        },
        muted: "var(--fg-muted, #595653)",
        accent: {
          DEFAULT: "var(--accent-color, #8c6a71)",
          hover: "var(--accent-hover, #5e464b)",
        },
        border: "var(--border-color, rgba(26, 25, 24, 0.15))",
        box: "var(--box-color, transparent)",
      },
      maxWidth: {
        "container-sm": "650px",
        "container-md": "700px",
        "container-lg": "800px",
      },
      width: {
        "profile": "360px",
      },
      gridTemplateColumns: {
        "profile-layout": "clamp(300px,40vw,420px) 1fr",
      },
      aspectRatio: {
        "book": "2 / 3",
      },
      fontFamily: {
        mono: ['var(--font-eb-garamond)', 'serif'],
        sans: ['var(--font-eb-garamond)', 'serif'],
        serif: ['var(--font-eb-garamond)', 'serif'],
        display: ['var(--font-eb-garamond)', 'serif'],
      },
      fontSize: {
        xs: "0.8rem",
        sm: "0.9rem",
        base: "1.0rem",
        md: "1.0625rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "body-lg": "1.125rem",
        "caption": "0.85rem",
      },
      letterSpacing: {
        "wide": "0.05em",
        "widest": "0.1em",
        "tracking-section": "0.2em"
      },
      backgroundColor: {
        "prose-code": "transparent",
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
