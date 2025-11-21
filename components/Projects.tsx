import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Layers, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle mobile tap/expand
  const toggleMobileExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full lg:w-screen min-h-screen lg:h-screen flex-shrink-0 bg-brand-dark flex items-center justify-center overflow-hidden relative py-20 lg:py-0">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-8 lg:mb-12 shrink-0 gap-4">
          <div className="w-full md:flex-1">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 text-brand-accent"
             >
                <Layers size={20} className="md:w-6 md:h-6" />
                <span className="font-mono uppercase tracking-widest text-xs md:text-sm">Case Studies</span>
             </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight md:leading-none"
            >
              FEATURED <br className="hidden md:block" /> 
              <span className="block md:inline">AUTOMATIONS</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 w-full md:w-auto md:max-w-xs text-left md:text-right text-sm md:text-base"
          >
            <p>Interact with the cards to explore how I save businesses 100+ hours monthly.</p>
          </motion.div>
        </div>

        {/* Desktop: Accordion Gallery */}
        <div 
            className="hidden lg:flex w-full lg:h-[55vh] gap-3 lg:gap-4"
            onMouseLeave={() => setHoveredId(null)}
        >
          {PROJECTS.map((project) => {
            const isHovered = hoveredId === project.id;
            const isDimmed = hoveredId !== null && !isHovered;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                className="relative overflow-hidden rounded-2xl cursor-pointer border border-white/5 w-full h-full"
                animate={{ 
                    flex: isHovered ? 3 : 1,
                    opacity: isDimmed ? 0.5 : 1,
                    filter: isDimmed ? 'grayscale(100%)' : 'grayscale(0%)'
                }}
                transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 1, 0.5, 1] 
                }}
              >
                {/* Image Background */}
                <motion.div className="absolute inset-0 w-full h-full">
                    <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent" />
                </motion.div>

                {/* Desktop Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="relative z-10">
                         <motion.span 
                            className="text-brand-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block"
                        >
                            {project.category}
                        </motion.span>
                        
                        <motion.h3 
                            className="font-display font-bold text-white leading-none mb-3 text-lg md:text-xl lg:text-2xl"
                            animate={{ 
                                fontSize: isHovered ? '2rem' : '1.5rem',
                                originX: 0
                            }}
                        >
                            {project.title}
                        </motion.h3>

                        {/* Hidden details that reveal on hover */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                                opacity: isHovered ? 1 : 0,
                                height: isHovered ? 'auto' : 0,
                                marginTop: isHovered ? 16 : 0
                            }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                An automated solution designed to streamline operations. Integrates seamlessly with existing tech stacks to reduce manual overhead by 90%.
                            </p>
                            <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-xs group w-max">
                                <span className="border-b border-transparent group-hover:border-brand-accent transition-colors">View Case Study</span>
                                <ArrowUpRight className="text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                            </div>
                        </motion.div>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Tablet: Card Stack */}
        <div className="lg:hidden flex flex-col gap-3 md:gap-4 w-full">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl md:rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent"
              >
                {/* Image Container */}
                <div 
                  onClick={() => toggleMobileExpand(project.id)}
                  className="relative w-full cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-black/20">
                    <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isExpanded ? 1.05 : 1 }}
                        transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                  </div>

                  {/* Header Content - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <motion.span 
                      className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-1 md:mb-2 block"
                    >
                      {project.category}
                    </motion.span>
                    
                    <div className="flex justify-between items-end gap-3">
                      <motion.h3 
                        className="font-display font-bold text-lg sm:text-xl leading-tight flex-1"
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isExpanded ? (
                          <ChevronUp className="text-brand-accent flex-shrink-0" size={20} />
                        ) : (
                          <ChevronDown className="text-brand-accent flex-shrink-0" size={20} />
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-white/5"
                >
                  <div className="p-4 md:p-6 space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      An automated solution designed to streamline operations. Integrates seamlessly with existing tech stacks to reduce manual overhead by 90%.
                    </p>
                    
                    {/* Year Badge */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-500">Year:</span>
                      <span className="text-sm font-bold text-white">{project.year}</span>
                    </div>

                    {/* CTA */}
                    <button className="w-full mt-3 bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-bold py-2 md:py-3 rounded-lg uppercase text-xs md:text-sm tracking-wider transition-colors flex items-center justify-center gap-2 group">
                      View Case Study
                      <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;