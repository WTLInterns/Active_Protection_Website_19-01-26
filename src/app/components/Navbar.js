'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'RECRUITMENT AND TRAINING', href: '/training' },
    { name: 'Active Group', href: '/social' },
    { name: 'GALLERY', href: '/gallery' },
    // { name: 'CAREER', href: '/career' },
    { name: 'CLIENTELE', href: '/clients' },
    // { name: 'TESTIMONIALS', href: '/testimonials' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-2xl transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center bg-white p-3 rounded-lg shadow-lg">
              <Image
                src="/images/active-protection-logo.png"
                alt="Active Protection Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Ribbon Contact Section */}
            <div className="hidden lg:flex items-center">
              <div className="relative group">
                {/* Ribbon Badge */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="flex items-center space-x-4 text-white">
                    {/* Phone 1 */}
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm font-semibold">(+91) 7447770913</span>
                    </div>
                    
                    {/* Separator */}
                    <div className="h-4 w-px bg-white/30"></div>
                    
                    {/* Email */}
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-semibold">info@activeprotection.in</span>
                    </div>
                    
                    {/* Separator */}
                    <div className="h-4 w-px bg-white/30"></div>
                    
                    {/* Phone 2 */}
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm font-semibold">(+91) 9822218891</span>
                    </div>
                    
                    {/* Social Separator */}
                    <div className="h-4 w-px bg-white/50 mx-2"></div>
                    
                    {/* Social Icons */}
                    <div className="flex items-center space-x-3">
                      {/* Facebook */}
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="transform transition-all duration-200 hover:scale-110 hover:text-blue-200"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      
                      {/* LinkedIn */}
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="transform transition-all duration-200 hover:scale-110 hover:text-blue-200"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Ribbon Fold Effect */}
                <div className="absolute -right-2 top-0 w-4 h-full bg-gradient-to-b from-orange-700 to-red-700 transform skew-x-12"></div>
                <div className="absolute -left-2 top-0 w-4 h-full bg-gradient-to-b from-orange-700 to-red-700 transform -skew-x-12"></div>
              </div>
            </div>

            {/* Hamburger Menu Icon - White Background */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group p-3 sm:p-4 rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex flex-col justify-center items-center space-y-1 sm:space-y-1.5">
                <span className={`block h-0.5 sm:h-1 w-5 sm:w-8 bg-red-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 sm:h-1 w-5 sm:w-8 bg-red-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 sm:h-1 w-5 sm:w-8 bg-red-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Height Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-gradient-to-b from-gray-900 via-black to-gray-900 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-8 py-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-4 text-white text-lg font-bold uppercase tracking-wide hover:text-orange-500 transition-all duration-300 transform hover:translate-x-2 border-b border-gray-800 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Contact Info */}
        <div className="lg:hidden px-8 py-6 border-t border-gray-800">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">(+91) 7447770913</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">info@activeprotection.in</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">(+91) 9822218891</span>
            </div>
            
            {/* Mobile Social Icons */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-4 text-white">
                <span className="text-sm text-gray-400">Follow Us:</span>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform transition-all duration-200 hover:scale-110 hover:text-blue-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
}
