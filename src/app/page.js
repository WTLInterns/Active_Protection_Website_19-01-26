'use client';

import HeroCarousel from '@/components/HeroCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Target, Bell, Settings } from "lucide-react";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [objectivesVisible, setObjectivesVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const sectionRef = useRef(null);
  const objectivesRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const objectivesObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !objectivesVisible) {
          setObjectivesVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (objectivesRef.current) {
      objectivesObserver.observe(objectivesRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (objectivesRef.current) {
        objectivesObserver.unobserve(objectivesRef.current);
      }
    };
  }, [isVisible, objectivesVisible]);

  useEffect(() => {
    if (carouselRef.current && isVisible) {
      const scrollContainer = carouselRef.current;
      let scrollPosition = 0;
      const scrollSpeed = 1; // pixels per frame
      const scrollInterval = 50; // milliseconds

      const scroll = () => {
        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPosition = 0;
        } else {
          scrollPosition += scrollSpeed;
        }
        scrollContainer.scrollLeft = scrollPosition;
      };

      const intervalId = setInterval(scroll, scrollInterval);

      return () => clearInterval(intervalId);
    }
  }, [isVisible]);

  return (
    <main>
      <HeroCarousel />

      {/* Team Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-1 items-center">
            {/* Left Side - Team Image */}
            <div
              className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                }`}
            >
              <div className="flex justify-center">
                <Image
                  src="/images/team.png"
                  alt="Our Team"
                  width={600}
                  height={500}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Side - Service Info */}
            <div
              className={`transform transition-all duration-1000 ease-out delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                }`}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg ml-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">WE PROVIDE VERIFIED & SECURED SERVICES</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Registered with Private Security Agencies Regulation Act. (PSARA), Active Protection Services Pvt. Ltd., is an Ex-Servicemen Organization. We provide Quality Security' Allied Services to organizations across industries.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">Professional security personnel</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">Comprehensive training programs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">Expert security consulting</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <p className="text-gray-700">Risk assessment solutions</p>
                  </div>
                </div>

                <Link href="/about">
                  <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="overflow-x-auto scrollbar-hide" ref={carouselRef}>
            <div className="flex gap-4 pb-2 animate-scroll" style={{ width: 'max-content' }}>
              {/* Security Services Card */}
              <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-300 flex-shrink-0">
                <Image
                  src="/images/security1.jpg"
                  alt="Security Services"
                  width={300}
                  height={350}
                  className="w-72 h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                    <h3 className="text-lg font-bold mb-1">Security Services</h3>
                    <p className="text-xs mb-3 text-gray-200">Professional security personnel and solutions for your business needs.</p>
                    <Link href="/services" className="text-orange-400 hover:text-orange-300 font-semibold text-xs">
                      More Information →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Payroll Services Card */}
              <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-300 flex-shrink-0">
                <Image
                  src="/images/Payroll1.jpg"
                  alt="Payroll Services"
                  width={300}
                  height={350}
                  className="w-72 h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                    <h3 className="text-lg font-bold mb-1">Payroll Services</h3>
                    <p className="text-xs mb-3 text-gray-200">Comprehensive payroll management and salary processing solutions.</p>
                    <Link href="/services" className="text-orange-400 hover:text-orange-300 font-semibold text-xs">
                      More Information →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Man Power Services Card */}
              <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-300 flex-shrink-0">
                <Image
                  src="/images/Manpower1.jpg"
                  alt="Man Power Services"
                  width={300}
                  height={350}
                  className="w-72 h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                    <h3 className="text-lg font-bold mb-1">Man Power Services</h3>
                    <p className="text-xs mb-3 text-gray-200">Skilled manpower solutions for various industry requirements.</p>
                    <Link href="/services" className="text-orange-400 hover:text-orange-300 font-semibold text-xs">
                      More Information →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Housekeeping Services Card */}
              <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-300 flex-shrink-0">
                <Image
                  src="/images/housekeeping1.jpg"
                  alt="Housekeeping Services"
                  width={300}
                  height={350}
                  className="w-72 h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                    <h3 className="text-lg font-bold mb-1">Housekeeping Services</h3>
                    <p className="text-xs mb-3 text-gray-200">Professional cleaning and facility management solutions.</p>
                    <Link href="/services" className="text-orange-400 hover:text-orange-300 font-semibold text-xs">
                      More Information →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Fire Services Card */}
              <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-300 flex-shrink-0">
                <Image
                  src="/images/fire1.jpg"
                  alt="Fire Services"
                  width={300}
                  height={350}
                  className="w-72 h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                    <h3 className="text-lg font-bold mb-1">Fire Services</h3>
                    <p className="text-xs mb-3 text-gray-200">Fire safety equipment and emergency response services.</p>
                    <Link href="/services" className="text-orange-400 hover:text-orange-300 font-semibold text-xs">
                      More Information →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Cash Squad Card */}
              <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-300 flex-shrink-0">
                <Image
                  src="/images/cash1.jpg"
                  alt="Cash Squad"
                  width={300}
                  height={350}
                  className="w-72 h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                    <h3 className="text-lg font-bold mb-1">Cash Squad</h3>
                    <p className="text-xs mb-3 text-gray-200">Secure cash management and armored vehicle services.</p>
                    <Link href="/services" className="text-orange-400 hover:text-orange-300 font-semibold text-xs">
                      More Information →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={objectivesRef}
        className="relative py-16 bg-center bg-cover animate-fade-in"
        style={{ backgroundImage: "url('/images/solar.png')" }}
      >
        {/* overlay – reduced opacity */}
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="relative container mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-semibold text-black mb-6">
              Our Objectives
            </h2>

            {/* Black Bar */}
            <div className="max-w-3xl mx-auto bg-black text-white py-4 px-6 text-sm tracking-widest">
              POWERFUL, ELEGANT, INTELLIGENT PHYSICAL SECURITY
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">

            {/* Card 1 */}
            <div className={`bg-white px-6 py-8 text-center shadow-lg transition-all duration-1000 ${objectivesVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <ShieldCheck className="w-10 h-10 mx-auto text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Operational Excellence</h3>
              <p className="text-gray-600 text-sm">
                Delivering superior security services with unmatched professionalism and reliability.
              </p>
            </div>

            {/* Card 2 */}
            <div className={`bg-white px-6 py-8 text-center shadow-lg transition-all duration-1000 delay-200 ${objectivesVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
              <Target className="w-10 h-10 mx-auto text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Superior Ethics</h3>
              <p className="text-gray-600 text-sm">
                Upholding the highest standards of integrity and ethical conduct in all operations.
              </p>
            </div>

            {/* Card 3 */}
            <div className={`bg-white px-6 py-8 text-center shadow-lg transition-all duration-1000 delay-300 ${objectivesVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <Settings className="w-10 h-10 mx-auto text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Better Training</h3>
              <p className="text-gray-600 text-sm">
                Continuous skill development and advanced training programs for our security personnel.
              </p>
            </div>

            {/* Card 4 */}
            <div className={`bg-white px-6 py-8 text-center shadow-lg transition-all duration-1000 delay-500 ${objectivesVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <ShieldCheck className="w-10 h-10 mx-auto text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-3">High Commitment</h3>
              <p className="text-gray-600 text-sm">
                Dedicated to providing exceptional security solutions tailored to client needs.
              </p>
            </div>

            {/* Card 5 */}
            <div className={`bg-white px-6 py-8 text-center shadow-lg transition-all duration-1000 delay-700 ${objectivesVisible ? '-translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <Bell className="w-10 h-10 mx-auto text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Alertness & Dedication</h3>
              <p className="text-gray-600 text-sm">
                Maintaining constant vigilance and unwavering commitment to client safety.
              </p>
            </div>

            {/* Card 6 */}
            <div className={`bg-white px-6 py-8 text-center shadow-lg transition-all duration-1000 delay-1000 ${objectivesVisible ? '-translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
              <Settings className="w-10 h-10 mx-auto text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Best Practices Implementation</h3>
              <p className="text-gray-600 text-sm">
                Applying industry best practices and innovative security methodologies.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <button className="bg-black text-white px-10 py-3 text-sm tracking-widest hover:bg-orange-500 transition">
              READ MORE
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Why Choose Us Text with Background Image */}
            <div className="md:w-1/3 text-center md:text-center md:pl-8 relative min-h-[235px] flex items-center justify-center">
              {/* Background Image that slides in from left */}
              <div className="absolute inset-0 opacity-80 overflow-hidden">
                <img 
                  src="/images/whychooseus.jpg" 
                  alt="Why Choose Us Background"
                  className="w-full h-full object-cover"
                  style={{
                    animation: 'slideInFromLeft 2s ease-out forwards'
                  }}
                />
              </div>
              {/* Text Content */}
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-black mb-4">Why Choose Us</h2>
                <div className="w-16 h-1 bg-orange-500 mb-6 mx-auto md:mx-auto md:ml-auto"></div>
              </div>
            </div>
            
            {/* Right Side - Tabs Container */}
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-lg p-6">
                {/* Tab Buttons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      activeTab === 1 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Highly Skilled
                  </button>
                  <button
                    onClick={() => setActiveTab(2)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      activeTab === 2 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    24/7 QRT
                  </button>
                  <button
                    onClick={() => setActiveTab(3)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      activeTab === 3 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Quality & Safety
                  </button>
                </div>
                
                {/* Tab Content */}
                <div className="min-h-[150px]">
                  {activeTab === 1 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-semibold text-black mb-2">Highly Skilled Professionals</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        Our team consists of highly trained and experienced security professionals who undergo rigorous training programs. 
                        Each member is certified in various security protocols and emergency response procedures, ensuring the highest 
                        level of protection for your assets and personnel.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 2 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-semibold text-black mb-2">24/7 Quick Response Team</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        Our Quick Response Team is available round the clock to address any security concerns or emergencies. 
                        With rapid deployment capabilities and real-time monitoring systems, we ensure immediate response to threats 
                        and maintain constant vigilance over your premises.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 3 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-semibold text-black mb-2">Quality & Safety Standards</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        We adhere to international quality and safety standards in all our operations. Our comprehensive safety 
                        protocols and quality assurance measures ensure reliable service delivery while maintaining the highest 
                        standards of security and operational excellence.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="overflow-hidden">
            <marquee behavior="scroll" direction="left" scrollamount="15">
              <div className="flex gap-6">
                <img src="/images/client1.jpg" alt="Client 1" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client2.jpg" alt="Client 2" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client3.jpg" alt="Client 3" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client4.jpg" alt="Client 4" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client5.jpg" alt="Client 5" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client6.jpg" alt="Client 6" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client7.jpg" alt="Client 7" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client8.jpg" alt="Client 8" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client9.jpg" alt="Client 9" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client10.jpg" alt="Client 10" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client11.jpg" alt="Client 11" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client12.jpg" alt="Client 12" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client13.jpg" alt="Client 13" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client14.jpg" alt="Client 14" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
                <img src="/images/client15.jpg" alt="Client 15" className="h-20 w-40 object-contain border-2 border-orange-500 rounded" />
              </div>
            </marquee>
          </div>
        </div>
      </section>

      {/* Security Background Section */}
      <section className="py-8 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/images/security2.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center top'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 via-amber-900/30 to-amber-950/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-32 sm:h-40 lg:h-32 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="text-white max-w-3xl text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 whitespace-normal sm:whitespace-nowrap">WHY APPROACH PIONEER FOR SECURITY SERVICES</h2>
              <p className="text-sm sm:text-base lg:text-lg whitespace-normal sm:whitespace-nowrap">We commit ourselves to by providing trained, disciplined, motivated security personnel to complete satisfaction of our esteemed clients.</p>
            </div>
            <button className="px-3 sm:px-6 py-1.5 sm:py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 text-xs sm:text-base">CONTACT US</button>
          </div>
        </div>
      </section>

      </main>
  );
}
