'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedWrapper from './AnimatedWrapper';
import { staggerContainer, staggerItem, cardVariants } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const projects: Project[] = [
    {
      id: 1,
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: "/project-image.png",
      tags: ["HTML", "SCSS", "Python", "Flask"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/chertnodes"
    },
    {
      id: 2,
      title: "ProtectX",
      description: "Discord anti-crash bot",
      image: "/project-image.png",
      tags: ["React", "Express", "Discord.js", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/protectx"
    },
    {
      id: 3,
      title: "Kahoot Answers Viewer",
      description: "Get answers to your kahoot quiz",
      image: "/project-image.png",
      tags: ["CSS", "Express", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/kahoot"
    }
  ];

  return (
    <AnimatedWrapper animation="scroll" className="py-20 px-6">
      <motion.section 
        id="projects" 
        className="max-w-7xl mx-auto"
        variants={prefersReducedMotion ? {} : staggerContainer}
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? false : "visible"}
      >
        {/* Section Header */}
        <motion.div 
          className="mb-16 flex items-center"
          variants={prefersReducedMotion ? {} : staggerItem}
        >
          <h2 className="text-[32px] font-medium font-fira-code leading-[1.312em] flex items-center">
            <span className="text-[#C778DD]">#</span>
            <span className="text-white ml-1">projects</span>
          </h2>
          <div className="ml-4 h-[1px] bg-[#C778DD] flex-1 max-w-[536.26px]"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr"
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? false : "visible"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={`w-full h-full border border-[#ABB2BF] flex flex-col bg-[#282C33] ${index % 3 === 1 ? 'lg:mt-8' : ''}`}
              variants={prefersReducedMotion ? {} : cardVariants}
              whileHover={prefersReducedMotion ? {} : { 
                y: -8, 
                boxShadow: "0 20px 40px rgba(199, 120, 221, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[201px] object-cover"
                initial={prefersReducedMotion ? {} : { scale: 1.1 }}
                animate={prefersReducedMotion ? {} : { scale: 1 }}
                transition={prefersReducedMotion ? {} : { duration: 0.6 }}
              />
              <div className="border-t border-[#ABB2BF] p-4 flex flex-col flex-1">
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  variants={prefersReducedMotion ? {} : staggerContainer}
                  initial={prefersReducedMotion ? false : "hidden"}
                  animate={prefersReducedMotion ? false : "visible"}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={index}
                      className="text-[#ABB2BF] text-base font-fira-code leading-[1.312em]"
                      variants={prefersReducedMotion ? {} : staggerItem}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <div className="border-t border-[#ABB2BF] pt-4 flex flex-col flex-1">
                  <motion.h3 
                    className="text-2xl font-medium text-white mb-4 font-fira-code"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={prefersReducedMotion ? {} : { delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[#ABB2BF] mb-4 text-base font-normal font-fira-code leading-[1.312em]"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={prefersReducedMotion ? {} : { delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex gap-4 mt-auto"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={prefersReducedMotion ? {} : { delay: 0.4 }}
                  >
                    {project.liveUrl && (
                      <motion.a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-[#C778DD] text-white text-base font-medium font-fira-code leading-[1.312em] hover:bg-[#C778DD] hover:bg-opacity-20 transition-colors"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                      >
                        Live &lt;~&gt;
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-[#ABB2BF] text-[#ABB2BF] text-base font-medium font-fira-code leading-[1.312em] hover:bg-[#ABB2BF] hover:bg-opacity-20 transition-colors"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                      >
                        Cached &gt;=
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          variants={prefersReducedMotion ? {} : staggerItem}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? false : "visible"}
          transition={prefersReducedMotion ? {} : { delay: 0.6 }}
        >
          <motion.button 
            className="bg-[#C778DD] hover:bg-[#B968CC] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            whileHover={prefersReducedMotion ? {} : { 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(199, 120, 221, 0.3)"
            }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.section>
    </AnimatedWrapper>
  );
};

export default Projects;