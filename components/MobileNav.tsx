"use client";
import cross from "@/public/images/ICONS/cross.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { LangButton } from "./Buttons";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

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
      className={`fixed lg:hidden  top-0 left-0 w-full z-50  ${
        !isOpen ? " mix-blend-difference" : "mix-blend-normal"
      } `}
    >
      {!isOpen && (
        <nav
          className={`flex justify-end w-full transition-colors duration-300 p-5`}
        >
          {/* <Link href="/" className="w-full ">
            <Image src={logo} width={40} height={50} alt="text" className="" />
          </Link> */}
          <div>
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="font-akira text-md text-wlite"
            >
              Menu
            </button>
          </div>
        </nav>
      )}
      {isOpen && (
        <div className="bg-[#E8E5E5] bg-bgdragonmobile bg-contain bg-right bg-no-repeat h-screen w-screen relative overflow-y-auto ">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="absolute top-5 right-5"
          >
            <Image src={cross} alt="cross" width={40} />
          </button>
          <div className="pt-12 flex flex-col px-2 ">
            <h1 className="font-akira  text-black text-[3.5rem] text-center">
              diphtong
            </h1>
            <h2 className="uppercase font-menlob text-[2rem] text-end ">
              web agency
            </h2>
          </div>
          <ul className="flex flex-col font-menlor text-xl pt-10 ">
            <li className="border-b border-gray-400 pb-7 mr-40 tracking-widest pl-5">
              <Link href="/">HOME</Link>
            </li>

            <li className="border-b border-gray-400 py-7 mr-36 tracking-widest pl-5">
              <Link href="/services">SERVICES</Link>
            </li>

            <li className="border-b border-gray-400 py-7 mr-36 tracking-widest pl-5">
              <Link href="/about">ABOUT</Link>
            </li>

            <li className="border-b border-gray-400 py-7 mr-40 tracking-widest pl-5">
              <Link href="/projects">OUR PROJECTS</Link>
            </li>

            <li className="py-6 mr-44 tracking-widest pl-5">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
          <div className=" flex justify-between pt-5 pl-5 pr-10">
            <p className="font-urbanistl tracking-widest">
              contact@diphtong.com
            </p>
            <LangButton />
          </div>
        </div>
      )}
    </div>
  );
}
