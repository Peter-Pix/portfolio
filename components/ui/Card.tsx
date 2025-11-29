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
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl bg-dark-surface border border-dark-border hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-60" />
      </div>

      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-mono text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} className="text-slate-400 hover:text-white transition-colors" title="Code">
                <Github size={18} />
              </a>
            )}
            <a href={project.link} className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <p className="text-slate-400 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-medium text-accent-glow bg-accent/10 rounded-md border border-accent/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;