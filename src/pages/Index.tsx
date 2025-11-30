import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import SecuritySection from "@/components/home/SecuritySection";
import MapSearchSection from "@/components/home/MapSearchSection";
import FeaturedWalkersSection from "@/components/home/FeaturedWalkersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ServicesSection />
        <SecuritySection />
        <div id="map-search">
          <MapSearchSection />
        </div>
        <FeaturedWalkersSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
