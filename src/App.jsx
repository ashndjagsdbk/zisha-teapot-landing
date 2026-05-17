import ClayStorySection from "./components/ClayStorySection.jsx";
import CraftProcessSection from "./components/CraftProcessSection.jsx";
import CTASection from "./components/CTASection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import PatinaSection from "./components/PatinaSection.jsx";
import StickyCTA from "./components/StickyCTA.jsx";
import TeapotExplorerSection from "./components/TeapotExplorerSection.jsx";
import TrustSection from "./components/TrustSection.jsx";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-paper">
      <StickyCTA />
      <HeroSection />
      <ClayStorySection />
      <TeapotExplorerSection />
      <CraftProcessSection />
      <PatinaSection />
      <TrustSection />
      <CTASection />
    </main>
  );
}
