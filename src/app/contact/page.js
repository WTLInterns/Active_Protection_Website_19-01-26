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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "HEAD OFFICE",
      details: [
        "H.O- Singh House,",
        "Opposite M.S.E.B Bhigwan Road,",
        "Baramati, Pune - 413102"
      ]
    },
    {
      icon: "📞",
      title: "Phone Numbers",
      details: ["9921841013 / 9822218891", "02112244480, 243113. 243184, 209561"]
    },
    {
      icon: "✉️",
      title: "Email Address",
      details: ["ho@activeprotection.in"]
    },
    {
      icon: "📍",
      title: "CORPORATE OFFICE",
      details: [
        "Gera's Imperium Alpha,",
        "Office No 1019, 20 & 21, 10th Floor,",
        "Grant Road, Kharadi, Pune - 411014"
      ]
    },
    {
      icon: "📞",
      title: "Corporate Phone",
      details: ["9921841013 / 9822218891"]
    },
    {
      icon: "✉️",
      title: "Corporate Email",
      details: ["info@activeprotection.in"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/securityguard12.jpg"
            alt="Contact Background"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/90 to-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-gray-300">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for all your security and housekeeping service needs.
              Our team is ready to provide you with best solutions.
            </p>
          </motion.div>
        </div>

        {/* Red Wavy Line */}
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
      {/* Contact Section */}



      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CONTACT US</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information - Matching Image Style */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {/* Corporate Office Section */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">CORPORATE OFFICE</h2>
                </div>

                <div className="pl-11">
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 mr-3 text-red-600 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Gera's Imperium Alpha,
                      Office No 1019, 20 & 21, 10th Floor,
                      Grant Road, Kharadi, Pune - 411014

                      9921841013 / 9822218891
                      <br />
                      info@activeprotection.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Head Office Section */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">HEAD OFFICE</h2>
                </div>

                <div className="pl-11">
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 mr-3 text-red-600 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      H.O- Singh House,
                      Opposite M.S.E.B Bhigwan Road,
                      Baramati, Pune - 413102
                      <br />
                      9921841013 / 9822218891
                      <br />
                      02112244480, 243113. 243184, 209561
                      <br />
                      ho@activeprotection.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Numbers Section */}
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">EMAIL US</h3>
                    <a href="mailto:info@pioneersecure.com" className="text-xl font-bold text-red-600 hover:text-red-700 transition-colors">
                                          ho@activeprotection.in  info@activeprotection.in

                    </a>
                  </div>
                </div>


              </div>
            </motion.div>

            {/* Contact Form - Enhanced Professional Style */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 lg:p-10">
                <h2 className="text-3xl font-bold mb-2 text-white">
                  Send us a <span className="text-red-400">Message</span>
                </h2>
                <p className="text-gray-300 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white placeholder-gray-400"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"
                      >
                        <option value="" className="bg-gray-800">Select a Service</option>
                        <option value="security" className="bg-gray-800">Security Services</option>
                        <option value="housekeeping" className="bg-gray-800">Housekeeping Services</option>
                        <option value="training" className="bg-gray-800">Training Programs</option>
                        <option value="other" className="bg-gray-800">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white placeholder-gray-400"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
