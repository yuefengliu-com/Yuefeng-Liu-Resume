
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Sparkles, LayoutGrid, ChevronDown } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ResumeContent, ExperienceItem } from '../types';

interface ExperienceViewProps {
  experience: ResumeContent['experience'];
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({ experience }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 px-6 pb-20 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {experience.title}
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-2 md:ml-8 pl-6 md:pl-12 space-y-8 md:space-y-10">
          {experience.items.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`
                  absolute -left-[33px] md:-left-[57px] top-6 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-black z-10 transition-colors duration-500
                  ${isExpanded ? 'bg-indigo-400 scale-125 shadow-[0_0_15px_rgba(99,102,241,0.8)]' : 'bg-indigo-900'}
                `} />

                <GlassCard 
                  className={`
                    p-6 md:p-10 group cursor-pointer transition-all duration-500 !h-auto
                    ${isExpanded ? 'bg-white/[0.06] border-indigo-500/30 ring-1 ring-indigo-500/20' : 'hover:bg-white/[0.04]'}
                  `}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-xl md:text-3xl font-bold transition-colors duration-300 ${isExpanded ? 'text-indigo-300' : 'text-white'}`}>
                          {exp.role}
                        </h3>
                        <motion.div 
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          className="text-slate-500 md:hidden"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-400/80 font-medium tracking-wide text-sm md:text-lg mb-4">
                        <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="text-left md:text-right shrink-0">
                      <span className="inline-block text-slate-300 font-mono text-xs md:text-sm bg-white/5 px-3 py-1 rounded border border-white/5">
                          {exp.period}
                      </span>
                      <div className="flex text-slate-500 text-xs items-center md:justify-end gap-1 mt-2">
                          <MapPin className="w-3 h-3" /> {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Descriptions - Always Visible as requested */}
                  <ul className="mt-6 space-y-3 md:space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 font-light leading-relaxed text-sm md:text-base">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Skills Spotlight - Visible only when expanded */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-8 border-t border-white/10">
                          <div className="flex items-center gap-3 mb-6">
                            <LayoutGrid className="w-4 h-4 text-indigo-400" />
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                              Technical Spotlight
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                            {exp.skills?.map((skill, sIdx) => (
                              <motion.span 
                                key={sIdx}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: sIdx * 0.05 }}
                                className="px-3 py-1.5 bg-indigo-500/10 rounded-lg text-xs md:text-sm text-indigo-300 border border-indigo-500/20"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isExpanded && (
                    <div className="mt-6 flex items-center gap-2 text-[9px] font-bold text-slate-600 uppercase tracking-widest group-hover:text-indigo-500 transition-colors">
                      <Sparkles className="w-3 h-3" />
                      <span>Expand Spotlight</span>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
