import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SkillCard } from './SkillCard';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Azure", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 }
    ]
  },
  {
    category: "Tools & Frameworks",
    items: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Git", level: 85 },
      { name: "REST APIs", level: 90 }
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
      </div>
    </section>
  );
};