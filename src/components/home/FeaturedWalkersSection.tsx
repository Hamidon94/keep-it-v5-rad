import { Star, MapPin, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FeaturedWalkersSection = () => {
  const walkers = [
    {
      id: 1,
      name: "Marie L.",
      location: "Paris 15ème",
      rating: 4.9,
      reviews: 127,
      price: "12€",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      verified: true,
      badges: ["Premier secours", "50+ missions"]
    },
    {
      id: 2,
      name: "Thomas D.",
      location: "Lyon 6ème",
      rating: 4.8,
      reviews: 95,
      price: "10€",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      verified: true,
      badges: ["Super promeneur"]
    },
    {
      id: 3,
      name: "Sophie M.",
      location: "Marseille 8ème",
      rating: 5.0,
      reviews: 143,
      price: "15€",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      verified: true,
      badges: ["Premier secours", "100+ missions"]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Promeneurs recommandés
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos promeneurs les mieux notés et vérifiés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {walkers.map((walker) => (
            <Card key={walker.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={walker.image} 
                  alt={walker.name}
                  className="w-full h-64 object-cover"
                />
                {walker.verified && (
                  <div className="absolute top-3 right-3 bg-dogwalking-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Badge className="w-4 h-4" />
                    Vérifié
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {walker.name}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {walker.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-dogwalking-primary">
                      {walker.price}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      par promenade
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-bold text-foreground">{walker.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({walker.reviews} avis)
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {walker.badges.map((badge, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-dogwalking-primary/10 text-dogwalking-primary rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-dogwalking-primary to-dogwalking-primary-dark hover:opacity-90">
                  Voir le profil
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-dogwalking-primary text-dogwalking-primary hover:bg-dogwalking-primary/10"
          >
            Voir tous les promeneurs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWalkersSection;
