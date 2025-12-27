import { Link } from "react-router-dom";
import { ArrowUpRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  category?: string;
  price: number;
  image: string;
}

export function ProductCard({ id, name, category, price, image }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="block">
      <Link to={`/shop/${id}`}>
        <div className="card-product group">
          <div className="relative aspect-square p-8">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <button className="arrow-button absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-4 space-y-2">
        <Link to={`/shop/${id}`}>
          <h3 className="font-medium text-lg hover:text-primary transition-colors">{name}</h3>
        </Link>
        {category && (
          <p className="text-sm text-muted-foreground">{category}</p>
        )}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">USD ${price.toFixed(2)}</p>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full gap-1.5"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
