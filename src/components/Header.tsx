'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#282C33] text-white py-8 px-0">
      <div className="max-w-[1024px] mx-auto flex justify-between items-end gap-[555px] px-0">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={16} 
            height={16}
            className="w-4 h-4"
          />
          <span className="text-white font-bold text-base leading-[1.312em]" style={{ fontFamily: 'Fira Code' }}>
            Elias
          </span>
        </div>
        
        {/* Navigation */}
        <nav className="flex gap-8">
          <Link 
            href="#home" 
            className="flex text-base leading-[1.312em]" 
            style={{ fontFamily: 'Fira Code' }}
          >
            <span className="text-[#C778DD] font-medium">#</span>
            <span className="text-white font-medium">home</span>
          </Link>
          <Link 
            href="#works" 
            className="flex text-base leading-[1.312em]" 
            style={{ fontFamily: 'Fira Code' }}
          >
            <span className="text-[#C778DD] font-normal">#</span>
            <span className="text-[#ABB2BF] font-normal">works</span>
          </Link>
          <Link 
            href="#about" 
            className="flex text-base leading-[1.312em]" 
            style={{ fontFamily: 'Fira Code' }}
          >
            <span className="text-[#C778DD] font-normal">#</span>
            <span className="text-[#ABB2BF] font-normal">about-me</span>
          </Link>
          <Link 
            href="#contact" 
            className="flex text-base leading-[1.312em]" 
            style={{ fontFamily: 'Fira Code' }}
          >
            <span className="text-[#C778DD] font-normal">#</span>
            <span className="text-[#ABB2BF] font-normal">contacts</span>
          </Link>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            <span className="text-[#ABB2BF] font-semibold text-base leading-[1.312em]" style={{ fontFamily: 'Fira Code' }}>
              EN
            </span>
            <div className="w-[10px] h-[5px] relative">
              <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
                <line x1="0" y1="0" x2="5" y2="5" stroke="#ABB2BF" strokeWidth="2"/>
                <line x1="5" y1="0" x2="10" y2="5" stroke="#ABB2BF" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;