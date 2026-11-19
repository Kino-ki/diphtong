"use client";

import { useForm } from "react-hook-form";
import spinIcon from "@/public/images/spinner.gif";
import Image from "next/image";
import { useEffect, useState } from "react";
import { sendEmail } from "@/app/utils/send-email";
import { getResponseText } from "@/app/api/email/get-response-text";

export type FormData = {
  name: string;
  email: string;
  website: string;
  content: string;
};

type ContactFormProps = {
  lang: string;
};

export default function ContactForm({ lang }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<number>(0);
  const [messageStatusText, setModalMessageStatustext] = useState<string>("");

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  // { resolver: zodResolver(contactSchema) }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const resstatus: number = await sendEmail(data);
      setIsSent(resstatus);
    } finally {
      setIsSubmitting(false);
      reset();
    }
  };

  useEffect(() => {
    setModalMessageStatustext(getResponseText(isSent, lang));
  }, [isSent, lang]);

  return (
    <div className="w-full h-full font-urbanistr text-start text-xl flex flex-col justify-center  ">
      <form
        className="flex flex-col w gap-[5vh] h-full "
        onSubmit={handleSubmit(onSubmit)}
        action=""
      >
        <div className="flex justify-between h-[15%] ">
          <div className="flex flex-col justify-between  w-1/2 mr-4  ">
            {lang === "EN" ? (
              <label className="md:text-lg text-sm" htmlFor="name">
                name <span className="text-base">*</span>
              </label>
            ) : (
              <label className="md:text-lg text-sm" htmlFor="name">
                nom <span className=" lg:text-base">*</span>
              </label>
            )}
            <input
              {...register("name", {
                minLength: {
                  value: 3,
                  message: "Must contain at least 2 caracters",
                },
                required: "This field is required",
              })}
              id="name"
              name="name"
              type="text"
              className="bg-diphblack text-white h-1/3 w-full focus:outline-none autofill:bg-transparent flex flex-col justify-end  border-gray-400 border-b"
            />
            <div className="h-5">
              {errors?.name && (
                <p className="text-red-500 text-sm">{errors?.name?.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/2   ">
            {lang === "EN" ? (
              <label className="md:text-lg text-sm" htmlFor="email">
                email <span className=" lg:text-base">*</span>
              </label>
            ) : (
              <label className="md:text-lg text-sm" htmlFor="name">
                email <span className=" lg:text-base">*</span>
              </label>
            )}
            <input
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\./,
                  message: "character . is missing",
                },
              })}
              id="email"
              name="email"
              type="email"
              className="bg-diphblack focus:outline-none text-white  h-1/3 w-full border-gray-400 border-b"
            />
            <div className="h-5">
              {errors?.email && (
                <p className="text-red-500 text-sm">{errors?.email?.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between border-gray-400 border-b  h-[10%]  ">
          {lang === "EN" ? (
            <label htmlFor="website" className="md:text-lg text-sm">
              website <span className="text-xs lg:text-base">(optional)</span>
            </label>
          ) : (
            <label htmlFor="website" className="md:text-lg text-sm">
              site web <span className="text-xs lg:text-base">(optionnel)</span>
            </label>
          )}
          <input
            {...register("website", { required: false })}
            id="website"
            name="website"
            type="text"
            className="bg-diphblack text-white focus:outline-none h-1/3"
          />
          {errors?.website && (
            <p className="text-red-600 text-sm">{errors?.website?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-5 h-[30%]">
          {lang === "EN" ? (
            <label htmlFor="content" className="md:text-lg text-sm">
              let's talk <span className=" lg:text-base">*</span>
            </label>
          ) : (
            <label htmlFor="content" className="md:text-lg text-sm">
              discutons <span className=" lg:text-base">*</span>
            </label>
          )}
          <textarea
            {...register("content", {
              required: "This field is required",
              minLength: {
                value: 4,
                message: "must contain at least 4 caracters",
              },
            })}
            id="content"
            name="content"
            className="bg-diphblack text-white focus:outline-none h-2/3  border-gray-400 border-b"
          />
          <div className="h-5">
            {errors?.content && (
              <p className="text-red-500 text-sm">{errors?.content?.message}</p>
            )}
          </div>
          <p className="lg:text-base text-xs">
            * {lang === "EN" ? "required" : "champ obligatoire"}{" "}
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-5  pt-5 md:pt-0">
          {isSent !== 0 && (
            <div className="h-10 flex justify-center">
              <p className="   text-lg font-akira">{messageStatusText}</p>
            </div>
          )}
          <button
            type="submit"
            className="bg-wlite text-diphblack p-5 font-akira text-2xl rounded-md hover:bg-white transition-colors ease-in-out duration-400 lg:w-52"
          >
            {isSubmitting ? (
              <div role="status" className="">
                <Image
                  src={spinIcon}
                  width={50}
                  height={50}
                  alt="spinner"
                  className="mx-auto"
                />
              </div>
            ) : (
              <div className="md:text-lg text-sm">
                {lang === "EN" ? <p>send</p> : <p>envoyer</p>}
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
