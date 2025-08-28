import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Media from './Media';

const Hero = () => {
  return (
    <section 
      className="bg-[#282C33] text-white min-h-[423px] py-8 lg:py-0" 
      aria-label="Hero section"
    >
      <div className="relative w-full max-w-[1024px] mx-auto px-4 lg:px-0 lg:h-[423px]">
        {/* Media Section - positioned on the left for desktop */}
        <div className="hidden lg:block lg:absolute lg:left-[-200px] lg:top-[-70px]">
          <Media />
        </div>
        
        {/* Left Content Group */}
        <div className="lg:absolute lg:left-0 lg:top-[74px] lg:w-[537px] lg:h-[227px] mb-8 lg:mb-0">
          <div className="space-y-0">
            <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium leading-[32px] sm:leading-[38px] lg:leading-[42px] text-white mb-[24px] lg:mb-[32px] font-mono">
              Elias is a web designer and front-end developer
            </h1>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[25px] text-[#ABB2BF] mb-[20px] lg:mb-[24px] max-w-[463px] font-mono">
              He crafts responsive websites where technologies meet creativity
            </p>
            
            {/* CTA Button */}
            <div className="mt-[20px] lg:mt-[24px]">
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-[8px] lg:gap-[10px] px-[12px] lg:px-[16px] py-[6px] lg:py-[8px] border border-[#C778DD] text-[#C778DD] text-[14px] lg:text-[16px] font-medium leading-[18px] lg:leading-[21px] hover:bg-[#C778DD] hover:text-white focus:bg-[#C778DD] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:ring-offset-2 focus:ring-offset-[#282C33] transition-colors font-mono"
                aria-label="Contact Elias for web design and development services"
              >
                Contact me!!
              </Link>
            </div>
          </div>
          
          {/* Mobile Media Section */}
          <div className="lg:hidden">
            <Media />
          </div>
        </div>

        {/* Right Content Group */}
        <div className="relative lg:absolute lg:left-[555px] lg:top-0 lg:w-[469px] lg:h-[386px] flex justify-center lg:justify-start">
          {/* Logo */}
          <div className="hidden lg:block lg:absolute lg:left-0 lg:top-[84px] lg:w-[155px] lg:h-[155px]">
            <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g stroke="#C778DD" strokeWidth="1" fill="#FFFFFF">
                <rect x="0" y="38.75" width="38.75" height="38.75"/>
                <rect x="0" y="77.5" width="38.75" height="38.75"/>
                <rect x="0" y="116.25" width="38.75" height="38.75"/>
                <rect x="38.75" y="38.75" width="38.75" height="38.75"/>
                <rect x="38.75" y="116.25" width="38.75" height="38.75"/>
                <rect x="77.5" y="0" width="38.75" height="38.75"/>
                <rect x="77.5" y="38.75" width="38.75" height="38.75"/>
                <rect x="77.5" y="77.5" width="38.75" height="38.75"/>
                <rect x="77.5" y="116.25" width="38.75" height="38.75"/>
                <rect x="116.25" y="116.25" width="38.75" height="38.75"/>
              </g>
            </svg>
          </div>
          
          {/* Profile Image Container */}
          <div className="relative w-[280px] sm:w-[350px] lg:w-[457px] h-[240px] sm:h-[300px] lg:h-[386px] lg:absolute lg:left-[12px] lg:top-0">
            <Image
              src="/hero-profile-6942b3.png"
              alt="Portrait of Elias, web designer and front-end developer"
              width={457}
              height={386}
              className="object-cover w-full h-full rounded-lg lg:rounded-none"
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 457px"
            />
            
            {/* Decorative Dots - responsive positioning */}
            <div className="absolute right-[-20px] sm:right-[-30px] lg:right-[88px] bottom-[20px] sm:bottom-[30px] lg:bottom-[140px] w-[60px] sm:w-[70px] lg:w-[84px] h-[60px] sm:h-[70px] lg:h-[84px] flex flex-col justify-between gap-[12px] sm:gap-[14px] lg:gap-[16px]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex justify-between gap-[12px] sm:gap-[14px] lg:gap-[16px]">
                  {Array.from({ length: 5 }).map((_, colIndex) => (
                    <div key={colIndex} className="w-[3px] sm:w-[3.5px] lg:w-[4px] h-[3px] sm:h-[3.5px] lg:h-[4px] bg-[#ABB2BF]"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Status Indicator - responsive */}
        <div className="relative lg:absolute lg:left-[586px] lg:top-[386px] w-full max-w-[402px] lg:w-[402px] bg-[#282C33] border border-[#ABB2BF] px-[6px] lg:px-[8px] py-[6px] lg:py-[8px] flex items-center gap-[8px] lg:gap-[10px] mt-4 lg:mt-0 mx-auto lg:mx-0">
          <div className="w-[12px] lg:w-[16px] h-[12px] lg:h-[16px] bg-[#C778DD] flex-shrink-0" aria-hidden="true"></div>
          <span className="text-[#ABB2BF] text-[14px] lg:text-[16px] leading-[18px] lg:leading-[21px] font-mono truncate">Currently working on Portfolio</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;