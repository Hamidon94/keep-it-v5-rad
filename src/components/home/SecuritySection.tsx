import { Shield, CheckCircle, CreditCard, HeadphonesIcon } from "lucide-react";

const SecuritySection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Vérification d'identité",
      description: "Tous nos promeneurs sont vérifiés (CNI, casier judiciaire, assurance RC)"
    },
    {
      icon: CheckCircle,
      title: "Preuve obligatoire",
      description: "Recevez photos, vidéos et messages pendant chaque mission"
    },
    {
      icon: CreditCard,
      title: "Paiement sécurisé",
      description: "Vos paiements sont protégés et débloqués uniquement après preuve de service"
    },
    {
      icon: HeadphonesIcon,
      title: "Support & modération",
      description: "Notre équipe est disponible pour vous accompagner et résoudre tout litige"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dogwalking-primary/5 via-background to-dogwalking-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sécurité & Garanties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Votre tranquillité d'esprit est notre priorité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-dogwalking-primary/20 to-dogwalking-primary/5 flex items-center justify-center group-hover:from-dogwalking-primary/30 group-hover:to-dogwalking-primary/10 transition-all duration-300">
                  <guarantee.icon className="w-8 h-8 text-dogwalking-primary" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {guarantee.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
