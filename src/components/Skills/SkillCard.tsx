import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  category: {
    category: string;
    items: Skill[];
  };
}

export const SkillCard = ({ category }: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
        {category.category}
      </h3>
      <div className="space-y-6">
        {category.items.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};