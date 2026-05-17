import { ArrowRight } from "lucide-react";

export default function CTAButton({
  children,
  href = "#cta",
  variant = "primary",
  className = ""
}) {
  const styles =
    variant === "primary"
      ? "bg-teaLight text-ink hover:bg-[#e3bb78]"
      : "border border-paper/24 bg-black/10 text-paper hover:border-teaLight/70 hover:bg-paper/8";

  return (
    <a
      href={href}
      className={`cta-link inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 text-sm font-medium transition duration-300 ${styles} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight
        className="cta-arrow"
        size={17}
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </a>
  );
}
