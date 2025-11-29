import React, { useState } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import Modal from './ui/Modal';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Github, ExternalLink, Briefcase, Building, Factory } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" className="bg-dark-bg">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <span className="text-accent">03.</span> Vybrané Projekty
        </h2>
        <p className="text-slate-400 text-lg">Ukázka mé nedávné práce.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={project.id} onClick={() => setSelectedProject(project)}>
             <Card project={project} index={index} />
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            {/* Hero Image */}
            <div className="relative w-full h-64 md:h-80">
                <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 md:left-8 right-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                        {selectedProject.title}
                    </h3>
                    <div className="flex gap-3">
                         {selectedProject.github && (
                            <a href={selectedProject.github} className="flex items-center gap-1 text-sm bg-black/60 hover:bg-black/80 text-white px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors border border-white/10">
                                <Github size={14} /> GitHub
                            </a>
                         )}
                         <a href={selectedProject.link} className="flex items-center gap-1 text-sm bg-accent/80 hover:bg-accent text-white px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors shadow-lg">
                             <ExternalLink size={14} /> Live Demo
                         </a>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
                {/* Description */}
                <div className="mb-8">
                    <h4 className="text-sm font-mono text-accent uppercase mb-2">O projektu</h4>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        {selectedProject.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8 p-5 bg-dark-bg rounded-xl border border-dark-border">
                    <h4 className="text-sm font-mono text-slate-500 uppercase mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-accent/5 text-accent border border-accent/10 rounded-md text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Use Cases Grid */}
                {selectedProject.useCases && (
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4 border-l-4 border-accent pl-3">
                            Využití pro vaše podnikání
                        </h4>
                        <div className="grid gap-4">
                            <UseCaseCard 
                                icon={<Briefcase className="text-green-400" />} 
                                title="Malé firmy & Startupy"
                                description={selectedProject.useCases.smallBusiness}
                            />
                            <UseCaseCard 
                                icon={<Building className="text-blue-400" />} 
                                title="Střední podniky"
                                description={selectedProject.useCases.mediumBusiness}
                            />
                            <UseCaseCard 
                                icon={<Factory className="text-purple-400" />} 
                                title="Velké korporace"
                                description={selectedProject.useCases.enterprise}
                            />
                        </div>
                    </div>
                )}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
};

const UseCaseCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex gap-4 p-4 rounded-xl bg-dark-bg/50 border border-dark-border hover:border-slate-600 transition-colors">
        <div className="mt-1 p-2 bg-dark-surface rounded-lg h-fit">
            {icon}
        </div>
        <div>
            <h5 className="font-bold text-slate-200 mb-1">{title}</h5>
            <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

export default Projects;
