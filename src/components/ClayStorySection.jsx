import useScrollMotion from "../hooks/useScrollMotion.js";

export default function ClayStorySection() {
  const sectionRef = useScrollMotion("section");

  return (
    <section
      id="clay"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#070504] px-5 py-20 text-paper sm:px-8 lg:px-12"
    >
      <img
        src="/images/clay/clay-texture-macro.png"
        alt="紫砂泥料颗粒微距"
        className="clay-parallax motion-soft absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,4,3,0.78)_0%,rgba(6,4,3,0.42)_42%,rgba(6,4,3,0.62)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070504] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] max-w-7xl items-end">
        <div className="clay-copy motion-soft max-w-xl pb-10 lg:pb-20">
          <p className="mb-5 text-xs tracking-[0.32em] text-teaLight uppercase">
            CLAY BODY
          </p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-7xl">
            始于一抔泥
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-9 text-paper/74">
            颗粒、收缩、火候与触感，先于所有故事。泥料不是背景，是这把壶的骨相。
          </p>
        </div>
      </div>
    </section>
  );
}
