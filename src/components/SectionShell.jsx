import useReveal from "../hooks/useReveal.js";

export default function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  className = "",
  headerClassName = "",
  children
}) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`section-reveal ${isVisible ? "is-visible" : ""} relative overflow-hidden bg-ink px-5 py-20 text-paper sm:px-8 lg:px-12 lg:py-28 ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className={`mb-10 max-w-3xl lg:mb-14 ${headerClassName}`}>
            {eyebrow && (
              <p className="mb-4 text-xs tracking-[0.32em] text-teaLight uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 max-w-2xl text-base leading-8 text-paper/68 sm:text-lg">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
