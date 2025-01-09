import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
        <p className="mt-4 text-gray-600">
          I'm currently open to new opportunities. Feel free to reach out!
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};


