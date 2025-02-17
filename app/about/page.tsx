"use client";

import { gsap } from "gsap";
import { Observer } from "gsap/all";
import { useRef, useEffect } from "react";
gsap.registerPlugin(Observer);

export default function AboutPage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLElement | null)[]>([]);
  // const headings = gsap.utils.toArray(".section-heading");
  // const splitHeadings = headings.map(
  //   (heading) =>
  //     new SplitText(heading, {
  //       type: "chars,words,lines",
  //       linesClass: "clip-text",
  //     })
  // );
  const currentIndexRef = useRef(-1);
  const animatingRef = useRef(false);

  useEffect(() => {
    // Get references to all DOM elements
    const sections = sectionsRef.current;
    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");
    const images = imagesRef.current;
    const wrap = gsap.utils.wrap(0, sections.length);

    // Set initial positions for sliding elements
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index: number, direction: number) {
      if (animatingRef.current) return; // Prevent new animations while one is running
      animatingRef.current = true;
      index = wrap(index); // make sure it's valid

      const fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => {
            animatingRef.current = false;
          },
        });
      console.log("current", currentIndexRef.current);
      console.log("index = going to =>", index);

      if (currentIndexRef.current >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndexRef.current], { zIndex: 0 });
        tl.to(images[currentIndexRef.current], {
          yPercent: -15 * dFactor,
          delay: 0.2,
        }).set(sections[currentIndexRef.current], { autoAlpha: 0 });
        tl.call(() => {
          currentIndexRef.current = index;
        });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      // .fromTo(
      //   splitHeadings[index].chars,
      //   {
      //     autoAlpha: 0,
      //     yPercent: 150 * dFactor,
      //   },
      //   {
      //     autoAlpha: 1,
      //     yPercent: 0,
      //     duration: 1,
      //     ease: "power2",
      //     stagger: {
      //       each: 0.02,
      //       from: "random",
      //     },
      //   },
      //   0.2
      // );

      currentIndexRef.current = index;
    }

    Observer.create({
      // target: sections,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () =>
        !animatingRef.current && gotoSection(currentIndexRef.current - 1, -1),
      onUp: () =>
        !animatingRef.current && gotoSection(currentIndexRef.current + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    // Initialize first section
    gotoSection(0, 1);

    // Cleanup function
    return () => {
      Observer.getAll().forEach((observer) => observer.kill());
    };
  }, []);

  return (
    <div className="flex flex-col h-[100vh] ">
      {/* --------- FIRST SECTION ------------------- */}
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className=" h-full w-full  fixed  inset-0"
      >
        {/* Outer div for sliding effect */}
        <div className="outer bg-black overflow-y-hidden w-full h-full">
          {/* Inner div for sliding effect */}
          <div className="inner overflow-y-hidden w-full h-full">
            {/* Background image */}
            <div
              ref={(el) => {
                if (el && !imagesRef.current.includes(el)) {
                  imagesRef.current.push(el);
                }
              }}
              className="h-full w-full bg-bgserviceone bg-contain flex flex-col justify-center"
            >
              <div className="my-auto mx-auto w-[70%] h-[85%]">
                <div className="bg-diphlogo bg-contain pt-[10%] h-full w-full bg-no-repeat flex flex-col justify-center">
                  <div className="flex justify-end pr-[7%]">
                    <p className="w-[50%] font-urbanistr tracking-wider leading-8 text-xl text-center text-pretty">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec faucibus semper sodales. Donec congue rutrum mi a
                      congue. Cras est lectus, tempus eget lacus at, porta porta
                      magna. Sed commodo pretium laoreet. Integer egestas dolor
                      ac nibh ultrices, id maximus eros mattis. Curabitur rutrum
                      placerat ex eleifend facilisis. Integer pharetra, risus ut
                      gravida molestie, ante justo ultricies mauris, ac lacinia
                      metus purus ac nisl.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------- SECOND SECTION ---------------------------- */}
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className=" h-[100vh] inset-0 fixed "
      >
        {/* Outer div for sliding effect */}
        <div className="outer bg-black overflow-y-hidden w-full h-full ">
          {/* Inner div for sliding effect */}
          <div className="inner overflow-y-hidden w-full h-full">
            {/* Background image */}
            <div
              ref={(el) => {
                if (el && !imagesRef.current.includes(el)) {
                  imagesRef.current.push(el);
                }
              }}
              className="h-full bg-bgservicetwo bg-no-repeat bg-opacity-5 bg-center flex flex-col justify-center gap-12"
            >
              <h1 className="section-heading uppercase font-menlor text-5xl text-center">
                Our Values
              </h1>
              <p className="font-urbanistmed text-xl px-[20%] text-center flex justify-center tracking-wider leading-8">
                ac tellus nulla. Donec sed quam nec magna ultrices fermentum id
                ut eros. Proin eget ante a felis tincidunt viverra eget et
                ligula. Suspendisse sem arcu, fringilla ut convallis id, euismod
                vel sapien. Praesent faucibus non sapien in volutpat. Maecenas
                venenatis enim sit amet purus feugiat, ac consequat turpis
                posuere. Curabitur ornare lorem nec turpis eleifend, a viverra
                metus venenatis. Donec vel congue odio, vel consectetur nisl. Ut
                cursus ante sit amet turpis dapibus vestibulum. Donec quis erat
                leo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- THIRD SECTION -------------------------------- */}
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className=" h-[100vh] inset-0 fixed"
      >
        {/* Outer div for sliding effect */}
        <div className="outer bg-black overflow-y-hidden w-full h-full">
          {/* Inner div for sliding effect */}
          <div className="inner overflow-y-hidden w-full h-full">
            {/* Background image */}
            <div
              ref={(el) => {
                if (el && !imagesRef.current.includes(el)) {
                  imagesRef.current.push(el);
                }
              }}
              className="h-full bg-bgserviceone flex flex-col justify-center gap-12"
            >
              <h2 className="section-heading uppercase font-menlor text-5xl text-center">
                Meet the Founder
              </h2>
              <p className="font-urbanistmed text-xl px-[20%] text-center flex justify-center tracking-wider leading-8">
                ac tellus nulla. Donec sed quam nec magna ultrices fermentum id
                ut eros. Proin eget ante a felis tincidunt viverra eget et
                ligula. Suspendisse sem arcu, fringilla ut convallis id, euismod
                vel sapien. Praesent faucibus non sapien in volutpat. Maecenas
                venenatis enim sit amet purus feugiat, ac consequat turpis
                posuere. Curabitur ornare lorem nec turpis eleifend, a viverra
                metus venenatis. Donec vel congue odio, vel consectetur nisl. Ut
                cursus ante sit amet turpis dapibus vestibulum. Donec quis erat
                leo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------- FOURTH SECTION -------------------------------- */}
      <section
        ref={(el) => {
          if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
          }
        }}
        className="h-[100vh] inset-0 fixed "
      >
        {/* Outer div for sliding effect */}
        <div className="outer overflow-y-hidden w-full h-full">
          {/* Inner div for sliding effect */}
          <div className="inner overflow-y-hidden w-full h-full">
            {/* Background image */}
            <div
              ref={(el) => {
                if (el && !imagesRef.current.includes(el)) {
                  imagesRef.current.push(el);
                }
              }}
              className="h-full bg-bgservicethree bg-no-repeat bg-center flex flex-col justify-center gap-16"
            >
              <h1 className="section-heading uppercase font-menlor text-5xl text-center">
                How We Work (Why Us?)
              </h1>
              <p className="font-urbanistmed text-xl px-[20%] text-center flex justify-center tracking-wider leading-8">
                ac tellus nulla. Donec sed quam nec magna ultrices fermentum id
                ut eros. Proin eget ante a felis tincidunt viverra eget et
                ligula. Suspendisse sem arcu, fringilla ut convallis id, euismod
                vel sapien. Praesent faucibus non sapien in volutpat. Maecenas
                venenatis enim sit amet purus feugiat, ac consequat turpis
                posuere. Curabitur ornare lorem nec turpis eleifend, a viverra
                metus venenatis. Donec vel congue odio, vel consectetur nisl. Ut
                cursus ante sit amet turpis dapibus vestibulum. Donec quis erat
                leo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
