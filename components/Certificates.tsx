import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { ArrowRight, BadgeCheck } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    // Mobile: w-full, flex-col. Desktop: w-[200vw], flex-row.
    <section className="w-full lg:w-[200vw] lg:h-screen flex-shrink-0 bg-[#f5f5f5] flex flex-col lg:flex-row relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />

      {/* PART 1: Intro + First 2 Cards */}
      <div className="w-full lg:w-[100vw] min-h-screen lg:h-full flex flex-col justify-center px-6 md:px-20 py-20 lg:py-12 relative border-b lg:border-b-0 lg:border-r border-gray-200/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-12 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-brand-dark tracking-tighter mb-2">
            SKILLS & <br/> CERTIFICATIONS
          </h2>
          <div className="h-2 w-32 bg-brand-accent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:h-[60vh] items-center">
          {CERTIFICATES.slice(0, 2).map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group h-[500px] lg:h-full w-full flex flex-col bg-white rounded-[2rem] shadow-xl shadow-black/5 overflow-hidden cursor-pointer lg:hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Layout Alternator: Even index = Image Top, Odd index = Text Top (only on desktop to keep mobile consistent) */}
              <div className={`flex flex-col h-full ${idx % 2 !== 0 ? 'lg:flex-col-reverse' : ''}`}>
                  <div className="h-[60%] lg:h-[65%] w-full overflow-hidden relative order-1 lg:order-none">
                     <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  
                  <div className="h-[40%] lg:h-[35%] p-6 lg:p-8 flex flex-col justify-between bg-white relative order-2 lg:order-none">
                    <div>
                        <span className="text-brand-accent font-bold tracking-widest text-xs md:text-sm mb-2 block">{cert.category}</span>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-brand-dark leading-tight">{cert.title}</h3>
                    </div>
                    <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                         <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                            <BadgeCheck size={16} className="text-brand-accent"/> {cert.issuer}
                         </div>
                         <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-white transition-all">
                            <ArrowRight size={16} />
                         </div>
                    </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PART 2: Next 2 Cards + Decorative */}
      <div className="w-full lg:w-[100vw] min-h-screen lg:h-full flex flex-col justify-center px-6 md:px-20 py-20 lg:py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:h-[60vh] items-center mt-0 lg:mt-20">
          {CERTIFICATES.slice(2, 4).map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group h-[500px] lg:h-full w-full flex flex-col bg-white rounded-[2rem] shadow-xl shadow-black/5 overflow-hidden cursor-pointer lg:hover:-translate-y-2 transition-transform duration-500"
            >
               <div className={`flex flex-col h-full ${idx % 2 !== 0 ? '' : 'lg:flex-col-reverse'}`}>
                  <div className="h-[60%] lg:h-[65%] w-full overflow-hidden relative order-1 lg:order-none">
                     <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="h-[40%] lg:h-[35%] p-6 lg:p-8 flex flex-col justify-between bg-white relative order-2 lg:order-none">
                    <div>
                        <span className="text-brand-accent font-bold tracking-widest text-xs md:text-sm mb-2 block">{cert.category}</span>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-brand-dark leading-tight">{cert.title}</h3>
                    </div>
                    <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                         <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                            <BadgeCheck size={16} className="text-brand-accent"/> {cert.issuer}
                         </div>
                         <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-white transition-all">
                            <ArrowRight size={16} />
                         </div>
                    </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
        
        <div className="absolute bottom-12 right-20 hidden lg:block">
             <p className="font-display text-6xl text-gray-200 font-bold uppercase opacity-50 select-none">
                Verified
             </p>
        </div>
      </div>

    </section>
  );
};

export default Certificates;