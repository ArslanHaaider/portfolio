'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedWrapper from './AnimatedWrapper';
import { staggerContainer, staggerItem, cardVariants } from '@/lib/animations';

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();
  const socialLinks = [
    {
      name: 'GitHub',
      icon: '/icons/github.svg',
      url: 'https://github.com'
    },
    {
      name: 'Twitter',
      icon: '/icons/twitter.svg',
      url: 'https://twitter.com'
    },
    {
      name: 'LinkedIn',
      icon: '/icons/linkedin.svg',
      url: 'https://linkedin.com'
    },
    {
      name: 'Discord',
      icon: '/icons/discord.svg',
      url: 'https://discord.com'
    },
    {
      name: 'Telegram',
      icon: '/icons/telegram.svg',
      url: 'https://telegram.org'
    },
    {
      name: 'Figma',
      icon: '/icons/figma.svg',
      url: 'https://figma.com'
    },
    {
      name: 'Dribbble',
      icon: '/icons/dribbble.svg',
      url: 'https://dribbble.com'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Support', href: '#support' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <AnimatedWrapper>
      <motion.footer 
        className="text-white"
        variants={prefersReducedMotion ? {} : staggerContainer}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? false : "visible"}
      >
        <motion.div 
          className="max-w-7xl mx-auto px-6 py-12"
          variants={prefersReducedMotion ? {} : staggerContainer}
        >
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          variants={prefersReducedMotion ? {} : staggerContainer}
        >
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={prefersReducedMotion ? {} : staggerItem}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              transition={prefersReducedMotion ? {} : { delay: 0.1 }}
            >
              <motion.div 
                className="w-10 h-10 bg-[#C778DD] rounded-lg flex items-center justify-center"
                whileHover={prefersReducedMotion ? {} : { 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(199, 120, 221, 0.4)"
                }}
                transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-bold text-lg">P</span>
              </motion.div>
              <motion.span 
                className="text-xl font-bold"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? {} : { delay: 0.2 }}
              >
                Portfolio
              </motion.span>
            </motion.div>
            <motion.p 
              className="text-gray-400 mb-6 max-w-md"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? {} : { delay: 0.3 }}
            >
              A passionate developer creating innovative solutions and sharing knowledge 
              with the community. Let&apos;s build something amazing together.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? false : "visible"}
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  variants={prefersReducedMotion ? {} : staggerItem}
                >
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
                    whileHover={prefersReducedMotion ? {} : { 
                      scale: 1.1,
                      y: -2,
                      backgroundColor: "#C778DD"
                    }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
                      transition={prefersReducedMotion ? {} : { duration: 0.6 }}
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={20}
                        height={20}
                        className="filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                      />
                    </motion.div>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={prefersReducedMotion ? {} : staggerItem}
          >
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? {} : { delay: 0.4 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? false : "visible"}
            >
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={prefersReducedMotion ? {} : staggerItem}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { x: 5 }}
                    transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={prefersReducedMotion ? {} : staggerItem}
          >
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? {} : { delay: 0.5 }}
            >
              Get in Touch
            </motion.h3>
            <motion.div 
              className="space-y-3"
              variants={prefersReducedMotion ? {} : staggerContainer}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? false : "visible"}
            >
              <motion.div 
                className="flex items-center space-x-3"
                variants={prefersReducedMotion ? {} : staggerItem}
                whileHover={prefersReducedMotion ? {} : { x: 5 }}
                transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: 10 }}
                  transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/icons/email.svg"
                    alt="Email"
                    width={16}
                    height={16}
                    className="filter brightness-0 invert"
                  />
                </motion.div>
                <span className="text-gray-400">hello@portfolio.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                variants={prefersReducedMotion ? {} : staggerItem}
                whileHover={prefersReducedMotion ? {} : { x: 5 }}
                transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: -10 }}
                  transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/icons/landmark.svg"
                    alt="Location"
                    width={16}
                    height={16}
                    className="filter brightness-0 invert"
                  />
                </motion.div>
                <span className="text-gray-400">Remote, Worldwide</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          variants={prefersReducedMotion ? {} : staggerItem}
          initial={prefersReducedMotion ? {} : { opacity: 0, scaleX: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, scaleX: 1 }}
          transition={prefersReducedMotion ? {} : { delay: 0.6, duration: 0.8 }}
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? false : "visible"}
          >
            {/* Copyright */}
            <motion.div 
              className="text-gray-400 text-sm"
              variants={prefersReducedMotion ? {} : staggerItem}
            >
              © {currentYear} Portfolio. All rights reserved.
            </motion.div>

            {/* Additional Links */}
            <motion.div 
              className="flex space-x-6 text-sm"
              variants={prefersReducedMotion ? {} : staggerContainer}
            >
              <motion.div variants={prefersReducedMotion ? {} : staggerItem}>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { y: -2 }}
                  transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
                >
                  <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div variants={prefersReducedMotion ? {} : staggerItem}>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { y: -2 }}
                  transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
                >
                  <Link href="#terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div variants={prefersReducedMotion ? {} : staggerItem}>
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { y: -2 }}
                  transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
                >
                  <Link href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
        transition={prefersReducedMotion ? {} : { delay: 1, type: "spring", stiffness: 300 }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-[#C778DD] hover:bg-[#B968CC] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label="Back to top"
          whileHover={prefersReducedMotion ? {} : { 
            scale: 1.1, 
            boxShadow: "0 10px 25px rgba(199, 120, 221, 0.3)",
            y: -2
          }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={prefersReducedMotion ? {} : { y: -2 }}
            transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 400 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </motion.svg>
        </motion.button>
      </motion.div>
    </motion.footer>
    </AnimatedWrapper>
  );
};

export default Footer;