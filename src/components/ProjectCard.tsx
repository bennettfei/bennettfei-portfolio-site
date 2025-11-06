import React from 'react';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, imageAlt }) => {
  return (
    <article className="group relative bg-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl border border-border/50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6 relative">
        <h3 className="text-foreground text-xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default ProjectCard;
