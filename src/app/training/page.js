"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInDown = {
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function TrainingPage() {
  const trainingImages = [
    {
      src: "/images/training1.jpg",
      alt: "Training Session",
      title: "Physical Training"
    },
    {
      src: "/images/training2.jpg", 
      alt: "Security Drill",
      title: "Security Drills"
    },
    {
      src: "/images/training3.jpg",
      alt: "Fitness Exercise", 
      title: "Fitness Program"
    },
    {
      src: "/images/training4.jpg",
      alt: "Team Training",
      title: "Team Building"
    },
    {
      src: "/images/training5.jpg",
      alt: "Fire Training",
      title: "Fire Safety"
    },
    {
      src: "/images/training6.jpg",
      alt: "March Training",
      title: "March Training"
    },
    {
      src: "/images/training7.jpg",
      alt: "Instructions",
      title: "Training Instructions"
    },
    {
      src: "/images/training8.jpg",
      alt: "Marathon Run",
      title: "Endurance Training"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black py-30 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/securityguard.jpg"
            alt="Security Guard Background"
            fill
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Brownish shadows on left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-amber-900/40 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-amber-900/40 to-transparent"></div>
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-bold tracking-widest text-red-400 uppercase">
              Excellence in Security
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Top Notch Training
            </h1>
            <div className="w-32 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Gen. Marshall of US army once said "You can have all the material in the world, but without Training and Morals, it is largely ineffective"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Training Philosophy
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Active Protection, we prepare our officers and staff to put their best foot forward through a continuing program of training and supervision that is a model for the industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Training begins right after a Staff/Security Person is recruited. Each newly recruited person receives a minimum of one week of pre-deployment and assignment instructions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Documentation and Certification of training is retained in each employee's personal file. This includes verification of individual's particulars submitted by him at time of recruitment.
              </p>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl  ">
                <Image
                  src="/images/hii.png"
                  alt="Training Philosophy"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105 "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* Training Areas */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="text-sm font-bold tracking-widest text-red-600 uppercase">
        Comprehensive Training
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
        Training Areas
      </h2>
      <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
    </motion.div>

    <div className="relative">
      {/* Main Progress Line - Horizontal */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0">
        <motion.div 
          className="h-full bg-red-600"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
        {[
          { 
            title: "Physical Fitness Aspects", 
            icon: "🏃",
            description: "Starting your fitness journey... Building strength and endurance"
          },
          { 
            title: "Bearing Gate/Patrolling Duties", 
            icon: "🚪",
            description: "Mastering access control and patrol duties... Essential security operations"
          },
          { 
            title: "Uniform Maintenance", 
            icon: "👔",
            description: "Learning uniform standards... Professional appearance and maintenance"
          },
          { 
            title: "Theft Prevention Drill", 
            icon: "🛡️",
            description: "Theft prevention techniques... Protecting assets effectively"
          },
          { 
            title: "Parade Training", 
            icon: "🎖️",
            description: "Parade discipline training... Building team coordination"
          },
          { 
            title: "First Aid", 
            icon: "🚑",
            description: "Emergency first aid... Critical response skills"
          },
          { 
            title: "Basic Manners", 
            icon: "🤝",
            description: "Professional communication... Reception and telephone etiquette"
          },
          { 
            title: "Bomb Threat", 
            icon: "⚠️",
            description: "Bomb threat response... Emergency protocols"
          },
          { 
            title: "Telephone Duties", 
            icon: "📞",
            description: "Telephone etiquette... Professional communication"
          },
          { 
            title: "Maintenance of Discipline", 
            icon: "⚖️",
            description: "Maintaining discipline... Core security values"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative ${
              index % 5 === 0 ? 'col-span-1 row-span-1' : 'col-span-1'
            }`}
          >
            {/* Vertical Line for each item */}
            <div className="absolute top-1/3 left-1/2 w-0.5 h-10 bg-gray-300 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <motion.div 
                className="w-full bg-red-600"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </div>

            {/* Step Circle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: index * 0.1 
              }}
              className="relative z-10 mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full"
            >
              <span className="text-2xl">{item.icon}</span>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 300
                }}
                className="absolute -right-1 -top-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
              >
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="text-center pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout - Vertical Stepper */}
      <div className="lg:hidden relative">
        {/* Vertical Progress Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 z-0">
          <motion.div 
            className="w-full bg-red-600"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </div>

        {[
          { 
            title: "Physical Fitness Aspects", 
            icon: "🏃",
            description: "Starting your fitness journey... Building strength and endurance"
          },
          { 
            title: "Bearing Gate/Patrolling Duties", 
            icon: "🚪",
            description: "Mastering access control and patrol duties... Essential security operations"
          },
          { 
            title: "Uniform Maintenance", 
            icon: "👔",
            description: "Learning uniform standards... Professional appearance and maintenance"
          },
          { 
            title: "Theft Prevention Drill", 
            icon: "🛡️",
            description: "Theft prevention techniques... Protecting assets effectively"
          },
          { 
            title: "Parade Training", 
            icon: "🎖️",
            description: "Parade discipline training... Building team coordination"
          },
          { 
            title: "First Aid", 
            icon: "🚑",
            description: "Emergency first aid... Critical response skills"
          },
          { 
            title: "Basic Manners", 
            icon: "🤝",
            description: "Professional communication... Reception and telephone etiquette"
          },
          { 
            title: "Bomb Threat", 
            icon: "⚠️",
            description: "Bomb threat response... Emergency protocols"
          },
          { 
            title: "Telephone Duties", 
            icon: "📞",
            description: "Telephone etiquette... Professional communication"
          },
          { 
            title: "Maintenance of Discipline", 
            icon: "⚖️",
            description: "Maintaining discipline... Core security values"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start mb-10 relative"
          >
            {/* Step Circle */}
            <div className="relative z-10 flex-shrink-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: index * 0.1 
                }}
                className="w-16 h-16 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full"
              >
                <span className="text-2xl">{item.icon}</span>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 300
                }}
                className="absolute -right-2 top-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center transform -translate-y-1/2"
              >
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="ml-6 pt-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Key Management Issues */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden ">
                <Image
                  src="/images/hii2.png"
                  alt="Key Management"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Key Management Issues
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-8"></div>
              <ul className="space-y-4">
                {[
                  "Knowledge of key locations/security items at client's premises",
                  "Maintenance of Documents",
                  "Gate Access Control",
                  "Patrol Procedures",
                  "Crowd Control",
                  "Incident Reporting system/Channel"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0 mt-1"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* On Site Training */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                On Site Training
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In addition to Class Room Training, every individual is also imparted "On Site Training" in handling issues as per client's requirements / ground conditions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Collective Training, Fire Fighting & Mock Drills are also conducted by Active Protection Training Staff in coordination with the client's Management, where required.
              </p>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden ">
                <Image
                  src="/images/hii3.png"
                  alt="On Site Training"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

 {/* Training Academy */}
<section className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="text-sm font-bold tracking-widest text-red-500 uppercase">
        World Class Facility
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
        Training Academy
      </h2>
      <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
      <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        The training academy of MIDC Baramati spread over one acre of land caters to imparting highly trained professionals for our esteemed clients.
      </p>
      <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        We also have 24x7 customer service with QRT vehicle to resolve any grievances of security personnel for emergency situations.
      </p>
    </motion.div>

    {/* Modern Feature Grid */}
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        {/* 24x7 Support Feature */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative">
            {/* Animated Ring */}
            <div className="absolute -inset-4">
              <div className="w-full h-full rounded-full border-2 border-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
            
            {/* Main Circle */}
            <div className="relative w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {/* Animated Pulse */}
              <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-20 animate-ping"></div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-red-600">24x7</span>
              <h3 className="text-2xl font-bold text-gray-900">Support</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Round-the-clock customer service with QRT vehicle for emergency situations.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Emergency Response
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  QRT Vehicle
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* One Acre Facility Feature */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group"
        >
          <div className="relative">
            {/* Map-like Background */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main Circle */}
            <div className="relative w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {/* Facility Dots */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-blue-600">1 Acre</span>
              <h3 className="text-2xl font-bold text-gray-900">Facility</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Modern training academy spread over one acre of land with comprehensive facilities.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <span>⚡ Modern Equipment</span>
                <span>🏋️ Training Areas</span>
                <span>📚 Classrooms</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Team Feature */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="group"
        >
          <div className="relative">
            {/* Team Pattern */}
            <div className="absolute -inset-4">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              <div className="absolute bottom-4 left-1/2 w-8 h-8 border-2 border-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            </div>
            
            {/* Main Circle */}
            <div className="relative w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 4M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-green-600">Expert</span>
              <h3 className="text-2xl font-bold text-gray-900">Team</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Experienced trainers with military and security backgrounds.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-xs text-gray-500">
                <div className="text-center">
                  <div className="font-bold text-green-600">Military</div>
                  <div className="mt-1">Background</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-green-600">Security</div>
                  <div className="mt-1">Experts</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-green-600">Certified</div>
                  <div className="mt-1">Trainers</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-20 pt-12 border-t border-gray-100"
      >
    
      </motion.div>
    </div>
  </div>
</section>

      {/* Training Gallery */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-bold tracking-widest text-red-500 uppercase">
              Visual Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Training Gallery
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingImages.map((image, index) => {
              // Determine animation variant based on index (2 images from each direction)
              const animationVariants = [
                fadeInDown,  // index 0: from top
                fadeInDown,  // index 1: from top
                fadeInLeft,  // index 2: from left
                fadeInLeft,  // index 3: from left
                fadeInUp,    // index 4: from bottom
                fadeInUp,    // index 5: from bottom
                fadeInRight,  // index 6: from right
                fadeInRight   // index 7: from right
              ][index];
              
              return (
              <motion.div
                key={index}
                variants={animationVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
