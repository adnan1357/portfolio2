import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectTabs } from './ProjectTabs';
import { ProjectDetails } from './ProjectDetails';
import { Project } from './types';

const projects: Project[] = [
  {
    id: 1,
    title: "Microsoft Automations",
    description: "Connected multiple services to via API's and Microsoft Power automate to automate the onboarding process",
    tags: ["Power Automate", "Azure", "API Integration"],
    details: [
      "Implemented APIs for Automation",
      "Developed automated error handling and retry mechanisms",
      "Created an onboarding flow which connected Azure to external servicex",
      "Reduced manual onboarding time by 100%"
    ]
  },
  {
    id: 2,
    title: "Cyber Essentials Plus Audit",
    description: "Assisted in Auditing 100+ systems for Cyber Essentials Plus Certification",
    tags: ["Excel", "Sophos", "Security"],
    details: [
      "Real-time threat detection and alerting",
      "Integration with multiple security data sources",
      "Automated incident reporting system"
    ]
  },
  {
    id: 3,
    title: "Automation Scripts",
    description: "Created a suite of automation scripts for common IT tasks, saving 10+ hours per week",
    tags: ["Python", "Bash", "Automation"],
    details: [
      "Automated system health checks and reporting",
      "Developed backup verification scripts",
      "Created user management automation tools",
      "Implemented automated deployment pipelines"
    ]
  }
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setShowDetails(false);
  }, [activeProject]);

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          What I have worked on:
        </h2>
        
        <ProjectTabs
          projects={projects}
          activeProject={activeProject}
          onTabChange={setActiveProject}
        />

        <div className="flex justify-center">
          <div 
            ref={ref}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden w-full max-w-2xl"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(2rem)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <ProjectDetails
              project={projects[activeProject]}
              showDetails={showDetails}
              onToggleDetails={() => setShowDetails(!showDetails)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};