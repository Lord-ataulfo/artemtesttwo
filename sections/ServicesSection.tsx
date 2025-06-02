
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Service } from '../types';
import ServiceItem from '../components/ServiceItem';
import SectionTitle from '../components/ui/SectionTitle';

interface ServicesSectionProps {
  id: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Nuestros Servicios"
          subtitle="Ofrecemos un conjunto integral de servicios arquitectónicos, adaptados para satisfacer las necesidades únicas de cada proyecto. Desde el concepto inicial hasta la ejecución final."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {SERVICES_DATA.map((service: Service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
         <div className="mt-12 text-center">
          <SectionTitle 
            title="Nuestro Proceso de Diseño"
            subtitle="Nuestro proceso de diseño es un viaje colaborativo, marcado por la innovación y la atención al detalle. Comenzamos con una comprensión profunda de las necesidades y el contexto del sitio del cliente, seguido de un desarrollo de diseño iterativo, documentación rigurosa y una meticulosa supervisión de la construcción. Nuestro objetivo es crear espacios que no solo sean hermosos sino también funcionales, sostenibles y perdurables."
            align="center"
           />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
