import { useEffect, useRef, useState } from "react";
import SectionShell from "./SectionShell.jsx";

const steps = [
  {
    number: "01",
    title: "看泥",
    text: "颗粒、收缩与烧成后的表面，从泥料开始判断。",
    image: "/images/craft/craft-01-clay-check.png"
  },
  {
    number: "02",
    title: "成型",
    text: "围身、扶正，让壶体重心稳定。",
    image: "/images/craft/craft-02-forming.png"
  },
  {
    number: "03",
    title: "修整",
    text: "盖沿、壶口、线条，都在细修中变干净。",
    image: "/images/craft/craft-03-trimming.png"
  },
  {
    number: "04",
    title: "试用",
    text: "出水、断水、持握回到日常使用。",
    image: "/images/craft/craft-04-water-test.png"
  }
];

export default function CraftProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stripRef = useRef(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const stripRect = strip.getBoundingClientRect();
      const stripCenter = stripRect.left + stripRect.width / 2;
      const cards = Array.from(strip.querySelectorAll("[data-craft-card]"));
      const nextIndex = cards.reduce(
        (closest, card, index) => {
          const rect = card.getBoundingClientRect();
          const center = rect.left + rect.width / 2;
          const distance = Math.abs(center - stripCenter);
          return distance < closest.distance ? { index, distance } : closest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY }
      ).index;

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    strip.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      strip.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <SectionShell
      id="craft"
      eyebrow="PROCESS"
      title="工艺不靠堆词，靠每个动作站得住。"
      intro="泥料、重心、线条与出水，决定一把壶是否真正好用。"
      className="bg-[#100b08]"
    >
      <div
        ref={stripRef}
        className="craft-strip -mx-5 flex gap-4 overflow-x-auto border-y border-paper/[0.07] px-5 py-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-[calc((100vw-min(80rem,100vw-6rem))/2)]"
        aria-label="工艺分镜"
      >
          {steps.map((step, index) => (
            <article
              key={step.number}
              data-craft-card
              className={`relative min-h-[560px] shrink-0 basis-[82vw] snap-center overflow-hidden border border-paper/[0.06] bg-[#070504] transition duration-700 sm:basis-[70vw] lg:min-h-[680px] lg:basis-[min(72vw,860px)] ${
                activeIndex === index
                  ? "opacity-100"
                  : "opacity-[0.48] brightness-[0.78]"
              }`}
            >
              <img
                src={step.image}
                alt={`${step.title}工艺画面`}
                className={`motion-soft absolute inset-0 h-full w-full object-cover transition duration-700 ${
                  activeIndex === index ? "scale-[1.035]" : "scale-100"
                }`}
                style={{ filter: "brightness(0.65) contrast(1.1) saturate(0.8)" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,0.04),rgba(7,5,4,0.28)_42%,rgba(7,5,4,0.88)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-paper/[0.06]" />

              <div className="relative z-10 flex min-h-[560px] flex-col justify-end p-7 lg:min-h-[680px] lg:p-9">
                <p className="text-xs tracking-[0.3em] text-teaLight">
                  {step.number}
                </p>
                <h3 className="mt-5 font-serif text-3xl">{step.title}</h3>
                <p className="mt-4 max-w-[13rem] text-sm leading-7 text-paper/56">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
      </div>
    </SectionShell>
  );
}
