import { CalendarDays, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const cta = document.getElementById("cta");
    if (!cta) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(entry.isIntersecting);
      },
      { threshold: 0.28 }
    );

    observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-50 border border-paper/14 bg-black/72 p-2 text-paper shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur transition duration-500 md:inset-x-auto md:right-6 md:top-6 md:bottom-auto ${
        isHidden
          ? "pointer-events-none translate-y-3 opacity-0 md:translate-x-3 md:translate-y-0"
          : "translate-y-0 opacity-100 md:translate-x-0"
      }`}
    >
      <div className="grid grid-cols-2 gap-2 md:flex">
        <a
          href="#cta"
          className="inline-flex items-center justify-center gap-2 bg-teaLight px-4 py-3 text-sm font-medium text-ink transition hover:bg-[#e3bb78]"
        >
          <CalendarDays size={16} aria-hidden="true" />
          预约鉴赏
        </a>
        <a
          href="#cta"
          className="inline-flex items-center justify-center gap-2 border border-paper/18 px-4 py-3 text-sm font-medium text-paper/82 transition hover:border-teaLight/60 hover:text-paper"
        >
          <MessageCircle size={16} aria-hidden="true" />
          <span className="md:hidden">咨询</span>
          <span className="hidden md:inline">咨询这把壶</span>
        </a>
      </div>
    </div>
  );
}
