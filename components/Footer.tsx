"use client";
import Image from "next/image";
import { ContactButton } from "./Buttons";
import lineImg from "@/public/images/footerline.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-bgfooter bg-cover bg-no-repeat h-[75vh] ">
      <div className=" h-full bg-bgsecondfooter bg-[3rem_7rem] bg-no-repeat flex flex-col">
        <div className=" flex justify-evenly text-wlite h-[40%] mt-[8%] ">
          <div className="flex flex-col justify-between w-[20%]">
            <h1 className="font-urbanistmed tracking-wider text-4xl ">
              Let&apos;s talk about your next project
            </h1>

            <ContactButton />
          </div>
          <div className="flex flex-col justify-between ">
            <h2 className="uppercase font-menlor text-3xl "> our services</h2>
            <div className="font-menlor tracking-wide leading-10 capitalize text-lg">
              <p>
                <Link href="/services/#WEB DEVOLOPMENT">Web Development</Link>
              </p>
              <p>web design</p>
              <p>responsive apps </p>
              <p>maintenance </p>
            </div>
          </div>
          <Image src={lineImg} height={10} width={10} alt="line" />
          <div className="flex flex-col justify-between ">
            <h2 className="uppercase font-menlor text-3xl  "> our compagny</h2>
            <div className="font-menlor tracking-wide leading-10 capitalize text-lg">
              <p>about us</p>
              <p>case studies</p>
              <p>sitemap </p>
              <p>contact Info </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
