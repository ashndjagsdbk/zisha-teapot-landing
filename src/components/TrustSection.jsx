import { useState } from "react";
import SectionShell from "./SectionShell.jsx";

const specs = [
  {
    label: "泥料",
    value: "原矿泥料，颗粒与烧成状态可确认",
    note: "可通过局部图与烧成状态进一步确认。"
  },
  {
    label: "容量",
    value: "约 180ml，适合日常茶席",
    note: "适合日常茶席，具体容量可咨询确认。"
  },
  {
    label: "结构",
    value: "壶嘴、壶盖、壶口细节可查看",
    note: "壶嘴、壶盖、壶口细节可进一步查看。"
  },
  {
    label: "作品",
    value: "作者、底款、证书信息可核对",
    note: "作者、底款、证书信息可咨询核对。"
  },
  {
    label: "交付",
    value: "包装、养护说明与交付信息",
    note: "包装、养护说明与交付信息可提前确认。"
  },
  {
    label: "咨询",
    value: "邮箱咨询：2635222735@qq.com；微信：ggjgj424，确认泥料、容量、底款与交付信息。",
    note: "可通过邮箱或微信进一步确认细节。"
  }
];

export default function TrustSection() {
  const [openLabel, setOpenLabel] = useState(null);

  return (
    <SectionShell
      id="trust"
      eyebrow="TRUST"
      title="少一点修辞，多一点可确认。"
      intro="泥料、容量、结构与交付，清楚列出，方便判断。"
      className="bg-[#0d0907]"
    >
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="overflow-hidden border border-paper/[0.06] bg-black">
          <img
            src="/images/details/detail-lid.png"
            alt="壶盖与壶口细节"
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>
        <div className="border-y border-paper/[0.065]">
          {specs.map((spec) => {
            const isOpen = openLabel === spec.label;

            return (
              <button
                key={spec.label}
                type="button"
                onClick={() =>
                  setOpenLabel((current) =>
                    current === spec.label ? null : spec.label
                  )
                }
                className={`group grid w-full grid-cols-[88px_1fr] gap-8 border-b py-8 text-left text-sm transition duration-300 last:border-b-0 hover:bg-paper/[0.03] sm:grid-cols-[132px_1fr] lg:cursor-default lg:py-10 ${
                  isOpen
                    ? "border-teaLight/20"
                    : "border-paper/[0.055] hover:border-teaLight/24"
                }`}
                aria-expanded={isOpen}
              >
                <p
                  className={`text-xs tracking-[0.26em] transition duration-300 ${
                    isOpen
                      ? "text-teaLight"
                      : "text-teaLight/82 group-hover:text-teaLight"
                  }`}
                >
                  {spec.label}
                </p>
                <div
                  className={`transition duration-300 ${
                    isOpen ? "translate-x-1" : "group-hover:translate-x-1"
                  }`}
                >
                  <p className="max-w-lg text-[15px] leading-8 text-paper/66">
                    {spec.value}
                  </p>
                  <p
                    className={`overflow-hidden text-sm leading-7 text-paper/46 transition-all duration-300 md:hidden ${
                      isOpen ? "mt-3 max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {spec.note}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
