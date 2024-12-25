import React from 'react';
import { motion } from 'framer-motion';

export const Introduction = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-sm p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Hi, I'm Adnan 👋
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-8">
            Support Engineer
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm a dynamic Support Engineer with almost three years of experience in delivering exceptional client support and integration solutions. I specialize in cloud platforms and have a strong track record of solving complex technical challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-700 mb-2">Experience</h3>
              <p className="text-gray-600">3 years in technical support and integration</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-700 mb-2">Education</h3>
              <p className="text-gray-600">BSc Computer Science at City University</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="mailto:hello@adnanhabib.co.uk" 
               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};