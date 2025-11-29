import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, className = "" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Don't render anything on the server or before mounting
  if (!mounted) return null;

  // Use createPortal to render the modal outside of the parent DOM hierarchy
  // This prevents parent transforms (like framer-motion animations on Sections) 
  // from breaking 'fixed' positioning.
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[90]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-dark-surface border border-dark-border w-full max-w-4xl rounded-2xl shadow-2xl relative flex flex-col pointer-events-auto max-h-[90vh] overflow-hidden ${className}`}
            >
              {/* Close Button - Sticky header area */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-black/50 hover:bg-red-500/20 hover:text-red-400 text-slate-300 backdrop-blur-md transition-all border border-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto custom-scrollbar flex-1 w-full">
                 {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;