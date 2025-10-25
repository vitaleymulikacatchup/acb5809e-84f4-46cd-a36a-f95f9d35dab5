import React from 'react';

const CompaniesSection = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Leading companies rely on{' '}
            <span className="text-cf-orange">Cloudflare</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Connect users and apps securely
              </h3>
              <p className="text-lg text-gray-600">
                Keep your people safe and productive as any device, in any location with unified SASE and Zero Trust solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Start for free
                </button>
                <button className="text-cf-orange hover:text-orange-600 font-medium">
                  Learn more
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">D</span>
                </div>
                <div>
                  <p className="text-gray-600 mb-4">
                    "Discord is where the world builds relationships. Cloudflare helps us deliver on that mission, connecting our internal teams and the 200+ million people who use Discord every month. We can rest easy knowing every request to our critical apps is processed by the same infrastructure."
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">More from</p>
                    <p className="text-cf-orange">Director of Infrastructure, Discord</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="gradient-orange rounded-2xl p-8 text-white">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Connect users and apps securely
              </h3>
              <p className="text-lg opacity-90">
                Keep your people safe and productive as any device, in any location with unified SASE and Zero Trust solutions.
              </p>
              <button className="bg-white text-cf-orange hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors">
                Start for free
              </button>
            </div>
          </div>
        </div>
        
        {/* Company logos */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-red-500">DOORDASH</span>
            </div>
            <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-orange-500">GARMIN</span>
            </div>
            <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-blue-500">IBM</span>
            </div>
            <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-blue-600">Shopify</span>
            </div>
            <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-blue-400">Soft15</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;