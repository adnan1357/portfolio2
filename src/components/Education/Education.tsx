import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-white dark:bg-gray-800 py-20" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">EDUCATION</h2>
          <p className="text-gray-600 dark:text-gray-400">Building the foundation for success</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">City University of London</h3>
              <p className="text-gray-600 dark:text-gray-300">Sep 2021 — Jul 2025</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-300">Expected to graduate in July 2025 with a First Class Honours.</p>
              <p className="text-gray-600 dark:text-gray-300">Part-time - Non attendance</p>
              <p className="text-gray-600 dark:text-gray-300">London</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Modules</h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'C++', 'Haskell', 'Theory of computation', 'Systems architecture', 'Project Management'].map((module, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};