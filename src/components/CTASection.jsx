import CTAButton from "./CTAButton.jsx";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#060403] px-5 py-24 text-paper sm:px-8 lg:px-12 lg:py-32"
    >
      <img
        src="/images/hero/hero-main-teapot.png"
        alt="紫砂壶咨询预约背景"
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-[66%_50%] opacity-70 lg:w-[62%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#060403_0%,rgba(6,4,3,0.92)_38%,rgba(6,4,3,0.28)_72%,rgba(6,4,3,0.68)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.32em] text-teaLight uppercase">
            CONSULT
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            看清细节，再决定收藏。
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-paper/68">
            预约线上鉴赏，查看壶嘴、壶盖、泥料微距、泡养光泽与作品信息。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="mailto:hello@example.com">预约鉴赏</CTAButton>
            <CTAButton href="mailto:hello@example.com" variant="secondary">
              咨询这把壶
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
