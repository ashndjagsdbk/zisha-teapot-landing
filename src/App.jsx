import { lazy, Suspense } from "react";
import ClayStorySection from "./components/ClayStorySection.jsx";
import CraftProcessSection from "./components/CraftProcessSection.jsx";
import CTASection from "./components/CTASection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import PatinaSection from "./components/PatinaSection.jsx";
import ProductLinesSection from "./components/ProductLinesSection.jsx";
import StickyCTA from "./components/StickyCTA.jsx";
import TeapotExplorerSection from "./components/TeapotExplorerSection.jsx";
import TrustSection from "./components/TrustSection.jsx";
import ProductLinePage from "./pages/ProductLinePage.jsx";

const ModelViewerSection = lazy(() => import("./components/ModelViewerSection.jsx"));

function getLineSlug() {
  if (typeof window === "undefined") return null;

  const match = window.location.pathname.match(/^\/lines\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

export default function App() {
  const lineSlug = getLineSlug();

  if (lineSlug) {
    return <ProductLinePage slug={lineSlug} />;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-paper">
      <StickyCTA />
      <HeroSection />
      <ClayStorySection />
      <ProductLinesSection />
      <TeapotExplorerSection />
      <Suspense fallback={null}>
        <ModelViewerSection />
      </Suspense>
      <CraftProcessSection />
      <PatinaSection />
      <TrustSection />
      <CTASection />
    </main>
  );
}
