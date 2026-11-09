import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Uplift Education AI Strategy & Implementation',
      duration: 'August 2026 – December 2026',
      details: [
        'Served as primary client liaison for Uplift Education, coordinating stakeholder interviews, external AI expert consultations, and client meetings to gather requirements and identify opportunities for AI integration in secondary education.',
        'Conducted primary research through high school student surveys and technical evaluations of AI learning platforms, assessing student needs, academic effectiveness, implementation feasibility, and scalability to inform data-driven recommendations.',
        'Co-developed a budget-aligned AI pilot strategy, defining implementation requirements, student achievement KPIs, and control-group methodologies to evaluate educational impact and support organization-wide adoption.',
      ],
    },
    {
      title: 'Air France SEM Optimization',
      duration: 'November 2025 – December 2025',
      details: [
        'Cleaned and preprocessed large paid search datasets in Excel to ensure data accuracy before analyzing CTR, CPC, conversion rate, and ROI across multiple keyword groups to identify inefficiencies and high-value opportunities.',
        'Evaluated trade-offs between brand and non-brand keywords by comparing cost structures, conversion behavior, and diminishing returns, and recommended a balanced strategy to maximize overall campaign performance.',
      ],
    },
  ];

  return (
    <section id="projects" className="w-full px-6 md:px-12 lg:px-32 py-24 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="section-label mb-3">Academic project experience</p>
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 gradient-text">
          Projects!
        </h2>
      </motion.div>

      <div className="space-y-10 ml-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            duration={project.duration}
            details={project.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
