import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      slug: "uxperience-echoes",
      title: "UXPerience: Echoes of Tomorrow",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/42a1cc8caee30ad1ee43bc5b706781607e88b62a?width=780",
      imageAlt: "UXPerience: Echoes of tomorrow project thumbnail"
    },
    {
      slug: "acm-website",
      title: "ACM Website",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/6b4f2bc8bb38809625a79d97392d889366e7e2a8?width=780",
      imageAlt: "ACM Website project thumbnail"
    },
    {
      slug: "acm-officer-database",
      title: "ACM Officer Database",
      imageUrl: "https://i.postimg.cc/QMGrwyVp/project-thumbnail-1.png",
      imageAlt: "ACM Officer database project thumbnail"
    },
    {
      slug: "utd-grades",
      title: "UTD Grades",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/38d4dc3272b5249a2d0adc25dd9a993a8e0c526e?width=780",
      imageAlt: "UTD Grades project thumbnail"
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
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;