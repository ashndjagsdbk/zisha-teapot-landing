import { useMemo, useState } from "react";

const parts = [
  {
    id: "spout",
    label: "壶嘴",
    title: "出水要集中，收水要利落。",
    image: "/images/details/detail-spout.png",
    tags: ["出水路径", "口沿厚薄", "接身角度"],
    hotspot: "left-[32%] top-[43%]"
  },
  {
    id: "lid",
    label: "壶盖",
    title: "盖沿干净，开合才有手感。",
    image: "/images/details/detail-lid.png",
    tags: ["盖钮", "盖沿", "子母线"],
    hotspot: "left-[56%] top-[28%]"
  },
  {
    id: "body",
    label: "壶身",
    title: "壶身要有体量，也要收得住。",
    image: "/images/hero/hero-main-teapot.png",
    tags: ["肩线", "腹线", "泥面纹理"],
    hotspot: "left-[55%] top-[57%]"
  },
  {
    id: "inside",
    label: "内壁",
    title: "内壁干净，日用才安心。",
    image: "/images/details/detail-lid.png",
    tags: ["壶口", "内壁", "盖口结构"],
    hotspot: "left-[51%] top-[36%]"
  },
  {
    id: "seal",
    label: "底款",
    title: "底款用于核对作品来源。",
    image: "/images/hero/hero-main-teapot.png",
    tags: ["作者", "底款", "证书"],
    hotspot: "left-[58%] top-[78%]"
  }
];

export default function TeapotExplorerSection() {
  const [activeId, setActiveId] = useState("spout");
  const activePart = useMemo(
    () => parts.find((part) => part.id === activeId) ?? parts[0],
    [activeId]
  );

  return (
    <section
      id="explorer"
      className="relative overflow-hidden bg-[#070504] px-5 py-20 text-paper sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_34%,rgba(210,170,109,0.11),transparent_30%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative min-h-[560px] overflow-hidden border border-paper/[0.055] bg-black lg:min-h-[720px]">
          <img
            src="/images/hero/hero-main-teapot.png"
            alt="紫砂壶器型探索主体"
            className="absolute inset-0 h-full w-full object-cover object-[58%_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,5,4,0.16),rgba(7,5,4,0)_48%,rgba(7,5,4,0.42))]" />

          {parts.map((part) => (
            <button
              key={part.id}
              type="button"
              onClick={() => setActiveId(part.id)}
              className={`absolute ${part.hotspot} z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition ${
                activeId === part.id
                  ? "border-teaLight bg-teaLight text-ink shadow-[0_0_34px_rgba(210,170,109,0.42)]"
                  : "border-paper/34 bg-black/40 text-paper hover:border-teaLight/70 hover:bg-black/70"
              }`}
              aria-label={`查看${part.label}`}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-current" />
            </button>
          ))}

          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2">
            {parts.map((part) => (
              <button
                key={part.id}
                type="button"
                onClick={() => setActiveId(part.id)}
                className={`border px-4 py-2 text-sm transition ${
                  activeId === part.id
                    ? "border-teaLight bg-teaLight text-ink"
                    : "border-paper/[0.12] bg-black/28 text-paper/62 hover:border-paper/34"
                }`}
              >
                {part.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:pl-6">
          <p className="text-xs tracking-[0.32em] text-teaLight uppercase">
            STRUCTURE EXPLORER
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            点击部位，<br />
            看见结构。
          </h2>

          <div className="mt-10 border-y border-paper/[0.07] py-6">
            <img
              src={activePart.image}
              alt={`${activePart.label}局部特写`}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="mt-7">
              <p className="text-xs tracking-[0.28em] text-teaLight uppercase">
                {activePart.label}
              </p>
              <h3 className="mt-4 max-w-lg font-serif text-3xl leading-tight">
                {activePart.title}
              </h3>
              <div className="mt-7 flex flex-wrap gap-2">
                {activePart.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-paper/[0.10] px-3 py-1.5 text-xs text-paper/58"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
