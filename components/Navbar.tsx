import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sparkles, MessageSquare } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isLiveMode: boolean;
  toggleLiveMode: () => void;
  onOpenChat: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLiveMode, toggleLiveMode, onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-4 glass-panel border-b border-white/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold font-mono tracking-tighter text-white">
            scrollo<span className="text-accent">.cz</span>
          </a>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-accent transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
                {/* Chat Trigger (Desktop & Mobile) */}
                <button
                    onClick={onOpenChat}
                    className="h-9 w-9 rounded-full flex items-center justify-center border border-slate-700 text-slate-400 hover:text-white hover:bg-white/5 hover:border-accent/40 transition-all"
                    title="Ask AI"
                >
                    <MessageSquare size={16} />
                </button>

                {/* Live Mode Toggle */}
                <button
                onClick={toggleLiveMode}
                className={`relative h-9 px-3 rounded-full flex items-center gap-2 border transition-all duration-300 ${
                    isLiveMode 
                    ? 'bg-gradient-to-r from-orange-500/10 to-purple-500/10 border-accent/40 text-accent-glow' 
                    : 'bg-transparent border-slate-700 text-slate-400 hover:text-white'
                }`}
                title={isLiveMode ? "Disable Live Environment" : "Enable Live Environment"}
                >
                <div className="relative w-5 h-5">
                    <AnimatePresence mode='wait'>
                        {isLiveMode ? (
                            <motion.div
                                key="live"
                                initial={{ scale: 0, opacity: 0, rotate: -90 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                exit={{ scale: 0, opacity: 0, rotate: 90 }}
                                className="absolute inset-0"
                            >
                            <Sparkles size={18} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="static"
                                initial={{ scale: 0, opacity: 0, rotate: 90 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                exit={{ scale: 0, opacity: 0, rotate: -90 }}
                                className="absolute inset-0"
                            >
                                <Moon size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <span className="hidden lg:inline text-xs font-mono font-bold uppercase">
                    {isLiveMode ? 'Live BG' : 'Static'}
                </span>
                </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-dark-bg/95 backdrop-blur-xl md:hidden pt-24 px-6"
          >
            <nav className="flex flex-col gap-6 items-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-medium text-white hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="w-full h-px bg-white/10 my-4" />
              <button 
                onClick={() => {
                    toggleLiveMode();
                    setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 text-lg font-mono text-slate-300"
              >
                {isLiveMode ? <Sparkles className="text-accent" /> : <Moon />}
                {isLiveMode ? 'Vypnout Live Pozadí' : 'Zapnout Live Pozadí'}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;