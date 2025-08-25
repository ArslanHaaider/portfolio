import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com',
      icon: '/icons/github.svg'
    },
    {
      name: 'Figma', 
      url: 'https://figma.com',
      icon: '/icons/figma.svg'
    },
    {
      name: 'Discord',
      url: 'https://discord.com', 
      icon: '/icons/discord.svg'
    }
  ];

  return (
    <section 
      className="min-h-screen bg-[#282C33] text-white flex items-center" 
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-[32px] sm:leading-[38px] lg:leading-[42px] mb-6 sm:mb-8">
                Elias is a <span className="text-[#C778DD]">web designer</span> and <span className="text-[#C778DD]">front-end developer</span>
              </h1>
              <p className="text-[14px] sm:text-[16px] text-[#ABB2BF] leading-[22px] sm:leading-[25px] mb-6 sm:mb-8 max-w-md">
                He crafts responsive websites where technologies meet creativity
              </p>
            </div>
            
            {/* CTA Button */}
            <div>
              <Link 
                href="#contact" 
                className="inline-block bg-transparent border border-[#C778DD] text-[#C778DD] px-3 sm:px-4 py-2 text-[14px] sm:text-[16px] font-medium hover:bg-[#C778DD] hover:text-[#282C33] transition-colors focus:ring-2 focus:ring-[#C778DD] focus:ring-offset-2 focus:ring-offset-[#282C33]"
                aria-label="Contact Elias"
              >
                Contact me!!
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
            {/* Main Profile Image */}
            <div className="relative max-w-[280px] sm:max-w-[314px]">
              <Image
                src="/hero-profile-6942b3.png"
                alt="Portrait of Elias, web designer and front-end developer"
                width={314}
                height={266}
                className="object-cover w-full h-auto"
                priority
                sizes="(max-width: 640px) 280px, 314px"
              />
              
              {/* Decorative dots - positioned as in Figma */}
              <div className="absolute top-12 sm:top-16 right-[-40px] sm:right-[-60px] w-12 sm:w-16 h-12 sm:h-16 opacity-50" aria-hidden="true">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-[#ABB2BF] square"></div>
                  ))}
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-[-15px] sm:bottom-[-20px] left-1 sm:left-2 bg-[#282C33] border border-[#ABB2BF] px-2 py-1 text-[14px] sm:text-[16px] max-w-[250px] sm:max-w-none">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#C778DD] square flex-shrink-0" aria-hidden="true"></div>
                  <span className="text-[#ABB2BF] text-[12px] sm:text-[14px]">Currently working on </span>
                  <span className="text-white font-semibold text-[12px] sm:text-[14px]">Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-start gap-1">
            <div className="w-1 h-[120px] sm:h-[191px] bg-[#ABB2BF]" aria-hidden="true"></div>
            <nav className="flex flex-col gap-2 ml-2" aria-label="Social media links">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center hover:scale-110 transition-transform focus:scale-110 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:ring-offset-2 focus:ring-offset-[#282C33] rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name} profile`}
                >
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    width={20}
                    height={20}
                    className="filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity w-4 sm:w-5 h-4 sm:h-5"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;