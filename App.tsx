
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';

import { CONTENT } from './constants';
import { Language } from './types';
import { CustomCursor } from './components/CustomCursor';
import { GlassCard } from './components/GlassCard';

// Views
import { HeroView } from './components/HeroView';
import { AboutView } from './components/AboutView';
import { ExperienceView } from './components/ExperienceView';
import { EducationView } from './components/EducationView';
import { ContactView } from './components/ContactView';

type ViewState = 'home' | 'about' | 'experience' | 'education' | 'contact';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Background parallax hooks
  const { scrollY } = useScroll();
  const bgShapeY = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = CONTENT[lang];

  if (!mounted) return null;

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  const navItems = [
    { key: 'home', label: content.nav.home },
    { key: 'about', label: content.nav.about },
    { key: 'experience', label: content.nav.experience },
    { key: 'education', label: content.nav.education },
    { key: 'contact', label: content.nav.contact },
  ];

  const handleNavigate = (key: string) => {
    setCurrentView(key as ViewState);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-indigo-500/30 font-sans bg-[#050505]">
      <CustomCursor />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <motion.div 
          style={{ y: bgShapeY }}
          className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen" 
        />
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[130px] mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between md:justify-center items-center">
          
          {/* Mobile Menu Toggle (Left on Mobile) */}
          <div className="md:hidden">
             <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-white"
             >
               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Nav Items */}
            <GlassCard className="hidden md:flex items-center p-1.5 !rounded-full !bg-black/40 backdrop-blur-md border-white/10">
               {navItems.map((item) => {
                 const isActive = currentView === item.key;
                 return (
                   <button 
                     key={item.key}
                     onClick={() => handleNavigate(item.key)}
                     className={`
                       relative px-5 py-2 text-sm transition-all rounded-full font-medium tracking-wide
                       ${isActive ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}
                     `}
                   >
                     {item.label}
                   </button>
                 );
               })}
            </GlassCard>

            {/* Language Switcher */}
            <button 
              onClick={toggleLang}
              className="group relative flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <Globe className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              <span className="absolute -bottom-8 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {lang === 'en' ? 'CN' : 'EN'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 md:hidden z-50"
            >
              <GlassCard className="p-4 flex flex-col gap-2 !bg-black/80 backdrop-blur-2xl border-white/10">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigate(item.key)}
                    className={`
                      w-full px-6 py-4 text-left rounded-xl transition-all font-medium text-lg
                      ${currentView === item.key ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}
                    `}
                  >
                    {item.label}
                  </button>
                ))}
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div 
              key="home" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, y: -20 }}
            >
              <HeroView 
                content={content.hero} 
                navLabels={content.nav}
                onNavigate={(view) => handleNavigate(view)} 
              />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div 
              key="about" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, y: -20 }}
            >
              <AboutView about={content.about} skills={content.skills} />
            </motion.div>
          )}

          {currentView === 'experience' && (
            <motion.div 
              key="experience" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, y: -20 }}
            >
              <ExperienceView experience={content.experience} />
            </motion.div>
          )}

          {currentView === 'education' && (
            <motion.div 
              key="education" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, y: -20 }}
            >
              <EducationView content={content.education} />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div 
              key="contact" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, y: -20 }}
            >
              <ContactView contact={content.contact} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
