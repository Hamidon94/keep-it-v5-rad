import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footprints, Home, Dumbbell, Users, Heart, GraduationCap, Stethoscope } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Balade quotidienne",
      description: "Promenades régulières adaptées au rythme et aux besoins de votre chien",
      icon: Footprints,
      price: "à partir de 8€",
      link: "/services/dog-walking"
    },
    {
      title: "Visite à domicile",
      description: "Visites pour nourrir, jouer et s'occuper de votre chien chez vous",
      icon: Home,
      price: "à partir de 8€",
      link: "/services/drop-in-visits"
    },
    {
      title: "Sortie sportive",
      description: "Activités physiques intenses pour les chiens énergiques (course, vélo)",
      icon: Dumbbell,
      price: "à partir de 12€",
      link: "/services/dog-walking"
    },
    {
      title: "Socialisation",
      description: "Rencontres supervisées avec d'autres chiens pour améliorer la sociabilité",
      icon: Users,
      price: "à partir de 10€",
      link: "/services/doggy-daycare"
    },
    {
      title: "Balade personnalisée",
      description: "Parcours sur-mesure selon les préférences et la condition de votre chien",
      icon: Heart,
      price: "à partir de 10€",
      link: "/services/dog-walking"
    },
    {
      title: "Support éducatif léger",
      description: "Renforcement positif et exercices éducatifs pendant les promenades",
      icon: GraduationCap,
      price: "à partir de 16€",
      link: "/services/dog-walking"
    },
    {
      title: "Accompagnement vétérinaire",
      description: "Transport et accompagnement chez le vétérinaire pour les rendez-vous",
      icon: Stethoscope,
      price: "à partir de 13€",
      link: "/services/house-sitting"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            7 services adaptés aux besoins de votre compagnon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-dogwalking-primary/20 to-dogwalking-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-dogwalking-primary/30 group-hover:to-dogwalking-primary/10 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-dogwalking-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-dogwalking-primary">
                      {service.price}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <Link to={service.link}>
                  <Button variant="outline" className="w-full border-dogwalking-primary text-dogwalking-primary hover:bg-dogwalking-primary/10">
                    En savoir plus
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
