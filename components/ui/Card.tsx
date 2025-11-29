import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface CardProps {
  project: Project;
  index: number;
}

const Card: React.FC<CardProps> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl bg-dark-surface border border-dark-border hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] h-full flex flex-col"
    >
       {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="aspect-video w-full overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
      </div>

      <div className="p-6 relative z-10 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-mono text-white group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" title="Code">
                <Github size={16} />
              </a>
            )}
            <a href={project.link} className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors" title="Live Demo">
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-medium text-accent-glow bg-accent/10 rounded-md border border-accent/10 group-hover:border-accent/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium text-slate-500 bg-slate-800/50 rounded-md border border-slate-700/50">
                +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;