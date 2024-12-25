import React from 'react';
import { Building, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
  isVisible: boolean;
}

export const TimelineItem = ({ id, title, company, period, description, index, isVisible }: TimelineItemProps) => {
  return (
    <div
      id={`timeline-${id}`}
      className={`animate-on-scroll ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(4rem)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
        <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
          <div className="bg-white rounded-lg shadow-sm p-6 transform transition-transform hover:scale-105">
            <div className="flex items-center space-x-2 mb-2">
              <Building className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 mb-4">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            <p className="text-gray-700 font-medium mb-2">{company}</p>
            <ul className="text-gray-600 space-y-2">
              {description.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
          <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow" />
        </div>
      </div>
    </div>
  );
};