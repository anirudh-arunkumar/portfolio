import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};