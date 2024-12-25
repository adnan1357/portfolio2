import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Adnan Habib</h1>
        <div className="flex space-x-4">
          <a href="mailto:hello@adnanhabib.co.uk" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};