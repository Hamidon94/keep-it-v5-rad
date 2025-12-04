import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQPreviewSection = () => {
  const faqItems = [
    {
      question: "Comment fonctionne DogWalking ?",
      answer: "DogWalking met en relation les propriétaires d'animaux avec des promeneurs professionnels vérifiés. Recherchez par zone, consultez les profils et avis, réservez et payez de façon sécurisée. Vous recevez des preuves photo/vidéo pendant chaque service."
    },
    {
      question: "Comment les promeneurs sont-ils vérifiés ?",
      answer: "Tous nos promeneurs passent par un processus de vérification rigoureux : pièce d'identité, extrait de casier judiciaire ou attestation de non-antécédent, et attestation d'assurance RC obligatoire."
    },
    {
      question: "Comment fonctionne le paiement ?",
      answer: "Le paiement est sécurisé via notre plateforme avec un système escrow. Le montant est bloqué lors de la réservation et libéré au promeneur uniquement après réception des preuves (photo/vidéo + message). Commission : 13%."
    },
    {
      question: "Puis-je annuler une réservation ?",
      answer: "Oui, les conditions d'annulation varient selon le délai : gratuit jusqu'à 48h avant, 50% de frais entre 24h et 48h, 100% moins de 24h avant le service."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-dogwalking-primary/10 text-dogwalking-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Questions fréquentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vous avez des questions ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Trouvez rapidement les réponses aux questions les plus courantes
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 mb-8">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="border rounded-lg px-4 bg-card shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline hover:text-dogwalking-primary font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <Link to="/faq">
            <Button variant="outline" className="border-dogwalking-primary text-dogwalking-primary hover:bg-dogwalking-primary/10">
              Voir toutes les questions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQPreviewSection;
