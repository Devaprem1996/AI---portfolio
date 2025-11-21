import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // We use window scroll to drive the horizontal movement
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll for a better feel
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Transform vertical scroll progress (0 to 1) into horizontal displacement.
  // Adjusted for 7 effective sections (Hero, Services, Projects, About, Certs-1, Certs-2, Footer)
  // We map 0 -> 100% vertical progress to 0vw -> -600vw horizontal displacement.
  const x = useTransform(smoothProgress, [0, 1], ["0vw", "-600vw"]);

  useEffect(() => {
    const handleResize = () => {
        // Check if screen width is large enough for horizontal layout
        const isDesktopView = window.innerWidth >= 1024;
        setIsDesktop(isDesktopView);

        if (isDesktopView) {
            // Calculate the total height needed to scroll through all sections
            const sections = 7;
            const scrollPerSection = window.innerHeight * 3;
            const totalHeight = (sections - 1) * scrollPerSection + window.innerHeight;
            setScrollRange(totalHeight);
        }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // MOBILE / TABLET LAYOUT (Vertical Stack)
  if (!isDesktop) {
    return (
        <div className="antialiased bg-brand-dark font-sans overflow-x-hidden text-white">
            <Navbar />
            
            <div id="home">
                <Hero />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="contact"> {/* Mapping Certificates/Contact area roughly */}
                <Certificates />
            </div>
            <Footer />
        </div>
    );
  }

  // DESKTOP LAYOUT (Horizontal Scroll Reel)
  return (
    <div className="antialiased bg-brand-dark font-sans overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      {/* This container provides the scrollable height */}
      <div ref={scrollRef} style={{ height: `${scrollRange}px` }}>
        {/* Fixed window that masks content */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
          {/* Horizontal Reel */}
          <motion.div style={{ x }} className="flex h-full w-max">
            <div className="w-screen h-screen flex-shrink-0"><Hero /></div>
            <div className="w-screen h-screen flex-shrink-0"><Services /></div>
            <div className="w-screen h-screen flex-shrink-0"><Projects /></div>
            <div className="w-screen h-screen flex-shrink-0"><About /></div>
            {/* Certificates handles its own width (200vw) */}
            <Certificates />
            <div className="w-screen h-screen flex-shrink-0"><Footer /></div>
          </motion.div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed bottom-0 left-0 h-1 bg-brand-accent z-50"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
        initial={{ width: "100%" }}
      />
    </div>
  );
}

export default App;