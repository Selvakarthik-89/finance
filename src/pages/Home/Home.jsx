import AboutSection from "./components/AboutSection";
import ConsultationCta from "./components/ConsultationCta";
import HeroSection from "./components/HeroSection";
import InsightsSection from "./components/InsightsSection";
import MetricsSection from "./components/MetricsSection";
import ServicesSection from "./components/ServicesSection";
import TrustBar from "./components/TrustBar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <MetricsSection />
      <AboutSection />
      <InsightsSection />
      <ConsultationCta />
    </main>
  );
}
