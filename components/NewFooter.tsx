import Image from "next/image";
import logo from "@/public/images/logo/logofooter.svg";
import { ContactButton } from "./Buttons";

export default function NewFooter() {
  return (
    <div className="h-[90svh] bg-diphblack text-wlite border-y-8 border-y-wlite flex flex-col lg:gap-6 lg:px-5 lg:py-5">
      <div className="flex justify-evenly h-1/2 lg:py-5">
        <div className="flex flex-col justify-center gap-10 w-[25%] ">
          <h2 className="font-urbanistl uppercase text-4xl">Our Services</h2>
          <ul className="capitalize text-xl font-menlor flex flex-col lg:gap-3">
            <li>web development</li>
            <li>web design</li>
            <li>responsive apps</li>
            <li>maintenance</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-10 w-[25%] ">
          <h2 className="font-urbanistl uppercase text-4xl">Our Company</h2>
          <ul className="capitalize text-xl font-menlor flex flex-col lg:gap-3">
            <li>
              <a className="hover:underline" href="/about" target="_blank">
                about us
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/projects" target="_blank">
                our projects
              </a>
            </li>
            <li>
              <p>sitemap</p>
            </li>
            <li>
              <a className="hover:underline" href="/contact" target="_blank">
                contact info
              </a>
            </li>
          </ul>
        </div>
        <div className="flex font-urbanistr gap-20 w-[50%] my-auto justify-center  ">
          <h2 className="font-urbanistmed text-3xl tracking-widest">
            Let&apos;s talk about your next <br /> project
          </h2>
          <div className=" w-1/4 ">
            <ContactButton
              textsize="text-3xl"
              width="w-full"
              height="md:h-20"
            />
          </div>
        </div>
      </div>
      <div className="relative flex  w-full h-[65%]  ">
        <Image
          src={logo}
          alt="logo footer"
          width={1900}
          height={900}
          className="  object-fill"
        />
      </div>
    </div>
  );
}
