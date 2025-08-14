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
        wlite: "#c3c3c3",
        graytext: "#898787",
        rouge: "#4f0000",
      },
      backgroundImage: {
        herogif: "url(/images/herogif.gif)",
        mobileherogif: "url(/images/mobileherogif.gif)",
        diphlogo: "url(/images/diphlogo.svg)",
        diphlogo10: "url(/images/diphlogo10.svg)",
        slideone: "url(/images/backgrounds/heroslideone.svg) ",
        slidetwopic: "url(/images/backgrounds/heroslidetwo.svg) ",
        bgslidetwo: "url(/images/backgrounds/bg-slidetwo.svg) ",
        bgfooter: "url(/images/backgrounds/footerbg.svg) ",
        bgsecondfooter: "url(/images/backgrounds/footersecondbg.svg) ",
        bgdragonmobile: "url(/images/backgrounds/bgdragonmobile.svg) ",
        bgbeances: "url(/images/projectsPage/bgbeances.svg) ",
        estherprojmobile: "url(/images/projectsPage/bgesthermobile.svg)",
        estherprojmobilellipse:
          "url(/images/projectsPage/bgesthermobilellipse.svg)",
        beancesprojmobile: "url(/images/projectsPage/bgbeancesmobile.svg)",
        beancesflowerjmobile:
          "url(/images/projectsPage/bgbeancesmobileflower.svg)",
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
