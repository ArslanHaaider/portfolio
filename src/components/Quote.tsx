'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedWrapper from './AnimatedWrapper';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Quote() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedWrapper>
      <motion.blockquote 
        className="hidden md:flex flex-row gap-[10px] p-2 border border-[#ABB2BF] text-[#ABB2BF] font-mono text-base leading-[1.312em]"
        style={{ fontFamily: 'Fira Code, monospace' }}
        variants={prefersReducedMotion ? {} : staggerContainer}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? false : "visible"}
        whileHover={prefersReducedMotion ? {} : {
          scale: 1.02,
          borderColor: "#C778DD",
          boxShadow: "0 4px 20px rgba(199, 120, 221, 0.2)"
        }}
        transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
      >
        {/* Quote marks */}
        <motion.span
          className="text-[#C778DD] font-bold"
          variants={prefersReducedMotion ? {} : staggerItem}
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? {} : { delay: 0.2, type: "spring", stiffness: 400 }}
        >
          &quot;
        </motion.span>
        
        {/* Quote text with typing effect */}
        <motion.span
          variants={prefersReducedMotion ? {} : staggerItem}
          initial={prefersReducedMotion ? {} : { opacity: 0, width: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, width: "auto" }}
          transition={prefersReducedMotion ? {} : { 
            delay: 0.4, 
            duration: 1.5,
            ease: "easeInOut"
          }}
          style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          I like winter more than summer
        </motion.span>
        
        {/* Closing quote marks */}
        <motion.span
          className="text-[#C778DD] font-bold"
          variants={prefersReducedMotion ? {} : staggerItem}
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? {} : { delay: 1.9, type: "spring", stiffness: 400 }}
        >
          &quot;
        </motion.span>
        
        {/* Decorative cursor */}
        <motion.span
          className="text-[#C778DD] ml-1"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: [0, 1, 0] }}
          transition={prefersReducedMotion ? {} : {
            delay: 2.2,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          |
        </motion.span>
      </motion.blockquote>
    </AnimatedWrapper>
  );
}