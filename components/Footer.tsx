
import React from 'react';
import { APP_NAME, SOCIAL_LINKS } from '../constants';
import { SocialLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">{APP_NAME}</h5>
            <p className="text-sm text-gray-500">Creando espacios, moldeando futuros.</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">Enlaces Rápidos</h5>
            <ul className="space-y-1">
              <li><a href="#proyectos" className="text-sm text-gray-500 hover:text-green-600">Proyectos</a></li>
              <li><a href="#servicios" className="text-sm text-gray-500 hover:text-green-600">Servicios</a></li>
              <li><a href="#nosotros" className="text-sm text-gray-500 hover:text-green-600">Nosotros</a></li>
              <li><a href="#contacto" className="text-sm text-gray-500 hover:text-green-600">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">Síguenos</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              {SOCIAL_LINKS.map((link: SocialLink) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600">
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
             <p className="text-sm text-gray-500 mt-4">
              <a href="#" className="hover:text-green-600">Política de Privacidad</a>
            </p>
            <p className="text-sm text-gray-500">
              <a href="#" className="hover:text-green-600">Términos de Servicio</a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
