"use client";
import Image from "next/image";
import { ContactButton } from "./Buttons";
import lineImg from "@/public/images/footerline.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-bgfooter bg-cover bg-no-repeat h-[90svh] md:h-[75svh] ">
      <div className=" h-full md:bg-bgsecondfooter  md:bg-[3rem_7rem] bg-no-repeat flex flex-col">
        <div className=" flex md:flex-row flex-col justify-between gap-10 md:gap-0 md:justify-evenly text-wlite my-auto px-3 h-[80%] md:h-[40%] md:mt-[8%] ">
          <div className="flex flex-col justify-between  md:w-[20%]">
            <h1 className="font-urbanistmed text-center md:text-start tracking-wider text-3xl md:text-4xl ">
              Let&apos;s talk about your next project
            </h1>
            <div className="flex justify-center  md:justify-start pt-8 md:pt-0">
              <ContactButton
                textsize={"md:text-2xl text-xl font-semibold"}
                width="md:w-[10rem] w-36"
                height="md:h-[5rem] h-16"
              />
            </div>
          </div>
          <div className="flex md:flex-col  gap-8 md:justify-between ">
            <h2 className="uppercase font-menlor text-xl md:text-3xl ">
              {" "}
              our services
            </h2>
            <div className="font-menlor flex flex-col md:gap-2 gap-4 tracking-wide md:leading-10 capitalize md:text-lg">
              <p>
                <Link href="/services/#WEB DEVOLOPMENT">Web Development</Link>
              </p>
              <p>web design</p>
              <p>responsive apps </p>
              <p>maintenance </p>
            </div>
          </div>
          <div className="hidden md:flex">
            <Image src={lineImg} height={10} width={10} alt="line" />
          </div>
          <div className="flex md:flex-col gap-8 md:justify-between ">
            <h2 className="uppercase font-menlor text-xl md:text-3xl  ">
              {" "}
              our compagny
            </h2>
            <div className="font-menlor flex flex-col md:gap-2 gap-4  tracking-wide md:leading-10 capitalize md:text-lg">
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
