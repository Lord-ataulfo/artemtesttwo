
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

interface PortfolioSectionProps {
  id: string;
}

const FILTER_CATEGORIES = ['Todos', 'Residencial', 'Comercial', 'Público'];

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Residencial' | 'Comercial' | 'Público'>('Todos');

  const filteredProjects = activeFilter === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === activeFilter);

  return (
    <section id={id} className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Nuestros Proyectos"
          subtitle="Explora nuestro diverso portafolio de proyectos arquitectónicos, mostrando nuestro compromiso con la excelencia en el diseño y la innovación."
        />
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-12">
          {FILTER_CATEGORIES.map(category => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category as 'Todos' | 'Residencial' | 'Comercial' | 'Público')}
              variant={activeFilter === category ? 'primary' : 'outline'}
              size="md"
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No hay proyectos que coincidan con el filtro seleccionado.</p>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
