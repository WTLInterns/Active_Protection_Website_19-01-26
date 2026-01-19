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

export default function ActiveGroupPage() {
  return (
    <div>
      {/* Hero Section - Compact Height */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ActiveGroups.jpg"
            alt="Active Group Background"
            fill
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black/70"></div>
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-amber-900/50 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-amber-900/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Active Group
            </motion.h1>
            <motion.p 
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-200 mb-8"
            >
              Excellence in Infrastructure • Enterprises • Industrial Services
            </motion.p>
            <motion.div
              variants={fadeInDown}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.8 }}
              className="flex gap-4 justify-center"
            >
           
            </motion.div>
          </motion.div>
        </div>
        
        {/* Light Blue Wavy Line at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" className="w-full h-10">
            <path
              fill="none"
              stroke="#93C5FD"
              strokeWidth="2"
              d="M0,20 C120,5 240,35 360,20 C480,5 600,35 720,20 C840,5 960,35 1080,20 C1200,5 1320,35 1440,20"
            />
          </svg>
        </div>
      </section>

{/* Two Cards Section */}
<section className="relative py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-10">
      {/* Active Infrastructure Card - Simple White Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-red-300"
      >
        <h3 className="text-2xl font-bold text-red-600 mb-6">Active Infrastructure</h3>
        
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Delivery of infrastructure projects across a wide range of sectors, all over India
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          Our diverse range of capabilities and expertise allows us to invest, design, deliver and operate infrastructure projects across sectors of Transportation, Power & Energy, Social Infrastructure
        </p>
      </motion.div>

      {/* Active Enterprises Card - Simple White Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-red-300"
      >
        <h3 className="text-2xl font-bold text-blue-600 mb-6">Active Enterprises</h3>
        
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Industrial Products & Management Services Company
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          Caters to supply of end to end service of safety materials, Housekeeping Material, printing stationery, computer hardware and many more for Corporate & Industrial Needs
        </p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Split Section - Infrastructure */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Active
                <span className="text-red-600"> Infrastructure</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Delivery of infrastructure projects across a wide range of sectors, all over India
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our diverse range of capabilities and expertise allows us to invest, design, deliver and operate infrastructure projects across sectors of Transportation, Power & Energy, Social Infrastructure
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: "🚄", title: "Transportation", desc: "Rail, Road, Air & Sea" },
                { icon: "⚡", title: "Power & Energy", desc: "Renewable & Traditional" },
                { icon: "🏛️", title: "Social Infrastructure", desc: "Education & Healthcare" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-red-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-100"
                >
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

  
    </div>
  );
}
