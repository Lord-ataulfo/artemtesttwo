
import React from 'react';
import { FOUNDERS_DATA } from '../constants';
import { Founder } from '../types';
import FounderCard from '../components/FounderCard';
import SectionTitle from '../components/ui/SectionTitle';

interface FoundersSectionProps {
  id: string;
}

const FoundersSection: React.FC<FoundersSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Conoce a los Fundadores"
          subtitle="Nuestra firma está impulsada por la visión y experiencia de nuestros fundadores, dedicados a la excelencia arquitectónica."
        />
        <div className="space-y-12 md:space-y-16">
          {FOUNDERS_DATA.map((founder: Founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
