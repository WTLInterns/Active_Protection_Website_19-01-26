'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);
  const [iconsVisible, setIconsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/images/Hero1.jpg',
      heading: 'INDIA\'S NO. 1 RENEWABLE, INDUSTRIAL AND OTHER SECURITY SERVICES',
      subheading: 'SECURING PEOPLE, ASSETS & OPERATIONS',
      icons: [
        { name: 'Security Services', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />' },
        { name: 'Man Power', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />' },
        { name: 'Fire & Allied Services', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 6.343S7 9 7 13s3 5 3 5 3-2 3-5 1.657-6.657 1.657-6.657z" />' },
        { name: 'Housekeeping Services', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />' }
      ]
    },
    {
      id: 2,
      image: '/images/Hero2.jpg',
      heading: 'PROFESSIONAL SECURITY SERVICES',
      subheading: 'TRAINED • DISCIPLINED • RELIABLE',
      icons: [
        { name: 'Trained Guards', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />' },
        { name: 'Surveillance', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />' },
        { name: 'Industrial & Corporate Sites', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />' },
        { name: '24/7 Protection', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />' }
      ]
    },
    {
      id: 3,
      image: '/images/Hero3.jpg',
      heading: 'HOUSEKEEPING & FACILITY MANAGEMENT',
      subheading: 'CLEAN • SAFE • WELL-MANAGED SPACES',
      icons: [
        { name: 'Cleaning Staff', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />' },
        { name: 'Facility Management', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />' },
        { name: 'Quality Control', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />' },
        { name: 'Hygiene & Safety', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />' }
      ]
    },
    {
      id: 4,
      image: '/images/Hero4.jpg',
      heading: 'FIRE & ALLIED SAFETY SERVICES',
      subheading: 'PREVENTION • RESPONSE • PROTECTION',
      icons: [
        { name: 'Fire Safety', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 6.343S7 9 7 13s3 5 3 5 3-2 3-5 1.657-6.657 1.657-6.657z" />' },
        { name: 'Trained Fire Staff', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />' },
        { name: 'Emergency Response', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />' },
        { name: 'Risk Management', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />' }
      ]
    },
    {
      id: 5,
      image: '/images/Hero5.jpg',
      heading: 'MANPOWER, CASH MANAGEMENT & PAYROLL',
      subheading: 'TRUSTED SUPPORT FOR BUSINESS OPERATIONS',
      icons: [
        { name: 'Man Power', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />' },
        { name: 'Cash Management Squad', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />' },
        { name: 'Profile Verification', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />' },
        { name: 'Payroll Services', svg: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />' }
      ]
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTextAnimationComplete(false);
        setSubheadingVisible(false);
        setIconsVisible(false);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  useEffect(() => {
    // Reset animations when slide changes
    setTextAnimationComplete(false);
    setSubheadingVisible(false);
    setIconsVisible(false);
    
    // Show heading animation immediately
    setTimeout(() => {
      setTextAnimationComplete(true);
    }, 500);
    
    // Show subheading after heading completes
    setTimeout(() => {
      setSubheadingVisible(true);
    }, 1500);
    
    // Show icons after subheading appears
    setTimeout(() => {
      setIconsVisible(true);
    }, 2500);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setTextAnimationComplete(false);
    setSubheadingVisible(false);
    setIconsVisible(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTextAnimationComplete(false);
    setSubheadingVisible(false);
    setIconsVisible(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTextAnimationComplete(false);
    setSubheadingVisible(false);
    setIconsVisible(false);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover scale-110"
              priority={index === 0}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center px-4 max-w-6xl mx-auto">
          {/* Heading - Animates from top to center */}
          <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 uppercase tracking-wide transition-all duration-1000 ease-out ${
            textAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-96'
          }`}>
            {slides[currentSlide].heading}
          </h1>
          
          {/* Subheading with Dark Strip */}
          <div className={`inline-block bg-black py-2 px-6 mb-6 transition-all duration-1000 ease-out ${
            subheadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <p className="text-base md:text-lg lg:text-xl text-white font-semibold uppercase tracking-wide">
              {slides[currentSlide].subheading}
            </p>
          </div>

          {/* Icons - Appear after subheading animation */}
          <div className={`flex flex-wrap justify-center items-center gap-6 md:gap-8 transition-all duration-800 ease-out ${
            iconsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {slides[currentSlide].icons.map((icon, iconIndex) => (
              <div key={iconIndex} className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                  <svg 
                    className="w-6 h-6 md:w-7 md:h-7 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                  />
                </div>
                <span className="text-white text-xs md:text-sm font-medium text-center max-w-[80px]">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Wavy Zigzag Line */}
      <div className="absolute bottom-0 left-0 right-0 h-8 z-20 overflow-hidden w-full">
        <svg 
          className="w-full h-full"
          viewBox="0 0 1440 32"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ea580c" stopOpacity="1" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Wave pattern */}
          <path
            d="M0,16 C120,8 240,24 360,16 C480,8 600,24 720,16 C840,8 960,24 1080,16 C1200,8 1320,24 1440,16 L1440,32 L0,32 Z"
            fill="url(#waveGradient)"
            className="opacity-90"
          />
          <path
            d="M0,20 C120,12 240,28 360,20 C480,12 600,28 720,20 C840,12 960,28 1080,20 C1200,12 1320,28 1440,20 L1440,32 L0,32 Z"
            fill="url(#waveGradient)"
            className="opacity-60"
          />
        </svg>
      </div>
    </section>
  );
}
