import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import telefonkortImage from "@/assets/telefonkort.png";

const Index = () => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [donation, setDonation] = useState(false);

  const price = 150;
  const stock = 7;

  const handlePurchase = () => {
    // Här skulle betalningslogik implementeras
    console.log("Beställning:", {
      quantity,
      name,
      email,
      discountCode,
      donation,
      totalPrice: price * quantity + (donation ? 10 : 0)
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-header text-primary-foreground py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Telefonkort – 100 markeringar</h1>
          <Button variant="secondary" size="sm">
            Logga in
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        <Card className="shadow-card overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-muted to-muted/50 p-8 flex items-center justify-center">
                <img
                  src={telefonkortImage}
                  alt="Telefonkort 100 markeringar"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Product Info & Form */}
              <div className="p-8 space-y-6">
                {/* Delivery Badge */}
                <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">
                  ⚡️ Automatisk leverans inom 30 sekunder
                </Badge>

                {/* Product Title */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Telefonkort 100 markeringar
                  </h2>
                  <p className="text-muted-foreground">
                    Snabb leverans och trygg betalning.
                  </p>
                </div>

                {/* Price & Stock */}
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">
                    {price} kr/st
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📦</span>
                    <span>Kort i lager: {stock}</span>
                  </div>
                </div>

                {/* Order Form */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="quantity">Antal kort</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max={stock}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="name">Namn</Label>
                    <Input
                      id="name"
                      placeholder="Ditt namn"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-post (digitalt kvitto)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Din e-post"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="discount">Rabattkod (valfritt)</Label>
                    <Input
                      id="discount"
                      placeholder="Ange rabattkod"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  {/* Donation Checkbox */}
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="donation"
                      checked={donation}
                      onCheckedChange={(checked) => setDonation(checked === true)}
                    />
                    <Label htmlFor="donation" className="text-sm">
                      Hjälp oss att hålla sidan vid liv (10kr) ❤️
                    </Label>
                  </div>

                  {/* Total Price */}
                  {(quantity > 1 || donation) && (
                    <div className="pt-4 border-t border-border">
                      <div className="text-right space-y-1 text-sm">
                        <div>Kort: {quantity} × {price} kr = {quantity * price} kr</div>
                        {donation && <div>Donation: 10 kr</div>}
                        <div className="font-bold text-lg">
                          Totalt: {quantity * price + (donation ? 10 : 0)} kr
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Purchase Button */}
                  <Button 
                    variant="telefonkort" 
                    size="lg" 
                    className="w-full text-lg font-semibold"
                    onClick={handlePurchase}
                    disabled={!name || !email}
                  >
                    Köp nu
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;