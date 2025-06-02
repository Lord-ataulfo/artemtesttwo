
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-gray-800 font-sans">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">{children}</main> {/* Adjust pt based on header height */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
