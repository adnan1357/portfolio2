import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
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
  // Add other projects here...
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Featured Projects
        </h2>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
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