import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, Send, Image, Paperclip, MoreVertical, Phone, Video, Search, Check, CheckCheck } from "lucide-react";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Marie D.",
      avatar: "/placeholder.svg",
      lastMessage: "Max a été super aujourd'hui ! Je vous envoie les photos.",
      time: "Il y a 30min",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Pierre L.",
      avatar: "/placeholder.svg",
      lastMessage: "Parfait, je serai là à 9h le 15 octobre.",
      time: "Il y a 2h",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Sophie B.",
      avatar: "/placeholder.svg",
      lastMessage: "Merci pour la réservation !",
      time: "Hier",
      unread: 0,
      online: true
    },
    {
      id: 4,
      name: "Thomas R.",
      avatar: "/placeholder.svg",
      lastMessage: "Je peux prendre Rex et Mia ensemble sans problème.",
      time: "Il y a 3 jours",
      unread: 0,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "other",
      content: "Bonjour ! J'ai bien reçu votre demande de promenade pour Max.",
      time: "10:30",
      read: true
    },
    {
      id: 2,
      sender: "me",
      content: "Bonjour Marie ! Oui, Max a besoin d'une bonne promenade. Il est très énergique en ce moment 😊",
      time: "10:32",
      read: true
    },
    {
      id: 3,
      sender: "other",
      content: "Pas de souci, j'ai l'habitude des chiens énergiques ! Je le prendrai pour 1h comme prévu.",
      time: "10:35",
      read: true
    },
    {
      id: 4,
      sender: "me",
      content: "Parfait ! N'oubliez pas qu'il adore jouer à la balle si vous en avez une.",
      time: "10:36",
      read: true
    },
    {
      id: 5,
      sender: "other",
      content: "Noté ! J'ai tout ce qu'il faut. Je vous enverrai des photos pendant la promenade.",
      time: "10:38",
      read: true
    },
    {
      id: 6,
      sender: "other",
      content: "Max a été super aujourd'hui ! Je vous envoie les photos.",
      time: "14:30",
      read: false,
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    }
  ];

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // TODO: Send message to backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-4">
        <div className="flex h-[calc(100vh-200px)] bg-card rounded-xl border overflow-hidden">
          {/* Conversations List */}
          <div className={`w-full md:w-80 border-r flex flex-col ${selectedConversation ? 'hidden md:flex' : 'flex'}`}>
            {/* Search */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Rechercher..." className="pl-9" />
              </div>
            </div>

            {/* Conversations */}
            <ScrollArea className="flex-1">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv.id)}
                  className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                    selectedConversation === conv.id ? 'bg-dogwalking-primary/5 border-l-4 border-dogwalking-primary' : ''
                  }`}
                >
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={conv.avatar} />
                      <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary">
                        {conv.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold truncate">{conv.name}</h3>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="w-5 h-5 bg-dogwalking-primary text-white text-xs rounded-full flex items-center justify-center">
                      {conv.unread}
                    </span>
                  )}
                </div>
              ))}
            </ScrollArea>
          </div>

          {/* Chat Area */}
          {selectedConversation ? (
            <div className={`flex-1 flex flex-col ${selectedConversation ? 'flex' : 'hidden md:flex'}`}>
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden"
                    onClick={() => setSelectedConversation(null)}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={selectedConv?.avatar} />
                      <AvatarFallback className="bg-dogwalking-primary/10 text-dogwalking-primary">
                        {selectedConv?.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {selectedConv?.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedConv?.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedConv?.online ? 'En ligne' : 'Hors ligne'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] ${
                          message.sender === 'me'
                            ? 'bg-dogwalking-primary text-white rounded-2xl rounded-br-sm'
                            : 'bg-muted rounded-2xl rounded-bl-sm'
                        } p-3`}
                      >
                        <p>{message.content}</p>
                        {message.images && (
                          <div className="grid grid-cols-3 gap-2 mt-2">
                            {message.images.map((img, idx) => (
                              <img
                                key={idx}
                                src={img}
                                alt={`Photo ${idx + 1}`}
                                className="w-full h-20 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                        )}
                        <div className={`flex items-center justify-end gap-1 mt-1 ${
                          message.sender === 'me' ? 'text-white/70' : 'text-muted-foreground'
                        }`}>
                          <span className="text-xs">{message.time}</span>
                          {message.sender === 'me' && (
                            message.read ? (
                              <CheckCheck className="w-4 h-4" />
                            ) : (
                              <Check className="w-4 h-4" />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Image className="w-5 h-5" />
                  </Button>
                  <Input
                    placeholder="Écrivez un message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-dogwalking-primary hover:bg-dogwalking-primary/90"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-dogwalking-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-dogwalking-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vos messages</h3>
                <p className="text-muted-foreground">Sélectionnez une conversation pour commencer</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Messages;