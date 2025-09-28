'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#282C33] text-white py-4 md:py-8 px-4 md:px-0">
      <div className="max-w-[1024px] mx-auto flex justify-between items-center md:items-end gap-4 md:gap-0">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={16} 
            height={16}
            className="w-4 h-4 md:w-4 md:h-4"
          />
          <span className="text-white font-bold text-sm md:text-base leading-[1.312em]" style={{ fontFamily: 'Fira Code' }}>
            Elias
          </span>
        </div>
        
        {/* Hamburger Button - Mobile Only */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8">
          <Link 
            href="#home" 
            className="flex text-base leading-[1.312em] hover:text-[#C778DD] transition-colors" 
            style={{ fontFamily: 'Fira Code' }}
          >
            <span className="text-[#C778DD] font-medium">#</span>
            <span className="text-white font-medium">home</span>
          </Link>
          <Link 
            href="#works" 
            className="flex text-base leading-[1.312em] hover:text-[#C778DD] transition-colors" 
            style={{ fontFamily: 'Fira Code' }}
          >
            <span className="text-[#C778DD] font-normal">#</span>
            <span className="text-[#ABB2BF] font-normal">works</span>
          </Link>
          <Link 
            href="#about" 
            className="flex text-base leading-[1.312em] hover:text-[#C778DD] transition-colors" 
            style={{ fontFamily: 'Fira Code' }}
          >
            <span className="text-[#C778DD] font-normal">#</span>
            <span className="text-[#ABB2BF] font-normal">about-me</span>
          </Link>
          <Link 
            href="#contact" 
            className="flex text-base leading-[1.312em] hover:text-[#C778DD] transition-colors" 
            style={{ fontFamily: 'Fira Code' }}
          >
            <span className="text-[#C778DD] font-normal">#</span>
            <span className="text-[#ABB2BF] font-normal">contacts</span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-[#282C33] p-4 flex flex-col gap-4 z-50">
            <Link 
              href="#home" 
              className="text-base leading-[1.312em] hover:text-[#C778DD] transition-colors px-4 py-2" 
              style={{ fontFamily: 'Fira Code' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#C778DD] font-medium">#</span>
              <span className="text-white font-medium">home</span>
            </Link>
            <Link 
              href="#works" 
              className="text-base leading-[1.312em] hover:text-[#C778DD] transition-colors px-4 py-2" 
              style={{ fontFamily: 'Fira Code' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#C778DD] font-normal">#</span>
              <span className="text-[#ABB2BF] font-normal">works</span>
            </Link>
            <Link 
              href="#about" 
              className="text-base leading-[1.312em] hover:text-[#C778DD] transition-colors px-4 py-2" 
              style={{ fontFamily: 'Fira Code' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#C778DD] font-normal">#</span>
              <span className="text-[#ABB2BF] font-normal">about-me</span>
            </Link>
            <Link 
              href="#contact" 
              className="text-base leading-[1.312em] hover:text-[#C778DD] transition-colors px-4 py-2" 
              style={{ fontFamily: 'Fira Code' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#C778DD] font-normal">#</span>
              <span className="text-[#ABB2BF] font-normal">contacts</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;