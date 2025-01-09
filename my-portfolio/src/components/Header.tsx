import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900">{personalInfo.name}</h1>
        <p className="mt-4 text-xl text-gray-600">
          {personalInfo.title} specializing in Machine Learning and Full Stack Development
        </p>
        <div className="mt-6 flex space-x-4">
          <a href={personalInfo.github} className="text-gray-600 hover:text-gray-900">
            <Github size={24} />
          </a>
          <a href={personalInfo.linkedin} className="text-gray-600 hover:text-gray-900">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-gray-900">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};
