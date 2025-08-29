import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import telefonkortImage from "@/assets/telefonkort-premium.png";
import { Zap, Shield, Clock } from "lucide-react";

const ProductCard = () => {
  return (
    <Card className="floating-card bg-gradient-card border-0 shadow-xl overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Section */}
        <div className="relative bg-gradient-hero text-primary-foreground p-8 text-center">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Badge className="bg-accent text-accent-foreground font-semibold px-4 py-2 mb-4 shadow-accent">
              <Zap className="w-4 h-4 mr-2" />
              Automatisk leverans inom 30 sekunder
            </Badge>
            <h1 className="text-4xl font-bold font-display mb-2">Telefonkort</h1>
            <p className="text-xl opacity-90">100 markeringar</p>
          </div>
        </div>

        {/* Product Image Section */}
        <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 p-12">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative">
              <img
                src={telefonkortImage}
                alt="Telefonkort 100 markeringar"
                className="max-w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="px-8 py-6 bg-white/50">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <Shield className="w-6 h-6 text-success mx-auto" />
              <p className="text-sm font-medium text-muted-foreground">Trygg betalning</p>
            </div>
            <div className="space-y-2">
              <Clock className="w-6 h-6 text-accent mx-auto" />
              <p className="text-sm font-medium text-muted-foreground">Snabb leverans</p>
            </div>
            <div className="space-y-2">
              <Zap className="w-6 h-6 text-primary mx-auto" />
              <p className="text-sm font-medium text-muted-foreground">Automatiskt</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;