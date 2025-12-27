interface PageHeaderProps {
  tag: string;
  title: string;
  description: string;
}

export function PageHeader({ tag, title, description }: PageHeaderProps) {
  return (
    <section className="bg-lavender py-16 md:py-24 rounded-2xl mx-4 lg:mx-8">
      <div className="container-main text-center">
        <span className="badge-tag mb-6">{tag}</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance max-w-3xl mx-auto mb-6">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
