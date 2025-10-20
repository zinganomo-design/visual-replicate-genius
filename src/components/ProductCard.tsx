import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  isOutOfStock?: boolean;
}

const ProductCard = ({ image, name, description, price, isOutOfStock }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border group">
      <div className="relative aspect-square bg-secondary/20 p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {isOutOfStock && (
          <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
            OUT OF STOCK
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground line-clamp-2">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">{price}</span>
          <Button 
            size="icon" 
            className="rounded-full bg-primary hover:bg-primary-dark"
            disabled={isOutOfStock}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
