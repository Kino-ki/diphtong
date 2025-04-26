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
        wlite: "#D9D9D9",
        rouge: "#4f0000",
      },
      backgroundImage: {
        herogif: "url(/images/herogif.gif)",
        diphlogo: "url(/images/diphlogo.svg)",
        diphlogo10: "url(/images/diphlogo10.svg)",
        slideone: "url(/images/backgrounds/heroslideone.svg) ",
        slidetwopic: "url(/images/backgrounds/heroslidetwo.svg) ",
        bgslidetwo: "url(/images/backgrounds/bg-slidetwo.svg) ",
        bgfooter: "url(/images/backgrounds/footerbg.svg) ",
        bgsecondfooter: "url(/images/backgrounds/footersecondbg.svg) ",
        bgbeances: "url(/images/projectsPage/bgbeances.svg) ",
      },
    },
    fontFamily: {
      akira: ["akira-expanded"],
      menlor: ["menlo-regular"],
      menlob: ["menlo-bold"],
      figtree: ["figtree-bold"],
      figtreel: ["figtree-light"],
      urbanistl: ["urbanist-light"],
      urbanistr: ["urbanist-regular"],
      urbanistmed: ["urbanist-medium"],
      estherfont: ["Inter"],
    },
  },
  plugins: [],
} satisfies Config;
