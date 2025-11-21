import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="w-full lg:w-screen h-screen flex-shrink-0 relative flex items-center overflow-hidden bg-brand-dark">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-brand-accent rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-600 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <span className="text-brand-accent font-mono text-sm md:text-lg mb-4 tracking-widest">AI AUTOMATION EXPERT</span>
          <h1 className="text-5xl md:text-6xl lg:text-9xl font-display font-bold leading-tight text-white">
            HELLO, I'M <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              DEVAPREM
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 md:mt-24 flex flex-col lg:flex-row justify-between items-start lg:items-end border-t border-white/10 pt-8 gap-8"
        >
          <p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed">
            Bridging the gap between human creativity and machine efficiency.
            I build intelligent workflows and AI agents to scale your operations.
          </p>
          
          <div className="flex items-center gap-4 group cursor-pointer animate-pulse">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
              <ArrowRight className="text-white" size={20} />
            </div>
            <span className="text-white font-display uppercase tracking-wider">Scroll to Explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;