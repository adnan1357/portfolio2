import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Adnan Habib</h1>
        <h2 className="text-2xl text-gray-300 mb-8">Support Engineer</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Dynamic Support Engineer with expertise in client support, integration solutions, and cloud platforms.
          Based in London, UK.
        </p>
        
        <motion.div 
          className="flex space-x-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="mailto:hello@adnanhabib.co.k" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </div>
  );
};