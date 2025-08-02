import FaqSection from "./landingPageComponents/FaqSection";
import Footer from "./landingPageComponents/Footer";
import FeatureDisplay from "./landingPageComponents/FeatureDisplay";
import TestimonialsSection from "./landingPageComponents/Testimonials";
import HeroSection from "./landingPageComponents/HeroSection";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureDisplay />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </>
  );
}

export default LandingPage;
