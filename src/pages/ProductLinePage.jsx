import { ArrowLeft, ArrowRight } from "lucide-react";
import { productLines } from "../data/productLines.js";
import useReveal from "../hooks/useReveal.js";

function FineSection({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`border-t border-paper/[0.07] py-16 lg:py-20 ${className}`}>
      <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="text-xs tracking-[0.32em] text-teaLight uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-paper sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

const futureWorksByLine = {
  chuqi: [
    {
      name: "容天",
      image: "/images/lines/chuqi/chuqi-rongtian.png",
      alt: "初器系列容天紫砂壶",
    },
    {
      name: "秦权",
      image: "/images/lines/chuqi/chuqi-qinquan.png",
      alt: "初器系列秦权紫砂壶",
    },
    {
      name: "西施",
      image: "/images/lines/chuqi/chuqi-xishi.png",
      alt: "初器系列西施紫砂壶",
    },
  ],
  shouqi: [
    {
      name: "石瓢",
      image: "/images/lines/shouqi/shouqi-shipiao.png",
      alt: "守器系列石瓢紫砂壶",
    },
    {
      name: "仿古",
      image: "/images/lines/shouqi/shouqi-fanggu.png",
      alt: "守器系列仿古紫砂壶",
    },
    {
      name: "砖方",
      image: "/images/lines/shouqi/shouqi-zhuanfang.png",
      alt: "守器系列砖方紫砂壶",
    },
  ],
  shiqi: [
    {
      name: "水仙",
      image: "/images/lines/shiqi/shiqi-shuixian.png",
      alt: "饰器系列水仙紫砂壶",
    },
    {
      name: "牛饰",
      image: "/images/lines/shiqi/shiqi-niushi.png",
      alt: "饰器系列牛饰紫砂壶",
    },
    {
      name: "栀子",
      image: "/images/lines/shiqi/shiqi-zhizi.png",
      alt: "饰器系列栀子紫砂壶",
    },
  ],
};

function FutureWork({ slug }) {
  const works = futureWorksByLine[slug] ?? null;

  return (
    <FineSection eyebrow="FUTURE WORKS" title="这一系列，后续将逐件收录。">
      <div>
        <p className="max-w-2xl text-base leading-8 text-paper/66">
          每一把壶会保留泥料、器型、工艺、出水与交付信息，方便观看和确认。
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {works
            ? works.map((work) => (
                <div
                  key={work.name}
                  className="group min-h-44 border border-paper/[0.08] bg-[#0c0806]/72 p-5 transition duration-300 hover:border-teaLight/38"
                >
                  <div className="aspect-[4/3] overflow-hidden border border-paper/[0.06] bg-[#080504]">
                    <img
                      src={work.image}
                      alt={work.alt}
                      className="h-full w-full object-cover opacity-92 [filter:brightness(0.84)_contrast(1.08)_saturate(0.88)] transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-5 font-serif text-2xl text-paper/78">
                    {work.name}
                  </p>
                  <div className="my-6 h-px bg-paper/[0.08] transition duration-300 group-hover:bg-teaLight/24" />
                  <p className="max-w-[12rem] text-sm leading-7 text-paper/48">
                    泥料 / 器型 / 工艺信息整理中
                  </p>
                </div>
              ))
            : [1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group min-h-44 border border-paper/[0.08] bg-[#0c0806]/72 p-5 transition duration-300 hover:border-teaLight/38"
                >
                  <p className="font-serif text-2xl text-paper/78">即将收录</p>
                  <div className="my-6 h-px bg-paper/[0.08] transition duration-300 group-hover:bg-teaLight/24" />
                  <p className="max-w-[12rem] text-sm leading-7 text-paper/48">
                    泥料 / 器型 / 工艺信息整理中
                  </p>
                </div>
              ))}
        </div>
      </div>
    </FineSection>
  );
}

export default function ProductLinePage({ slug }) {
  const { ref, isVisible } = useReveal();
  const line = productLines.find((item) => item.slug === slug);

  if (!line) {
    return (
      <main className="min-h-screen bg-[#060403] px-5 py-20 text-paper sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs tracking-[0.32em] text-teaLight uppercase">
            LINE NOT FOUND
          </p>
          <h1 className="mt-5 font-serif text-4xl">没有找到这条作品线。</h1>
          <a
            href="/#product-lines"
            className="mt-9 inline-flex items-center gap-2 border-b border-teaLight/40 pb-2 text-sm text-teaLight"
          >
            返回作品线
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </main>
    );
  }

  const mailto = `mailto:2635222735@qq.com?subject=${encodeURIComponent(
    line.mailSubject
  )}`;
  const directions = line.directions.split("、");
  const heroImage =
    line.slug === "chuqi"
      ? "/images/lines/chuqi/chuqi-main-teapot.png"
      : "/images/clay/clay-texture-macro.png";
  const heroAlt =
    line.slug === "chuqi"
      ? "初器系列朱泥素器紫砂壶"
      : "紫砂泥料质感背景";

  return (
    <main className="min-h-screen overflow-hidden bg-[#060403] text-paper">
      <section
        ref={ref}
        className={`section-reveal ${
          isVisible ? "is-visible" : ""
        } relative min-h-[92svh] overflow-hidden px-5 pb-16 pt-7 sm:px-8 lg:px-12`}
      >
        <img
          src={heroImage}
          alt={heroAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-38 [filter:brightness(0.58)_contrast(1.14)_saturate(0.8)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#060403_0%,rgba(6,4,3,0.86)_34%,rgba(6,4,3,0.42)_66%,rgba(6,4,3,0.76)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#060403] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl flex-col">
          <header className="flex items-center justify-between gap-4">
            <a href="/" className="font-serif text-xl tracking-[0.18em]">
              栖泥
            </a>
            <nav className="flex items-center gap-5 text-sm text-paper/62">
              <a
                href="/#product-lines"
                className="transition hover:text-teaLight"
              >
                作品线
              </a>
              <a href="/#contact" className="transition hover:text-teaLight">
                咨询
              </a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[0.58fr_0.42fr]">
            <div className="max-w-3xl">
              <a
                href="/#product-lines"
                className="mb-10 inline-flex items-center gap-2 text-sm text-paper/54 transition hover:text-paper"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                返回四条作品线
              </a>
              <p className="text-xs tracking-[0.34em] text-teaLight uppercase">
                {line.eyebrow}
              </p>
              <h1 className="mt-6 font-serif text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
                {line.headline}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-paper/70">
                {line.description}
              </p>
            </div>

            <div className="hidden border-l border-paper/[0.08] pl-8 lg:block">
              <p className="font-serif text-7xl text-teaLight/46">
                {line.shortLabel}
              </p>
              <div className="mt-8 h-px bg-teaLight/22" />
              <p className="mt-8 text-xs tracking-[0.28em] text-teaLight uppercase">
                {line.name}
              </p>
              <p className="mt-4 max-w-xs text-sm leading-7 text-paper/54">
                {line.type} / 系列方向页
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <FineSection eyebrow="POSITION" title="产品线定位说明">
          <div className="max-w-3xl">
            <p className="text-lg leading-9 text-paper/72">{line.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="border border-teaLight/24 px-4 py-2 text-sm tracking-[0.18em] text-teaLight">
                {line.type}
              </span>
              <span className="border border-paper/[0.10] px-4 py-2 text-sm text-paper/56">
                {line.name}
              </span>
            </div>
          </div>
        </FineSection>

        <FineSection eyebrow="FOR WHOM" title="适合谁">
          <div className="grid gap-3 sm:grid-cols-3">
            {line.suitableFor.map((item) => (
              <div
                key={item}
                className="border border-paper/[0.08] bg-paper/[0.025] p-5 text-base leading-8 text-paper/70 transition duration-300 hover:border-teaLight/30"
              >
                {item}
              </div>
            ))}
          </div>
        </FineSection>

        <FineSection eyebrow="LOOK FOR" title="这一系列看什么">
          <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {line.watchFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border-b border-paper/[0.07] pb-5 text-base leading-8 text-paper/70"
              >
                <span className="mt-3 h-px w-8 shrink-0 bg-teaLight/42" />
                {item}
              </li>
            ))}
          </ul>
        </FineSection>

        <FineSection eyebrow="DIRECTION" title="代表器型 / 工艺方向">
          <div>
            <div className="flex flex-wrap gap-3">
              {directions.map((item) => (
                <span
                  key={item}
                  className="border border-paper/[0.11] bg-[#0c0806]/70 px-4 py-3 text-sm text-paper/68 transition duration-300 hover:border-teaLight/36 hover:text-paper"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FineSection>

        <FutureWork slug={line.slug} />

        <section className="border-t border-paper/[0.07] py-16 lg:py-24">
          <div className="relative overflow-hidden border border-paper/[0.08] bg-[#0b0705] p-7 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,rgba(210,170,109,0.10),transparent_34%)]" />
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs tracking-[0.32em] text-teaLight uppercase">
                CONSULT
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                {line.ctaText}
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-paper/62">
                可以先说明使用习惯、容量偏好与观看方向，再确认是否适合进入这一系列。
              </p>
              <a
                href={mailto}
                className="cta-link mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-teaLight px-5 text-sm font-medium text-ink transition duration-300 hover:bg-[#e3bb78]"
              >
                {line.ctaButton}
                <ArrowRight
                  className="cta-arrow"
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
