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
  return (
    <SectionShell
      id="craft"
      eyebrow="PROCESS"
      title="工艺不靠堆词，靠每个动作站得住。"
      intro="泥料、重心、线条与出水，决定一把壶是否真正好用。"
      className="bg-[#100b08]"
    >
      <div className="-mx-5 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        <div className="grid min-w-[1080px] grid-cols-4 border-y border-paper/[0.07] lg:min-w-0">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`relative min-h-[620px] overflow-hidden border-paper/[0.06] bg-[#070504] ${
                index > 0 ? "border-l" : ""
              }`}
            >
              <img
                src={step.image}
                alt={`${step.title}工艺画面`}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ filter: "brightness(0.65) contrast(1.1) saturate(0.8)" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,4,0.04),rgba(7,5,4,0.28)_42%,rgba(7,5,4,0.88)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-paper/[0.06]" />

              <div className="relative z-10 flex min-h-[620px] flex-col justify-end p-7">
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
      </div>
    </SectionShell>
  );
}
