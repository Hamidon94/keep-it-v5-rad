import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, Shield, CreditCard, Calendar, PawPrint, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      id: "general",
      title: "Questions générales",
      icon: HelpCircle,
      questions: [
        {
          question: "Comment fonctionne DogWalking ?",
          answer: "DogWalking met en relation les propriétaires d'animaux avec des promeneurs professionnels vérifiés. Vous pouvez rechercher un promeneur par zone géographique, consulter son profil et ses avis, puis réserver directement via la plateforme. Le paiement est sécurisé et vous recevez des preuves (photos/vidéos) pendant chaque service."
        },
        {
          question: "Comment trouver un promeneur près de chez moi ?",
          answer: "Utilisez notre carte interactive sur la page de recherche. Entrez votre adresse ou code postal et vous verrez tous les promeneurs disponibles dans votre secteur. Vous pouvez filtrer par service, tarif, disponibilités et notes."
        },
        {
          question: "Quels types de services proposez-vous ?",
          answer: "Nous proposons 7 services : Promenade quotidienne (dès 13€), Visite à domicile (dès 12€), Sortie sportive (dès 18€), Socialisation canine (dès 15€), Promenade personnalisée (sur devis), Soutien éducatif léger (dès 20€), et Accompagnement vétérinaire (dès 25€)."
        }
      ]
    },
    {
      id: "security",
      title: "Sécurité & Vérification",
      icon: Shield,
      questions: [
        {
          question: "Comment les promeneurs sont-ils vérifiés ?",
          answer: "Tous nos promeneurs passent par un processus de vérification rigoureux : vérification d'identité (CNI/passeport), extrait de casier judiciaire, attestation d'assurance RC professionnelle obligatoire. Leur profil affiche un badge 'Vérifié' une fois toutes les vérifications complétées."
        },
        {
          question: "Comment puis-je suivre mon animal pendant une promenade ?",
          answer: "Nos promeneurs envoient des preuves pendant le service : photos, vidéos et messages. Vous recevez des notifications en temps réel et pouvez voir toutes les preuves dans votre espace client. Note : nous ne proposons pas de suivi GPS en temps réel."
        },
        {
          question: "Que se passe-t-il en cas de problème pendant un service ?",
          answer: "Chaque promeneur dispose d'une assurance RC professionnelle. En cas d'incident, contactez immédiatement notre service client disponible 7j/7. Nous avons une équipe dédiée pour gérer les urgences et les réclamations."
        }
      ]
    },
    {
      id: "payment",
      title: "Paiement & Tarifs",
      icon: CreditCard,
      questions: [
        {
          question: "Comment fonctionne le paiement ?",
          answer: "Le paiement est sécurisé via notre plateforme. Lors de la réservation, le montant est bloqué (système escrow). Il n'est libéré au promeneur qu'une fois le service terminé et les preuves validées. Vous pouvez également laisser un pourboire si vous êtes satisfait."
        },
        {
          question: "Quels sont les tarifs des services ?",
          answer: "Les tarifs minimum sont : Promenade quotidienne 13€/h, Visite à domicile 12€, Sortie sportive 18€/h, Socialisation 15€/h, Soutien éducatif 20€/h, Accompagnement véto 25€. Chaque promeneur fixe ses propres tarifs au-dessus de ces minimums."
        },
        {
          question: "Puis-je annuler une réservation ?",
          answer: "Oui, les conditions d'annulation varient selon le délai : gratuit jusqu'à 48h avant, 50% de frais entre 24h et 48h, 100% moins de 24h avant le service. En cas de force majeure, contactez-nous pour étudier votre situation."
        }
      ]
    },
    {
      id: "booking",
      title: "Réservations",
      icon: Calendar,
      questions: [
        {
          question: "Comment réserver un service ?",
          answer: "1. Recherchez un promeneur sur notre carte, 2. Consultez son profil et ses avis, 3. Sélectionnez le service et les dates, 4. Renseignez les informations de votre animal, 5. Procédez au paiement sécurisé. Le promeneur a 24h pour accepter votre demande."
        },
        {
          question: "Puis-je réserver plusieurs services à l'avance ?",
          answer: "Oui, vous pouvez réserver des promenades récurrentes (hebdomadaires, quotidiennes) ou programmer plusieurs services à l'avance. Vous bénéficiez de tarifs préférentiels pour les réservations régulières."
        },
        {
          question: "Comment modifier une réservation ?",
          answer: "Depuis votre tableau de bord, accédez à 'Mes réservations' et cliquez sur 'Modifier'. Les modifications sont possibles jusqu'à 24h avant le service sous réserve de disponibilité du promeneur."
        }
      ]
    },
    {
      id: "pets",
      title: "Mon animal",
      icon: PawPrint,
      questions: [
        {
          question: "Quels animaux peuvent bénéficier des services ?",
          answer: "Nos services sont principalement destinés aux chiens de toutes races et tailles. Certains promeneurs acceptent également les chats pour les visites à domicile. Consultez le profil de chaque promeneur pour voir les types d'animaux acceptés."
        },
        {
          question: "Mon chien a des besoins particuliers, est-ce un problème ?",
          answer: "Pas du tout ! Lors de la création du profil de votre animal, vous pouvez indiquer ses besoins spéciaux, allergies, médicaments, comportement. Le promeneur aura accès à ces informations pour adapter le service."
        },
        {
          question: "Puis-je faire promener plusieurs chiens ensemble ?",
          answer: "Oui, vous pouvez réserver une promenade pour plusieurs chiens. Des frais supplémentaires s'appliquent généralement (environ 5€ par chien supplémentaire). Vérifiez les conditions de chaque promeneur."
        }
      ]
    },
    {
      id: "sitter",
      title: "Devenir promeneur",
      icon: MessageCircle,
      questions: [
        {
          question: "Comment devenir promeneur sur DogWalking ?",
          answer: "1. Inscrivez-vous en tant que promeneur, 2. Complétez votre profil avec photo et description, 3. Téléchargez vos documents (CNI, casier judiciaire, assurance RC), 4. Définissez vos services et tarifs, 5. Une fois vérifié, votre profil sera visible et vous pourrez recevoir des demandes."
        },
        {
          question: "Combien puis-je gagner comme promeneur ?",
          answer: "Vos revenus dépendent de vos tarifs, disponibilités et zone géographique. En moyenne, un promeneur actif gagne entre 500€ et 1500€/mois. La plateforme prélève une commission de 13% sur chaque service."
        },
        {
          question: "Quels documents dois-je fournir ?",
          answer: "Documents obligatoires : pièce d'identité valide, extrait de casier judiciaire (moins de 3 mois), attestation d'assurance RC professionnelle. Documents recommandés : diplôme/formation animalière, références professionnelles."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-dogwalking-primary/10 to-dogwalking-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Trouvez rapidement les réponses à vos questions sur DogWalking
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-full border-2 focus:border-dogwalking-primary"
              />
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Quick Links */}
            {!searchQuery && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {faqCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="flex flex-col items-center p-4 rounded-xl bg-card hover:bg-dogwalking-primary/5 transition-colors border hover:border-dogwalking-primary"
                  >
                    <category.icon className="w-8 h-8 text-dogwalking-primary mb-2" />
                    <span className="text-sm font-medium text-center">{category.title}</span>
                  </a>
                ))}
              </div>
            )}

            {/* FAQ Accordions */}
            <div className="space-y-8">
              {(searchQuery ? filteredCategories : faqCategories).map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-6 h-6 text-dogwalking-primary" />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.id}-${index}`}
                        className="border rounded-lg px-4 bg-card"
                      >
                        <AccordionTrigger className="text-left hover:no-underline hover:text-dogwalking-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* No results */}
            {searchQuery && filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucun résultat trouvé</h3>
                <p className="text-muted-foreground">
                  Essayez avec d'autres mots-clés ou contactez notre support.
                </p>
              </div>
            )}

            {/* Contact CTA */}
            <div className="mt-16 text-center p-8 bg-dogwalking-primary/5 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h3>
              <p className="text-muted-foreground mb-6">Notre équipe est là pour vous aider 7j/7</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-dogwalking-primary text-white rounded-full hover:bg-dogwalking-primary/90 transition-colors">
                  Contacter le support
                </a>
                <a href="/help" className="inline-flex items-center justify-center px-6 py-3 border border-dogwalking-primary text-dogwalking-primary rounded-full hover:bg-dogwalking-primary/5 transition-colors">
                  Centre d'aide
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;