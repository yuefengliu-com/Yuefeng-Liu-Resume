
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, School, ChevronRight, FlaskConical, Target, FileText, ExternalLink } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ResumeContent } from '../types';

interface EducationViewProps {
  content: ResumeContent['education'];
}

export const EducationView: React.FC<EducationViewProps> = ({ content }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const schools = [
    {
      id: 'jhu',
      brandColor: 'text-blue-400',
      accentColor: 'from-blue-600/10 to-transparent',
      ...content.items[0]
    },
    {
      id: 'su',
      brandColor: 'text-orange-500',
      accentColor: 'from-orange-600/10 to-transparent',
      ...content.items[1]
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handlePdfClick = (e: React.MouseEvent, url?: string) => {
    if (url && url !== '#') {
      e.stopPropagation();
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen w-full pt-32 px-6 pb-20 relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
            {content.title}
          </h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="flex flex-col gap-8">
          {schools.map((school) => {
            const isExpanded = expandedId === school.id;

            return (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <GlassCard 
                  className={`
                    group relative overflow-hidden transition-all duration-500 cursor-pointer
                    ${isExpanded ? 'border-white/20 bg-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.6)]' : 'hover:border-white/20 hover:bg-white/[0.04]'}
                  `}
                  onClick={() => toggleExpand(school.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${school.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div className="p-8 md:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                      
                      <div className="relative shrink-0">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-white p-3 md:p-4 flex items-center justify-center shadow-2xl shadow-black overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
                          <img 
                            src={school.logo} 
                            alt={school.school} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        {isExpanded && (
                          <div className="absolute inset-0 rounded-3xl bg-white/10 blur-3xl -z-10 animate-pulse" />
                        )}
                      </div>

                      <div className="flex-grow text-center md:text-left flex flex-col justify-center min-h-[128px] md:min-h-[192px]">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                            {school.school}
                          </h3>
                          <motion.div 
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            className="hidden md:flex w-10 h-10 rounded-full border border-white/10 items-center justify-center text-slate-500 group-hover:text-white group-hover:border-white/30 transition-all"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </motion.div>
                        </div>
                        
                        <div className={`flex items-start gap-2 ${school.brandColor} mb-4 font-bold text-base md:text-lg justify-center md:justify-start opacity-90`}>
                          <School className="w-5 h-5 mt-0.5 shrink-0" />
                          <span>{school.college}</span>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start text-slate-300 text-xs md:text-sm">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-indigo-400" />
                            <span className="text-white font-medium">{school.degree}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-500" />
                            <span className="font-light">{school.period}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="px-2.5 py-0.5 bg-white/10 rounded-lg border border-white/10 text-[10px] font-bold tracking-widest text-indigo-100 uppercase">GPA: {school.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence mode="sync">
                      {isExpanded && (
                        <motion.div
                          key={`expansion-${school.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12">
                            
                            <div className="lg:col-span-7 space-y-8">
                               {school.academicProjects && (
                                 <div>
                                   <div className="flex items-center gap-3 mb-6">
                                     <FlaskConical className="w-5 h-5 text-indigo-500" />
                                     <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
                                       {school.projectLabel}
                                     </h4>
                                   </div>
                                   <div className="grid gap-4">
                                     {school.academicProjects.map((proj, pIdx) => (
                                       <div
                                          key={pIdx}
                                          onClick={(e) => handlePdfClick(e, proj.pdfUrl)}
                                          className={`
                                            p-5 rounded-2xl bg-white/[0.02] border border-white/5 
                                            transition-all group/proj shadow-lg
                                            ${proj.pdfUrl && proj.pdfUrl !== '#' ? 'hover:bg-indigo-500/10 hover:border-indigo-500/30 cursor-pointer' : ''}
                                          `}
                                       >
                                          <div className="flex items-center justify-between gap-3 mb-2">
                                            <div className="flex items-center gap-3 text-base font-bold text-white group-hover/proj:text-indigo-400 transition-colors">
                                              <Target className="w-4 h-4 opacity-50" />
                                              {proj.title}
                                            </div>
                                            {proj.pdfUrl && proj.pdfUrl !== '#' && (
                                              <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-medium bg-indigo-400/10 px-2 py-1 rounded-full opacity-0 group-hover/proj:opacity-100 transition-opacity">
                                                <FileText className="w-3 h-3" />
                                                <span>PDF</span>
                                                <ExternalLink className="w-3 h-3" />
                                              </div>
                                            )}
                                          </div>
                                          <p className="text-slate-400 leading-relaxed font-light pl-7 text-xs md:text-sm">
                                            {proj.desc}
                                          </p>
                                       </div>
                                     ))}
                                   </div>
                                 </div>
                               )}
                               
                               <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-transparent border-l-4 border-indigo-500">
                                  <p className="text-indigo-100 italic leading-relaxed font-light text-sm md:text-base">
                                    {school.id === 'su' 
                                      ? "My Maxwell School education was defined by synthesizing qualitative theories of nationalism with rigorous quantitative data science, aiming to provide actionable insights for urban and international governance."
                                      : `At JHU, I specialized in the bridge between advanced analytics and practical administration, focusing on how resource optimization can solve large-scale public sector bottlenecks.`}
                                  </p>
                               </div>
                            </div>

                            <div className="lg:col-span-5 bg-white/[0.01] rounded-3xl p-6 md:p-8 border border-white/5 h-fit shadow-inner">
                              <div className="flex items-center gap-3 mb-6">
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
                                  {school.courseLabel}
                                </h4>
                              </div>
                              <div className="grid grid-cols-1 gap-4">
                                {school.courses.map((course, i) => (
                                  <div 
                                    key={i} 
                                    className="flex items-center gap-4 text-slate-300 group/course"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover/course:bg-indigo-500 transition-colors" />
                                    <span className="text-xs md:text-sm font-light leading-snug group-hover/course:text-white transition-colors">
                                      {course}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
