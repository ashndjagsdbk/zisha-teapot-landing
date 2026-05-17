import { useState } from "react";
import SectionShell from "./SectionShell.jsx";

const specs = [
  {
    label: "泥料",
    value: "原矿泥料，颗粒与烧成状态可确认",
    note: "可先看泥面颗粒、收缩痕与窄光下的哑亮变化。"
  },
  {
    label: "容量",
    value: "约 180ml，适合日常茶席",
    note: "适合一至三人细品，不强调大容量冲泡。"
  },
  {
    label: "结构",
    value: "壶嘴、壶盖、壶口细节可查看",
    note: "重点确认出水、开合、口盖和持握是否顺手。"
  },
  {
    label: "作品",
    value: "作者、底款、证书信息可核对",
    note: "收藏前先核对底款、证书和作品来源。"
  },
  {
    label: "交付",
    value: "包装、养护说明与交付信息",
    note: "交付前确认包装、养护方式和拍摄细节。"
  },
  {
    label: "咨询",
    value: "邮箱咨询：2635222735@qq.com；微信：ggjgj424，确认泥料、容量、底款与交付信息。",
    note: "可直接发送想确认的部位或茶席使用场景。"
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
          {specs.map((spec) => (
            <button
              key={spec.label}
              type="button"
              onClick={() =>
                setOpenLabel((current) =>
                  current === spec.label ? null : spec.label
                )
              }
              className="group grid w-full grid-cols-[88px_1fr] gap-8 border-b border-paper/[0.055] py-8 text-left text-sm transition duration-300 last:border-b-0 hover:bg-paper/[0.035] sm:grid-cols-[132px_1fr] lg:cursor-default lg:py-10"
              aria-expanded={openLabel === spec.label}
            >
              <p className="text-xs tracking-[0.26em] text-teaLight/82 transition duration-300 group-hover:text-teaLight">
                {spec.label}
              </p>
              <div className="transition duration-300 group-hover:translate-x-1">
                <p className="max-w-lg text-[15px] leading-8 text-paper/66">
                  {spec.value}
                </p>
                <p
                  className={`overflow-hidden text-sm leading-7 text-paper/46 transition-all duration-300 md:hidden ${
                    openLabel === spec.label
                      ? "mt-3 max-h-24 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {spec.note}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
