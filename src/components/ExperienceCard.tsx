import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  description: string;
  logo?: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  duration,
  description,
  logo
}) => {
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
        {logo && (
          <div className="w-8 h-8 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
            {logo}
          </div>
        )}
        <span className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">
          {duration}
        </span>
      </div>
      
      <h3 className="text-foreground text-xl font-semibold tracking-tight mb-1">
        {position}
      </h3>
      <p className="text-muted-foreground text-sm font-medium mb-3">{company}</p>
      
      <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
        {description}
      </p>
    </motion.article>
  );
};

export default ExperienceCard;
