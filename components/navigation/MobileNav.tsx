"use client";
import cross from "@/public/images/ICONS/cross.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../language/LangContext";
import { LangButton } from "../Buttons";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const { dictionary } = useLanguage();
  const { mobilenav } = dictionary;

  useEffect(() => {
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

          <div className=" h-full flex flex-col justify-center">
            <ul className="flex flex-col text-center font-menlor text-2xl md:text-4xl pt-10 ">
              {mobilenav.map((item, i) => (
                <li
                  key={i}
                  className=" py-4 md:py-8 tracking-widest uppercase px-5  md:px-12"
                >
                  <a href={`${item.href} `}>{item.txt}</a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center py-12 pb-32">
              <LangButton />
            </div>
            <div className=" flex justify-center   text-xl md:text-2xl  ">
              <a
                href="mailto:contact@diphtong.ca"
                className="font-urbanistl tracking-widest underline underline-offset-4 "
              >
                contact@diphtong.com
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
