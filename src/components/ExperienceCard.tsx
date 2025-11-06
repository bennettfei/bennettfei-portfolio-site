import React from 'react';

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
    <article className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start gap-6">
        {logo && (
          <div className="flex-shrink-0 w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {logo}
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
            <h3 className="text-foreground text-2xl font-bold group-hover:text-primary transition-colors">
              {position} <span className="text-muted-foreground">@</span> {company}
            </h3>
            <time className="text-muted-foreground text-sm font-medium px-4 py-1.5 bg-accent rounded-full whitespace-nowrap">
              {duration}
            </time>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
