import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, ChevronRight } from "lucide-react";

const CityPagesSection = () => {
  const regions = [
    {
      name: "Île-de-France",
      cities: [
        { name: "Paris", slug: "paris", walkers: 156 },
        { name: "Boulogne-Billancourt", slug: "boulogne-billancourt", walkers: 24 },
        { name: "Neuilly-sur-Seine", slug: "neuilly-sur-seine", walkers: 18 },
        { name: "Versailles", slug: "versailles", walkers: 21 },
        { name: "Saint-Germain-en-Laye", slug: "saint-germain-en-laye", walkers: 12 },
        { name: "Vincennes", slug: "vincennes", walkers: 15 }
      ]
    },
    {
      name: "Auvergne-Rhône-Alpes",
      cities: [
        { name: "Lyon", slug: "lyon", walkers: 89 },
        { name: "Grenoble", slug: "grenoble", walkers: 34 },
        { name: "Annecy", slug: "annecy", walkers: 19 },
        { name: "Saint-Étienne", slug: "saint-etienne", walkers: 22 },
        { name: "Chambéry", slug: "chambery", walkers: 11 }
      ]
    },
    {
      name: "Provence-Alpes-Côte d'Azur",
      cities: [
        { name: "Marseille", slug: "marseille", walkers: 67 },
        { name: "Nice", slug: "nice", walkers: 45 },
        { name: "Aix-en-Provence", slug: "aix-en-provence", walkers: 28 },
        { name: "Cannes", slug: "cannes", walkers: 16 },
        { name: "Antibes", slug: "antibes", walkers: 12 }
      ]
    },
    {
      name: "Nouvelle-Aquitaine",
      cities: [
        { name: "Bordeaux", slug: "bordeaux", walkers: 54 },
        { name: "Toulouse", slug: "toulouse", walkers: 48 },
        { name: "Bayonne", slug: "bayonne", walkers: 14 },
        { name: "La Rochelle", slug: "la-rochelle", walkers: 11 }
      ]
    },
    {
      name: "Bretagne",
      cities: [
        { name: "Rennes", slug: "rennes", walkers: 32 },
        { name: "Brest", slug: "brest", walkers: 18 },
        { name: "Nantes", slug: "nantes", walkers: 41 },
        { name: "Saint-Malo", slug: "saint-malo", walkers: 9 }
      ]
    },
    {
      name: "Hauts-de-France",
      cities: [
        { name: "Lille", slug: "lille", walkers: 43 },
        { name: "Amiens", slug: "amiens", walkers: 15 },
        { name: "Valenciennes", slug: "valenciennes", walkers: 8 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-dogwalking-primary/10 text-dogwalking-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Nos zones d'intervention
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trouvez un promeneur près de chez vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DogWalking est présent dans les principales villes de France
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {regions.map((region, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={region.name} className="border rounded-lg bg-card">
                <AccordionTrigger className="px-4 hover:no-underline hover:text-dogwalking-primary">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-dogwalking-primary" />
                    <span className="font-semibold">{region.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ({region.cities.reduce((acc, city) => acc + city.walkers, 0)} promeneurs)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {region.cities.map((city, cityIndex) => (
                      <Link 
                        key={cityIndex}
                        to={`/search?city=${city.slug}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-dogwalking-primary/5 transition-colors group"
                      >
                        <span className="text-sm group-hover:text-dogwalking-primary transition-colors">
                          {city.name}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <span>{city.walkers} promeneurs</span>
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-dogwalking-primary" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityPagesSection;
