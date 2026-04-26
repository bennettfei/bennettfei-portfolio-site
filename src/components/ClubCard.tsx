import React from 'react';
import { motion } from 'framer-motion';

interface ClubCardProps {
  name: string;
  role: string;
  duration: string;
  description: string;
  logo?: string | React.ReactNode;
}

const ClubCard: React.FC<ClubCardProps> = ({
  name,
  role,
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
      className="group relative border border-border rounded-lg p-6 hover:border-foreground/50 transition-colors bg-card/50 backdrop-blur-sm"
    >
      <div className="flex gap-6 items-start">
        {/* Logo Container */}
        {logo && (
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-muted transition-colors overflow-hidden">
              {typeof logo === 'string' ? (
                <img src={logo} alt={name} className="w-full h-full object-cover" />
              ) : (
                <div className="text-2xl">{logo}</div>
              )}
            </div>
          </div>
        )}
        
        {/* Content Container */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-2">
            <div className="flex-1">
              <h3 className="text-foreground text-lg md:text-xl font-semibold tracking-tight mb-1">
                {name}
              </h3>
              <p className="text-muted-foreground text-sm font-medium mb-1">{role}</p>
            </div>
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground whitespace-nowrap">
              {duration}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default ClubCard;
