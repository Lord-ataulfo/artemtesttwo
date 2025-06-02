
import React from 'react';
import Button from '../components/ui/Button';
import { APP_NAME } from '../constants';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section 
      id={id} 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/heroArtem/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-4 container mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          <span className="block">{APP_NAME}: Moldeando Visiones</span>
          <span className="block text-green-400">en Espacios Duraderos.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Arquitectura Reimaginada. Legado Construido.
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            const projectsSection = document.getElementById('proyectos');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Explora Nuestro Trabajo
        </Button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5M4.5 12.75l7.5 7.5 7.5-7.5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
