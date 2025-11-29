import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.5
    }
  }
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 70,
      damping: 20
    } 
  }
};

const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parallax effect logic
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y }} // Apply subtle parallax
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* We assume children might be fragments or standard DOM, 
            so we wrap them to ensure staggering applies generally.
            However, for best results, children should ideally be motion components.
            This wrapper applies the entry animation to the whole block if children aren't motion components.
        */}
        <motion.div variants={childVariants}>
            {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section;