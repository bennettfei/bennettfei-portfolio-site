import React from 'react';
import ProjectCard from './ProjectCard';

import airFranceImg from '../assets/projects/airfrance.png';
import acmWebsiteImg from '../assets/projects/acm-website.png';
import officerDbImg from '../assets/projects/officer-db.png';
//import microsoftAdImg from '../assets/projects/microsoft-ad.png';
import utdGradesImg from '../assets/projects/utd-grades.png';
import uxperienceImg from '../assets/projects/uxperience.png';

const Projects = () => {
  const projects = [
    {
      slug: "airfrance-sem",
      title: "AirFrance SEM Case Study",
      image: airFranceImg,
      imageAlt: "AirFrance SEM case study thumbnail"
    },
    {
      slug: "acm-website",
      title: "ACM Website",
      image: acmWebsiteImg,
      imageAlt: "ACM Website project thumbnail",
      link: "https://acmutd.co"
    },
    {
      slug: "acm-officer-database",
      title: "ACM Officer Database",
      image: officerDbImg,
      imageAlt: "ACM Officer database project thumbnail"
    },
    /*{
      slug: "microsoft-ad",
      title: "Microsoft Server Active Directory",
      image: microsoftAdImg,
      imageAlt: "Microsoft Active Directory project thumbnail"
    },*/
    {
      slug: "utd-grades",
      title: "UTD Grades",
      image: utdGradesImg,
      imageAlt: "UTD Grades project thumbnail",
      link: "https://utdgrades.com"
    },
    {
      slug: "uxperience-echoes",
      title: "UXPerience: Echoes of Tomorrow",
      image: uxperienceImg,
      imageAlt: "UXPerience project thumbnail",
      link: "https://www.uxutd.com/design-a-thon"
    }
  ];

  return (
    <section id="projects" className="w-full px-6 md:px-12 lg:px-32 py-24 max-w-[1400px] mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 gradient-text">
          Projects
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            slug={project.slug}
            title={project.title}
            image={project.image}
            imageAlt={project.imageAlt}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;