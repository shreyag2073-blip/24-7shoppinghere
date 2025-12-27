import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <PageHeader
          tag="Cart"
          title="Your cart is empty"
          description="Browse our products and add items to your cart."
        />
        <section className="container-main py-16">
          <div className="flex flex-col items-center justify-center gap-6">
            <ShoppingBag className="w-24 h-24 text-muted-foreground/50" />
            <p className="text-muted-foreground">No items in your cart yet.</p>
            <Link to="/shop">
              <Button className="rounded-full">Continue Shopping</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        tag="Cart"
        title="Your shopping cart"
        description="Review your items and proceed to checkout."
      />
      
      <section className="container-main py-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Cart Items */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <h2 className="font-semibold text-lg">
                {items.length} {items.length === 1 ? "Item" : "Items"}
              </h2>
              <Button variant="ghost" size="sm" onClick={clearCart} className="text-muted-foreground hover:text-destructive">
                Clear Cart
              </Button>
            </div>
            
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-4 bg-muted rounded-2xl animate-fade-in"
              >
                <div className="w-24 h-24 bg-background rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground">USD ${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-accent transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-accent transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-muted rounded-2xl p-6 space-y-6">
              <h2 className="font-semibold text-lg">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>USD ${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>USD ${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full rounded-full" size="lg">
                Proceed to Checkout
              </Button>
              
              <Link to="/shop" className="block">
                <Button variant="outline" className="w-full rounded-full" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
