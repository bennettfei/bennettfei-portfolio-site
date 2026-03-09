import React from 'react';
import ProjectCard from './ProjectCard';

import airFranceImg from '../assets/projects/airfrance.png';
import acmWebsiteImg from '../assets/projects/acm-website.png';
import acmWebsiteImg2 from '../assets/projects/acm-website-2.png';
import officerDbImg from '../assets/projects/officer-db.png';
import officerDbImg2 from '../assets/projects/officer-db-2.png';
//import microsoftAdImg from '../assets/projects/microsoft-ad.png';
import utdGradesImg from '../assets/projects/utd-grades.png';
import utdGradesImg2 from '../assets/projects/utd-grades-2.png';
import utdGradesImg4 from '../assets/projects/utd-grades-4.png';
import uxperienceImg from '../assets/projects/uxperience.png';

const Projects = () => {
  const projects = [
    {
      slug: "acm-website",
      title: "ACM Website",
      image: acmWebsiteImg,
      imageAlt: "ACM Website project thumbnail",
      link: "https://acmutd.co",
      category: "software"
    },
    {
      slug: "acm-officer-database",
      title: "ACM Officer Database",
      image: officerDbImg2,
      imageAlt: "ACM Officer database project thumbnail",
      category: "software"
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
      image: utdGradesImg4,
      imageAlt: "UTD Grades project thumbnail",
      link: "https://utdgrades.com",
      category: "software"
    },
    {
      slug: "airfrance-sem",
      title: "AirFrance SEM Case Study",
      image: airFranceImg,
      imageAlt: "AirFrance SEM case study thumbnail",
      category: "marketing"
    },
    {
      slug: "uxperience-echoes",
      title: "UXperience: Echoes of Tomorrow",
      image: uxperienceImg,
      imageAlt: "UXperience project thumbnail",
      link: "https://www.uxutd.com/design-a-thon",
      category: "marketing"
    }
  ];

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    const category = project.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const categoryTitles = {
    software: 'UX & Software Engineering',
    marketing: 'Marketing',
  };

  return (
    <section id="projects" className="w-full px-6 md:px-12 lg:px-32 py-24 max-w-[1400px] mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 gradient-text">
          Projects!
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full" />
      </div>
      
      {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            {categoryTitles[category as keyof typeof categoryTitles] || category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {categoryProjects.map((project, index) => (
              <ProjectCard
                key={index}
                slug={project.slug}
                title={project.title}
                image={project.image}
                imageUrl={project.image}
                imageAlt={project.imageAlt}
                link={project.link}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;