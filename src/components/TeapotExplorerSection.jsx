import { useMemo, useState } from "react";

const parts = [
  {
    id: "spout",
    label: "壶嘴",
    title: "出水要集中，收水要利落。",
    image: "/images/details/detail-spout.png",
    tip: "看出水",
    inspection: "重点看壶嘴接身角度、口沿厚薄，以及出水是否形成稳定水束。",
    tags: ["出水路径", "口沿厚薄", "接身角度"],
    imagePosition: "52% 48%",
    imageTone: "brightness(0.82) contrast(1.16) saturate(0.86)",
    hotspot: "left-[32%] top-[43%]"
  },
  {
    id: "lid",
    label: "壶盖",
    title: "盖沿干净，开合才有手感。",
    image: "/images/details/detail-lid.png",
    tip: "看密合",
    inspection: "重点看盖墙、盖沿与壶口的贴合，开合是否顺畅、声音是否干净。",
    tags: ["盖钮", "盖沿", "子母线"],
    imagePosition: "50% 42%",
    imageTone: "brightness(0.78) contrast(1.18) saturate(0.82)",
    hotspot: "left-[56%] top-[28%]"
  },
  {
    id: "body",
    label: "壶身",
    title: "壶身要有体量，也要收得住。",
    image: "/images/hero/hero-main-teapot.png",
    tip: "看泥料",
    inspection: "重点看泥面颗粒、肩腹线的收放，以及窄光下壶身是否稳住重心。",
    tags: ["肩线", "腹线", "泥面纹理"],
    imagePosition: "58% 52%",
    imageTone: "brightness(0.7) contrast(1.14) saturate(0.78)",
    hotspot: "left-[55%] top-[57%]"
  },
  {
    id: "inside",
    label: "内壁",
    title: "内壁干净，日用才安心。",
    image: "/images/details/detail-lid.png",
    tip: "看修整",
    inspection: "重点看壶口内侧、内壁修整和盖口结构，确认日常清洁与使用的安心感。",
    tags: ["壶口", "内壁", "盖口结构"],
    imagePosition: "48% 58%",
    imageTone: "brightness(0.68) contrast(1.22) saturate(0.76)",
    hotspot: "left-[51%] top-[36%]"
  },
  {
    id: "seal",
    label: "底款",
    title: "底款用于核对作品来源。",
    image: "/images/hero/hero-main-teapot.png",
    tip: "看出处",
    inspection: "重点核对底款、作者与证书信息，让作品来源在交付前可以被确认。",
    tags: ["作者", "底款", "证书"],
    imagePosition: "54% 72%",
    imageTone: "brightness(0.62) contrast(1.18) saturate(0.72)",
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
              aria-pressed={activeId === part.id}
              className={`group absolute ${part.hotspot} z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-teaLight ${
                activeId === part.id
                  ? "hotspot-active border-teaLight bg-teaLight text-ink shadow-[0_0_34px_rgba(210,170,109,0.32)]"
                  : "border-paper/34 bg-black/40 text-paper opacity-30 hover:scale-105 hover:border-teaLight/70 hover:bg-black/70 hover:opacity-100"
              }`}
              aria-label={`查看${part.label}`}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-current" />
              <span
                className={`pointer-events-none absolute left-1/2 top-[-2.65rem] -translate-x-1/2 whitespace-nowrap border border-teaLight/30 bg-black/72 px-3 py-1.5 text-xs text-paper/76 backdrop-blur transition duration-300 group-hover:translate-y-[-2px] group-hover:opacity-100 ${
                  activeId === part.id
                    ? "translate-y-[-2px] opacity-100"
                    : "opacity-0"
                }`}
              >
                {part.tip}
              </span>
            </button>
          ))}

          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2">
            {parts.map((part) => (
              <button
                key={part.id}
                type="button"
                onClick={() => setActiveId(part.id)}
                className={`border px-4 py-2 text-sm transition duration-300 ${
                  activeId === part.id
                    ? "translate-y-[-2px] border-teaLight bg-teaLight text-ink"
                    : "border-paper/[0.12] bg-black/28 text-paper/62 hover:border-teaLight/42 hover:text-paper"
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

          <div
            key={activePart.id}
            className="part-detail-panel mt-10 border-y border-paper/[0.07] py-6"
          >
            <img
              src={activePart.image}
              alt={`${activePart.label}局部特写`}
              className="part-detail-image aspect-[4/3] w-full object-cover"
              style={{
                objectPosition: activePart.imagePosition,
                filter: activePart.imageTone
              }}
            />
            <div className="mt-7">
              <p className="text-xs tracking-[0.28em] text-teaLight uppercase">
                {activePart.label}
              </p>
              <h3 className="mt-4 max-w-lg font-serif text-3xl leading-tight">
                {activePart.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-paper/58">
                {activePart.inspection}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {activePart.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="part-tag border border-paper/[0.10] px-3 py-1.5 text-xs text-paper/58"
                    style={{ animationDelay: `${140 + index * 90}ms` }}
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
