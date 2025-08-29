import ProductCard from "@/components/ProductCard";
import OrderForm from "@/components/OrderForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Settings } from "lucide-react";

const Index = () => {
  const price = 150;
  const stock = 7;

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation Header */}
      <nav className="bg-gradient-hero text-primary-foreground shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold font-display">TelefonKort.se</h1>
              <Badge variant="secondary" className="hidden sm:block">
                Premium leverantör
              </Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="glass" size="sm">
                <User className="w-4 h-4 mr-2" />
                Logga in
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Product Card */}
          <div className="space-y-8">
            <ProductCard />
            
            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-success/10 border border-success/20">
                <div className="text-success font-semibold mb-2">✅ Säkert & Pålitligt</div>
                <p className="text-sm text-muted-foreground">
                  Använd av tusentals kunder dagligen. Certifierad leverantör sedan 2015.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
                <div className="text-accent font-semibold mb-2">⚡ Blixtnabb Leverans</div>
                <p className="text-sm text-muted-foreground">
                  Automatisk leverans till din e-post inom 30 sekunder efter betalning.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div className="lg:sticky lg:top-8">
            <OrderForm price={price} stock={stock} />
          </div>
        </div>

        {/* Trust Signals */}
        <section className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-display mb-8">Varför välja oss?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-card shadow-lg floating-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">Trygg Betalning</h3>
                <p className="text-muted-foreground">
                  SSL-krypterad betalning via Stripe. Dina uppgifter är alltid skyddade.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-card shadow-lg floating-card">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">Omedelbar Leverans</h3>
                <p className="text-muted-foreground">
                  Få din kod direkt i e-postkorgen inom 30 sekunder efter köpet.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-card shadow-lg floating-card">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">Premium Kvalitet</h3>
                <p className="text-muted-foreground">
                  Äkta telefonkort med full garanti. Fungerar på alla svenska nät.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-muted to-muted/50 mt-20 py-12 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 TelefonKort.se - Premium leverantör av svenska telefonkort
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Villkor</a>
            <a href="#" className="hover:text-primary transition-colors">Integritet</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
            <a href="#" className="hover:text-primary transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;