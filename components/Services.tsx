import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';
import Modal from './ui/Modal';
import { SERVICES } from '../constants';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <Section id="services">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <span className="text-accent">02.</span> Služby pro Firmy
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          Pomáhám firmám inovovat a růst pomocí moderních technologií. Vyberte si oblast, která vás zajímá.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedService(service)}
            className="group bg-dark-surface border border-dark-border hover:border-accent p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {service.shortDescription}
            </p>

            <div className="flex items-center text-accent text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
              Více informací <ArrowRight size={16} className="ml-1" />
            </div>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
        {selectedService && (
          <div className="relative">
             {/* Decorative header background */}
             <div className="h-32 bg-gradient-to-r from-accent/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-dark-bg/10 backdrop-blur-[2px]" />
                <div className="relative z-10 text-accent transform scale-150 opacity-20">
                    {selectedService.icon}
                </div>
             </div>

            <div className="p-8 -mt-10 relative z-20">
              <div className="bg-dark-surface border border-dark-border rounded-xl p-6 shadow-2xl mb-8">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent rounded-lg text-white shadow-lg shadow-accent/20">
                        {selectedService.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {selectedService.title}
                    </h3>
                 </div>
                 <p className="text-slate-300 text-lg leading-relaxed">
                    {selectedService.fullDescription}
                 </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full"/>
                    Hlavní přínosy
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    {selectedService.benefits.map((benefit, i) => (
                        <div key={i} className="flex gap-3 items-start bg-dark-bg/50 p-3 rounded-lg border border-dark-border">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                            <span className="text-slate-300 text-sm">{benefit}</span>
                        </div>
                    ))}
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <a 
                    href="mailto:ppix50@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-lg font-bold shadow-lg shadow-accent/20 transition-all hover:scale-105"
                >
                    {selectedService.cta}
                    <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
};

export default Services;