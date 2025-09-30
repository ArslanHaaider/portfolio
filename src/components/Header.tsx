'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navVariants, staggerContainer, staggerItem, scaleVariants } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="text-white py-4 md:py-8 px-4 md:px-0 relative z-40"
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(171, 178, 191, 0.1)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      variants={prefersReducedMotion ? {} : navVariants}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={prefersReducedMotion ? false : "visible"}
    >
      <div className="max-w-[1024px] mx-auto flex justify-between items-center md:items-end gap-4 md:gap-0">
        {/* Logo and Name */}
        <motion.div 
          className="flex items-center gap-2 z-50 relative"
          variants={prefersReducedMotion ? {} : scaleVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? false : "visible"}
          whileHover={prefersReducedMotion ? {} : "hover"}
        >
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={16} 
            height={16}
            className="w-4 h-4 md:w-4 md:h-4"
          />
          <span className="text-white font-bold text-sm md:text-base leading-[1.312em] drop-shadow-sm" style={{ fontFamily: 'Fira Code', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>
            Elias
          </span>
        </motion.div>
        
        {/* Hamburger Button - Mobile Only */}
        <button
          className="md:hidden text-white z-50 relative p-2 -m-2 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:ring-opacity-50 rounded-md transition-all duration-200 hover:bg-[#2C3036]"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span 
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>

        {/* Navigation - Desktop */}
        <motion.nav 
          className="hidden md:flex gap-8"
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? false : "visible"}
        >
          <motion.div variants={prefersReducedMotion ? {} : staggerItem}>
            <Link 
              href="#home" 
              className="flex text-base leading-[1.312em] hover:text-[#C778DD] transition-colors drop-shadow-sm" 
              style={{ fontFamily: 'Fira Code', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}
            >
              <span className="text-[#C778DD] font-medium">#</span>
              <span className="text-white font-medium">home</span>
            </Link>
          </motion.div>
          <motion.div variants={prefersReducedMotion ? {} : staggerItem}>
            <Link 
              href="#works" 
              className="flex text-base leading-[1.312em] hover:text-[#C778DD] transition-colors drop-shadow-sm" 
              style={{ fontFamily: 'Fira Code', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}
            >
              <span className="text-[#C778DD] font-normal">#</span>
              <span className="text-[#ABB2BF] font-normal">works</span>
            </Link>
          </motion.div>
          <motion.div variants={prefersReducedMotion ? {} : staggerItem}>
            <Link 
              href="#about" 
              className="flex text-base leading-[1.312em] hover:text-[#C778DD] transition-colors drop-shadow-sm" 
              style={{ fontFamily: 'Fira Code', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}
            >
              <span className="text-[#C778DD] font-normal">#</span>
              <span className="text-[#ABB2BF] font-normal">about-me</span>
            </Link>
          </motion.div>
          <motion.div variants={prefersReducedMotion ? {} : staggerItem}>
            <Link 
              href="#contact" 
              className="flex text-base leading-[1.312em] hover:text-[#C778DD] transition-colors drop-shadow-sm" 
              style={{ fontFamily: 'Fira Code', textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}
            >
              <span className="text-[#C778DD] font-normal">#</span>
              <span className="text-[#ABB2BF] font-normal">contacts</span>
            </Link>
          </motion.div>
        </motion.nav>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={closeMenu}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] border-l border-[#ABB2BF]/20 z-40"
            style={{
              background: 'rgba(40, 44, 51, 0.95)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200,
              duration: 0.3 
            }}
          >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#ABB2BF]/20">
            <span className="text-[#C778DD] font-medium text-lg" style={{ fontFamily: 'Fira Code' }}>
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="text-[#ABB2BF] hover:text-white transition-colors p-2 -m-2 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:ring-opacity-50 rounded-md"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
            <motion.div 
              className="flex-1 py-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-1">
                <motion.div variants={staggerItem}>
                  <Link 
                    href="#home" 
                    className="flex items-center text-base leading-[1.312em] hover:text-[#C778DD] hover:bg-[#2C3036] transition-all duration-200 px-6 py-4 group" 
                    style={{ fontFamily: 'Fira Code' }}
                    onClick={closeMenu}
                  >
                    <span className="text-[#C778DD] font-medium mr-2 group-hover:scale-110 transition-transform">#</span>
                    <span className="text-white font-medium">home</span>
                  </Link>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Link 
                    href="#works" 
                    className="flex items-center text-base leading-[1.312em] hover:text-[#C778DD] hover:bg-[#2C3036] transition-all duration-200 px-6 py-4 group" 
                    style={{ fontFamily: 'Fira Code' }}
                    onClick={closeMenu}
                  >
                    <span className="text-[#C778DD] font-normal mr-2 group-hover:scale-110 transition-transform">#</span>
                    <span className="text-[#ABB2BF] font-normal group-hover:text-white transition-colors">works</span>
                  </Link>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Link 
                    href="#about" 
                    className="flex items-center text-base leading-[1.312em] hover:text-[#C778DD] hover:bg-[#2C3036] transition-all duration-200 px-6 py-4 group" 
                    style={{ fontFamily: 'Fira Code' }}
                    onClick={closeMenu}
                  >
                    <span className="text-[#C778DD] font-normal mr-2 group-hover:scale-110 transition-transform">#</span>
                    <span className="text-[#ABB2BF] font-normal group-hover:text-white transition-colors">about-me</span>
                  </Link>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Link 
                    href="#contact" 
                    className="flex items-center text-base leading-[1.312em] hover:text-[#C778DD] hover:bg-[#2C3036] transition-all duration-200 px-6 py-4 group" 
                    style={{ fontFamily: 'Fira Code' }}
                    onClick={closeMenu}
                  >
                    <span className="text-[#C778DD] font-normal mr-2 group-hover:scale-110 transition-transform">#</span>
                    <span className="text-[#ABB2BF] font-normal group-hover:text-white transition-colors">contacts</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

          {/* Menu Footer */}
          <div className="p-6 border-t border-[#ABB2BF]/20">
            <div className="flex items-center gap-4">
              <span className="text-[#ABB2BF] text-sm" style={{ fontFamily: 'Fira Code' }}>
                Find me on:
              </span>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;