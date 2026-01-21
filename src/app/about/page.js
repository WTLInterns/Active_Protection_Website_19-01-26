// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-2xl font-semibold text-red-600 mb-4">Our Story</h2>
//             <p className="text-gray-700 mb-6">
//               Active Protection has been a leading provider of security and housekeeping services for over a decade. 
//               We started with a simple mission: to provide comprehensive safety and cleanliness solutions that give 
//               our clients peace of mind.
//             </p>
//             <p className="text-gray-700 mb-6">
//               Our team consists of highly trained professionals who are committed to delivering exceptional service 
//               and maintaining the highest standards of security and cleanliness.
//             </p>
//           </div>
          
//           <div>
//             <h2 className="text-2xl font-semibold text-red-600 mb-4">Our Mission</h2>
//             <p className="text-gray-700 mb-6">
//               To be the most trusted security and housekeeping service provider by delivering innovative solutions, 
//               exceptional customer service, and maintaining the highest standards of professionalism.
//             </p>
            
//             <h2 className="text-2xl font-semibold text-red-600 mb-4">Our Vision</h2>
//             <p className="text-gray-700">
//               To create safer and cleaner environments for businesses and communities through excellence in 
//               security and housekeeping services.
//             </p>
//           </div>
//         </div>
        
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-red-600 mb-8">Why Choose Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
//               <p className="text-gray-700">Highly trained and experienced professionals dedicated to your safety and satisfaction.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-3">24/7 Service</h3>
//               <p className="text-gray-700">Round-the-clock security and housekeeping services to meet your needs anytime.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
//               <p className="text-gray-700">Tailored security and housekeeping solutions designed for your specific requirements.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/images/why-choose-us-2.jpg", // 1st image
  "/images/why-choose-us1.jpg", // 2nd image
  "/images/why-choose-us.jpg", // 3rd image
];


/* ================= ANIMATIONS ================= */

const mainImage = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const crossImage = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const contentVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= PAGE ================= */

export default function AboutPage() {

  const [current, setCurrent] = useState(0);

  // Change image every 3 seconds
 useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 3500);

  return () => clearInterval(timer);
}, []);


  return (
    <div>
      {/* <PageHeader title="About Us." /> */}

      {/* ================= INTRO SECTION ================= */}
    {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[400px]">

            <motion.div
              variants={mainImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-20 w-[75%] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <Image
                src="/images/aboutus1.jpg"
                alt="About Us"
                width={450}
                height={280}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              variants={crossImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-[55%] z-30 rounded-xl overflow-hidden border-4 border-gray-200 shadow-lg"
            >
              <Image
                src="/images/aboutus.jpg"
                alt="Overlay"
                width={300}
                height={180}
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          </div>

          <motion.div
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="mb-6">
              <span className="text-sm font-bold tracking-widest text-red-500 uppercase">
                About Active Protection
              </span>
              <div className="w-20 h-1 bg-red-600 mt-2"></div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Leading Security Services Since 1998
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Active Protection Services Pvt. Ltd. is an ISO-certified organization delivering professional security services across 15 states, serving corporates, banks, warehouses, schools, and construction sites.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 mt-1"></div>
                <span className="text-gray-700">ISO-certified organization with 25+ years of experience</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 mt-1"></div>
                <span className="text-gray-700">Registered under PSARA across 15 states</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 mt-1"></div>
                <span className="text-gray-700">Serving diverse sectors with trained professionals</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section> */}


      {/* ================= MISSION & VISION ================= */}
<section className="bg-white py-24 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
    <div className="text-center mb-16">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="text-sm font-bold tracking-widest text-red-600 uppercase">
          Our Purpose
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
          Mission & Vision
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
      </motion.div>
    </div>

    <div className="grid lg:grid-cols-12 gap-16 items-center">

      {/* ===== CONTENT ===== */}
      <div className="lg:col-span-6 space-y-12">
        <motion.div
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">MISSION</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            To provide reliable, innovative, and compliant security solutions focused on safety and long-term trust through excellence in service delivery.
          </p>
        </motion.div>

        <motion.div
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">VISION</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            To become India's most trusted private security organization through professionalism, innovation, and unwavering commitment to excellence.
          </p>
        </motion.div>
      </div>

      {/* ===== IMAGE AREA ===== */}
      <div className="lg:col-span-6 relative flex items-center justify-center min-h-[400px]">

        {/* MAIN IMAGE */}
        <motion.div
          variants={mainImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 w-[80%] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
        >
          {/* <Image
            src="/images/our-vision.jpg"
            alt="Mission"
            width={500}
            height={300}
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
          /> */}
        </motion.div>

        {/* SECOND IMAGE - Positioned below and to the side */}
        <motion.div
          variants={crossImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute -bottom-8 -right-8 w-[60%] rounded-xl overflow-hidden shadow-lg border-4 border-gray-200"
        >
          <Image
            src="/images/ourmission.jpg"
            alt="Vision"
            width={350}
            height={200}
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
        </motion.div>

      </div>
    </div>
  </div>
</section>





    
{/* ================= WHY CHOOSE US ================= */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="text-sm font-bold tracking-widest text-red-600 uppercase">
        Why Choose Us
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
        Trusted Security Solutions
      </h2>
      <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Building long-term partnerships through excellence, discipline, and unwavering commitment to your safety
      </p>
    </motion.div>

    {/* ================= SLIDESHOW ================= */}
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] mb-12">

      <AnimatePresence mode="wait">
        {[0, 1, 2].map((pos) => {
          const index = (current + pos) % images.length;

          const styles = [
  "left-0 scale-90 opacity-60",
  "left-1/2 -translate-x-1/2 -translate-y-8 scale-105 opacity-100 z-20",
  "right-0 scale-90 opacity-60",
];


          return (
            <motion.img
              key={index}
              src={images[index]}
              alt="Why Choose Us"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
             className={`
  absolute top-1/2 -translate-y-1/2
  object-cover rounded-2xl shadow-xl
  transition-all duration-700

  ${
    pos === 1
      ? "w-[50%] sm:w-[40%] md:w-[30%] h-[85%] scale-100 z-20"
      : "w-[65%] sm:w-[45%] md:w-[35%] h-[100%] scale-90 opacity-60"
  }

  ${styles[pos]}
`}
            />
          );
        })}
      </AnimatePresence>

    </div>

    {/* Features Grid */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
    </motion.div>

  </div>
</section>
</div>
  );
}
