import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="w-full lg:w-screen min-h-screen lg:h-screen flex-shrink-0 flex items-center justify-center bg-gray-50 text-brand-dark overflow-hidden py-20 lg:py-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center h-full justify-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 aspect-[3/4] lg:aspect-auto h-[50vh] lg:h-[70vh] relative order-2 lg:order-1"
          >
            <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/portfolio portrait.png" 
                alt="Devaprem Portrait" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
             <div className="absolute -bottom-6 -right-6 bg-brand-accent text-white px-6 py-4 md:px-8 md:py-6 rounded-lg shadow-xl z-10 hidden md:block">
                 <p className="font-display font-bold text-2xl md:text-3xl">24/7</p>
                 <p className="text-xs uppercase tracking-wider opacity-90">Automation Uptime</p>
              </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative mb-6">
               <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">About Me</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mt-2">
                ENGINEERING THE FUTURE OF WORK.
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hi, I'm Devaprem. As a Junior AI Automation Expert, I specialize in connecting the dots between fragmented software ecosystems. My passion lies in replacing repetitive human tasks with intelligent, self-correcting workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
              <div className="border-l-2 border-brand-accent pl-4">
                <h4 className="font-bold text-xl mb-1">Tools</h4>
                <p className="text-gray-500 text-sm">n8n, Zapier, Make, LangChain</p>
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <h4 className="font-bold text-xl mb-1">Coding</h4>
                <p className="text-gray-500 text-sm">Python, JavaScript, SQL</p>
              </div>
            </div>

            <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-colors duration-300 flex items-center gap-2 w-full md:w-auto justify-center">
              Let's Automate <span className="text-brand-accent">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
