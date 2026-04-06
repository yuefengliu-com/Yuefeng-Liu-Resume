
import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { ResumeContent } from '../types';
import { Layers, Globe2, Sparkles } from 'lucide-react';

interface AboutViewProps {
  about: ResumeContent['about'];
  skills: ResumeContent['skills'];
}

export const AboutView: React.FC<AboutViewProps> = ({ about, skills }) => {
  return (
    <div className="min-h-screen pt-24 md:pt-32 px-6 pb-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Consistent Title Style (Matches Education/Experience) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
            {about.title}
          </h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mb-12" />
          
          <div className="max-w-4xl space-y-8">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl font-light text-slate-100 leading-relaxed whitespace-pre-wrap border-l-2 border-white/10 pl-8"
            >
              {about.description}
            </motion.p>
          </div>
        </motion.div>

        {/* Competencies Grid */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
            <div className="flex items-center gap-4">
              <Layers className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{about.skillsTitle}</h3>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-mono text-xs hidden md:flex uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Strategic Value Pillars
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.competencies.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlassCard className="h-full p-8 group hover:bg-white/[0.07] transition-all border-white/5 !rounded-[2rem] hover:border-indigo-500/20">
                  <div className="mb-6 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-all">
                     <span className="font-mono text-xs font-black">0{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                    {comp.title}
                  </h4>
                  <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">
                    {comp.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Communication Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">{skills.categories[0].name}</h4>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-0.5">Global Perspective</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {skills.categories[0].items.map((lang, i) => (
                <div 
                  key={i} 
                  className="px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-300 text-sm font-medium hover:bg-white/[0.08] hover:border-white/10 transition-all cursor-default"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
