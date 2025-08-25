import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
              <div className="bg-black w-2 h-2 rounded-sm"></div>
              <div className="bg-black w-2 h-2 rounded-sm"></div>
              <div className="bg-black w-2 h-2 rounded-sm"></div>
              <div className="bg-black w-2 h-2 rounded-sm"></div>
            </div>
          </div>
          <span className="text-xl font-semibold">Elias</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-300 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Language Switcher */}
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-gray-800 rounded text-sm hover:bg-gray-700 transition-colors">
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;