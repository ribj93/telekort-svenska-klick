import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Package, Heart, CreditCard } from "lucide-react";

interface OrderFormProps {
  price: number;
  stock: number;
}

const OrderForm = ({ price, stock }: OrderFormProps) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [donation, setDonation] = useState(false);

  const subtotal = price * quantity;
  const donationAmount = donation ? 10 : 0;
  const total = subtotal + donationAmount;

  const handlePurchase = () => {
    console.log("Beställning:", {
      quantity,
      name,
      email,
      discountCode,
      donation,
      totalPrice: total
    });
  };

  const isFormValid = name.trim() !== "" && email.trim() !== "" && email.includes("@");

  return (
    <Card className="floating-card bg-gradient-card border-0 shadow-xl">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-display font-bold">Beställning</CardTitle>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Package className="w-3 h-3" />
            {stock} i lager
          </Badge>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-1">{price} kr</div>
          <p className="text-sm text-muted-foreground">per kort</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Quantity */}
        <div className="space-y-2">
          <Label htmlFor="quantity" className="font-medium">Antal kort</Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            max={stock}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.min(stock, parseInt(e.target.value) || 1)))}
            className="text-center font-semibold text-lg"
          />
        </div>

        <Separator />

        {/* Customer Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Kunduppgifter</h3>
          
          <div className="space-y-2">
            <Label htmlFor="name" className="font-medium">Namn</Label>
            <Input
              id="name"
              placeholder="Ditt fullständiga namn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="transition-all duration-200 focus:shadow-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-medium">E-postadress</Label>
            <Input
              id="email"
              type="email"
              placeholder="din.epost@exempel.se"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="transition-all duration-200 focus:shadow-md"
            />
            <p className="text-xs text-muted-foreground">För digitalt kvitto och leverans</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="discount" className="font-medium">Rabattkod (valfritt)</Label>
            <Input
              id="discount"
              placeholder="Ange eventuell rabattkod"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="transition-all duration-200 focus:shadow-md"
            />
          </div>
        </div>

        <Separator />

        {/* Donation */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <Checkbox
              id="donation"
              checked={donation}
              onCheckedChange={(checked) => setDonation(checked === true)}
              className="data-[state=checked]:bg-accent data-[state=checked]:border-accent"
            />
            <div className="flex-1">
              <Label htmlFor="donation" className="font-medium cursor-pointer">
                Stöd oss med 10 kr <Heart className="w-4 h-4 inline ml-1 text-red-500" />
              </Label>
              <p className="text-xs text-muted-foreground mt-1">
                Hjälp oss att hålla tjänsten igång
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-3 p-4 rounded-lg bg-muted/30 border border-muted">
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Ordersammanfattning</h4>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{quantity} × Telefonkort</span>
              <span className="font-medium">{subtotal} kr</span>
            </div>
            
            {donation && (
              <div className="flex justify-between text-accent">
                <span className="flex items-center gap-1">
                  Donation <Heart className="w-3 h-3" />
                </span>
                <span className="font-medium">{donationAmount} kr</span>
              </div>
            )}
            
            <Separator />
            
            <div className="flex justify-between text-lg font-bold">
              <span>Totalt</span>
              <span className="text-primary">{total} kr</span>
            </div>
          </div>
        </div>

        {/* Purchase Button */}
        <Button 
          variant="premium" 
          size="lg" 
          className="w-full text-lg h-14 pulse-glow"
          onClick={handlePurchase}
          disabled={!isFormValid}
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Slutför köp - {total} kr
        </Button>

        {!isFormValid && (
          <p className="text-sm text-muted-foreground text-center">
            Fyll i namn och e-post för att fortsätta
          </p>
        )}

        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          Genom att slutföra köpet godkänner du våra villkor. 
          Koden levereras automatiskt till din e-post inom 30 sekunder.
        </p>
      </CardContent>
    </Card>
  );
};

export default OrderForm;