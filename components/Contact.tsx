import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 md:py-32 px-6 bg-gradient-to-b from-dark-bg to-black border-t border-dark-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent font-mono mb-4">03. Co dál?</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Napište mi
          </h3>
          <p className="text-slate-400 text-xl max-w-xl mx-auto mb-10">
            Momentálně hledám nové příležitosti a projekty. Pokud máte nápad, který chcete realizovat, nebo jen chcete pozdravit, můj inbox je vždy otevřený.
          </p>

          <a 
            href="mailto:ppix50@gmail.com"
            className="inline-block px-10 py-4 border border-accent text-accent rounded-md hover:bg-accent/10 transition-colors duration-300 font-mono text-lg"
          >
            Ahoj Petře!
          </a>
        </motion.div>

        <div className="mt-24 flex justify-center gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-slate-600 text-sm font-mono">
          <p>© {new Date().getFullYear()} Scrollo.cz & Petr.</p>
          <p className="mt-2">Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;