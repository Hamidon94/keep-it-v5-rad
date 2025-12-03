import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Star, Settings, Bell, CreditCard, Users, PawPrint, Play, CheckCircle, Clock, MessageCircle, Camera, Upload, Euro, TrendingUp, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SitterDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const pendingBookings = [
    {
      id: 1,
      owner: "Sophie M.",
      ownerAvatar: "/placeholder.svg",
      service: "Promenade quotidienne",
      date: "Demain à 10h00",
      pet: "Bella",
      petBreed: "Labrador",
      status: "pending",
      price: "13€",
      duration: "1h"
    },
    {
      id: 2,
      owner: "Thomas R.",
      ownerAvatar: "/placeholder.svg",
      service: "Garde à domicile",
      date: "20-25 Oct 2024",
      pet: "Rex & Mia",
      petBreed: "Berger Allemand, Beagle",
      status: "pending",
      price: "155€",
      duration: "5 jours"
    }
  ];

  const confirmedBookings = [
    {
      id: 3,
      owner: "Marie L.",
      ownerAvatar: "/placeholder.svg",
      service: "Visite à domicile",
      date: "Aujourd'hui à 16h00",
      pet: "Whiskers",
      petBreed: "Chat Persan",
      status: "confirmed",
      price: "12€",
      duration: "30min",
      canStart: true
    }
  ];

  const inProgressBooking = {
    id: 4,
    owner: "Claire D.",
    ownerAvatar: "/placeholder.svg",
    service: "Promenade quotidienne",
    pet: "Max",
    petBreed: "Golden Retriever",
    startTime: "14h00",
    duration: "1h",
    price: "13€",
    photosUploaded: 2,
    photosRequired: 3
  };

  const recentActivity = [
    {
      id: 1,
      action: "Nouvelle demande",
      description: "Sophie M. vous a envoyé une demande de promenade",
      time: "Il y a 1h",
      icon: Calendar,
      type: "request"
    },
    {
      id: 2,
      action: "Paiement reçu",
      description: "Vous avez reçu 13€ pour la promenade de Max",
      time: "Il y a 3h",
      icon: Euro,
      type: "payment"
    },
    {
      id: 3,
      action: "Avis reçu",
      description: "Claire D. vous a laissé un avis 5 étoiles",
      time: "Hier",
      icon: Star,
      type: "review"
    }
  ];

  const earnings = {
    thisMonth: 420,
    lastMonth: 365,
    pending: 155,
    totalServices: 32
  };

  const messages = [
    {
      id: 1,
      owner: "Sophie M.",
      avatar: "/placeholder.svg",
      lastMessage: "Bella a besoin de 2 pauses pipi pendant la promenade",
      time: "Il y a 1h",
      unread: true
    },
    {
      id: 2,
      owner: "Marie L.",
      avatar: "/placeholder.svg",
      lastMessage: "Merci beaucoup pour les photos !",
      time: "Il y a 4h",
      unread: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Bonjour, Jean !</h1>
            <p className="text-muted-foreground">Gérez vos services et suivez vos revenus</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Link to="/notifications">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-dogwalking-primary text-white text-xs rounded-full flex items-center justify-center">5</span>
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Aperçu</TabsTrigger>
            <TabsTrigger value="requests">Demandes</TabsTrigger>
            <TabsTrigger value="calendar">Calendrier</TabsTrigger>
            <TabsTrigger value="earnings">Revenus</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Demandes en attente</CardTitle>
                  <Calendar className="h-4 w-4 text-dogwalking-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-500">2</div>
                  <p className="text-xs text-muted-foreground">Nécessitent une réponse</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Services confirmés</CardTitle>
                  <CheckCircle className="h-4 w-4 text-dogwalking-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">5</div>
                  <p className="text-xs text-muted-foreground">Cette semaine</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenus ce mois</CardTitle>
                  <Euro className="h-4 w-4 text-dogwalking-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-dogwalking-primary">{earnings.thisMonth}€</div>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +15% vs mois dernier
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
                  <Star className="h-4 w-4 text-dogwalking-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold flex items-center gap-1">
                    4.9 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-xs text-muted-foreground">Sur 23 avis</p>
                </CardContent>
              </Card>
            </div>

            {/* Service en cours */}
            {inProgressBooking && (
              <Card className="border-2 border-orange-400 bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></span>
                    <CardTitle className="text-orange-700">Service en cours</CardTitle>
                  </div>
                  <CardDescription>N'oubliez pas d'envoyer les preuves photo/vidéo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={inProgressBooking.ownerAvatar} />
                        <AvatarFallback className="bg-orange-200 text-orange-700">
                          {inProgressBooking.owner.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{inProgressBooking.service}</p>
                        <p className="text-sm text-muted-foreground">{inProgressBooking.pet} ({inProgressBooking.petBreed})</p>
                        <p className="text-sm text-muted-foreground">Commencé à {inProgressBooking.startTime} • {inProgressBooking.duration}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Camera className="w-4 h-4" />
                        <span>{inProgressBooking.photosUploaded}/{inProgressBooking.photosRequired} photos</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                          <Upload className="w-4 h-4 mr-1" />
                          Envoyer preuves
                        </Button>
                        <Button size="sm" variant="outline" className="border-orange-400 text-orange-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Terminer
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Services à démarrer */}
            <Card>
              <CardHeader>
                <CardTitle>Services à démarrer</CardTitle>
                <CardDescription>Cliquez sur "Prise en charge" pour démarrer le service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {confirmedBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg hover:border-dogwalking-primary/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={booking.ownerAvatar} />
                          <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary">
                            {booking.owner.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{booking.service}</p>
                          <p className="text-sm text-muted-foreground">Pour {booking.owner} • {booking.pet}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {booking.date} ({booking.duration})
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge className="bg-green-500 text-white">Confirmé</Badge>
                        <div>
                          <Button size="sm" className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                            <Play className="w-4 h-4 mr-2" />
                            Prise en charge
                          </Button>
                        </div>
                        <p className="text-lg font-semibold text-dogwalking-primary">{booking.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Demandes en attente */}
            <Card>
              <CardHeader>
                <CardTitle>Demandes en attente</CardTitle>
                <CardDescription>Répondez rapidement pour améliorer votre taux de réponse</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg border-orange-200 bg-orange-50/50">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={booking.ownerAvatar} />
                          <AvatarFallback className="bg-orange-100 text-orange-600">
                            {booking.owner.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{booking.service}</p>
                          <p className="text-sm text-muted-foreground">Pour {booking.owner} • {booking.pet}</p>
                          <p className="text-sm text-muted-foreground">{booking.petBreed}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {booking.date} ({booking.duration})
                          </p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700">En attente</Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                            <X className="w-4 h-4 mr-1" />
                            Refuser
                          </Button>
                          <Button size="sm" className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Accepter
                          </Button>
                        </div>
                        <p className="text-lg font-semibold text-dogwalking-primary">{booking.price}</p>
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
                        activity.type === 'request' ? 'bg-orange-100 text-orange-600' :
                        activity.type === 'payment' ? 'bg-green-100 text-green-600' :
                        activity.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
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

          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Toutes les demandes</CardTitle>
                <CardDescription>Gérez vos demandes de services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...pendingBookings, ...confirmedBookings].map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={booking.ownerAvatar} />
                          <AvatarFallback>{booking.owner.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{booking.service}</p>
                          <p className="text-sm text-muted-foreground">{booking.owner} • {booking.pet}</p>
                          <p className="text-sm text-muted-foreground">{booking.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                          {booking.status === "confirmed" ? "Confirmé" : "En attente"}
                        </Badge>
                        <p className="text-lg font-semibold mt-1">{booking.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Calendrier des disponibilités</CardTitle>
                  <CardDescription>Gérez vos créneaux disponibles</CardDescription>
                </div>
                <Link to="/availability">
                  <Button className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                    <Settings className="w-4 h-4 mr-2" />
                    Configurer
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 border-2 border-dashed rounded-lg">
                  <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Calendrier interactif à venir</p>
                  <p className="text-sm text-muted-foreground mt-2">Configurez vos disponibilités pour recevoir des demandes</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            {/* Earnings Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ce mois</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-dogwalking-primary">{earnings.thisMonth}€</p>
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    +15% vs mois dernier
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">En attente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-500">{earnings.pending}€</p>
                  <p className="text-sm text-muted-foreground mt-2">Paiements en cours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Services effectués</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{earnings.totalServices}</p>
                  <p className="text-sm text-muted-foreground mt-2">Ce mois-ci</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Historique des paiements</CardTitle>
                <CardDescription>Suivez vos gains et retraits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 border-2 border-dashed rounded-lg">
                  <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Historique des transactions</p>
                  <Link to="/earnings">
                    <Button className="mt-4 bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                      Voir tout l'historique
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Conversations avec les propriétaires</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <Link key={msg.id} to={`/messages/${msg.id}`}>
                      <div className={`flex items-center p-4 border rounded-lg hover:border-dogwalking-primary/50 transition-colors cursor-pointer ${msg.unread ? 'bg-dogwalking-primary/5 border-dogwalking-primary/30' : ''}`}>
                        <Avatar className="w-12 h-12 mr-4">
                          <AvatarImage src={msg.avatar} />
                          <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary">
                            {msg.owner.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{msg.owner}</h3>
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

export default SitterDashboard;