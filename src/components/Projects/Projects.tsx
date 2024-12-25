import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProjectDetail } from './ProjectDetail';
import { ProjectCarousel } from './Carousel/ProjectCarousel';
import { Project } from './types';

const projects: Project[] = [
  {
    id: 1,
    title: "Microsoft Automations",
    description: "Connected multiple services to via API's and Microsoft Power automate to automate the onboarding process",
    longDescription: "A comprehensive automation solution that streamlined the employee onboarding process by connecting various Microsoft services through APIs and Power Automate workflows.",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    tags: ["Power Automate", "Azure", "API Integration"],
    details: {
      challenge: "Manual onboarding processes were time-consuming and error-prone, taking up valuable HR resources.",
      solution: "Implemented an automated workflow using Power Automate to connect multiple services and handle the entire onboarding process.",
      impact: "Reduced onboarding time by 100% and eliminated manual errors in the process."
    },
    technologies: ["Power Automate", "Azure AD", "Microsoft Graph API", "SharePoint"],
    icons: {
      main: "/microsoft.svg",
      tech: ["/power-automate.svg", "/azure.svg", "/graph.svg", "/sharepoint.svg"]
    }
  },
  {
    id: 2,
    title: "Cyber Essentials Plus Audit",
    description: "Comprehensive system audit for security certification",
    longDescription: "Led the audit of over 100 systems to ensure compliance with Cyber Essentials Plus certification requirements.",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    tags: ["Security", "Compliance", "Audit"],
    details: {
      challenge: "Ensuring compliance across a large system infrastructure while maintaining operational efficiency.",
      solution: "Developed systematic audit procedures and implemented automated security checks.",
      impact: "Successfully achieved certification and improved overall security posture."
    },
    technologies: ["Sophos", "Excel", "PowerShell", "Security Tools"],
    icons: {
      main: "/security.svg",
      tech: ["/sophos.svg", "/excel.svg", "/powershell.svg", "/security.svg"]
    }
  },
  {
    id: 3,
    title: "Automation Scripts",
    description: "Suite of automation scripts for common IT tasks",
    longDescription: "Created a comprehensive collection of automation scripts to streamline routine IT operations and maintenance tasks.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["Python", "Bash", "Automation"],
    details: {
      challenge: "Time-consuming manual IT tasks reducing team productivity.",
      solution: "Developed reusable automation scripts for common operations.",
      impact: "Reduced task completion time by 75% and improved consistency."
    },
    technologies: ["Python", "Bash", "PowerShell", "Git"],
    icons: {
      main: "/python.svg",
      tech: ["/python.svg", "/bash.svg", "/powershell.svg", "/git.svg"]
    }
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Featured Projects
        </h2>
        
        <div ref={ref}>
          <ProjectCarousel
            projects={projects}
            currentIndex={currentIndex}
            onNext={nextProject}
            onPrevious={previousProject}
            onSelect={setCurrentIndex}
            onProjectClick={setSelectedProject}
          />
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};