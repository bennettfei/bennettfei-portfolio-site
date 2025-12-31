import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

import airFranceImg from '../assets/projects/airfrance.png';
import acmWebsiteImg from '../assets/projects/acm-website.png';
import officerDbImg from '../assets/projects/officer-db.png';
//import microsoftAdImg from '../assets/projects/microsoft-ad.png';
import utdGradesImg from '../assets/projects/utd-grades.png';
import uxperienceImg from '../assets/projects/uxperience.png';

const projectData: Record<string, {
  title: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
}> = {
  'airfrance-sem': {
    title: 'AirFrance SEM Case Study',
    description: 'A data-driven analysis of Air France’s U.S. and global search engine marketing (SEM) performance using campaign data from DoubleClick and Kayak. The case study evaluates publisher, campaign, and keyword level performance to identify which channels were driving high-quality traffic and macro-level conversions, with the goal of optimizing overall SEM efficiency and return on investment.',
    image: airFranceImg,
    challenge: 'Air France sought to improve the effectiveness of its search engine marketing strategy across multiple publishers while operating under budget constraints. With varying performance across publishers, campaigns, and keywords, the challenge was to determine where incremental SEM spend generated meaningful macro-level conversions rather than low-value traffic. The analysis required balancing brand and non-brand keywords, understanding diminishing returns, and reallocating budget toward the most impactful channels.',
    solution: 'Analyzed SEM performance data from DoubleClick and Kayak at the publisher, campaign, and keyword level using metrics such as CTR, CPC, conversion rate, and ROI. Compared brand and non-brand keyword strategies, evaluated marginal returns under different budget allocation scenarios, and identified high-performing segments that drove profitable conversions. Based on these insights, developed a data-backed SEM optimization strategy focused on reallocating spend toward higher-intent traffic and improving overall campaign efficiency.',
    outcome: 'The analysis produced clear, actionable recommendations for optimizing Air France’s SEM strategy, including which publishers and keyword segments delivered the strongest macro-level conversion performance. The final strategy demonstrated how targeted budget reallocation could improve ROI, reduce inefficient spend, and align SEM investments more closely with business-level conversion goals.'
  },
  'acm-website': {
    title: 'ACM Website',
    description: 'An ongoing website redesign project for the Association for Computing Machinery (ACM) student chapter at UTD.',
    image: acmWebsiteImg,
    challenge: 'Transform an outdated and difficult-to-navigate site into a modern, user-friendly, and informative platform that clearly communicates the chapter’s mission, showcases upcoming events, and provides easy access to resources. The redesign needed to support both current members (seeking updates, opportunities, and information) and new students learning about ACM for the first time.',
    solution: 'Built a responsive, accessible website with improved navigation and content management.',
    outcome: 'The redesigned site drove significantly higher engagement, increased engagement, and reduced friction for new members exploring opportunities. Officers reported faster content updates, better visibility for programs, and an overall smoother digital experience for the chapter.'
  },
  'acm-officer-database': {
    title: 'ACM Officer Database',
    description: 'A full-scale database system built to streamline the management of ACM officer information, roles, committees, and chapter activities. The system was designed to support better operational visibility, reduce manual work, and centralize data that had previously been scattered across spreadsheets and documents.',
    image: officerDbImg,
    challenge: 'ACM leadership needed a unified platform to efficiently track officer roles, responsibilities, onboarding details, event involvement, and organizational activities. The previous process relied on manual updates and inconsistent record-keeping, making it difficult to maintain accurate information or coordinate cross-team initiatives. The goal was to design a reliable, scalable solution that could grow with the chapter.',
    solution: 'Developed a robust database with intuitive interfaces for data entry and retrieval. The system included role-based access controls, user-friendly interfaces to reduce friction for those unfamiliar with databases, and filtering tools for database entries.',
    outcome: 'The new system significantly improved internal coordination, reduced time spent on administrative tasks, and ensured that officer information remained accurate and accessible. Chapter leadership reported smoother onboarding, and a significant increase in overall ease of use.'
  },
  'utd-grades': {
    title: 'UTD Grades',
    description: 'A data-driven grade tracking and analytics platform designed to help university students better understand historical course performance trends. The platform aggregates grade distribution data and transforms it into clear, actionable insights to support smarter academic planning.',
    image: utdGradesImg,
    challenge: 'Students often struggle to choose courses strategically due to limited visibility into grading patterns, instructor difficulty, and historical performance metrics. Official grade reports are fragmented, hard to interpret, and not easily comparable across semesters or instructors. The goal was to maintain a centralized tool that enables students to make informed decisions about course selection, workload balancing, and long-term academic strategy. NOTE: I am not the original creator of UTD Grades, only the current maintainer and developer.',
    solution: 'Built upon the existing UTD Grades by incorporating Rate My Professor within the platform, allowing students to access both grade distributions and professor reviews in one place. Implemented a 1-5 review score for the course section within the UI as well.',
    outcome: 'The platform enabled thousands of data-driven decisions by giving UTD students clearer insight into course difficulty and grading fairness. Users reported feeling more confident in selecting classes, balancing semester workloads, and planning degree paths. The tool became a go-to resource for transparent academic decision-making.'
  },
  'uxperience-echoes': {
    title: 'UXPerience: Echoes of Tomorrow (Event)',
    description: 'A fast-paced 24-hour UX design challenge where participants were tasked with imagining the future of digital experiences. The event brought together designers, developers, and product thinkers to rapidly ideate, prototype, and present forward-looking solutions.',
    image: uxperienceImg,
    challenge: 'Plan, design, and execute a hackathon-style event that encouraged deep creative thinking while maintaining structure, pacing, and engagement. This included defining a theme, coordinating logistics, supporting cross-functional teams, and ensuring participants had the guidance and resources needed to explore “future-state” user experiences.',
    solution: 'Developed structured workshops and collaborative tools to facilitate creativity and innovation between participants.',
    outcome: 'Exceeded attendance records by over 50% and created an event that resonated with both users and industry mentors.'
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
            src={project.image} 
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
