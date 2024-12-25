import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from './types';

interface ProjectDetailsProps {
  project: Project;
  showDetails: boolean;
  onToggleDetails: () => void;
}

export const ProjectDetails = ({ project, showDetails, onToggleDetails }: ProjectDetailsProps) => {
  return (
    <div className="p-8">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={onToggleDetails}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {project.title}
        </h3>
        {showDetails ? 
          <ChevronUp className="w-6 h-6 text-blue-600" /> : 
          <ChevronDown className="w-6 h-6 text-blue-600" />
        }
      </div>
      <p className="text-gray-600 mb-6 text-lg">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {showDetails && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h4>
          <ul className="space-y-3">
            {project.details.map((detail, index) => (
              <li key={index} className="text-gray-600 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};