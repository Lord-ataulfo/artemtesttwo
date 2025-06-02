
import React from 'react';
import HeroSection from '../sections/HeroSection';
import PortfolioSection from '../sections/PortfolioSection';
import FoundersSection from '../sections/FoundersSection';
import ServicesSection from '../sections/ServicesSection';
import ContactSection from '../sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection id="inicio" />
      <PortfolioSection id="proyectos" />
      <ServicesSection id="servicios" />
      <FoundersSection id="nosotros" />
      <ContactSection id="contacto" />
    </>
  );
};

export default HomePage;
