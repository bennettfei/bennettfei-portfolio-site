import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  slug: string;
  title: string;
  image: string;
  imageUrl: string;
  imageAlt: string;
  index?: number;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ slug, title, imageUrl, imageAlt, index = 0, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/projects/${slug}`} className="group block">
        <article className="relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-border transition-all duration-500">
          <div className="relative overflow-hidden aspect-[16/10]">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          </div>
          <div className="p-5 flex items-center justify-between">
            {link ? (
              <a
                href={link}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground text-sm md:text-base font-semibold tracking-tight hover:underline"
              >
                {title}
              </a>
            ) : (
              <h3 className="text-foreground text-sm md:text-base font-semibold tracking-tight">
                {title}
              </h3>
            )}
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
