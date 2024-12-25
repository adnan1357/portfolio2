import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Dynamic Support Engineer with almost three years of experience in delivering exceptional client
              support and integration solutions. Expertise in diagnosing and resolving complex technical issues
              with a robust track record of meeting service level agreements. Proficient in managing cloud platforms
              and highly experienced in Office365 and Azure.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-600">London, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600" size={20} />
                <span className="text-gray-600">+44 7512678370</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-600">hello@adnanhabib.co.k</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-blue-600" size={20} />
                <span className="text-gray-600">BSc Computer Science (Expected 2025)</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              alt="Professional workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};