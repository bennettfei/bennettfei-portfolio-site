import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const projectData: Record<string, {
  title: string;
  description: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  outcome: string;
}> = {
  'uxperience-echoes': {
    title: 'UXPerience: Echoes of Tomorrow (Event)',
    description: 'A fast-paced 24-hour UX design challenge where participants were tasked with imagining the future of digital experiences. The event brought together designers, developers, and product thinkers to rapidly ideate, prototype, and present forward-looking solutions.',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/42a1cc8caee30ad1ee43bc5b706781607e88b62a?width=780',
    challenge: 'Plan, design, and execute a hackathon-style event that encouraged deep creative thinking while maintaining structure, pacing, and engagement. This included defining a theme, coordinating logistics, supporting cross-functional teams, and ensuring participants had the guidance and resources needed to explore “future-state” user experiences.',
    solution: 'Developed structured workshops and collaborative tools to facilitate creativity and innovation between participants.',
    outcome: 'Exceeded attendance records by over 50% and created an event that resonated with both users and industry mentors.'
  },
  'acm-website': {
    title: 'ACM Website',
    description: 'An ongoing website redesign project for the Association for Computing Machinery (ACM) student chapter at UTD.',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/6b4f2bc8bb38809625a79d97392d889366e7e2a8?width=780',
    challenge: 'Transform an outdated and difficult-to-navigate site into a modern, user-friendly, and informative platform that clearly communicates the chapter’s mission, showcases upcoming events, and provides easy access to resources. The redesign needed to support both current members (seeking updates, opportunities, and information) and new students learning about ACM for the first time.',
    solution: 'Built a responsive, accessible website with improved navigation and content management.',
    outcome: 'The redesigned site drove significantly higher engagement, increased engagement, and reduced friction for new members exploring opportunities. Officers reported faster content updates, better visibility for programs, and an overall smoother digital experience for the chapter.'
  },
  'acm-officer-database': {
    title: 'ACM Officer Database',
    description: 'A full-scale database system built to streamline the management of ACM officer information, roles, committees, and chapter activities. The system was designed to support better operational visibility, reduce manual work, and centralize data that had previously been scattered across spreadsheets and documents.',
    imageUrl: 'https://i.postimg.cc/QMGrwyVp/project-thumbnail-1.png',
    challenge: 'ACM leadership needed a unified platform to efficiently track officer roles, responsibilities, onboarding details, event involvement, and organizational activities. The previous process relied on manual updates and inconsistent record-keeping, making it difficult to maintain accurate information or coordinate cross-team initiatives. The goal was to design a reliable, scalable solution that could grow with the chapter.',
    solution: 'Developed a robust database with intuitive interfaces for data entry and retrieval. The system included role-based access controls, user-friendly interfaces to reduce friction for those unfamiliar with databases, and filtering tools for database entries.',
    outcome: 'The new system significantly improved internal coordination, reduced time spent on administrative tasks, and ensured that officer information remained accurate and accessible. Chapter leadership reported smoother onboarding, and a significant increase in overall ease of use.'
  },
  'utd-grades': {
    title: 'UTD Grades',
    description: 'A data-driven grade tracking and analytics platform designed to help university students better understand historical course performance trends. The platform aggregates grade distribution data and transforms it into clear, actionable insights to support smarter academic planning.',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/38d4dc3272b5249a2d0adc25dd9a993a8e0c526e?width=780',
    challenge: 'Students often struggle to choose courses strategically due to limited visibility into grading patterns, instructor difficulty, and historical performance metrics. Official grade reports are fragmented, hard to interpret, and not easily comparable across semesters or instructors. The goal was to maintain a centralized tool that enables students to make informed decisions about course selection, workload balancing, and long-term academic strategy. NOTE: I am not the original creator of UTD Grades, only the current maintainer and developer.',
    solution: 'Built upon the existing UTD Grades by incorporating Rate My Professor within the platform, allowing students to access both grade distributions and professor reviews in one place. Implemented a 1-5 review score for the course section within the UI as well.',
    outcome: 'The platform enabled thousands of data-driven decisions by giving UTD students clearer insight into course difficulty and grading fairness. Users reported feeling more confident in selecting classes, balancing semester workloads, and planning degree paths. The tool became a go-to resource for transparent academic decision-making.'
  }
};

const ProjectCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-background">
        <Header />
        <main className="pt-32 px-6 md:px-12 lg:px-32 max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 px-6 md:px-12 lg:px-32 pb-24 max-w-[1400px] mx-auto">
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 gradient-text">
          {project.title}
        </h1>

        <div className="mb-12">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Outcome</h2>
            <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectCaseStudy;
