
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ResumeContent } from '../types';

interface ContactViewProps {
  contact: ResumeContent['contact'];
}

export const ContactView: React.FC<ContactViewProps> = ({ contact }) => {
  // Extract parts of subtitle for styling
  const subtitleParts = contact.subtitle.split(' ');
  const firstPart = subtitleParts[0];
  const restPart = subtitleParts.slice(1).join(' ');

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 px-6 pb-20 relative z-10">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
              {firstPart} <br />
              <span className="text-indigo-500">{restPart}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-md mt-8 font-light leading-relaxed">
              {contact.description}
            </p>
            
            <div className="flex gap-5 mt-12">
              <a href={`mailto:${contact.email}`} className="group relative p-4 rounded-full border border-white/10 hover:border-white transition-all duration-300">
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="w-5 h-5 text-white group-hover:text-black relative z-10 transition-colors" />
              </a>
              <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="group relative p-4 rounded-full border border-white/10 hover:border-[#0077b5] transition-all duration-300">
                <div className="absolute inset-0 bg-[#0077b5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Linkedin className="w-5 h-5 text-white relative z-10 transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="space-y-4"
          >
            <ContactItem 
              icon={<Mail className="w-4 h-4 md:w-5 md:h-5" />} 
              label={contact.labels.email} 
              value={contact.email} 
              href={`mailto:${contact.email}`}
            />
            <ContactItem 
              icon={<Phone className="w-4 h-4 md:w-5 md:h-5" />} 
              label={contact.labels.phone} 
              value={contact.phone} 
            />
            <ContactItem 
              icon={<MapPin className="w-4 h-4 md:w-5 md:h-5" />} 
              label={contact.labels.location} 
              value={contact.location} 
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) => {
  const content = (
    <GlassCard className="p-5 md:p-6 flex items-center gap-5 group hover:bg-white/[0.06] transition-all border-white/5 !rounded-2xl">
      <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">{label}</div>
        <div className="text-base md:text-lg text-white font-medium group-hover:text-indigo-200 transition-colors">{value}</div>
      </div>
    </GlassCard>
  );

  return href ? <a href={href} className="block">{content}</a> : content;
};
