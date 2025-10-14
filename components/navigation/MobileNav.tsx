"use client";
import cross from "@/public/images/ICONS/cross.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../language/LangContext";
import { LangButton } from "../Buttons";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const { dictionary } = useLanguage();
  const { navbar } = dictionary;
  const itemsList = Object.values(navbar);

  useEffect(() => {
    // if (pathname !== "/home") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed lg:hidden  top-0 left-0  w-full z-50    ${
        !isOpen
          ? pathname.includes("/home") && scrollY < 200
            ? "mix-blend-normal"
            : "mix-blend-difference"
          : ""
      }
  `}
    >
      {!isOpen && (
        <nav
          className={`flex justify-end w-full transition-colors duration-300 p-5 md:px-12`}
        >
          <div>
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="font-akira text-md text-wlite md:text-2xl"
            >
              Menu
            </button>
          </div>
        </nav>
      )}
      {isOpen && (
        <div className="bg-[#E8E5E5] z-50 bg-bgdragonmobile bg-contain bg-right bg-no-repeat h-screen w-screen relative overflow-y-auto  ">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="absolute top-5 right-5"
          >
            <Image src={cross} alt="cross" width={40} />
          </button>
          <div className="pt-12 flex flex-col px-2 ">
            <h1 className="font-akira  text-black text-[13.5vw] text-center">
              <Link href="/">diphtong</Link>
            </h1>
            <h2 className="uppercase font-menlob text-[8vw] text-end md:-mt-10 -mt-5 ">
              web agency
            </h2>
          </div>
          <ul className="flex flex-col font-menlor text-2xl md:text-4xl pt-10 ">
            {itemsList.map((item, i) => (
              <li
                key={i}
                className="border-b border-gray-400 py-6 md:py-8 mr-40 tracking-widest uppercase px-5  md:px-12"
              >
                <a href={`/${item} `}>{item}</a>
              </li>
            ))}
          </ul>
          <div className=" flex justify-between  text-xl md:text(2xl) pr-10 px-5  md:px-12">
            <p className="font-urbanistl tracking-widest ">
              contact@diphtong.com
            </p>
          </div>
          <div className="px-5  md:px-12 py-12 ">
            <LangButton />
          </div>
        </div>
      )}
    </div>
  );
}
