import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const BeatsLogo = () => (
    <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3008_4)">
        <path d="M34.9564 17.4993C34.9564 19.7918 34.5049 22.0619 33.6276 24.1799C32.7504 26.2978 31.4645 28.2223 29.8436 29.8433C28.2226 31.4644 26.2982 32.7503 24.1803 33.6276C22.0624 34.5049 19.7925 34.9564 17.5001 34.9564C15.2077 34.9564 12.9377 34.5049 10.8198 33.6276C8.7019 32.7503 6.77753 31.4644 5.15655 29.8433C3.53558 28.2223 2.24975 26.2978 1.37248 24.1799C0.49522 22.0619 0.0437011 19.7918 0.0437012 17.4993C0.0437011 15.2068 0.49522 12.9368 1.37248 10.8188C2.24975 8.70079 3.53558 6.77634 5.15655 5.1553C6.77753 3.53426 8.7019 2.24838 10.8198 1.37108C12.9377 0.493777 15.2077 0.0422363 17.5001 0.0422363C19.7925 0.0422363 22.0624 0.493777 24.1803 1.37108C26.2982 2.24838 28.2226 3.53426 29.8436 5.1553C31.4645 6.77634 32.7504 8.70079 33.6276 10.8188C34.5049 12.9368 34.9564 15.2068 34.9564 17.4993Z" fill="white" />
        <path d="M22.8213 17.4993C22.8213 14.5604 20.4392 12.1781 17.5005 12.1781C14.5616 12.1781 12.1793 14.5604 12.1793 17.4993C12.1793 20.438 14.5616 22.8204 17.5005 22.8204C20.4392 22.8204 22.8213 20.438 22.8213 17.4993Z" fill="#ED1C24" />
        <path d="M17.5008 0.0422363C15.8377 0.0422363 14.2311 0.279766 12.7073 0.714213V10.1503C14.0855 9.24964 15.7311 8.72409 17.5005 8.72409C22.3465 8.72409 26.2755 12.6529 26.2755 17.4993C26.2755 22.3457 22.3465 26.2745 17.5005 26.2745C12.6541 26.2745 8.72521 22.3457 8.72521 17.4993C8.72521 17.3434 8.72965 17.1885 8.73751 17.0346L8.72521 17.0443V2.41081C3.53471 5.43617 0.0437012 11.0583 0.0437012 17.4993C0.0437012 27.1404 7.85967 34.9564 17.5008 34.9564C27.1419 34.9564 34.9564 27.1404 34.9564 17.4993C34.9564 7.85821 27.1419 0.0422363 17.5008 0.0422363Z" fill="#ED1C24" />
      </g>
      <defs><clipPath id="clip0_3008_4"><rect width="35" height="35" fill="white" /></clipPath></defs>
    </svg>
  );

  const experiences = [
    {
      company: "Beats by Dre",
      position: "Data Analytics Extern",
      duration: "Nov 2024 — Jan 2025",
      description: "Conducted an in-depth analysis of survey responses from Beats by Dre consumers across diverse demographics to identify key pain points in wireless speakers. Leveraged data to develop actionable recommendations for enhancing product design.",
      logo: <BeatsLogo />
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
    <section id="experience" className="w-full px-6 md:px-12 lg:px-16 py-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="section-label mb-3">Background</p>
        <h2 className="section-heading text-foreground text-4xl md:text-5xl font-bold">
          Experience
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
