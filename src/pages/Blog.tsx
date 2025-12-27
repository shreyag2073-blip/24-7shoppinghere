import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/store";

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <PageHeader 
        tag="Blog"
        title="Share valuable content on a regular basis."
        description="Use this space to publish engaging content that educates, inspires, and connects with your audience."
      />

      <section className="container-main py-16">
        {featuredPost && (
          <div className="mb-12">
            <BlogCard {...featuredPost} />
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post, index) => (
            <div 
              key={post.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
