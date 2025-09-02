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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex items-center">
          <h2 className="text-[32px] font-medium font-fira-code leading-[1.312em] flex items-center">
            <span className="text-[#C778DD]">#</span>
            <span className="text-white ml-1">projects</span>
          </h2>
          <div className="ml-4 h-[1px] bg-[#C778DD] flex-1 max-w-[536.26px]"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {projects.map((project, index) => (
            <div key={project.id} className={`w-full h-full border border-[#ABB2BF] flex flex-col bg-[#282C33] ${index % 3 === 1 ? 'lg:mt-4' : ''}`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[201px] object-cover"
              />
              <div className="border-t border-[#ABB2BF] p-4 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-[#ABB2BF] text-base font-fira-code leading-[1.312em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="border-t border-[#ABB2BF] pt-4 flex flex-col flex-1">
                  <h3 className="text-2xl font-medium text-white mb-4 font-fira-code">{project.title}</h3>
                  <p className="text-[#ABB2BF] mb-4 text-base font-normal font-fira-code leading-[1.312em]">{project.description}</p>
                  
                  <div className="flex gap-4 mt-auto">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-[#C778DD] text-white text-base font-medium font-fira-code leading-[1.312em] hover:bg-[#C778DD] hover:bg-opacity-20 transition-colors"
                      >
                        Live &lt;~&gt;
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-[#ABB2BF] text-[#ABB2BF] text-base font-medium font-fira-code leading-[1.312em] hover:bg-[#ABB2BF] hover:bg-opacity-20 transition-colors"
                      >
                        Cached &gt;=
                      </a>
                    )}
                  </div>
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