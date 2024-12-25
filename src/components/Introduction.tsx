import React from 'react';
import { motion } from 'framer-motion';

export const Introduction = () => {
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
              Support Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a dynamic Support Engineer with almost three years of experience in delivering exceptional client support and integration solutions. I specialize in cloud platforms and have a strong track record of solving complex technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <div 
                className="bg-blue-50 dark:bg-gray-700 rounded-lg p-4 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
                onClick={scrollToExperience}
              >
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">3 years in technical support and integration</p>
              </div>
              <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-4">
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