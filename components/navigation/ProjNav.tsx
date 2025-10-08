import Image from "next/image";
import { useLanguage } from "../language/LangContext";
import dash from "@/public/images/ICONS/yeldash.svg";
import hoverdash from "@/public/images/ICONS/hoveryeldash.png";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function ProjNav() {
  const { dictionary } = useLanguage();
  const { projectsPage } = dictionary;
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const projList = Object.values(projectsPage)
    .filter((project) => project.h1 && project.id)
    .map((project) => ({
      h1: project.h1,
      id: project.id,
    }));

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1024px)", () => {
      const el = sectionRef.current;

      if (!el) return;

      gsap.set(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 5%",
          end: "bottom top",
          pin: true,
        },
      });
    });

    return () => mm.revert();
  }, []);
  return (
    <div
      ref={sectionRef}
      className=" absolute text-diphblack w-fit h-full top-10 left-8 z-20"
    >
      <div>
        {projList.map((p, i) => (
          <div
            onMouseEnter={() => setIsHovered(i)}
            onMouseLeave={() => setIsHovered(null)}
            className="py-1 "
            key={i}
          >
            <a href={`/projects/#${p.id}`} className="">
              {isHovered === i ? (
                <Image src={dash} width={25} height={50} alt="dash" />
              ) : (
                <Image src={dash} width={25} height={50} alt="dash" />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
