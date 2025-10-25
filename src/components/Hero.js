import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connect, protect, and build{' '}
              <span className="text-cf-orange">everywhere</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The most trusted cloud platform for building and running applications efficiently
              and securely, anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Get started
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Contact sales
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-88 h-88 bg-gradient-to-br from-cf-orange to-orange-600 rounded-full mx-auto opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-white bg-opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-cf-orange mb-2">Introducing Cloudflare AI Security Suite</h3>
              <p className="text-gray-600">Comprehensive AI-powered security solutions</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-cf-orange mb-2">2023 Cloudflare Digital Security Report</h3>
              <p className="text-gray-600">Latest insights on digital security trends</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our site uses cookies</h3>
              <p className="text-sm text-gray-600">We use cookies to improve your experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;