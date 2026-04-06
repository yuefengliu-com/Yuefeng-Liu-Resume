
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  // Added onClick support to fix type error in EducationView
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false, onClick }) => {
  return (
    <motion.div
      // Pass onClick to the motion.div to enable click events on the card
      onClick={onClick}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden
        backdrop-blur-xl bg-white/[0.03] 
        border border-white/[0.08]
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
        rounded-2xl
        ${className}
      `}
    >
      {/* Internal shine effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
