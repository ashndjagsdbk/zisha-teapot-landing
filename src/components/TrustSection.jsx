import SectionShell from "./SectionShell.jsx";

const specs = [
  ["泥料", "原矿泥料，颗粒与烧成状态可确认"],
  ["容量", "约 180ml，适合日常茶席"],
  ["结构", "壶嘴、壶盖、壶口细节可查看"],
  ["作品", "作者、底款、证书信息可核对"],
  ["交付", "包装、养护说明与售后咨询"]
];

export default function TrustSection() {
  return (
    <SectionShell
      id="trust"
      eyebrow="TRUST"
      title="少一点修辞，多一点可确认。"
      intro="泥料、容量、结构、交付与售后，清楚列出，方便判断。"
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
