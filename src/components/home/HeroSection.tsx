import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community-pets.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-dogwalking-primary/10 via-dogwalking-secondary/10 to-dogwalking-primary/5">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[85vh] py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Trouver un promeneur de confiance
            <br />
            <span className="text-dogwalking-primary-light">près de chez vous</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            Réservation sécurisée • Preuves photo/vidéo • Paiement protégé
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/search">
              <Button className="w-full sm:w-auto px-8 py-4 text-lg bg-gradient-to-r from-dogwalking-primary to-dogwalking-primary-dark hover:opacity-90 shadow-lg">
                Trouver un promeneur
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-4 text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => {
                document.getElementById('map-search')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Voir la carte
            </Button>
          </div>
          
          <p className="text-sm text-white/80 max-w-lg mx-auto">
            Plus de 2 500 promeneurs vérifiés • Commission 13% • Paiement sécurisé en escrow
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
