'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { scrollVariants, animationPresets } from '@/lib/animations';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'scroll';
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export default function AnimatedWrapper({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration,
  once = true,
  threshold = 0.1
}: AnimatedWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, render without animations
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // Get animation configuration
  const getAnimationConfig = () => {
    if (animation === 'scroll') {
      return {
        variants: scrollVariants,
        initial: "offscreen",
        animate: isInView ? "onscreen" : "offscreen"
      };
    }

    const preset = animationPresets[animation];
    return {
      initial: preset.initial,
      animate: isInView ? preset.animate : preset.initial,
      transition: {
        ...preset.transition,
        delay,
        ...(duration && { duration })
      }
    };
  };

  const animationConfig = getAnimationConfig();

  return (
    <motion.div
      ref={ref}
      className={className}
      {...animationConfig}
    >
      {children}
    </motion.div>
  );
}