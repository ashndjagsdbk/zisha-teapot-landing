import { ChevronDown } from "lucide-react";
import CTAButton from "./CTAButton.jsx";
import useScrollMotion from "../hooks/useScrollMotion.js";

export default function HeroSection() {
  const sectionRef = useScrollMotion("hero");

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#060403] px-5 pb-16 pt-7 text-paper sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(210,170,109,0.18),transparent_30%),linear-gradient(90deg,rgba(6,4,3,0.96)_0%,rgba(6,4,3,0.72)_31%,rgba(6,4,3,0.08)_62%,rgba(6,4,3,0.46)_100%)]" />
      <div className="hero-visual motion-soft absolute right-0 top-0 h-full w-full lg:w-[70%]">
        <img
          src="/images/hero/hero-main-teapot.png"
          alt="暗调窄光下的紫砂壶主视觉"
          className="hero-visual-image motion-soft h-full w-full object-cover object-[62%_50%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#060403_0%,rgba(6,4,3,0.62)_18%,rgba(6,4,3,0.02)_52%,rgba(6,4,3,0.42)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#060403] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-between">
        <header className="hero-in flex items-center justify-between">
          <a href="#hero" className="font-serif text-xl tracking-[0.18em]">
            壶隐
          </a>
          <a
            href="#craft"
            className="hidden border border-paper/18 px-4 py-2 text-sm text-paper/72 transition hover:border-teaLight/70 hover:text-paper sm:inline-flex"
          >
            查看工艺
          </a>
        </header>

        <div className="grid min-h-[72svh] items-center py-14 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="hero-copy-scroll motion-soft max-w-xl">
            <p className="hero-sequence hero-sequence-kicker mb-5 text-xs tracking-[0.34em] text-teaLight uppercase">
              SINGLE PIECE ZISHA TEAPOT
            </p>
            <h1 className="hero-sequence hero-sequence-title font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-8xl">
              一把壶的光
            </h1>
            <p className="hero-sequence hero-sequence-body mt-7 max-w-md text-base leading-8 text-paper/70 sm:text-lg">
              暗调窄光中的单品紫砂壶。泥料、器型、工艺和时间，只服务于器物本身。
            </p>
            <div className="hero-sequence hero-sequence-cta mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#cta">预约鉴赏</CTAButton>
              <CTAButton href="#craft" variant="secondary">
                查看工艺
              </CTAButton>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>

        <div className="hero-in flex flex-col gap-6 pb-3 text-sm text-paper/54 sm:flex-row sm:items-end sm:justify-between">
          <a
            href="#clay"
            className="inline-flex w-fit items-center gap-2 transition hover:text-paper"
          >
            向下细看
            <ChevronDown size={18} aria-hidden="true" />
          </a>
          <p className="max-w-xs leading-6">
            180ml / 原矿泥料 / 单品预约 / 适合细看后再决定收藏
          </p>
        </div>
      </div>
    </section>
  );
}
