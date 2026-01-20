import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {

  const experiences = [
    {
      company: "Beats",
      position: "Data Analytics Extern",
      duration: "Nov 2024 - Jan 2025",
      description: "Conducted an in-depth analysis of survey responses from Beats by Dre consumers across diverse demographics to identify key pain points in wireless speakers from multiple brands. Leveraged the data to develop actionable recommendations aimed at enhancing Beats by Dre's wireless speaker product design.",
    },
    {
      company: "Assistance Center of Collin County",
      position: "Marketing Intern",
      duration: "Jun 2021 - Jul 2021",
      description: "Designed promotional materials using Adobe Creative Suite to strengthen community outreach and advertising campaigns. Partnered with operations leadership and cross-functional teams to create engaging marketing campaigns that increased brand visibility and outreach.",
      logo: null
    }
  ];

  return (
    <section id="experience" className="w-full px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="gradient-text text-4xl md:text-5xl font-extrabold uppercase text-foreground tracking-tight mb-4">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full" />
      </div>
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            position={experience.position}
            duration={experience.duration}
            description={experience.description}
            logo={experience.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
