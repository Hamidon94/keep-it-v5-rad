import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import SecuritySection from "@/components/home/SecuritySection";
import MapSearchSection from "@/components/home/MapSearchSection";
import FeaturedWalkersSection from "@/components/home/FeaturedWalkersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQPreviewSection from "@/components/home/FAQPreviewSection";
import CityPagesSection from "@/components/home/CityPagesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        
        {/* 2. 3 étapes animées */}
        <HowItWorksSection />
        
        {/* 3. Nos 6 services */}
        <ServicesSection />
        
        {/* 4. Sécurité & Garanties */}
        <SecuritySection />
        
        {/* 5. Recherche rapide + Carte */}
        <div id="map-search">
          <MapSearchSection />
        </div>
        
        {/* 6. Promeneurs mis en avant */}
        <FeaturedWalkersSection />
        
        {/* 7. Avis clients */}
        <TestimonialsSection />
        
        {/* 8. FAQ (extraits) */}
        <FAQPreviewSection />
        
        {/* 9. Zones / Villes (SEO local) */}
        <CityPagesSection />
      </main>
      
      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
