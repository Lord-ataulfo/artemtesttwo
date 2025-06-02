
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Categoría:</span> {project.category}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
