"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { LangButton } from "../Buttons";
import logo from "@/public/images/brushcirc.png";
import { useLanguage } from "../language/LangContext";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();
  const { dictionary } = useLanguage();
  const {
    navbar: { collab, contact, proj },
  } = dictionary;

  return (
    <div
      id="navbar"
      key={pathname}
      className={`fixed top-0 z-40 w-full  text-wlite px-5 2xl:pl-5 pr-3 text-[1.1rem]/5 font-menlor uppercase lg:flex hidden mix-blend-difference lg:justify-between  tracking-[0.25rem]`}
    >
      <Link href="/home" className="mix-blend-difference">
        <Image src={logo} width={80} height={20} alt="diphtong logo" />
      </Link>
      <div className="flex justify-end w-full pt-3">
        <ul className="flex gap-12 2xl:gap-20   ">
          <li className="">
            <a href="/collaboration">{collab} </a>
          </li>
          <li className="">
            <a href="/projects">{proj} </a>
          </li>

          <li>
            <a href="/contact">{contact} </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center pl-8">
        <LangButton />
      </div>
    </div>
  );
}
