import SectionShell from "./SectionShell.jsx";

const specs = [
  ["泥料", "原矿泥料，颗粒与烧成状态可看"],
  ["容量", "180ml 左右，适合日常茶席"],
  ["结构", "壶嘴、壶盖、壶口细节可查"],
  ["作品", "作者、底款、证书信息咨询核对"],
  ["交付", "包装、养护说明、售后咨询"]
];

export default function TrustSection() {
  return (
    <SectionShell
      id="trust"
      eyebrow="TRUST"
      title="像作品标签，不像促销参数。"
      intro="信任信息要克制、可核对、可追问。把购买前真正需要确认的内容放清楚。"
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
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[88px_1fr] gap-8 border-b border-paper/[0.055] py-8 text-sm last:border-b-0 sm:grid-cols-[132px_1fr] lg:py-10"
            >
              <p className="text-xs tracking-[0.26em] text-teaLight/82">
                {label}
              </p>
              <p className="max-w-lg text-[15px] leading-8 text-paper/66">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
