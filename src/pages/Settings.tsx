import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Bell, Shield, CreditCard, MapPin, Camera, Trash2, LogOut, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  const [profile, setProfile] = useState({
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@email.com",
    phone: "06 12 34 56 78",
    address: "15 rue de la Paix",
    city: "Paris",
    postalCode: "75001",
    bio: "Propriétaire de deux adorables chiens, Max et Luna. Je recherche des promeneurs fiables et attentionnés."
  });

  const [notifications, setNotifications] = useState({
    emailBookings: true,
    emailMessages: true,
    emailPromos: false,
    pushBookings: true,
    pushMessages: true,
    pushProofs: true,
    smsUrgent: true
  });

  const handleSaveProfile = () => {
    toast.success("Profil mis à jour avec succès");
  };

  const handleSaveNotifications = () => {
    toast.success("Préférences de notifications enregistrées");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Retour au tableau de bord
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Paramètres</h1>
            <p className="text-muted-foreground">Gérez votre compte et vos préférences</p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profil</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Sécurité</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Paiement</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Photo de profil</CardTitle>
                <CardDescription>Cette photo sera visible par les promeneurs</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary text-2xl">
                    {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    Changer la photo
                  </Button>
                  <p className="text-xs text-muted-foreground">JPG, PNG ou GIF. Max 5MB.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>Vos informations de base</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      value={profile.firstName}
                      onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      value={profile.lastName}
                      onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="bio">À propos de vous</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                    className="mt-2"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Adresse
                </CardTitle>
                <CardDescription>Votre adresse principale pour les services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    value={profile.address}
                    onChange={(e) => setProfile(prev => ({ ...prev, address: e.target.value }))}
                    className="mt-2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Ville</Label>
                    <Input
                      id="city"
                      value={profile.city}
                      onChange={(e) => setProfile(prev => ({ ...prev, city: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Code postal</Label>
                    <Input
                      id="postalCode"
                      value={profile.postalCode}
                      onChange={(e) => setProfile(prev => ({ ...prev, postalCode: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button onClick={handleSaveProfile} className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                Enregistrer les modifications
              </Button>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notifications par email</CardTitle>
                <CardDescription>Choisissez quels emails vous souhaitez recevoir</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Réservations</p>
                    <p className="text-sm text-muted-foreground">Confirmations, rappels et mises à jour</p>
                  </div>
                  <Switch
                    checked={notifications.emailBookings}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailBookings: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Messages</p>
                    <p className="text-sm text-muted-foreground">Nouveaux messages des promeneurs</p>
                  </div>
                  <Switch
                    checked={notifications.emailMessages}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailMessages: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Promotions</p>
                    <p className="text-sm text-muted-foreground">Offres spéciales et nouveautés</p>
                  </div>
                  <Switch
                    checked={notifications.emailPromos}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailPromos: checked }))}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notifications push</CardTitle>
                <CardDescription>Notifications sur votre appareil</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Réservations</p>
                    <p className="text-sm text-muted-foreground">Mises à jour de vos réservations</p>
                  </div>
                  <Switch
                    checked={notifications.pushBookings}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushBookings: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Messages</p>
                    <p className="text-sm text-muted-foreground">Nouveaux messages instantanés</p>
                  </div>
                  <Switch
                    checked={notifications.pushMessages}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushMessages: checked }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Preuves de service</p>
                    <p className="text-sm text-muted-foreground">Photos et vidéos reçues pendant les promenades</p>
                  </div>
                  <Switch
                    checked={notifications.pushProofs}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushProofs: checked }))}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SMS</CardTitle>
                <CardDescription>Pour les notifications urgentes uniquement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Alertes urgentes</p>
                    <p className="text-sm text-muted-foreground">Incidents, annulations de dernière minute</p>
                  </div>
                  <Switch
                    checked={notifications.smsUrgent}
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, smsUrgent: checked }))}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button onClick={handleSaveNotifications} className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                Enregistrer les préférences
              </Button>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mot de passe</CardTitle>
                <CardDescription>Modifiez votre mot de passe</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                  <Input id="currentPassword" type="password" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                  <Input id="newPassword" type="password" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input id="confirmPassword" type="password" className="mt-2" />
                </div>
                <Button className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                  Mettre à jour le mot de passe
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sessions actives</CardTitle>
                <CardDescription>Gérez vos connexions actives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Chrome - MacBook Pro</p>
                      <p className="text-sm text-muted-foreground">Paris, France • Actif maintenant</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Session actuelle</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Safari - iPhone 14</p>
                      <p className="text-sm text-muted-foreground">Paris, France • Il y a 2h</p>
                    </div>
                    <Button variant="outline" size="sm">Déconnecter</Button>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 w-full text-red-500 border-red-200 hover:bg-red-50">
                  <LogOut className="w-4 h-4 mr-2" />
                  Déconnecter toutes les sessions
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600">Zone de danger</CardTitle>
                <CardDescription>Actions irréversibles sur votre compte</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Supprimer mon compte
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Cette action est irréversible. Toutes vos données seront supprimées.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Moyens de paiement</CardTitle>
                <CardDescription>Gérez vos cartes bancaires</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expire 12/25</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Par défaut</Badge>
                      <Button variant="ghost" size="sm">Modifier</Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Ajouter une carte
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historique des paiements</CardTitle>
                <CardDescription>Vos dernières transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-medium">Promenade - Marie D.</p>
                      <p className="text-sm text-muted-foreground">15 Oct 2024</p>
                    </div>
                    <p className="font-semibold">13€</p>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-medium">Garde à domicile - Pierre L.</p>
                      <p className="text-sm text-muted-foreground">10 Oct 2024</p>
                    </div>
                    <p className="font-semibold">150€</p>
                  </div>
                </div>
                <Link to="/payments/history">
                  <Button variant="link" className="mt-4 p-0 text-dogwalking-primary">
                    Voir tout l'historique →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Factures</CardTitle>
                <CardDescription>Téléchargez vos factures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 border-2 border-dashed rounded-lg">
                  <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Vos factures seront disponibles ici</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

// Badge component for this page
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gray-100 ${className}`}>
    {children}
  </span>
);

export default Settings;