import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  category: string;
  image: string;
  featured?: boolean;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
  description?: string;
}

export function BlogCard({ slug, title, category, image, featured, author, description }: BlogCardProps) {
  if (featured) {
    return (
      <Link 
        to={`/blog/${slug}`}
        className="group block relative rounded-2xl overflow-hidden bg-lavender"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <span className="badge-tag absolute top-4 left-4 z-10">Must Read</span>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4">{title}</h3>
              {description && (
                <p className="text-muted-foreground">{description}</p>
              )}
            </div>
            <div className="flex items-center justify-between mt-6">
              {author && (
                <div className="flex items-center gap-3">
                  <img 
                    src={author.avatar} 
                    alt={author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Written by {author.name}</p>
                    <p className="text-xs text-muted-foreground">{author.role}</p>
                  </div>
                </div>
              )}
              <button className="arrow-button">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/blog/${slug}`}
      className="group block"
    >
      <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] mb-4">
        <span className="badge-tag absolute top-4 left-4 z-10">{category}</span>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-medium text-lg group-hover:underline">{title}</h3>
    </Link>
  );
}
