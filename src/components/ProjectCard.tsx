import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link as LinkIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

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
          <div className="p-5">
            <div className="flex items-center gap-2">
              <h3 className="text-foreground text-sm md:text-base font-semibold tracking-tight">
                {title}
              </h3>
              {link ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={link}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-muted-foreground hover:bg-muted/50 hover:scale-100 transition-all duration-300 flex-shrink-0 rounded p-1 -m-1"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>check this out!</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <LinkIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
