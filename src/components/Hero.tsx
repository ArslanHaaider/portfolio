import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com',
      icon: '/github.svg'
    },
    {
      name: 'Figma', 
      url: 'https://figma.com',
      icon: '/figma.svg'
    },
    {
      name: 'Discord',
      url: 'https://discord.com', 
      icon: '/discord.svg'
    }
  ];

  return (
    <section className="min-h-screen bg-[#282C33] text-white flex items-center font-['Fira_Code']">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-[32px] lg:text-[32px] font-semibold leading-[42px] mb-8">
                Elias is a <span className="text-[#C778DD]">web designer</span> and <span className="text-[#C778DD]">front-end developer</span>
              </h1>
              <p className="text-[16px] text-[#ABB2BF] leading-[25px] mb-8">
                He crafts responsive websites where technologies meet creativity
              </p>
            </div>
            
            {/* CTA Button */}
            <div>
              <Link 
                href="#contact" 
                className="inline-block bg-transparent border border-[#C778DD] text-[#C778DD] px-4 py-2 text-[16px] font-medium hover:bg-[#C778DD] hover:text-[#282C33] transition-colors"
              >
                Contact me!!
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Main Profile Image */}
            <div className="relative">
              <Image
                src="/hero-profile-6942b3.png"
                alt="Elias Profile"
                width={314}
                height={266}
                className="object-cover"
                priority
              />
              
              {/* Decorative dots - positioned as in Figma */}
              <div className="absolute top-16 right-[-60px] w-16 h-16 opacity-50">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-[#ABB2BF] square"></div>
                  ))}
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-[-20px] left-2 bg-[#282C33] border border-[#ABB2BF] px-2 py-1 text-[16px]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#C778DD] square"></div>
                  <span className="text-[#ABB2BF]">Currently working on </span>
                  <span className="text-white font-semibold">Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16">
          <div className="flex items-center gap-1">
            <div className="w-1 h-[191px] bg-[#ABB2BF]"></div>
            <div className="flex flex-col gap-2 ml-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;