'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: '/icons/github.svg',
      url: 'https://github.com'
    },
    {
      name: 'Twitter',
      icon: '/icons/twitter.svg',
      url: 'https://twitter.com'
    },
    {
      name: 'LinkedIn',
      icon: '/icons/linkedin.svg',
      url: 'https://linkedin.com'
    },
    {
      name: 'Discord',
      icon: '/icons/discord.svg',
      url: 'https://discord.com'
    },
    {
      name: 'Telegram',
      icon: '/icons/telegram.svg',
      url: 'https://telegram.org'
    },
    {
      name: 'Figma',
      icon: '/icons/figma.svg',
      url: 'https://figma.com'
    },
    {
      name: 'Dribbble',
      icon: '/icons/dribbble.svg',
      url: 'https://dribbble.com'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Support', href: '#support' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate developer creating innovative solutions and sharing knowledge 
              with the community. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="filter brightness-0 invert"
                />
                <span className="text-gray-400">hello@portfolio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Image
                  src="/icons/landmark.svg"
                  alt="Location"
                  width={16}
                  height={16}
                  className="filter brightness-0 invert"
                />
                <span className="text-gray-400">Remote, Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;