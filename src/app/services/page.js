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

export default function ServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/service-guard.jpg"
            alt="Security Services"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

      
      </section>

      {/* Security Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left Text */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: -40, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              <h2 className="text-lg font-extrabold tracking-wide text-red-600">
                SECURITY SERVICES
              </h2>
              <p className="mt-4 text-sm text-gray-700 leading-7">
                Our experienced security staff ensures security of personal and assets by deploying a
                balanced combination of Security Guards and Security experience using various
                qualification parameters.
              </p>
              <p className="mt-4 text-sm text-gray-700 leading-7">
                Active Protection offers a range of services by which we help you in maintaining order and
                our main services include
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex gap-3 items-start">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-900/60 flex-shrink-0" />
                  Corporate Security.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-900/60 flex-shrink-0" />
                  Facilities like The Quick Response Team (QRT).
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-900/60 flex-shrink-0" />
                  24-hour Supervision & Patrolling Services.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-900/60 flex-shrink-0" />
                  Fire Safety.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-900/60 flex-shrink-0" />
                  Industrial Security.
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-700 leading-7">
                Our security personnel's are well trained, skilled to execute security operations with
                commitment, ensuring and preventing all kind of loss through accident, theft, fraud, fire,
                damage or waste, thereby delivering top-notch security services.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="lg:col-span-6 perspective-[1200px]"
              initial={{ opacity: 0, x: 120, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 6,
                }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative aspect-[16/10]"
              >
                <Image
                  src="/images/security-service1.jpg"
                  alt="Security Services"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Event Security",
                description: "Professional security for concerts, conferences, and special events",
                image: "/images/EventSecurity.jpg"
              },
              {
                title: "Residential Security",
                description: "24/7 protection for residential complexes and gated communities",
                image: "/images/Resendentialsecurity.jpg"
              },
              {
                title: "Commercial Security",
                description: "Comprehensive security solutions for businesses and offices",
                image: "/images/commercialsecurity.jpg"
              },
              {
                title: "VIP Protection",
                description: "Executive protection and personal security services",
                image: "/images/vipsecurity.jpg"
              },
              {
                title: "Surveillance Systems",
                description: "Advanced CCTV and monitoring solutions",
                image: "/images/survilancesecurity.jpg"
              },
              {
                title: "Emergency Response",
                description: "Rapid response teams for critical situations",
                image: "/images/EmergencyRes.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Service Badge */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {/* Service Features */}
                  <div className="flex items-center justify-center text-red-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="mr-2">→</span>
                    Explore Service
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
