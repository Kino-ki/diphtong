import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

type VerticalLineProps = {
  strokeWidth: number;
  x: number;
  height: number;
  start: string;
  scrub: number;
};

export function BarCode({
  height,
  strokeWidth,
  x,
  start,
  scrub,
}: VerticalLineProps) {
  const lineRefs = useRef<SVGLineElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!lineRefs.current) return;

      // set all bars collapsed first
      gsap.set(lineRefs.current, { attr: { y2: 0 } });

      // animate to their target heights
      gsap.to(lineRefs.current, {
        attr: { y2: height },
        //   duration: 1,
        ease: "power2.Out",
        scrollTrigger: {
          trigger: svgRef.current,
          start,
          end: "bottom 40%",
          scrub,
          // markers: true,
        },
      });
    },
    { dependencies: [height] }
  );

  return (
    <svg ref={svgRef} viewBox="0 0 200 400" className="h-full">
      <line
        ref={lineRefs}
        x1={x}
        y1="0"
        x2={x}
        y2={height}
        stroke="#191919"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

type HorizontalLineProps = {
  strokeWidth: number;
  x: number;
  width: number;
};

export function HorizLine({ width, strokeWidth, x }: HorizontalLineProps) {
  const lineRefs = useRef<SVGLineElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!lineRefs.current) return;

      // set all bars collapsed first
      gsap.set(lineRefs.current, { attr: { x2: 0 } });

      // animate to their target heights
      gsap.to(lineRefs.current, {
        attr: { x2: width },
        //   duration: 1,
        ease: "power2.Out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 65%",
          end: "bottom 40%",
          scrub: 1,
          // markers: true,
        },
      });
    },
    { dependencies: [width] }
  );

  return (
    <svg ref={svgRef} viewBox="0 0 400 50" className="overflow-hidden">
      <line
        ref={lineRefs}
        x1={x}
        y1="0"
        x2={width}
        y2="0"
        stroke="#191919"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
