import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const Experience = () => {

  const experiences = [
    {
      company: "Safran Helicopter Engines",
      position: "Business Data Analyst Intern",
      duration: "May 2026 — Dec 2026",
      description: "Intern within the Customer Support department leveraging data analysis, automation, and systems design skills to build and justify scalable, user-friendly solutions that streamline in-house operations, simplify workflows, support customer-facing sales, and improve data-driven decision-making across regional teams.",
      logo: null
    },
    {
      company: "Beats by Dre",
      position: "Data Analytics Extern",
      duration: "Nov 2024 — Jan 2025",
      description: "Conducted an in-depth analysis of survey responses from Beats by Dre consumers across diverse demographics to identify key pain points in wireless speakers. Leveraged data to develop actionable recommendations for enhancing product design.",
      logo: null
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
    <section id="experience" className="w-full px-6 md:px-12 lg:px-32 py-24 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="section-label mb-3">Background</p>
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 gradient-text">
          Experience!
        </h2>
      </motion.div>
      
      <div className="space-y-10 ml-2">
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
