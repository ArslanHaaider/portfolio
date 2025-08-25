import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '/icons/github.svg', url: '#' },
    { name: 'Twitter', icon: '/icons/twitter.svg', url: '#' },
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: '#' },
    { name: 'Discord', icon: '/icons/discord.svg', url: '#' },
    { name: 'Telegram', icon: '/icons/telegram.svg', url: '#' },
    { name: 'Email', icon: '/icons/email.svg', url: '#' },
    { name: 'Figma', icon: '/icons/figma.svg', url: '#' },
    { name: 'Dribbble', icon: '/icons/dribbble.svg', url: '#' },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-blue-400">Elias</span>
              </h1>
              <p className="text-xl text-gray-300">
                Full-stack developer & UI/UX designer
              </p>
              <p className="text-gray-400 max-w-lg">
                I create digital experiences that combine beautiful design with powerful functionality. 
                Passionate about building products that make a difference.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                View Projects
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
                  title={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="filter invert group-hover:invert-0 group-hover:brightness-200 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Image
                src="/profile.svg"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;