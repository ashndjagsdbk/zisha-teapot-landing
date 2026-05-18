import { useMemo, useState } from "react";

const stages = [
  {
    id: "new",
    label: "新壶",
    title: "泥面收敛，光泽很低。",
    text: "预留新壶拍摄位。用于展示未泡养前的颗粒、哑光和泥料本色。",
    image: "/images/patina-new.svg",
    fallback: "/images/hero/hero-main-teapot.png",
    imageTone: "brightness(0.86) contrast(1.08) saturate(0.8)"
  },
  {
    id: "30",
    label: "30 天",
    title: "高频接触处开始有轻微反光。",
    text: "预留 30 天状态拍摄位。重点看壶钮、壶把、壶身边缘的变化。",
    image: "/images/patina-month.svg",
    fallback: "/images/hero/hero-main-teapot.png",
    imageTone: "brightness(0.9) contrast(1.1) saturate(0.9)"
  },
  {
    id: "180",
    label: "180 天",
    title: "表面逐渐统一，触感更温润。",
    text: "预留半年状态拍摄位。适合表现茶汤、手掌和日常使用留下的稳定光泽。",
    image: "/images/patina-season.svg",
    fallback: "/images/hero/hero-main-teapot.png",
    imageTone: "brightness(0.96) contrast(1.12) saturate(1)"
  },
  {
    id: "long",
    label: "长期泡养",
    title: "光泽从泥里透出来。",
    text: "长期泡养后的壶身更沉、更润，窄光下能看到时间参与过的表面。",
    image: "/images/patina/patina-04-long-term.png",
    fallback: "/images/patina/patina-04-long-term.png",
    imageTone: "brightness(1.02) contrast(1.16) saturate(1.08)"
  }
];

export default function PatinaSection() {
  const [activeId, setActiveId] = useState("long");
  const activeStage = useMemo(
    () => stages.find((stage) => stage.id === activeId) ?? stages[3],
    [activeId]
  );

  return (
    <section
      id="patina"
      className="relative overflow-hidden bg-[#070504] px-5 py-20 text-paper sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,rgba(210,170,109,0.14),transparent_32%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
        <div>
          <p className="text-xs tracking-[0.32em] text-teaLight uppercase">
            PATINA
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            时间会参与这把壶的完成
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-paper/68">
            泡养不是让壶快速发亮，而是让茶、手掌和时间慢慢改变壶身表面。
          </p>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveId(stage.id)}
                aria-pressed={activeId === stage.id}
                className={`group border px-4 py-3 text-left text-sm transition duration-300 ${
                  activeId === stage.id
                    ? "translate-y-[-2px] border-teaLight bg-teaLight text-ink shadow-[0_0_28px_rgba(210,170,109,0.12)]"
                    : "border-paper/14 bg-paper/[0.04] text-paper/68 hover:border-teaLight/38 hover:bg-paper/[0.07] hover:text-paper"
                }`}
              >
                <span className="block text-[0.65rem] tracking-[0.24em] opacity-58 transition duration-300 group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block">{stage.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden border border-paper/10 bg-black lg:min-h-[720px]">
          <div key={activeStage.id} className="patina-panel absolute inset-0">
          <img
            src={activeStage.image}
            onError={(event) => {
              if (event.currentTarget.src.endsWith(activeStage.fallback)) return;
              event.currentTarget.src = activeStage.fallback;
            }}
            alt={`${activeStage.label}阶段壶身质感`}
            className="patina-image absolute inset-0 h-full w-full object-cover object-center"
            style={{ filter: activeStage.imageTone }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,0.04),rgba(7,5,4,0.36)_72%,rgba(7,5,4,0.72))]" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-sm tracking-[0.24em] text-teaLight uppercase">
              {activeStage.label}
            </p>
            <h3 className="mt-4 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">
              {activeStage.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-8 text-paper/70">
              {activeStage.text}
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
