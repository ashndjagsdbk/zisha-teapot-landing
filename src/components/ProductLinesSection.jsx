import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { productLines } from "../data/productLines.js";
import useReveal from "../hooks/useReveal.js";

export default function ProductLinesSection() {
  const { ref, isVisible } = useReveal();
  const trackRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const activeIndex = hoveredIndex ?? mobileIndex;

  const updateMobileIndex = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      setMobileIndex(0);
      return;
    }

    const nextIndex = Math.round(
      (track.scrollLeft / maxScroll) * (productLines.length - 1)
    );
    setMobileIndex(Math.min(productLines.length - 1, Math.max(0, nextIndex)));
  };

  return (
    <section
      id="product-lines"
      ref={ref}
      className={`section-reveal ${
        isVisible ? "is-visible" : ""
      } relative overflow-hidden bg-[#070504] px-5 py-20 text-paper sm:px-8 lg:px-12 lg:py-28`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,4,3,0.26),rgba(31,19,14,0.28)_48%,rgba(7,5,4,0.78))]" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-teaLight/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs tracking-[0.32em] text-teaLight uppercase">
              GROWTH PATH
            </p>
            <h2 className="font-serif text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
              从第一把壶，到自己的观看方式。
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-paper/68 sm:text-lg lg:justify-self-end">
            栖泥将作品分为初器、饰器、守器、新器，让不同阶段的用户，都能找到适合进入紫砂的路径。
          </p>
        </div>

        <div className="relative mt-12">
          <div
            ref={trackRef}
            onScroll={updateMobileIndex}
            className="product-lines-track -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
          >
            {productLines.map((line, index) => {
              const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
              const isActive = activeIndex === index;
              const opacityClass = !isVisible
                ? "opacity-0"
                : isDimmed
                  ? "opacity-55"
                  : "opacity-100";

              return (
                <article
                  key={line.slug}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                  className={`product-line-card group relative flex min-h-[420px] min-w-[78vw] snap-center flex-col justify-between overflow-hidden border bg-[#0c0806]/82 p-6 transition duration-500 hover:bg-[#120c08] sm:min-w-0 lg:min-h-[460px] ${
                    isActive
                      ? "border-teaLight/46"
                      : "border-paper/[0.09] hover:border-teaLight/38"
                  } ${opacityClass} ${isVisible ? "translate-y-0" : "translate-y-5"}`}
                  style={{ transitionDelay: `${index * 110}ms` }}
                >
                  <div className="absolute inset-x-6 top-20 h-px bg-paper/[0.08] transition duration-500 group-hover:bg-teaLight/26" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(210,170,109,0.09),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <span
                        className={`font-serif text-4xl leading-none transition duration-500 ${
                          isActive
                            ? "text-teaLight"
                            : "text-teaLight/58 group-hover:text-teaLight"
                        }`}
                      >
                        {line.shortLabel}
                      </span>
                      <span className="border border-teaLight/20 px-3 py-1.5 text-xs tracking-[0.18em] text-teaLight/78">
                        {line.type}
                      </span>
                    </div>

                    <div className="mt-20">
                      <h3 className="font-serif text-3xl leading-tight text-paper transition duration-500 group-hover:text-teaLight sm:text-4xl">
                        {line.name}
                      </h3>
                      <p className="mt-5 text-lg leading-8 text-paper/86">
                        {line.headline}
                      </p>
                      <p className="mt-6 text-sm leading-7 text-paper/58">
                        {line.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`/lines/${line.slug}`}
                    className="relative mt-10 inline-flex w-fit items-center gap-2 border-b border-teaLight/34 pb-2 text-sm tracking-[0.14em] text-teaLight transition duration-300 hover:border-teaLight hover:text-paper"
                  >
                    查看方向
                    <ArrowRight
                      size={16}
                      strokeWidth={1.7}
                      className="transition duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-between sm:hidden">
            <p className="text-xs tracking-[0.22em] text-teaLight/72">
              {String(mobileIndex + 1).padStart(2, "0")} /{" "}
              {String(productLines.length).padStart(2, "0")}
            </p>
            <div className="flex gap-2" aria-hidden="true">
              {productLines.map((line, index) => (
                <span
                  key={line.slug}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    mobileIndex === index
                      ? "w-7 bg-teaLight/72"
                      : "w-1.5 bg-paper/18"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
