import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Only run active section logic for custom scroll if we are on desktop (assumed by body height)
      // For mobile, we could implement intersection observer, but simple is fine for now.
      if (window.innerWidth >= 1024) {
          const scrollPosition = window.scrollY;
          const viewportHeight = window.innerHeight;
          const scrollPerSection = viewportHeight * 3;
          const sectionIndex = Math.round(scrollPosition / scrollPerSection);
          const clampedIndex = Math.min(Math.max(sectionIndex, 0), NAV_ITEMS.length - 1);
          setActiveSection(clampedIndex);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (item: typeof NAV_ITEMS[0], index: number) => {
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
        const viewportHeight = window.innerHeight;
        const scrollPerSection = viewportHeight * 3; 
        window.scrollTo({
        top: index * scrollPerSection,
        behavior: 'smooth'
        });
    } else {
        // Mobile: Scroll to ID
        const id = item.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-transparent mix-blend-difference text-white">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(NAV_ITEMS[0], 0); }} className="text-2xl font-display font-bold tracking-tighter z-50">
          DEVAPREM<span className="text-brand-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item, index)}
              className={`text-sm uppercase tracking-widest hover:text-brand-accent transition-colors duration-300 ${activeSection === index ? 'text-brand-accent' : 'text-gray-300'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 lg:hidden bg-brand-dark"
            >
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item, index)}
                  className="text-3xl font-display font-bold text-white hover:text-brand-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;