import CTAButton from "./CTAButton.jsx";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#060403] px-5 py-24 text-paper sm:px-8 lg:px-12 lg:py-32"
    >
      <img
        src="/images/brand/qini-logo-clay-bg.png"
        alt="栖泥品牌印记背景"
        className="cta-bg motion-soft absolute inset-y-0 right-0 h-full w-full object-cover object-center opacity-24 [filter:brightness(0.65)_contrast(1.08)_saturate(0.85)] sm:opacity-34 lg:w-[62%] lg:object-[54%_50%] lg:opacity-52"
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
            如需了解泥料、容量、底款、证书或定制信息，可以先发邮件咨询。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="mailto:2635222735@qq.com?subject=紫砂壶咨询">
              邮件咨询
            </CTAButton>
            <CTAButton href="#craft" variant="secondary">
              查看工艺
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
