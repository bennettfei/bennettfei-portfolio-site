import React from 'react';
import { motion } from 'framer-motion';
import ClubCard from './ClubCard';
import acmLogo from '@/assets/clubs/acmlogo.png';
import uxclubLogo from '@/assets/clubs/uxclublogo.png';

const Clubs = () => {
  const clubs = [
    {
      name: "Association for Computing Machinery (ACM) at UTD",
      role: "Software Developer & Officer",
      duration: "February 2024 — Present",
      description: "Joined ACM as a freshman as a member of ACM projects working with software developers under the mentorship of an upperclassman project manager and industry mentors. Now I build and maintain software for in house projects and lead design strategy.",
      logo: acmLogo
    },
    {
      name: "UX Club at UTD",
      role: "Web Developer & Officer",
      duration: "July 2025 — Present",
      description: "Web Developer for the UX Club dedicated to promoting the design community at UTD. I lead the development and maintenance of the club's website, ensuring it effectively showcases our events, resources, and projects to our members and the broader UTD community.",
      logo: uxclubLogo
    },
  ];

  return (
    <section id="clubs" className="w-full px-6 md:px-12 lg:px-32 py-24 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="section-label mb-3">Involvement</p>
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 gradient-text">
          Clubs & Organizations
        </h2>
      </motion.div>
      
      <div className="grid gap-6 sm:gap-8">
        {clubs.map((club, index) => (
          <ClubCard
            key={index}
            name={club.name}
            role={club.role}
            duration={club.duration}
            description={club.description}
            logo={club.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Clubs;
