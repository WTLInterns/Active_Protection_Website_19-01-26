"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function GalleryPage() {
  const galleryCategories = [
    {
      name: "Security Operations",
      images: [
        { id: 1, title: "Security Team", description: "Professional security personnel on duty", src: "/images/active-protection1.jpg" },
        { id: 2, title: "Access Control", description: "Modern access control systems", src: "/images/cash-management-security.jpg" },
        { id: 3, title: "Patrol Services", description: "Regular patrol operations", src: "/images/manpower-security.jpg" },
        { id: 4, title: "Surveillance", description: "CCTV monitoring systems", src: "/images/fire-security.jpg" },
        { id: 5, title: "Event Security", description: "Security for special events", src: "/images/EventSecurity.jpg" },
        { id: 6, title: "VIP Protection", description: "Executive protection services", src: "/images/vipsecurity.jpg" },
        { id: 7, title: "Emergency Response", description: "Rapid emergency response", src: "/images/EmergencyRes.jpg" },
        { id: 8, title: "Fire Safety", description: "Fire safety operations", src: "/images/fire1.jpg" }
      ]
    },
    {
      name: "Housekeeping Services",
      images: [
        { id: 9, title: "Office Cleaning", description: "Professional office cleaning services", src: "/images/housekeeping-service.jpg" },
        { id: 10, title: "Floor Maintenance", description: "Advanced floor cleaning equipment", src: "/images/housekeeping1.jpg" },
        { id: 11, title: "Waste Management", description: "Systematic waste disposal", src: "/images/active-protection-home1.jpg" },
        { id: 12, title: "Sanitization", description: "Deep cleaning and sanitization", src: "/images/active-protection-home2.jpg" }
      ]
    },
    {
      name: "Training & Development",
      images: [
        { id: 13, title: "Security Training", description: "Comprehensive security training programs", src: "/images/Manpower1.jpg" },
        { id: 14, title: "Equipment Training", description: "Hands-on equipment training", src: "/images/Payroll1.jpg" },
        { id: 15, title: "Emergency Drills", description: "Regular emergency response drills", src: "/images/cash1.jpg" },
        { id: 16, title: "Team Building", description: "Professional development activities", src: "/images/active-protection-home1.jpg" }
      ]
    },
    {
      name: "Client Projects",
      images: [
        { id: 17, title: "Corporate Security", description: "Corporate security solutions", src: "/images/commercialsecurity.jpg" },
        { id: 18, title: "Residential Security", description: "Residential security services", src: "/images/Resendentialsecurity.jpg" },
        { id: 19, title: "Surveillance Systems", description: "Advanced surveillance systems", src: "/images/survilancesecurity.jpg" },
        { id: 20, title: "Security Operations", description: "Day-to-day security operations", src: "/images/service-guard.jpg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-red-700 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ourgallary1.jpg"
            alt="Gallery Background" 
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 "></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 255, 255, 0.1) 35px, rgba(255, 255, 255, 0.1) 70px)`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -80, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-black"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gray-800">Gallery</span>
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Explore our work through images showcasing our security operations, housekeeping services, 
              and training programs in action.
            </p>
          </motion.div>
        </div>
        
        {/* Thin Red Wavy Line */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 30" className="w-full h-8">
            <path
              d="M0,15 C360,30 480,0 720,15 C1080,30 1200,0 1440,15"
              stroke="rgba(239, 68, 68, 0.8)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* Gallery Categories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {galleryCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="mb-20"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {category.name}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.images.map((image, imageIndex) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: categoryIndex * 0.1 + imageIndex * 0.15,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{
                    order: category.images.length - imageIndex
                  }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          {image.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/securityguard12.jpg"
            alt="Security Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-white mt-16">
            <div className="inline-block bg-blue-400/30 backdrop-blur-lg px-4 py-0.5 rounded-lg mb-2 border border-white/40 shadow-xl">
              <h2 className="text-2xl font-semibold">Professional Excellence in Action</h2>
            </div>
            <div className="inline-block bg-blue-400/30 backdrop-blur-lg px-4 py-0.5 rounded-lg mb-6 border border-white/40 shadow-xl">
              <p className="text-gray-100">
                Our gallery represents the commitment and dedication of our team in delivering exceptional 
                security and housekeeping services. Each image tells a story of professionalism, reliability, 
                and excellence in service delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-block bg-blue-400/30 backdrop-blur-lg px-3 py-0.5 rounded-lg mb-2 border border-white/40 shadow-xl">
                  <div className="text-3xl font-bold text-red-500">500+</div>
                </div>
                <div className="inline-block bg-blue-400/30 backdrop-blur-lg px-3 py-0.5 rounded-lg border border-white/40 shadow-xl">
                  <p className="text-gray-100">Security Personnel Trained</p>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-blue-400/30 backdrop-blur-lg px-3 py-0.5 rounded-lg mb-2 border border-white/40 shadow-xl">
                  <div className="text-3xl font-bold text-red-500">100+</div>
                </div>
                <div className="inline-block bg-blue-400/30 backdrop-blur-lg px-3 py-0.5 rounded-lg border border-white/40 shadow-xl">
                  <p className="text-gray-100">Clients Served</p>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-blue-400/30 backdrop-blur-lg px-3 py-0.5 rounded-lg mb-2 border border-white/40 shadow-xl">
                  <div className="text-3xl font-bold text-red-500">10+</div>
                </div>
                <div className="inline-block bg-blue-400/30 backdrop-blur-lg px-3 py-0.5 rounded-lg border border-white/40 shadow-xl">
                  <p className="text-gray-100">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
}
