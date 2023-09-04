/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        containerContent: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      screens: {
        xs: "250px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        body: ["Rubik", "sans-serif"],
      },
      colors: {
        facebook: "#425790",
        twitter: "#3F91D0",
        google: "#C23B2B",
        linkedin: "#1A6BC8",
        lightGreen: "#86C042",
        green: "#50D682",
        yellow: "#FDC400",
        blue: "#1E88E5",
        info: "#00BAD3",
        sidebar: "#042954",
        sidebarHover: "#051F3E",
        lightViolate: "#605CA8",
        violate: "#6541B2",
        crimson: "#E91E63",
        heading: "#676767",
        normal: "#858585",
        light: "#CECECE",
        bg: "#FFFFFF",
        body: "#F0F1F3",
        primary: "#2979FF",
        success: "#8BC34A",
        information: "#9C27B0",
        danger: "#EE0D0D",
        pink: "#F26D7D",
        black: "#111111"
      }
    },
  },
  plugins: [],
}