import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Support Engineer',
    company: 'Integrella',
    period: 'June 2022 - December 2024',
    location: 'London',
    responsibilities: [
      'Delivered expert support for client integration systems',
      'Diagnosed and resolved complex technical issues',
      'Managed cloud platforms including JumpCloud, Office 365, Azure, and GCP',
      'Developed scripts and tools to streamline operations',
      'Assisted in securing cyber essentials plus certificate',
    ]
  },
  {
    title: 'Sales and Marketing Assistant',
    company: 'Swiss Watch Buyer',
    period: 'September 2020 - May 2022',
    location: 'London',
    responsibilities: [
      'Generated new leads through networking and cold-calling',
      'Created marketing content with Adobe Creative Cloud',
      'Demonstrated products to increase sales conversions',
    ]
  }
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Briefcase className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company} | {exp.period}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};