import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Shield, User, Dog } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'owner' | 'sitter' | null>(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  // Test accounts
  const testAccounts = {
    owner: {
      email: "proprietaire@test.com",
      password: "test123",
      name: "Sophie Laurent",
      description: "Compte propriétaire de test"
    },
    sitter: {
      email: "petsitter@test.com", 
      password: "test123",
      name: "Marie Dubois",
      description: "Compte pet sitter de test"
    }
  };

  const handleRoleSelect = (role: 'owner' | 'sitter') => {
    setSelectedRole(role);
    setCredentials({
      email: testAccounts[role].email,
      password: testAccounts[role].password
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedRole) {
      toast.error("Veuillez sélectionner un rôle");
      return;
    }

    const account = testAccounts[selectedRole];
    
    if (credentials.email === account.email && credentials.password === account.password) {
      toast.success(`Connexion réussie en tant que ${account.name}`);
      
      // Simulate setting user role in localStorage for testing
      localStorage.setItem('userRole', selectedRole);
      localStorage.setItem('userName', account.name);
      localStorage.setItem('userEmail', account.email);
      
      // Redirect to appropriate dashboard
      if (selectedRole === 'owner') {
        navigate("/dashboard");
      } else {
        navigate("/sitter-onboarding");
      }
    } else {
      toast.error("Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-dogwalking-green" />
              </div>
              <CardTitle className="text-2xl">Accès Test Admin</CardTitle>
              <CardDescription>
                Connectez-vous avec un compte de test pour explorer les fonctionnalités
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Sélectionnez votre rôle de test :</Label>
                
                <div className="grid grid-cols-1 gap-3">
                  <div
                    onClick={() => handleRoleSelect('owner')}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedRole === 'owner' 
                        ? 'border-dogwalking-green bg-dogwalking-green/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <User className="w-8 h-8 text-dogwalking-green" />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">Propriétaire d'Animal</h3>
                        <p className="text-sm text-gray-600">Cherche des services pour son animal</p>
                        <Badge variant="outline" className="mt-1">
                          {testAccounts.owner.name}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => handleRoleSelect('sitter')}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedRole === 'sitter' 
                        ? 'border-dogwalking-green bg-dogwalking-green/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Dog className="w-8 h-8 text-dogwalking-green" />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">Pet Sitter</h3>
                        <p className="text-sm text-gray-600">Offre des services de garde d'animaux</p>
                        <Badge variant="outline" className="mt-1">
                          {testAccounts.sitter.name}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Login Form */}
              {selectedRole && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={credentials.email}
                      onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Email de test"
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                      id="password"
                      type="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                      placeholder="Mot de passe de test"
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Compte de test :</strong> {testAccounts[selectedRole].description}
                    </p>
                  </div>

                  <Button type="submit" className="w-full dogwalking-button-primary">
                    Se connecter en tant que {testAccounts[selectedRole].name}
                  </Button>
                </form>
              )}

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Ceci est un environnement de test. Les données ne sont pas persistantes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminLogin;