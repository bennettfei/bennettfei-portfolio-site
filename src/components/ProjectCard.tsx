import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  duration: string;
  details: string[];
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, duration, details }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative border-l border-border pl-8 pb-2"
    >
      <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-muted-foreground -translate-x-[4.5px] group-hover:bg-foreground transition-colors" />

      <div className="flex items-center gap-3 mb-1">
        <span className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">
          {duration}
        </span>
      </div>

      <h3 className="text-foreground text-xl font-semibold tracking-tight mb-3">
        {title}
      </h3>

      <ul className="max-w-2xl space-y-2">
        {details.map((detail) => (
          <li key={detail} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
            <span aria-hidden="true" className="mt-2 w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ProjectCard;
