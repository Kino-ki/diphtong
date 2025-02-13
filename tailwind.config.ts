import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wlite: "#D9D9D9",
      },
      backgroundImage: {
        herogif: "url(/images/herogif.gif)",
        slideone: "url(/images/backgrounds/heroslideone.svg) ",
        slidetwopic: "url(/images/backgrounds/heroslidetwo.svg) ",
        bgslidetwo: "url(/images/backgrounds/bg-slidetwo.svg) ",
        bgfooter: "url(/images/backgrounds/footerbg.svg) ",
        bgsecondfooter: "url(/images/backgrounds/footersecondbg.svg) ",
      },
    },
    fontFamily: {
      akira: ["akira-expanded"],
      menlor: ["menlo-regular"],
      menlob: ["menlo-bold"],
      figtree: ["figtree-bold"],
      figtreel: ["figtree-light"],
      urbanistr: ["urbanist-regular"],
      urbanistmed: ["urbanist-medium"],
    },
  },
  plugins: [],
} satisfies Config;
