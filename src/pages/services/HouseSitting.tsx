import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { House, Shield, Heart, Star, Clock, Check, Calendar, Camera, MessageSquare, MapPin, ChevronRight } from "lucide-react";
import houseSittingImage from "@/assets/house-sitting-care.jpg";

const HouseSitting = () => {
  const serviceDetails = {
    title: "Garde à domicile",
    minPrice: "12€",
    description: "Votre pet sitter s'installe chez vous pour une garde sur-mesure. Vos animaux restent dans leur environnement familier pendant votre absence.",
    included: [
      "Présence continue jour et nuit",
      "Repas selon vos instructions",
      "Promenades quotidiennes incluses",
      "Jeux et câlins",
      "Entretien léger de la maison",
      "Arrosage des plantes",
      "Relevé du courrier"
    ],
    pricingLogic: "Tarif par nuit. Prix minimum 12€/nuit. Options supplémentaires possibles selon les besoins."
  };

  const steps = [
    {
      phase: "Avant",
      items: [
        "Rencontre préalable avec le pet sitter",
        "Transmission des consignes et habitudes",
        "Remise des clés et informations pratiques"
      ]
    },
    {
      phase: "Pendant",
      items: [
        "Soins quotidiens selon vos instructions",
        "Preuves photo/vidéo envoyées régulièrement",
        "Messages pour vous tenir informé",
        "Contact disponible en cas de besoin"
      ]
    },
    {
      phase: "Après",
      items: [
        "Compte-rendu de la garde",
        "Restitution des clés",
        "Possibilité de laisser un avis et pourboire"
      ]
    }
  ];

  const availableWalkers = [
    {
      id: 1,
      name: "Marie D.",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviews: 47,
      location: "Paris 16e",
      price: "15€/nuit",
      verified: true,
      badges: ["Super garde", "50+ missions"]
    },
    {
      id: 2,
      name: "Pierre L.",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviews: 32,
      location: "Boulogne",
      price: "14€/nuit",
      verified: true,
      badges: ["Premiers secours"]
    },
    {
      id: 3,
      name: "Sophie B.",
      avatar: "/placeholder.svg",
      rating: 5.0,
      reviews: 28,
      location: "Neuilly",
      price: "18€/nuit",
      verified: true,
      badges: ["Premium"]
    }
  ];

  const reviews = [
    {
      id: 1,
      author: "Claire M.",
      rating: 5,
      date: "Il y a 3 jours",
      comment: "Marie s'est occupée de notre chat pendant 10 jours. Service impeccable, photos quotidiennes et maison impeccable à notre retour !",
      pet: "Minou"
    },
    {
      id: 2,
      author: "Thomas R.",
      rating: 5,
      date: "Il y a 1 semaine",
      comment: "Super garde ! Pierre a très bien géré nos deux chiens, ils étaient ravis de le retrouver chaque jour.",
      pet: "Rex & Mia"
    }
  ];

  const faqItems = [
    {
      question: "Combien de temps à l'avance dois-je réserver ?",
      answer: "Nous recommandons de réserver au moins 1 semaine à l'avance, surtout pendant les périodes de vacances. Pour les gardes longues, 2-3 semaines sont conseillées."
    },
    {
      question: "Le pet sitter dort-il vraiment chez moi ?",
      answer: "Oui, le pet sitter s'installe chez vous pour toute la durée de la garde. Il assure une présence continue jour et nuit pour le bien-être de vos animaux."
    },
    {
      question: "Que se passe-t-il en cas d'urgence ?",
      answer: "Le pet sitter a accès aux coordonnées de votre vétérinaire et peut intervenir en cas d'urgence. Notre support est disponible 7j/7 pour tout incident."
    },
    {
      question: "Comment sont protégés mes biens ?",
      answer: "Tous nos pet sitters sont vérifiés (identité, casier judiciaire, assurance RC). En cas de problème, notre assurance et médiation sont là pour vous aider."
    }
  ];

  const cities = [
    { name: "Paris", walkers: 45 },
    { name: "Lyon", walkers: 23 },
    { name: "Marseille", walkers: 18 },
    { name: "Bordeaux", walkers: 15 },
    { name: "Lille", walkers: 12 },
    { name: "Nantes", walkers: 10 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* 1. Hero avec prix minimum */}
        <section className="relative py-20 bg-gradient-to-br from-dogwalking-primary/10 to-dogwalking-secondary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${houseSittingImage})` }}
          ></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-dogwalking-primary text-white mb-4">
                  À partir de {serviceDetails.minPrice}/nuit
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {serviceDetails.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  {serviceDetails.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Link to="/services/boarding">
                    <Badge variant="outline" className="cursor-pointer hover:bg-dogwalking-primary/10">
                      Hébergement chez promeneur
                    </Badge>
                  </Link>
                  <Badge className="bg-dogwalking-primary text-white">
                    Garde à domicile
                  </Badge>
                  <Link to="/services/drop-in-visits">
                    <Badge variant="outline" className="cursor-pointer hover:bg-dogwalking-primary/10">
                      Visite à domicile
                    </Badge>
                  </Link>
                </div>

                <Link to="/search?service=house-sitting">
                  <Button size="lg" className="bg-dogwalking-primary hover:bg-dogwalking-primary/90 text-white">
                    Trouver un pet sitter
                  </Button>
                </Link>
              </div>

              <div className="hidden lg:block">
                <img 
                  src={houseSittingImage} 
                  alt="Garde à domicile" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Description détaillée + Contenu inclus */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Pourquoi choisir la garde à domicile ?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dogwalking-primary/10 flex items-center justify-center flex-shrink-0">
                      <House className="w-6 h-6 text-dogwalking-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Confort du foyer</h3>
                      <p className="text-muted-foreground text-sm">Vos animaux restent dans leur environnement familier, sans stress du transport ou de l'adaptation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dogwalking-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-dogwalking-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Sécurité de votre maison</h3>
                      <p className="text-muted-foreground text-sm">Votre domicile est surveillé et entretenu pendant votre absence.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-dogwalking-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-dogwalking-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Attention exclusive</h3>
                      <p className="text-muted-foreground text-sm">Le pet sitter se consacre entièrement à vos animaux, sans autres animaux à gérer.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Ce qui est inclus
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {serviceDetails.included.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-dogwalking-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Tarification :</strong> {serviceDetails.pricingLogic}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Étapes du service */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">
              Comment ça se passe ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="relative">
                  <div className="absolute -top-4 left-6">
                    <Badge className="bg-dogwalking-primary text-white text-lg px-4 py-1">
                      {step.phase}
                    </Badge>
                  </div>
                  <CardContent className="pt-10 pb-6 px-6">
                    <ul className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-dogwalking-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Promeneurs disponibles */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Pet sitters disponibles
              </h2>
              <Link to="/search?service=house-sitting">
                <Button variant="outline" className="border-dogwalking-primary text-dogwalking-primary">
                  Voir tous
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {availableWalkers.map((walker) => (
                <Card key={walker.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={walker.avatar} />
                        <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary text-xl">
                          {walker.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{walker.name}</h3>
                          {walker.verified && (
                            <Shield className="w-4 h-4 text-dogwalking-primary" />
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {walker.location}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{walker.rating}</span>
                          <span className="text-sm text-muted-foreground">({walker.reviews} avis)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {walker.badges.map((badge, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-dogwalking-primary">{walker.price}</span>
                      <Link to={`/sitter/${walker.id}`}>
                        <Button size="sm" className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                          Réserver
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Avis filtrés */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Avis sur ce service
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold">{review.author}</h4>
                        <p className="text-sm text-muted-foreground">Pour {review.pet} • {review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA final */}
        <section className="py-20 bg-gradient-to-r from-dogwalking-primary to-dogwalking-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partez l'esprit tranquille
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Trouvez un pet sitter de confiance pour s'occuper de vos animaux et de votre maison
            </p>
            
            <Link to="/search?service=house-sitting">
              <Button size="lg" className="bg-white text-dogwalking-primary hover:bg-white/90 text-lg px-8">
                Réserver maintenant
              </Button>
            </Link>
          </div>
        </section>

        {/* 7. FAQ spécifique */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Questions fréquentes sur la garde à domicile
            </h2>
            
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border rounded-lg px-4 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-dogwalking-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 8. City accordion (SEO) */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Garde à domicile dans votre ville
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cities.map((city, index) => (
                <Link 
                  key={index}
                  to={`/search?service=house-sitting&city=${city.name.toLowerCase()}`}
                  className="flex items-center justify-between p-4 bg-card rounded-lg border hover:border-dogwalking-primary transition-colors group"
                >
                  <div>
                    <p className="font-medium group-hover:text-dogwalking-primary">{city.name}</p>
                    <p className="text-xs text-muted-foreground">{city.walkers} pet sitters</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-dogwalking-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HouseSitting;
