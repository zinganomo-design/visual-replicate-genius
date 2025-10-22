import { useState } from 'react';
import { Package, MapPin, Clock, CheckCircle, TrendingUp, Truck, Phone, Navigation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const DashboardLivreur = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('en-attente');

  // Données mockées des commandes
  const [commandes, setCommandes] = useState([
    {
      id: '1',
      numero: 'CMD-2024-001',
      client: 'Jean Dupont',
      telephone: '+33 6 12 34 56 78',
      adresse: '15 Rue de la Santé, 75013 Paris',
      medicaments: ['Panadol 500mg x2', 'Betadine Solution x1'],
      montant: '45.50€',
      statut: 'en-attente',
      distance: '2.3 km',
      tempsPrevue: '15 min'
    },
    {
      id: '2',
      numero: 'CMD-2024-002',
      client: 'Marie Martin',
      telephone: '+33 6 98 76 54 32',
      adresse: '28 Avenue des Pharmacies, 75014 Paris',
      medicaments: ['Mucosolvan 30mg x1', 'Panadol 500mg x1'],
      montant: '32.00€',
      statut: 'en-attente',
      distance: '1.8 km',
      tempsPrevue: '10 min'
    },
    {
      id: '3',
      numero: 'CMD-2024-003',
      client: 'Pierre Durand',
      telephone: '+33 6 11 22 33 44',
      adresse: '42 Boulevard de la Livraison, 75015 Paris',
      medicaments: ['Betadine x2', 'Panadol x3', 'Mucosolvan x1'],
      montant: '68.00€',
      statut: 'en-cours',
      distance: '3.5 km',
      heureDebut: '14:30'
    }
  ]);

  const [stats] = useState({
    aujourdhui: 12,
    enCours: 1,
    completees: 45,
    gains: '450.00€'
  });

  const handleAccepter = (id) => {
    setCommandes(commandes.map(cmd => 
      cmd.id === id ? { ...cmd, statut: 'en-cours', heureDebut: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) } : cmd
    ));
    toast({
      title: "Livraison acceptée",
      description: "Vous pouvez maintenant commencer la livraison",
    });
  };

  const handleTerminer = (id) => {
    setCommandes(commandes.map(cmd => 
      cmd.id === id ? { ...cmd, statut: 'livree', heureFin: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) } : cmd
    ));
    toast({
      title: "Livraison terminée",
      description: "La commande a été marquée comme livrée",
    });
  };

  const commandesEnAttente = commandes.filter(c => c.statut === 'en-attente');
  const commandesEnCours = commandes.filter(c => c.statut === 'en-cours');
  const commandesLivrees = commandes.filter(c => c.statut === 'livree');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Truck className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">MedEx Livreur</h1>
                <p className="text-sm text-muted-foreground">Dashboard de livraison</p>
              </div>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">
              En service
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aujourd'hui</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.aujourdhui}</div>
              <p className="text-xs text-muted-foreground">livraisons</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En cours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.enCours}</div>
              <p className="text-xs text-muted-foreground">livraison active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total complétées</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completees}</div>
              <p className="text-xs text-muted-foreground">ce mois-ci</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gains</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.gains}</div>
              <p className="text-xs text-muted-foreground">ce mois-ci</p>
            </CardContent>
          </Card>
        </div>

        {/* Onglets des commandes */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="en-attente">
              En attente ({commandesEnAttente.length})
            </TabsTrigger>
            <TabsTrigger value="en-cours">
              En cours ({commandesEnCours.length})
            </TabsTrigger>
            <TabsTrigger value="historique">
              Historique ({commandesLivrees.length})
            </TabsTrigger>
          </TabsList>

          {/* Commandes en attente */}
          <TabsContent value="en-attente" className="space-y-4">
            {commandesEnAttente.length === 0 ? (
              <Card>
                <CardContent className="py-10 text-center">
                  <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Aucune commande en attente</p>
                </CardContent>
              </Card>
            ) : (
              commandesEnAttente.map((commande) => (
                <Card key={commande.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{commande.numero}</CardTitle>
                        <CardDescription className="mt-1">
                          Distance: {commande.distance} • Temps: {commande.tempsPrevue}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">Nouvelle</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Client
                        </h4>
                        <p className="text-sm">{commande.client}</p>
                        <p className="text-sm text-muted-foreground">{commande.adresse}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a href={`tel:${commande.telephone}`} className="text-sm text-primary hover:underline">
                            {commande.telephone}
                          </a>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Médicaments</h4>
                        <ul className="text-sm space-y-1">
                          {commande.medicaments.map((med, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {med}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <p className="text-sm text-muted-foreground">Montant</p>
                          <p className="text-lg font-bold text-primary">{commande.montant}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Navigation className="h-4 w-4 mr-2" />
                            Itinéraire
                          </Button>
                          <Button onClick={() => handleAccepter(commande.id)} size="sm">
                            Accepter
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Commandes en cours */}
          <TabsContent value="en-cours" className="space-y-4">
            {commandesEnCours.length === 0 ? (
              <Card>
                <CardContent className="py-10 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Aucune livraison en cours</p>
                </CardContent>
              </Card>
            ) : (
              commandesEnCours.map((commande) => (
                <Card key={commande.id} className="overflow-hidden border-primary">
                  <CardHeader className="bg-primary/10">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{commande.numero}</CardTitle>
                        <CardDescription className="mt-1">
                          Débutée à {commande.heureDebut}
                        </CardDescription>
                      </div>
                      <Badge className="bg-primary">En livraison</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Adresse de livraison
                        </h4>
                        <p className="text-sm">{commande.client}</p>
                        <p className="text-sm text-muted-foreground">{commande.adresse}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a href={`tel:${commande.telephone}`} className="text-sm text-primary hover:underline">
                            {commande.telephone}
                          </a>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Médicaments à livrer</h4>
                        <ul className="text-sm space-y-1">
                          {commande.medicaments.map((med, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {med}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <p className="text-sm text-muted-foreground">Montant à collecter</p>
                          <p className="text-lg font-bold text-primary">{commande.montant}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4 mr-2" />
                            Appeler
                          </Button>
                          <Button onClick={() => handleTerminer(commande.id)} size="sm">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Terminer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Historique */}
          <TabsContent value="historique" className="space-y-4">
            {commandesLivrees.length === 0 ? (
              <Card>
                <CardContent className="py-10 text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Aucune livraison dans l'historique</p>
                </CardContent>
              </Card>
            ) : (
              commandesLivrees.map((commande) => (
                <Card key={commande.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{commande.numero}</CardTitle>
                        <CardDescription className="mt-1">
                          Livrée à {commande.heureFin}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Livrée
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{commande.client}</p>
                        <p className="text-sm text-muted-foreground">{commande.adresse}</p>
                      </div>
                      <p className="font-bold text-primary">{commande.montant}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardLivreur;
