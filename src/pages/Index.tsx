import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Download, Package, Truck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { CollectionCard } from "@/components/CollectionCard";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { products, collections, blogPosts, features } from "@/data/store";
import heroImage from "@/assets/hero-gradient.png";

const featureIcons = [Download, Package, Truck];

const Index = () => {
  const popularProducts = products.slice(0, 3);
  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative mx-4 lg:mx-8 rounded-2xl overflow-hidden">
        <div 
          className="relative min-h-[500px] md:min-h-[600px] flex items-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-main py-16 md:py-24">
            <div className="max-w-2xl">
              <span className="badge-tag mb-6 inline-flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Your One-Stop Shopping Destination
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 animate-fade-in">
                A refined <span className="italic">way to buy</span> everything you need.
              </h1>
              <p className="text-lg  text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
Crafted with performance and elegance to deliver a powerful online shopping experience.              </p>
              <Link to="/shop">
                <Button size="lg" className="rounded-full gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Shop Products
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Most Popular Section */}
      <section className="container-main py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium">Most Popular</h2>
            <p className="text-muted-foreground mt-2">Showcase your most popular products, front and center.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 hover:gap-3 transition-all text-sm font-medium">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <Link to="/shop" className="flex md:hidden items-center justify-center gap-2 mt-8 text-sm font-medium">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Testimonial Section */}
      <section className="container-main py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-muted rounded-2xl p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
              "Showcase customer testimonials that build trust and inspire confidence in your products."
            </blockquote>
            <div className="mt-6">
              <p className="font-medium">Your Customer</p>
            </div>
          </div>
          <div className="bg-muted rounded-2xl p-8 flex flex-col justify-between">
            <p className="text-muted-foreground">Feature client logos to build trust and credibility for your brand:</p>
            <div className="flex items-center gap-4 mt-6 opacity-50">
              <div className="w-8 h-8 bg-foreground/20 rounded-full"></div>
              <div className="w-8 h-8 bg-foreground/20 rounded-full"></div>
              <div className="w-8 h-8 bg-foreground/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="container-main py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium">Our Collections</h2>
            <p className="text-muted-foreground mt-2">Showcase all of the different collections you have to offer.</p>
          </div>
          <Link to="/collections" className="hidden md:flex items-center gap-2 hover:gap-3 transition-all text-sm font-medium">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CollectionCard {...collection} />
            </div>
          ))}
        </div>
      </section>

      {/* Features Banner */}
      <section className="container-main py-12">
        <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-medium max-w-2xl mx-auto mb-4">
            Showcase your products in action and outline their benefits.
          </h2>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-main py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium">Highlight what makes you stand out</h2>
          <p className="text-muted-foreground mt-2">Use this section to show off the key features like these.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div key={feature.title} className="text-center p-6">
                <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Blog Section */}
      <section className="container-main py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium">Explore the blog</h2>
            <p className="text-muted-foreground mt-2">Share insights, boost SEO, and build trust with your audience.</p>
          </div>
          <Link to="/blog" className="hidden md:flex items-center gap-2 hover:gap-3 transition-all text-sm font-medium">
            View Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {featuredPost && (
          <div className="mb-8">
            <BlogCard {...featuredPost} />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
