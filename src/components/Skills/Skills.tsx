import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SkillCard } from './SkillCard';
import { ClientProjects } from './ClientProjects';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Azure" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "CI/CD" }
    ]
  },
  {
    category: "Tools & Frameworks",
    items: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Git" },
      { name: "REST APIs" }
    ]
  }
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <SkillCard category={category} />
            </motion.div>
          ))}
        </div>

        <ClientProjects />
      </div>
    </section>
  );
};