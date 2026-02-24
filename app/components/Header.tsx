"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { menuItems } from '../constants';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contacto')}
            className="hidden md:block bg-linear-to-r from-[#2563eb] to-[#10b981] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Solicitar Ayuda
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 text-gray-700 hover:text-[#2563eb] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-linear-to-r from-[#2563eb] to-[#10b981] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 mt-2"
              >
                Solicitar Ayuda
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
