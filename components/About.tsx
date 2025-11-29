import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Calendar, MapPin, User, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import Modal from './ui/Modal';
import { TIMELINE_DATA, WHY_ME_ITEMS, PERSONAL_INFO } from '../constants';
import { TimelineEvent } from '../types';

const About: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <Section id="about">
      {/* 1. Basic Identity Section */}
      <div className="mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              <span className="text-accent">01.</span> O mně
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Propojuji svět kreativního designu s pokročilou automatizací a umělou inteligencí.
            </p>
          </div>
          
          <div className="flex gap-4">
             <button className="flex items-center gap-2 px-6 py-3 border border-dark-border hover:border-accent rounded-lg text-slate-300 hover:text-white transition-all bg-dark-surface/50">
                <Download size={18} />
                <span>Stáhnout CV</span>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard icon={<User />} label="Jméno" value={PERSONAL_INFO.name} />
          <InfoCard icon={<Calendar />} label="Věk" value={PERSONAL_INFO.age} />
          <InfoCard icon={<MapPin />} label="Lokalita" value={PERSONAL_INFO.location} />
          <InfoCard icon={<CheckCircle2 />} label="Role" value={PERSONAL_INFO.role} />
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* 2. Timeline Section (Left/Top) */}
        <div className="lg:col-span-7">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent rounded-full"></span>
            Profesní Cesta
          </h3>

          <div className="relative border-l-2 border-dark-border ml-3 md:ml-6 space-y-12 pb-12">
            {TIMELINE_DATA.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 group cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[7px] top-0 w-4 h-4 rounded-full bg-dark-bg border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.3)]" />
                
                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <span className="text-sm font-mono text-accent bg-accent/10 px-2 py-1 rounded inline-block w-fit">
                    {event.year}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                  {event.title}
                  <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                </h4>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {event.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {event.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="text-xs text-slate-500 border border-dark-border px-2 py-1 rounded bg-dark-bg">
                      {skill}
                    </span>
                  ))}
                  {event.skills.length > 3 && (
                    <span className="text-xs text-slate-500 px-2 py-1">+ {event.skills.length - 3} další</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Why Me Section (Right/Bottom) */}
        <div className="lg:col-span-5">
          <div className="bg-dark-surface/50 border border-dark-border p-8 rounded-2xl sticky top-24">
            <h3 className="text-2xl font-bold text-white mb-6">
              Proč spolupracovat?
            </h3>
            <div className="space-y-6">
              {WHY_ME_ITEMS.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 min-w-[24px]">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-dark-border">
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Python', 'AI / LLM', 'DevOps', 'RTX 5090 Opt.', 'Figma'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-dark-bg text-accent text-sm rounded-full border border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
      >
        {selectedEvent && (
          <div className="p-6 md:p-8 space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedEvent.title}</h3>
              <div className="flex items-center gap-3 text-slate-400 font-mono text-sm border-b border-dark-border pb-4">
                <Calendar size={16} />
                <span>{selectedEvent.year}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Podrobnosti</h4>
              <ul className="space-y-3">
                {selectedEvent.fullDescription.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Použité technologie</h4>
              <div className="flex flex-wrap gap-2">
                {selectedEvent.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 text-accent-glow border border-accent/20 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
};

const InfoCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="bg-dark-surface/50 p-4 rounded-xl border border-dark-border flex items-start gap-4">
    <div className="p-2 bg-accent/10 text-accent rounded-lg shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-slate-500 text-xs font-mono uppercase mb-1">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
);

export default About;