import React from 'react';
import { TimelineItem } from './TimelineItem';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    title: "Support Engineer",
    company: "Integrella",
    period: "06/2022 — 12/2024",
    description: [
      "Delivered expert support for client integration systems",
      "Diagnosed and resolved complex technical issues",
      "Managed cloud platforms including JumpCloud, Office 365, Azure, and GCP",
      "Automated workflows and developed efficiency-improving tools",
    ]
  },
  {
    id: 2,
    title: "Sales and Marketing Assistant",
    company: "Swiss Watch Buyer",
    period: "09/2020 — 05/2022",
    description: [
      "Generated new leads through networking and cold-calling",
      "Created marketing content with Adobe Creative Cloud",
      "Demonstrated products to increase sales conversions"
    ]
  }
];

export const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">My Journey</h2>
      <div className="relative" ref={ref}>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              {...exp}
              index={index}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};