import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Bell, Calendar, MessageCircle, CreditCard, Star, Camera, CheckCircle, AlertCircle, Settings, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "proof",
      title: "Nouvelles preuves reçues",
      description: "Marie D. a envoyé 3 photos de la promenade de Max",
      time: "Il y a 30min",
      read: false,
      icon: Camera,
      link: "/walk-tracking/1"
    },
    {
      id: 2,
      type: "booking",
      title: "Réservation confirmée",
      description: "Pierre L. a accepté votre demande de garde pour Luna",
      time: "Il y a 2h",
      read: false,
      icon: CheckCircle,
      link: "/dashboard"
    },
    {
      id: 3,
      type: "message",
      title: "Nouveau message",
      description: "Sophie B. vous a envoyé un message",
      time: "Il y a 4h",
      read: false,
      icon: MessageCircle,
      link: "/messages/3"
    },
    {
      id: 4,
      type: "payment",
      title: "Paiement effectué",
      description: "Votre paiement de 13€ a été confirmé",
      time: "Hier",
      read: true,
      icon: CreditCard,
      link: "/settings?tab=payment"
    },
    {
      id: 5,
      type: "review",
      title: "Nouvel avis",
      description: "Marie D. a laissé un avis 5 étoiles",
      time: "Hier",
      read: true,
      icon: Star,
      link: "/sitter/1"
    },
    {
      id: 6,
      type: "reminder",
      title: "Rappel de réservation",
      description: "Promenade avec Marie D. demain à 14h00",
      time: "Il y a 2 jours",
      read: true,
      icon: Calendar,
      link: "/dashboard"
    },
    {
      id: 7,
      type: "alert",
      title: "Action requise",
      description: "Veuillez confirmer les informations de Max",
      time: "Il y a 3 jours",
      read: true,
      icon: AlertCircle,
      link: "/pets/1/edit"
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    toast.success("Toutes les notifications ont été marquées comme lues");
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    toast.success("Notification supprimée");
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "proof": return "text-dogwalking-primary bg-dogwalking-primary/10";
      case "booking": return "text-green-600 bg-green-100";
      case "message": return "text-blue-600 bg-blue-100";
      case "payment": return "text-purple-600 bg-purple-100";
      case "review": return "text-yellow-600 bg-yellow-100";
      case "reminder": return "text-orange-600 bg-orange-100";
      case "alert": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const filterNotifications = (filter: string) => {
    if (filter === "all") return notifications;
    if (filter === "unread") return notifications.filter(n => !n.read);
    return notifications.filter(n => n.type === filter);
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
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-8 h-8 text-dogwalking-primary" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
              <p className="text-muted-foreground">
                {unreadCount > 0 ? `${unreadCount} non lue${unreadCount > 1 ? 's' : ''}` : 'Tout est à jour'}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            {unreadCount > 0 && (
              <Button variant="outline" onClick={markAllAsRead}>
                Tout marquer comme lu
              </Button>
            )}
            <Link to="/settings?tab=notifications">
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="flex-wrap h-auto gap-2">
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="unread">Non lues</TabsTrigger>
            <TabsTrigger value="booking">Réservations</TabsTrigger>
            <TabsTrigger value="message">Messages</TabsTrigger>
            <TabsTrigger value="proof">Preuves</TabsTrigger>
            <TabsTrigger value="payment">Paiements</TabsTrigger>
          </TabsList>

          {["all", "unread", "booking", "message", "proof", "payment"].map((filter) => (
            <TabsContent key={filter} value={filter} className="space-y-4">
              {filterNotifications(filter).length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Aucune notification</h3>
                    <p className="text-muted-foreground">
                      {filter === "unread" 
                        ? "Vous avez lu toutes vos notifications" 
                        : "Vous n'avez pas de notification dans cette catégorie"}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filterNotifications(filter).map((notification) => (
                  <Card 
                    key={notification.id} 
                    className={`transition-colors hover:border-dogwalking-primary/50 ${
                      !notification.read ? 'bg-dogwalking-primary/5 border-dogwalking-primary/30' : ''
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${getIconColor(notification.type)}`}>
                          <notification.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{notification.title}</h3>
                                {!notification.read && (
                                  <Badge className="bg-dogwalking-primary text-white text-xs">Nouveau</Badge>
                                )}
                              </div>
                              <p className="text-muted-foreground mt-1">{notification.description}</p>
                              <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {!notification.read && (
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  Marquer comme lu
                                </Button>
                              )}
                              <Link to={notification.link}>
                                <Button size="sm" className="bg-dogwalking-primary hover:bg-dogwalking-primary/90">
                                  Voir
                                </Button>
                              </Link>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => deleteNotification(notification.id)}
                                className="text-muted-foreground hover:text-red-500"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Notifications;