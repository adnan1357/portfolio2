import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'City University of London',
    degree: 'BSc Computer Science',
    period: '2021 - 2025 (Expected)',
    details: 'Expected to graduate with First Class Honours. Part-time - Non attendance',
    subjects: ['Java', 'C++', 'Haskell', 'Theory of computation', 'Systems architecture', 'Project Management']
  },
  {
    school: 'Leyton Sixth Form',
    degree: 'A Levels',
    period: '2019 - 2021',
    details: 'Achieved A,B,B in:',
    subjects: ['Mathematics', 'Computer Science', 'Physics']
  },
  {
    school: 'Leytonstone School',
    degree: 'GCSEs',
    period: '2014 - 2019',
    details: 'Achieved 8 grade 8-5 including Maths and English'
  }
];

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
                    <p className="text-gray-600">{edu.degree} | {edu.period}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{edu.details}</p>
                {edu.subjects && (
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};