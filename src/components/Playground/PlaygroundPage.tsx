import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Microsoft Automations",
    description: "Connected multiple services via API's and Microsoft Power automate",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    tags: ["Power Automate", "Azure", "API Integration"]
  },
  {
    id: 2,
    title: "Cyber Essentials Plus Audit",
    description: "Auditing 100+ systems for Cyber Essentials Plus Certification",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    tags: ["Excel", "Sophos", "Security"]
  },
  {
    id: 3,
    title: "Automation Scripts",
    description: "Suite of automation scripts for common IT tasks",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["Python", "Bash", "Automation"]
  }
];

export const PlaygroundPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </button>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">Project Playground</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};