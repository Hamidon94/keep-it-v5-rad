import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Star, Heart, Settings, Bell, CreditCard, Users, PawPrint, MessageCircle, Plus, Eye, Clock, CheckCircle, Camera, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const upcomingBookings = [
    {
      id: 1,
      petSitter: "Marie D.",
      sitterAvatar: "/placeholder.svg",
      service: "Promenade quotidienne",
      date: "Aujourd'hui à 14h00",
      pet: "Max",
      status: "confirmed",
      price: "13€",
      canTrack: true
    },
    {
      id: 2,
      petSitter: "Pierre L.",
      sitterAvatar: "/placeholder.svg",
      service: "Garde à domicile",
      date: "15-20 Oct 2024",
      pet: "Luna & Milo",
      status: "pending",
      price: "150€",
      canTrack: false
    },
    {
      id: 3,
      petSitter: "Sophie B.",
      sitterAvatar: "/placeholder.svg",
      service: "Sortie sportive",
      date: "Demain à 09h00",
      pet: "Rocky",
      status: "confirmed",
      price: "18€",
      canTrack: false
    }
  ];

  const myPets = [
    {
      id: 1,
      name: "Max",
      breed: "Golden Retriever",
      age: 3,
      weight: "32kg",
      photo: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Berger Australien",
      age: 2,
      weight: "25kg",
      photo: "/placeholder.svg"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Preuve reçue",
      description: "Marie D. a envoyé 3 photos de la promenade de Max",
      time: "Il y a 30min",
      icon: Camera,
      type: "proof"
    },
    {
      id: 2,
      action: "Réservation confirmée",
      description: "Pierre L. a accepté votre demande de garde",
      time: "Il y a 2h",
      icon: CheckCircle,
      type: "booking"
    },
    {
      id: 3,
      action: "Nouveau message",
      description: "Sophie B. vous a envoyé un message",
      time: "Il y a 4h",
      icon: MessageCircle,
      type: "message"
    },
    {
      id: 4,
      action: "Paiement effectué",
      description: "Paiement de 13€ pour la promenade de Max",
      time: "Hier",
      icon: CreditCard,
      type: "payment"
    }
  ];

  const messages = [
    {
      id: 1,
      sitter: "Marie D.",
      avatar: "/placeholder.svg",
      lastMessage: "Max a été super aujourd'hui ! Je vous envoie les photos.",
      time: "Il y a 30min",
      unread: true
    },
    {
      id: 2,
      sitter: "Pierre L.",
      avatar: "/placeholder.svg",
      lastMessage: "Parfait, je serai là à 9h le 15 octobre.",
      time: "Il y a 2h",
      unread: false
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-dogwalking-primary text-white">Confirmé</Badge>;
      case "pending":
        return <Badge variant="secondary">En attente</Badge>;
      case "in_progress":
        return <Badge className="bg-orange-500 text-white">En cours</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Bonjour, Jean !</h1>
            <p className="text-muted-foreground">Gérez vos réservations et suivez vos animaux</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Link to="/notifications">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-dogwalking-primary text-white text-xs rounded-full flex items-center justify-center">3</span>
              </Button>
            </Link>
            <Link to="/settings">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Button>
            </Link>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Aperçu</TabsTrigger>
            <TabsTrigger value="bookings">Réservations</TabsTrigger>
            <TabsTrigger value="pets">Mes Animaux</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Réservations actives</CardTitle>
                  <Calendar className="h-4 w-4 text-dogwalking-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">+1 depuis la semaine dernière</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Promeneurs favoris</CardTitle>
                  <Heart className="h-4 w-4 text-dogwalking-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">Dans votre liste</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Dépenses ce mois</CardTitle>
                  <CreditCard className="h-4 w-4 text-dogwalking-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">284€</div>
                  <p className="text-xs text-muted-foreground">-12% vs mois dernier</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avis laissés</CardTitle>
                  <Star className="h-4 w-4 text-dogwalking-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Note moyenne: 4.8/5</p>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Bookings */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Prochaines réservations</CardTitle>
                  <CardDescription>Vos prochains rendez-vous avec vos promeneurs</CardDescription>
                </div>
                <Link to="/search">
                  <Button className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Nouvelle réservation
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg hover:border-dogwalking-primary/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={booking.sitterAvatar} />
                          <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary">
                            {booking.petSitter.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{booking.service}</p>
                          <p className="text-sm text-muted-foreground">Avec {booking.petSitter} • {booking.pet}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {booking.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        {getStatusBadge(booking.status)}
                        <p className="text-lg font-semibold text-dogwalking-primary">{booking.price}</p>
                        {booking.canTrack && (
                          <Link to={`/walk-tracking/${booking.id}`}>
                            <Button size="sm" variant="outline" className="text-dogwalking-primary border-dogwalking-primary">
                              <Eye className="w-4 h-4 mr-1" />
                              Suivre
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Activité récente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'proof' ? 'bg-dogwalking-primary/10 text-dogwalking-primary' :
                        activity.type === 'booking' ? 'bg-green-100 text-green-600' :
                        activity.type === 'message' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Toutes les réservations</CardTitle>
                  <CardDescription>Historique et réservations à venir</CardDescription>
                </div>
                <Link to="/search">
                  <Button className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Nouvelle réservation
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={booking.sitterAvatar} />
                          <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary">
                            {booking.petSitter.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{booking.service}</p>
                          <p className="text-sm text-muted-foreground">Avec {booking.petSitter} • {booking.pet}</p>
                          <p className="text-sm text-muted-foreground">{booking.date}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        {getStatusBadge(booking.status)}
                        <p className="text-lg font-semibold">{booking.price}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileText className="w-4 h-4 mr-1" />
                            Détails
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pets" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Mes animaux</CardTitle>
                  <CardDescription>Gérez les profils de vos compagnons</CardDescription>
                </div>
                <Link to="/pets/add">
                  <Button className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un animal
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myPets.map((pet) => (
                    <div key={pet.id} className="flex items-center p-4 border rounded-lg hover:border-dogwalking-primary/50 transition-colors">
                      <Avatar className="w-16 h-16 mr-4">
                        <AvatarImage src={pet.photo} />
                        <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary text-xl">
                          <PawPrint className="w-8 h-8" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{pet.name}</h3>
                        <p className="text-sm text-muted-foreground">{pet.breed}</p>
                        <p className="text-sm text-muted-foreground">{pet.age} ans • {pet.weight}</p>
                      </div>
                      <Link to={`/pets/${pet.id}/edit`}>
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Conversations avec vos promeneurs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <Link key={msg.id} to={`/messages/${msg.id}`}>
                      <div className={`flex items-center p-4 border rounded-lg hover:border-dogwalking-primary/50 transition-colors cursor-pointer ${msg.unread ? 'bg-dogwalking-primary/5' : ''}`}>
                        <Avatar className="w-12 h-12 mr-4">
                          <AvatarImage src={msg.avatar} />
                          <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary">
                            {msg.sitter.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{msg.sitter}</h3>
                            {msg.unread && <span className="w-2 h-2 bg-dogwalking-primary rounded-full"></span>}
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{msg.lastMessage}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                    </Link>
                  ))}
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

export default Dashboard;