import { Search, Calendar, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Choisir sur la carte",
      description: "Parcourez notre carte interactive et sélectionnez le promeneur idéal près de chez vous"
    },
    {
      icon: Calendar,
      title: "2. Réserver simplement",
      description: "Utilisez notre formulaire intelligent pour personnaliser votre réservation selon vos besoins"
    },
    {
      icon: CheckCircle,
      title: "3. Recevoir les preuves",
      description: "Suivez la mission en temps réel avec photos, vidéos et messages de votre promeneur"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réserver un promeneur de confiance n'a jamais été aussi simple
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-dogwalking-primary to-dogwalking-primary-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-gradient-to-r from-dogwalking-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
