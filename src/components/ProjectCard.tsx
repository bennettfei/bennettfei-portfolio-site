import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  image,
  imageAlt,
  link
}) => {
  return (
    <Link to={`/projects/${slug}`}>
      <article className="group relative bg-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl border border-border/50">
        
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white
                         opacity-0 group-hover:opacity-100 transition"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <div className="p-6 relative">
          <h3 className="text-foreground text-xl font-bold tracking-wide group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
