import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/store";

const categories = ["All", "Technology", "Footwear", "Home"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <Layout>
      <PageHeader 
        tag="Shop"
        title="Showcase all your products in one place."
        description="Use this page to display your full product collection, making it easy for customers to browse and shop."
      />

      <section className="container-main py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Sidebar */}
          <aside>
            <div className="sticky top-24">
              <h3 className="font-semibold text-lg mb-2">Shop</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Split your products into categories so visitors can easily navigate.
              </p>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeCategory === category
                        ? "bg-muted font-medium"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${
                      activeCategory === category ? "bg-foreground" : "bg-border"
                    }`} />
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
