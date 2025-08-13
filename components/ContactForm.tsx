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
    <div className="w-full h-full font-urbanistr text-start text-xl">
      <form
        className="flex flex-col gap-[4vh] h-full"
        onSubmit={handleSubmit(onSubmit)}
        action=""
      >
        <div className="flex justify-between h-[15%] ">
          <div className="flex flex-col justify-between  w-1/2 mr-4  ">
            {lang === "EN" ? (
              <label className="" htmlFor="name">
                name <span className="text-base">(required)</span>
              </label>
            ) : (
              <label className="" htmlFor="name">
                nom <span className="text-base">(champ obligatoire)</span>
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
              className="bg-black h-1/3 w-full focus:outline-none autofill:bg-transparent flex flex-col justify-end  border-gray-400 border-b"
            />
            <div className="h-5">
              {errors?.name && (
                <p className="text-red-500 text-sm">{errors?.name?.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/2   ">
            {lang === "EN" ? (
              <label className="" htmlFor="email">
                email <span className="text-base">(required)</span>
              </label>
            ) : (
              <label className="" htmlFor="name">
                email <span className="text-base">(champ obligatoire)</span>
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
              className="bg-black focus:outline-none  h-1/3 w-full border-gray-400 border-b"
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
            <label htmlFor="website">
              website <span className="text-base">(optional)</span>
            </label>
          ) : (
            <label htmlFor="website">
              site web <span className="text-base">(optionnel)</span>
            </label>
          )}
          <input
            {...register("website", { required: false })}
            id="website"
            name="website"
            type="text"
            className="bg-black focus:outline-none h-1/3"
          />
          {errors?.website && (
            <p className="text-red-600 text-sm">{errors?.website?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-5 h-[30%]">
          {lang === "EN" ? (
            <label htmlFor="content">
              let us know <span className="text-base">(required)</span>
            </label>
          ) : (
            <label htmlFor="content">
              Dites nous tout{" "}
              <span className="text-base">(champ obligatoire)</span>
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
            className="bg-black focus:outline-none h-2/3  border-gray-400 border-b"
          />
          <div className="h-5">
            {errors?.content && (
              <p className="text-red-500 text-sm">{errors?.content?.message}</p>
            )}
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-5  ">
          {isSent !== 0 && (
            <div className="h-10 flex justify-center">
              <p className="   text-lg font-akira">{messageStatusText}</p>
            </div>
          )}
          <button
            type="submit"
            className="bg-wlite text-black p-5 font-akira text-2xl rounded-md hover:bg-white transition-colors ease-in-out duration-400 lg:w-52"
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
              <div>{lang === "EN" ? <p>submit</p> : <p>envoyer</p>}</div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
