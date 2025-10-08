import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
type ContentItem =
  | string
  | { bold: string }
  | { br: string }
  | { a: { txt: string; href: string } };
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function renderContentItem(a: ContentItem, i: number) {
  if (typeof a === "string") return a;
  if ("bold" in a) return <b key={i}>{a.bold}</b>;
  if ("br" in a)
    return (
      <span className="" key={i}>
        <br />
        <br />
        {a.br}
      </span>
    );
  if ("a" in a)
    return (
      <a
        className="font-semibold hover:underline transition-all ease-in-out duration-200"
        key={i}
        href={a.a.href}
        // onClick={(e) => {
        //   e.preventDefault();
        //   const smoother = ScrollSmoother.get();
        //   const target = document.querySelector(a.a.href);
        //   if (smoother && target) {
        //     smoother.scrollTo(target, true, "top 100px");
        //   } else if (target) {
        //     target.scrollIntoView({ behavior: "smooth" });
        //   }
        // }}
      >
        {" "}
        {a.a.txt}{" "}
      </a>
    );
  return null;
}
