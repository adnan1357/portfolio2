import React from 'react';
import { motion } from 'framer-motion';

export const Introduction = () => {
  const scrollToEducation = () => {
    const educationSection = document.getElementById('education');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('journey');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Adnan 👋
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
              Support Engineer & Technical Specialist
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Passionate about bridging the gap between complex systems and seamless user experiences. 
              With expertise in cloud platforms and integration solutions, I transform technical 
              challenges into efficient, automated workflows that drive business success. 
              My approach combines technical precision with creative problem-solving to deliver 
              robust, scalable solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div 
                className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors h-full flex flex-col justify-between"
                onClick={scrollToExperience}
              >
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">3 years of technical excellence</p>
              </div>
              <div 
                className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors h-full flex flex-col justify-between"
                onClick={scrollToEducation}
              >
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">BSc Computer Science at City University</p>
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href="mailto:hello@adnanhabib.co.uk"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};