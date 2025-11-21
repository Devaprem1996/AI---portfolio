import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Helper to handle click on mobile as hover alternative
  const handleInteraction = (id: string) => {
     if (hoveredId === id) {
        setHoveredId(null);
     } else {
        setHoveredId(id);
     }
  };

  return (
    <section className="w-full lg:w-screen min-h-screen lg:h-screen flex-shrink-0 bg-brand-dark flex items-center justify-center overflow-hidden relative py-20 lg:py-0">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 lg:mb-12 shrink-0 gap-4">
          <div>
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-2 text-brand-accent"
             >
                <Layers size={24} />
                <span className="font-mono uppercase tracking-widest text-sm">Case Studies</span>
             </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-none"
            >
              FEATURED <br /> AUTOMATIONS
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-xs text-left md:text-right"
          >
            <p className="text-sm md:text-base">Interact with the cards to explore how I save businesses 100+ hours monthly.</p>
          </motion.div>
        </div>

        {/* Accordion Gallery */}
        <div 
            className="flex flex-col lg:flex-row w-full lg:h-[55vh] gap-4"
            onMouseLeave={() => setHoveredId(null)}
        >
          {PROJECTS.map((project) => {
            const isHovered = hoveredId === project.id;
            const isDimmed = hoveredId !== null && !isHovered;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onClick={() => handleInteraction(project.id)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer border border-white/5 w-full lg:w-auto ${isHovered ? 'h-[400px] lg:h-auto' : 'h-[120px] lg:h-auto'}`}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="relative z-10">
                         <motion.span 
                            className="text-brand-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block"
                        >
                            {project.category}
                        </motion.span>
                        
                        <motion.h3 
                            className="font-display font-bold text-white leading-none mb-2 whitespace-nowrap"
                            animate={{ 
                                fontSize: isHovered ? '2rem' : '1.25rem',
                                originX: 0
                            }}
                        >
                            {project.title}
                        </motion.h3>

                        {/* Hidden details that reveal on hover/click */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                                opacity: isHovered ? 1 : 0,
                                height: isHovered ? 'auto' : 0,
                                marginTop: isHovered ? 16 : 0
                            }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-300 text-sm max-w-md leading-relaxed hidden md:block">
                                An automated solution designed to streamline operations. Integrates seamlessly with existing tech stacks to reduce manual overhead by 90%.
                            </p>
                            <div className="mt-4 md:mt-6 flex items-center gap-2 text-white font-bold uppercase tracking-wider text-xs group w-max">
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
      </div>
    </section>
  );
};

export default Projects;