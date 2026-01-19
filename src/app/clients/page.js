'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function ClientsPage() {
  const clients = [
    {
      id: 1,
      name: "Client 1",
      category: "Technology",
      image: "/images/client1.jpg",
      description: "Leading technology solutions provider"
    },
    {
      id: 2,
      name: "Client 2",
      category: "Healthcare",
      image: "/images/client2.jpg",
      description: "Premier healthcare services"
    },
    {
      id: 3,
      name: "Client 3",
      category: "Finance",
      image: "/images/client3.jpg",
      description: "Financial services excellence"
    },
    {
      id: 4,
      name: "Client 4",
      category: "Education",
      image: "/images/client4.jpg",
      description: "Educational institution"
    },
    {
      id: 5,
      name: "Client 5",
      category: "Retail",
      image: "/images/client5.jpg",
      description: "Retail chain management"
    },
    {
      id: 6,
      name: "Client 6",
      category: "Manufacturing",
      image: "/images/client6.jpg",
      description: "Industrial manufacturing"
    },
    {
      id: 7,
      name: "Client 7",
      category: "Hospitality",
      image: "/images/client7.jpg",
      description: "Hospitality services"
    },
    {
      id: 8,
      name: "Client 8",
      category: "Real Estate",
      image: "/images/client8.jpg",
      description: "Real estate development"
    },
    {
      id: 9,
      name: "Client 9",
      category: "Logistics",
      image: "/images/client9.jpg",
      description: "Logistics and supply chain"
    },
    {
      id: 10,
      name: "Client 10",
      category: "Energy",
      image: "/images/client10.jpg",
      description: "Energy sector solutions"
    },
    {
      id: 11,
      name: "Client 11",
      category: "Telecommunications",
      image: "/images/client11.jpg",
      description: "Telecom services"
    },
    {
      id: 12,
      name: "Client 12",
      category: "Automotive",
      image: "/images/client12.jpg",
      description: "Automotive industry"
    },
    {
      id: 13,
      name: "Client 13",
      category: "Pharmaceutical",
      image: "/images/client13.jpg",
      description: "Pharmaceutical solutions"
    },
    {
      id: 14,
      name: "Client 14",
      category: "Agriculture",
      image: "/images/client14.jpg",
      description: "Agricultural services"
    },
    {
      id: 15,
      name: "Client 15",
      category: "Aviation",
      image: "/images/client15.jpg",
      description: "Aviation industry partner"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: "🏢" },
    { number: "15+", label: "Industries Served", icon: "🏭" },
    { number: "10+", label: "Years of Trust", icon: "🤝" },
    { number: "24/7", label: "Support Available", icon: "📞" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        {/* Left Side Image */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2">
          <Image
            src="/images/clients.jpg"
            alt="Clients Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Right Side Shadows */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-gray-900 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black/80 to-transparent"></div>
          <div className="absolute top-1/4 right-0 w-48 h-1/2 bg-gradient-to-l from-black/60 to-transparent blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-3/4 bg-gradient-to-l from-black/40 to-transparent blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center min-h-[300px]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-2xl"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-red-400"> Our CLIENTELE</span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                <span className="text-black">We are proud to serve diverse clients</span>across various industries  
                <span className="text-black"> providing exceptional security and houseke</span>eping  services with commitment.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Wavy Line - Black Left, White Right */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-2">
          <svg viewBox="0 0 1440 40" className="w-full h-10">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="black" />
                <stop offset="50%" stopColor="black" />
                <stop offset="50%" stopColor="white" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
            </defs>
            <path
              d="M0,20 Q180,5 360,20 T720,20 T1080,20 T1440,20"
              stroke="url(#waveGradient)"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M0,25 Q180,10 360,25 T720,25 T1080,25 T1440,25"
              stroke="url(#waveGradient)"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
      </section>



      {/* Clients Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Valued <span className="text-red-600">Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the diverse range of businesses that trust Active Protection for their security and service needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {/* <p className="text-sm text-gray-200 leading-relaxed">
                        {client.description}
                      </p> */}
                      {/* <div className="mt-3">
                        <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {client.category}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
