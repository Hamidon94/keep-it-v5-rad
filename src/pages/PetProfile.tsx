import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Camera, PawPrint, Heart, AlertTriangle, Stethoscope, Activity, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";

const PetProfile = () => {
  const { id } = useParams();
  const isNew = id === "add";

  const [pet, setPet] = useState({
    name: isNew ? "" : "Max",
    type: isNew ? "" : "dog",
    breed: isNew ? "" : "Golden Retriever",
    age: isNew ? "" : "3",
    weight: isNew ? "" : "32",
    gender: isNew ? "" : "male",
    photo: "/placeholder.svg",
    bio: isNew ? "" : "Max est un Golden Retriever très affectueux et joueur. Il adore les longues promenades et jouer à la balle.",
    temperament: isNew ? "" : "friendly",
    exerciseLevel: isNew ? "" : "high",
    vaccinations: ["rage", "maladie-carre", "leptospirose"],
    allergies: isNew ? "" : "Aucune allergie connue",
    medicalHistory: isNew ? "" : "Stérilisé en 2022. RAS.",
    dietaryNeeds: isNew ? "" : "Croquettes premium, 2 repas par jour",
    specialNeeds: isNew ? "" : "Aime beaucoup jouer à la balle",
    vetName: isNew ? "" : "Dr. Martin",
    vetPhone: isNew ? "" : "01 23 45 67 89"
  });

  const handleSave = () => {
    toast.success(isNew ? "Animal ajouté avec succès" : "Profil mis à jour avec succès");
  };

  const handleDelete = () => {
    toast.error("Êtes-vous sûr de vouloir supprimer ce profil ?");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/dashboard?tab=pets" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Retour à mes animaux
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {isNew ? "Ajouter un animal" : `Profil de ${pet.name}`}
            </h1>
            <p className="text-muted-foreground">
              {isNew ? "Renseignez les informations de votre compagnon" : "Modifiez les informations de votre animal"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Photo & Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PawPrint className="w-5 h-5 text-dogwalking-primary" />
                  Informations de base
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Photo */}
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={pet.photo} />
                    <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary text-3xl">
                      <PawPrint className="w-12 h-12" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      {isNew ? "Ajouter une photo" : "Changer la photo"}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">JPG, PNG. Max 5MB.</p>
                  </div>
                </div>

                {/* Basic Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom *</Label>
                    <Input
                      id="name"
                      value={pet.name}
                      onChange={(e) => setPet(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Ex: Max"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Type d'animal *</Label>
                    <Select 
                      value={pet.type} 
                      onValueChange={(value) => setPet(prev => ({ ...prev, type: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Chien</SelectItem>
                        <SelectItem value="cat">Chat</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="breed">Race</Label>
                    <Input
                      id="breed"
                      value={pet.breed}
                      onChange={(e) => setPet(prev => ({ ...prev, breed: e.target.value }))}
                      placeholder="Ex: Golden Retriever"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Sexe</Label>
                    <Select 
                      value={pet.gender} 
                      onValueChange={(value) => setPet(prev => ({ ...prev, gender: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Mâle</SelectItem>
                        <SelectItem value="female">Femelle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="age">Âge (années)</Label>
                    <Input
                      id="age"
                      type="number"
                      value={pet.age}
                      onChange={(e) => setPet(prev => ({ ...prev, age: e.target.value }))}
                      placeholder="Ex: 3"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Poids (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={pet.weight}
                      onChange={(e) => setPet(prev => ({ ...prev, weight: e.target.value }))}
                      placeholder="Ex: 25"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Description</Label>
                  <Textarea
                    id="bio"
                    value={pet.bio}
                    onChange={(e) => setPet(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="Décrivez le caractère et les habitudes de votre animal..."
                    className="mt-2"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Behavior */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-dogwalking-primary" />
                  Comportement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="temperament">Tempérament</Label>
                    <Select 
                      value={pet.temperament} 
                      onValueChange={(value) => setPet(prev => ({ ...prev, temperament: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="calm">Calme</SelectItem>
                        <SelectItem value="friendly">Sociable</SelectItem>
                        <SelectItem value="energetic">Énergique</SelectItem>
                        <SelectItem value="shy">Timide</SelectItem>
                        <SelectItem value="protective">Protecteur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="exerciseLevel">Niveau d'activité</Label>
                    <Select 
                      value={pet.exerciseLevel} 
                      onValueChange={(value) => setPet(prev => ({ ...prev, exerciseLevel: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Faible</SelectItem>
                        <SelectItem value="medium">Modéré</SelectItem>
                        <SelectItem value="high">Élevé</SelectItem>
                        <SelectItem value="very-high">Très élevé</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialNeeds">Besoins particuliers / Notes</Label>
                  <Textarea
                    id="specialNeeds"
                    value={pet.specialNeeds}
                    onChange={(e) => setPet(prev => ({ ...prev, specialNeeds: e.target.value }))}
                    placeholder="Ex: Aime jouer à la balle, a peur des orages..."
                    className="mt-2"
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Medical */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-dogwalking-primary" />
                  Informations médicales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Vaccinations</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["rage", "maladie-carre", "leptospirose", "parvovirus", "toux-chenil"].map((vac) => (
                      <Badge 
                        key={vac}
                        variant={pet.vaccinations.includes(vac) ? "default" : "outline"}
                        className={`cursor-pointer ${pet.vaccinations.includes(vac) ? 'bg-dogwalking-primary' : ''}`}
                        onClick={() => {
                          setPet(prev => ({
                            ...prev,
                            vaccinations: prev.vaccinations.includes(vac)
                              ? prev.vaccinations.filter(v => v !== vac)
                              : [...prev.vaccinations, vac]
                          }));
                        }}
                      >
                        {vac.replace('-', ' ')}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="allergies">Allergies</Label>
                  <Input
                    id="allergies"
                    value={pet.allergies}
                    onChange={(e) => setPet(prev => ({ ...prev, allergies: e.target.value }))}
                    placeholder="Ex: Allergie au poulet"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="medicalHistory">Historique médical</Label>
                  <Textarea
                    id="medicalHistory"
                    value={pet.medicalHistory}
                    onChange={(e) => setPet(prev => ({ ...prev, medicalHistory: e.target.value }))}
                    placeholder="Opérations, traitements en cours..."
                    className="mt-2"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="dietaryNeeds">Alimentation</Label>
                  <Input
                    id="dietaryNeeds"
                    value={pet.dietaryNeeds}
                    onChange={(e) => setPet(prev => ({ ...prev, dietaryNeeds: e.target.value }))}
                    placeholder="Type de nourriture, fréquence des repas..."
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vetName">Vétérinaire</Label>
                    <Input
                      id="vetName"
                      value={pet.vetName}
                      onChange={(e) => setPet(prev => ({ ...prev, vetName: e.target.value }))}
                      placeholder="Nom du vétérinaire"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="vetPhone">Téléphone vétérinaire</Label>
                    <Input
                      id="vetPhone"
                      value={pet.vetPhone}
                      onChange={(e) => setPet(prev => ({ ...prev, vetPhone: e.target.value }))}
                      placeholder="01 23 45 67 89"
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <Button onClick={handleSave} className="w-full bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                  <Save className="w-4 h-4 mr-2" />
                  {isNew ? "Ajouter l'animal" : "Enregistrer"}
                </Button>
                {!isNew && (
                  <Button onClick={handleDelete} variant="outline" className="w-full text-red-500 border-red-200 hover:bg-red-50">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Supprimer le profil
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-dogwalking-primary/5 border-dogwalking-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-dogwalking-primary" />
                  Conseils
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Ajoutez une photo récente pour aider le promeneur à identifier votre animal</p>
                <p>• Renseignez les allergies et besoins médicaux pour la sécurité de votre animal</p>
                <p>• Précisez les comportements particuliers pour une meilleure prise en charge</p>
              </CardContent>
            </Card>

            {/* Stats (only if not new) */}
            {!isNew && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="w-5 h-5 text-dogwalking-primary" />
                    Statistiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Promenades</span>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Promeneurs différents</span>
                    <span className="font-semibold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Km parcourus</span>
                    <span className="font-semibold">~120 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Dernière promenade</span>
                    <span className="font-semibold">Hier</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PetProfile;