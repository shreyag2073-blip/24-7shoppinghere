import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface CollectionCardProps {
  id: string;
  name: string;
  image: string;
}

export function CollectionCard({ id, name, image }: CollectionCardProps) {
  return (
    <Link 
      to={`/collections/${id}`} 
      className="group block relative rounded-2xl overflow-hidden bg-muted aspect-[4/5]"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <h3 className="text-2xl md:text-3xl font-medium mb-4 text-center">{name}</h3>
        <img 
          src={image} 
          alt={name}
          className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <button className="arrow-button absolute bottom-4 right-4">
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </Link>
  );
}
