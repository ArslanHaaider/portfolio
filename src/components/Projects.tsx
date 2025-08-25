import React from 'react';
import Image from 'next/image';

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
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Stripe integration for seamless shopping experience.",
      image: "/project1.svg",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/project2.svg",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work with smooth animations and modern design.",
      image: "/project3.svg",
      tags: ["React", "Framer Motion", "GSAP", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A comprehensive weather dashboard with location-based forecasts and interactive maps.",
      image: "/project4.svg",
      tags: ["Vue.js", "API Integration", "Chart.js", "PWA"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "A social media platform with real-time messaging, post sharing, and user engagement features.",
      image: "/project5.svg",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "An educational platform for online courses with video streaming and progress tracking.",
      image: "/project6.svg",
      tags: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-2xl font-bold opacity-50">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                
                {/* Overlay with action buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="bg-[#C778DD] hover:bg-[#B968CC] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <Image src="/icons/play.svg" alt="Live" width={16} height={16} className="filter invert" />
                      <span>Live</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <Image src="/icons/github.svg" alt="GitHub" width={16} height={16} className="filter invert" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#C778DD] hover:bg-[#B968CC] text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;