import { useLanguage } from "../language/LangContext";

export default function InterversionSect() {
  const { language, dictionary } = useLanguage();
  const services = dictionary.homepage.services;
  return (
    <div className="h-[100svh] bg-wlite 2xl pagpadding text-diphblack font-urbanistr">
      <section className="flex flex-col gap-4">
        <p className="text-graytext underline md: text-xl uppercase">
          {" "}
          {services.eyebrow}{" "}
        </p>
        <h2 className="font-akira text-5xl w-3/5 text-pretty">
          {" "}
          {services.h2}{" "}
        </h2>
        <p> {services.h2content} </p>
      </section>

      <div className="mt-14 grid w-full grid-cols-1 px-5 md:mt-16 md:grid-cols-3 md:px-0">
        {services.servarray.map((service, index) => {
          const continuation =
            language === "FR"
              ? service.content.replace(/^./, (letter) => letter.toLowerCase())
              : ` ${service.content}`;

          return (
            <p
              key={service.id}
              className={`flex min-h-52 items-center px-5 py-8 text-xl leading-relaxed md:px-7 md:text-2xl ${
                index === 0
                  ? "md:justify-start md:pl-0 md:text-left"
                  : index === 1
                    ? "md:justify-center md:border-l md:border-diphblack/70 md:text-center"
                    : "md:justify-end md:border-l md:border-diphblack/70 md:pr-0 md:text-right"
              } text-center`}
            >
              {language === "FR" ? (
                <>
                  {service.h3} {continuation}
                </>
              ) : (
                <>
                  {service.h3}.{continuation}
                </>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
}
