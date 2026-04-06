
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ResumeContent } from '../types';

interface HeroViewProps {
  content: ResumeContent['hero'];
  navLabels: ResumeContent['nav'];
  onNavigate: (view: string) => void;
}

export const HeroView: React.FC<HeroViewProps> = ({ content, navLabels, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative z-10 pt-10 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-indigo-400 font-medium tracking-[0.2em] mb-4 uppercase text-xs md:text-base">
            {content.role}
          </h2>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-none">
            {content.name.split(' ')[0]}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700">
              {content.name.split(' ')[1]}
            </span>
          </h1>
          <p className="max-w-xl text-base md:text-xl text-slate-400 leading-relaxed font-light border-l border-indigo-500/50 pl-6 my-8 md:my-12">
            {content.tagline}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <button 
            onClick={() => onNavigate('experience')}
            className="px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-300 flex items-center gap-2 text-sm md:text-base"
          >
            {content.cta} <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 md:px-8 md:py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm text-sm md:text-base"
          >
            {navLabels.contact}
          </button>
        </motion.div>
      </div>
    </div>
  );
};
