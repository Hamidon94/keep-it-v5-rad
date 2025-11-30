import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

const MapSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trouvez un promeneur près de chez vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recherchez par adresse ou code postal pour découvrir les promeneurs disponibles dans votre secteur
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Entrez votre adresse ou code postal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button 
              type="submit" 
              className="h-12 px-8 bg-gradient-to-r from-dogwalking-primary to-dogwalking-primary-dark hover:opacity-90"
            >
              <Search className="w-5 h-5 mr-2" />
              Rechercher
            </Button>
          </div>
        </form>

        {/* Map Placeholder */}
        <div className="bg-muted/30 border-2 border-dashed border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="aspect-[16/9] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground font-medium">
                Carte interactive à intégrer
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Affichage des promeneurs disponibles par secteur
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Cliquez sur un marqueur pour voir le profil complet, les tarifs et réserver
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSearchSection;
