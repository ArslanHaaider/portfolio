'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedWrapper from './AnimatedWrapper';
import { staggerContainer, staggerItem, cardVariants } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FormData {
  name: string;
  email: string;
  title: string;
  message: string;
}

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (_error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedWrapper animation="scroll" className="py-20 px-6">
      <motion.section 
        id="contact" 
        className="text-white"
        variants={prefersReducedMotion ? {} : staggerContainer}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? false : "visible"}
      >
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={prefersReducedMotion ? {} : staggerContainer}
        >
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            variants={prefersReducedMotion ? {} : staggerContainer}
          >
          {/* Left Side - Contact Info */}
            <motion.div 
              className="space-y-8"
              variants={prefersReducedMotion ? {} : staggerItem}
            >
              <motion.div
                variants={prefersReducedMotion ? {} : staggerItem}
              >
                <motion.h2 
                  className="text-4xl lg:text-5xl font-bold mb-4"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={prefersReducedMotion ? {} : { delay: 0.2 }}
                >
                  Let&apos;s Work Together
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={prefersReducedMotion ? {} : { delay: 0.3 }}
                >
                  Have a project in mind? I&apos;d love to hear about it. 
                  Let&apos;s discuss how we can bring your ideas to life.
                </motion.p>
              </motion.div>

            {/* Contact Methods */}
              <motion.div 
                className="space-y-6"
                variants={prefersReducedMotion ? {} : staggerContainer}
              >
                {[
                  { icon: '/icons/email.svg', title: 'Email', subtitle: 'hello@elias.dev' },
                  { icon: '/icons/calendar.svg', title: 'Schedule a Call', subtitle: 'Book a free consultation' },
                  { icon: '/icons/landmark.svg', title: 'Location', subtitle: 'Remote / Worldwide' }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4"
                    variants={prefersReducedMotion ? {} : staggerItem}
                    whileHover={prefersReducedMotion ? {} : { 
                      x: 10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center"
                      whileHover={prefersReducedMotion ? {} : { 
                        scale: 1.1,
                        backgroundColor: "#C778DD"
                      }}
                      transition={prefersReducedMotion ? {} : { type: "spring", stiffness: 300 }}
                    >
                      <Image src={contact.icon} alt={contact.title} width={20} height={20} className="filter invert" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">{contact.title}</h3>
                      <p className="text-gray-400">{contact.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            {/* Social Links */}
              <motion.div 
                className="pt-8"
                variants={prefersReducedMotion ? {} : staggerItem}
              >
                <motion.h3 
                  className="font-semibold mb-4"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={prefersReducedMotion ? {} : { delay: 0.5 }}
                >
                  Follow Me
                </motion.h3>
                <motion.div 
                  className="flex space-x-4"
                  variants={prefersReducedMotion ? {} : staggerContainer}
                >
                  {[
                    { name: 'GitHub', icon: '/icons/github.svg' },
                    { name: 'LinkedIn', icon: '/icons/linkedin.svg' },
                    { name: 'Twitter', icon: '/icons/twitter.svg' },
                    { name: 'Dribbble', icon: '/icons/dribbble.svg' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                      variants={prefersReducedMotion ? {} : staggerItem}
                      whileHover={prefersReducedMotion ? {} : { 
                        scale: 1.2,
                        backgroundColor: "#C778DD",
                        rotate: 5
                      }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={18}
                        height={18}
                        className="filter invert"
                      />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

          {/* Right Side - Contact Form */}
            <motion.div 
              className="bg-gray-900 rounded-2xl p-8"
              variants={prefersReducedMotion ? {} : cardVariants}
              whileHover={prefersReducedMotion ? {} : {
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
            >
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={prefersReducedMotion ? {} : staggerContainer}
              >
              {/* Name and Email Row */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={prefersReducedMotion ? {} : staggerItem}
                >
                  <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                    transition={prefersReducedMotion ? {} : { delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                      whileFocus={prefersReducedMotion ? {} : { 
                        scale: 1.02,
                        borderColor: "#C778DD"
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                    transition={prefersReducedMotion ? {} : { delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      whileFocus={prefersReducedMotion ? {} : { 
                        scale: 1.02,
                        borderColor: "#C778DD"
                      }}
                    />
                  </motion.div>
                </motion.div>

              {/* Title */}
                <motion.div
                  variants={prefersReducedMotion ? {} : staggerItem}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={prefersReducedMotion ? {} : { delay: 0.3 }}
                >
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Title
                  </label>
                  <motion.input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="What's your project about?"
                    whileFocus={prefersReducedMotion ? {} : { 
                      scale: 1.02,
                      borderColor: "#C778DD"
                    }}
                  />
                </motion.div>

              {/* Message */}
                <motion.div
                  variants={prefersReducedMotion ? {} : staggerItem}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={prefersReducedMotion ? {} : { delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me more about your project..."
                    whileFocus={prefersReducedMotion ? {} : { 
                      scale: 1.02,
                      borderColor: "#C778DD"
                    }}
                  />
                </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={prefersReducedMotion ? {} : staggerItem}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? {} : { delay: 0.5 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C778DD] hover:bg-[#B968CC] disabled:bg-[#A858BB] disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  whileHover={prefersReducedMotion ? {} : { 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(199, 120, 221, 0.3)"
                  }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </motion.button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, scale: 0.9 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                  exit={prefersReducedMotion ? {} : { opacity: 0, y: -20, scale: 0.9 }}
                  transition={prefersReducedMotion ? {} : { 
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="p-4 rounded-lg bg-green-900/50 border border-green-700 text-green-300"
                >
                  <div className="flex items-center space-x-2">
                    <motion.svg 
                      className="w-5 h-5 text-green-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={prefersReducedMotion ? {} : { scale: 0 }}
                      animate={prefersReducedMotion ? {} : { scale: 1 }}
                      transition={prefersReducedMotion ? {} : { delay: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                    <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                  </div>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, scale: 0.9 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                  exit={prefersReducedMotion ? {} : { opacity: 0, y: -20, scale: 0.9 }}
                  transition={prefersReducedMotion ? {} : { 
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="p-4 rounded-lg bg-red-900/50 border border-red-700 text-red-300"
                >
                  <div className="flex items-center space-x-2">
                    <motion.svg 
                      className="w-5 h-5 text-red-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={prefersReducedMotion ? {} : { scale: 0 }}
                      animate={prefersReducedMotion ? {} : { scale: 1 }}
                      transition={prefersReducedMotion ? {} : { delay: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                    <span>Something went wrong. Please try again.</span>
                  </div>
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
    </AnimatedWrapper>
  );
};

export default Contact;