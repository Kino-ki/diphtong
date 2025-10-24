"use client";
import Image from "next/image";
import { useLanguage } from "../language/LangContext";
import dash from "@/public/images/ICONS/yeldash.svg";
import gsap from "gsap";
import { useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { smoothScrollTo } from "../HelperFunctions";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function ProjNav() {
  const { dictionary } = useLanguage();
  const { projectsPage } = dictionary;
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const pathname = usePathname();

  const projList = Object.values(projectsPage)
    .filter((project) => project.h1 && project.id)
    .map((project) => ({
      h1: project.h1,
      id: project.id,
    }));

  return (
    <div className="">
      {pathname.includes("projects") && (
        <div
          ref={sectionRef}
          className=" fixed text-diphblack w-fit h-full top-10 left-12 z-20 md:flex hidden mix-blend-difference"
        >
          <div className="">
            {projList.map((p, i) => (
              <div
                onMouseEnter={() => setIsHovered(i)}
                onMouseLeave={() => setIsHovered(null)}
                className="py-1 "
                key={i}
              >
                <Link
                  href={`/projects/${p.id}`}
                  onClick={(e) => {
                    smoothScrollTo(e.currentTarget.getAttribute("href"));
                    // e.preventDefault();
                  }}
                  className=""
                >
                  {isHovered === i ? (
                    <Image
                      src={dash}
                      width={25}
                      height={50}
                      alt="dash"
                      className=""
                    />
                  ) : (
                    <Image src={dash} width={25} height={50} alt="dash" />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
