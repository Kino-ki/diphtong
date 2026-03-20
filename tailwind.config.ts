import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      colors: {
        wlite: "#E5E5E5",
        diphblack: "#161616",
        graytext: "#898787",
        rouge: "#4f0000",
        jaune: "#E0BC00",
        orange: "#f3701e",
      },
      backgroundImage: {
        herogif: "url(/images/herogif.gif)",
        mobileherogif: "url(/images/mobileherogif.gif)",
        slideone: "url(/images/backgrounds/heroslideone.svg) ",
        slidetwopic: "url(/images/backgrounds/heroslidetwo.svg) ",
        bgdragonmobile: "url(/images/backgrounds/bgdragonmobile.svg) ",
        bgbeances: "url(/images/projectsPage/bgbeances.svg) ",
        bgesther: "url(/images/projectsPage/bgWhite.jpg) ",
        bgbeancesmauve: "url(/images/projectsPage/beancesone.svg) ",
        bganalogf: "url(/images/projectsPage/analogf.svg) ",
        beancesprojmobile: "url(/images/projectsPage/bgbeancesmobile.svg)",
        rectangleservices: "url(/images/backgrounds/homeservices.svg) "
      },
    },
    fontFamily: {
      akira: ["var(--font-akira-expanded)", "sans-serif"],
      menlor: ["var(--font-menlo-regular)", "monospace"],
      menlob: ["var(--font-menlo-bold)", "monospace"],
      figtree: ["var(--font-figtree-semibold)", "sans-serif"],
      figtreel: ["var(--font-figtree-light)", "sans-serif"],
      urbanistl: ["var(--font-urbanist-light)", "sans-serif"],
      urbanistr: ["var(--font-urbanist-regular)", "sans-serif"],
      urbanistmed: ["var(--font-urbanist-medium)", "sans-serif"],
      estherfont: ["var(--font-inter)", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
