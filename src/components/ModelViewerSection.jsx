import { useEffect, useRef, useState } from "react";
import "@google/model-viewer/dist/model-viewer.min.js";
import SectionShell from "./SectionShell.jsx";

const MODEL_SRC = "/models/qini-teapot-web.glb";

export default function ModelViewerSection() {
  const modelViewerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [allowMotion, setAllowMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setAllowMotion(!media.matches);

    syncMotion();
    media.addEventListener("change", syncMotion);

    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return undefined;

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleModelVisibility = (event) => {
      if (event.detail?.visible) {
        setIsLoading(false);
      }
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    modelViewer.addEventListener("load", handleLoad);
    modelViewer.addEventListener("model-visibility", handleModelVisibility);
    modelViewer.addEventListener("error", handleError);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
      modelViewer.removeEventListener("model-visibility", handleModelVisibility);
      modelViewer.removeEventListener("error", handleError);
    };
  }, []);

  const shouldAutoRotate = allowMotion && !isPaused && !hasError;

  return (
    <SectionShell
      id="model-viewer"
      eyebrow="REALTIME OBJECT VIEW"
      title="三维看壶，不只看一面。"
      intro="拖动壶身，查看壶嘴、壶盖、壶把与整体比例。器物是否成立，往往藏在转动之间。"
      className="bg-[#090604]"
      headerClassName="max-w-4xl"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-stretch">
        <div
          data-model-stage
          className="relative min-h-[380px] overflow-hidden border border-paper/[0.08] bg-[linear-gradient(145deg,#0a0604_0%,#1a100b_48%,#080504_100%)] sm:min-h-[500px] lg:min-h-[620px]"
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(210,170,109,0.13),transparent_29%),linear-gradient(180deg,rgba(244,239,231,0.035),transparent_34%,rgba(0,0,0,0.32))]" />
          <div className="pointer-events-none absolute inset-x-[14%] bottom-[13%] h-16 bg-[radial-gradient(ellipse_at_center,rgba(210,170,109,0.18),rgba(70,42,28,0.16)_42%,transparent_70%)] blur-xl" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(210,170,109,0.32),transparent)]" />
          <div className="pointer-events-none absolute inset-x-8 bottom-8 h-px bg-paper/[0.06]" />

          {!hasError && (
            <model-viewer
              ref={modelViewerRef}
              src={MODEL_SRC}
              camera-controls
              auto-rotate={shouldAutoRotate ? "" : undefined}
              auto-rotate-delay="3000"
              rotation-per-second="8deg"
              camera-orbit="35deg 68deg 105%"
              min-camera-orbit="auto auto 80%"
              max-camera-orbit="auto auto 160%"
              exposure="0.7"
              shadow-intensity="0.35"
              environment-image="neutral"
              loading="lazy"
              reveal="auto"
              interaction-prompt="auto"
              touch-action="pan-y"
              aria-label="栖泥紫砂壶三维模型"
              className="relative z-10 h-[380px] w-full sm:h-[500px] lg:h-[620px]"
              style={{ backgroundColor: "transparent", "--poster-color": "transparent" }}
            />
          )}

          {isLoading && !hasError && (
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <p className="border border-teaLight/20 bg-black/36 px-5 py-3 text-xs tracking-[0.24em] text-teaLight backdrop-blur">
                正在加载器物
              </p>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
              <p className="max-w-xs border border-paper/[0.08] bg-black/34 px-6 py-5 text-sm leading-7 text-paper/64 backdrop-blur">
                三维模型暂未加载，可继续查看结构图
              </p>
            </div>
          )}

          <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between gap-4 text-xs tracking-[0.22em] text-paper/46">
            <span>拖动查看器型</span>
            <span className="hidden text-teaLight/72 sm:inline">ROTATE / ZOOM</span>
          </div>
        </div>

        <aside className="border-y border-paper/[0.07] py-6 lg:flex lg:flex-col lg:justify-end lg:border-y-0 lg:border-l lg:py-0 lg:pl-8">
          <p className="text-xs tracking-[0.28em] text-teaLight uppercase">
            OBJECT CHECK
          </p>
          <div className="mt-6 space-y-5 text-sm leading-7 text-paper/58">
            <p>转到壶嘴，看出水方向与壶身的接合。</p>
            <p>放近壶盖，观察盖沿、钮与口沿的比例。</p>
            <p>看壶把回到整体重心，确认握持与器型是否相互支撑。</p>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
