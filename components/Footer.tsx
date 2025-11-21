import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, Twitter, Bot } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full lg:w-screen h-auto lg:h-screen flex-shrink-0 bg-brand-dark text-white flex items-center justify-center overflow-hidden py-20 lg:py-0">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12 lg:mb-24">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-8 leading-tight">
              READY TO <br /> AUTOMATE?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-md mb-12">
              Stop wasting time on manual tasks. Let's build systems that work while you sleep.
            </p>
            
            <a 
              href="mailto:devaprem@example.com" 
              className="inline-flex items-center gap-4 text-xl md:text-3xl lg:text-4xl font-display font-bold hover:text-brand-accent transition-colors border-b-2 border-white/20 hover:border-brand-accent pb-2 break-all"
            >
              devaprem@example.com
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-8 lg:space-y-12 self-start lg:self-end"
          >
            <div className="flex items-start gap-6">
              <div className="bg-white/5 p-4 rounded-full">
                <Bot className="text-brand-accent" size={24} />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Role</h4>
                <p className="text-lg md:text-xl font-display">Junior AI Automation Expert</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-white/5 p-4 rounded-full">
                <MapPin className="text-brand-accent" size={24} />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Location</h4>
                <p className="text-lg md:text-xl font-display">Remote / Worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:absolute lg:bottom-12 lg:left-0 w-full lg:px-6 mt-8 lg:mt-0">
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-500 text-sm text-center md:text-left">
                © 2024 Devaprem Portfolio.
            </div>

            <div className="flex gap-8">
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Twitter size={24} /></a>
            </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;