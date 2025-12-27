import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { CollectionCard } from "@/components/CollectionCard";
import { collections } from "@/data/store";

const Collections = () => {
  return (
    <Layout>
      <PageHeader 
        tag="Collections"
        title="Curate your products into simple collections."
        description="Use this page to group your products into simple collections, making it easy for customers to explore."
      />

      <section className="container-main py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </Layout>
  );
};

export default Collections;
