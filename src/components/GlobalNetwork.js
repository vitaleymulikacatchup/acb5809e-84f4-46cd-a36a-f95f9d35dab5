import React from 'react';

const GlobalNetwork = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            One global cloud network{' '}
            <span className="text-cf-orange">unlike any other</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Only Cloudflare offers an intelligent, global cloud network built for speed and security. Our network spans over 320 cities in over 120 countries.
          </p>
        </div>
        
        <div className="relative">
          <div className="world-map h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-lg">
                <span className="text-sm font-medium text-gray-600">Platform</span>
                <span className="text-sm font-medium text-gray-600">Products</span>
                <span className="text-sm font-medium text-gray-600">Developers</span>
                <span className="text-sm font-medium text-gray-600">Partners</span>
                <span className="text-sm font-medium text-gray-600">Resources</span>
                <span className="text-sm font-medium text-gray-600">Company</span>
                <span className="text-sm font-medium text-cf-orange">Under attack?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;