
import React, { useState } from 'react';
import { NAV_LINKS, APP_NAME } from '../constants';
import { NavLink } from '../types';
import { MenuIcon, XIcon } from './icons/MobileMenuIcons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <header className="bg-slate-50/90 backdrop-blur-md shadow-sm fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="./#" className="text-2xl sm:text-3xl font-bold text-green-700 hover:text-green-800 transition-colors">
            {APP_NAME}
          </a>
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleNavLinkClick}
                className="text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={handleNavLinkClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition-all"
            >
              Cotización
            </a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-green-700 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-50 shadow-lg absolute w-full">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleNavLinkClick}
                className="block text-gray-600 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={handleNavLinkClick}
              className="block w-full text-left bg-green-600 hover:bg-green-700 text-white mt-2 px-3 py-2 rounded-md text-base font-medium shadow-md hover:shadow-lg transition-all"
            >
              Cotización
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;