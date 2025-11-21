import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="w-full lg:w-screen min-h-screen lg:h-screen flex-shrink-0 relative overflow-hidden bg-brand-dark flex items-center justify-center py-20 lg:py-0">
       {/* Vertical line decoration */}
       <div className="absolute top-0 left-1/2 w-px h-full bg-white/5 hidden lg:block" />

      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12 lg:mb-20 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-4">AUTOMATION SUITE</h2>
          <p className="text-gray-400 text-base md:text-lg">Scalable AI solutions to optimize your business logic.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group p-6 lg:p-0 border border-white/5 lg:border-none rounded-2xl lg:rounded-none bg-white/5 lg:bg-transparent"
            >
              <span className="text-5xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 block mb-6 transition-colors group-hover:from-brand-accent/40 group-hover:to-brand-accent/10">
                {service.number}
              </span>
              
              <div className="relative">
                <div className="border-t border-brand-accent/50 w-12 mb-6 transition-all duration-500 group-hover:w-24" />
                <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.subServices.map((sub, i) => (
                    <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-accent" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;