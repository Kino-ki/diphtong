"use client";

import { useLanguage } from "../language/LangContext";
import qrcode from "@/public/images/qr.png";
import linkedin from "@/public/images/ICONS/linkedin.png";
import Image from "next/image";

export default function NewFooter() {
  const { dictionary } = useLanguage();

  const footer = dictionary.footer;

  return (
    <div className="lg:h-[25svh] bg-wlite flex flex-col md:grid grid-cols-3 text-diphblack font font-urbanistr py-10 2xl:px-[66px] px-8 md:px-[32px] border-t-2 border-diphblack">
      <section className="flex flex-col justify-between">
        <div className="pt-1">
          <Image src={linkedin} alt="linkedIn logo" width={50} height={50} />
        </div>
        <div className="flex flex-col lg:flex-row text-graytext text-xs ">
          <p className="hover:underline hover:text-diphblack ">
            Politique de confidentialité
          </p>
          <p className="hidden lg:flex">&nbsp;| </p>
          <p className="hover:underline hover:text-diphblack ">
            {" "}
            Politique des cookies
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-end items-center">
        <p className="font-akira text-xs lg:text-sm text-center">
          tous droits reserves 2026
        </p>
      </section>
      <section className="flex flex-col justify-between items-end">
        <div className="flex items-start ">
          <div>
            <Image src={qrcode} width={120} height={120} alt="qr code" />
          </div>
        </div>
        <p className="font-akira text-base">diphtong</p>
      </section>
    </div>
  );
}
