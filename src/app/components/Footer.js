import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1a0f08] text-gray-300">
      {/* Top Section with Social Icons and Back to Top */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-12 py-3 flex justify-between items-center">
          <a href="#top" className="text-red-500 hover:text-red-400 flex items-center text-sm">
            Back to Top
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-12 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Company Info */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Image
                src="/images/active-protection-logo.png"
                alt="Active Protection Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <h3 className="text-white font-bold text-lg">ACTIVE PROTECTION</h3>
            <p className="text-sm leading-relaxed">
              Leading security service provider offering comprehensive protection solutions for businesses and residential properties across multiple locations.
            </p>
            {/* <div className="space-y-2">
              <p className="text-sm">123 Business Avenue, Sector 15, Gurugram, Haryana - 122001, India</p>
            </div> */}
          </div>

          {/* Center Section - Email Us */}
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-3">EMAIL US</h4>
              <p className="text-sm">ho@activeprotection.in</p>
              <p className="text-sm mt-3">info@activeprotection.in</p>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-semibold">Corporate Office:</p>
              <p className="text-sm">+91 8087244413</p>
            </div>
          </div>

          {/* Right Section - International Offices */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">INTERNATIONAL OFFICE</h4>
            {/* <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-sm">United States</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🇪🇺</span>
                <span className="text-sm">Europe</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🇦🇺</span>
                <span className="text-sm">Australia</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🇸🇦</span>
                <span className="text-sm">Middle East</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-12 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="hover:text-red-500 transition-colors">Terms Of Use</Link>
              <Link href="#" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-red-500 transition-colors">Disclaimer</Link>
            </div>
            <div className="text-sm mt-3 md:mt-0">
              © 2024 Active Protection. All Rights Reserved.
            </div>
            <div className="text-sm mt-3 md:mt-0">
              DESIGN BY WEBPLUS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
