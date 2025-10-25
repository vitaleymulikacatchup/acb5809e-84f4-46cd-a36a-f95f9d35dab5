import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      category: "ANALYST REPORT",
      title: "Cloudflare named a Leader in 2024 Gartner Magic Quadrant for DDoS Protection",
      date: "Read report"
    },
    {
      category: "ANALYST REPORT", 
      title: "Cloudflare named a Leader in 2024 Forrester Wave for SASE Platforms",
      date: "Read report"
    },
    {
      category: "ANNOUNCEMENT",
      title: "Announcing Cloudflare's first per-tenant logs",
      date: "Learn more"
    },
    {
      category: "PRODUCT",
      title: "Join our expert-led webinar on simplifying network security",
      date: "Register"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            News and resources
          </h2>
          
          <div className="flex space-x-8 mb-8">
            <button className="text-cf-orange border-b-2 border-cf-orange pb-2 font-medium">
              What's new
            </button>
            <button className="text-gray-600 hover:text-cf-orange pb-2">
              Insights
            </button>
            <button className="text-gray-600 hover:text-cf-orange pb-2">
              Library
            </button>
            <button className="text-gray-600 hover:text-cf-orange pb-2">
              Events
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="gradient-orange rounded-lg p-6 h-48 mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-cf-orange uppercase tracking-wide">
                    {item.category}
                  </p>
                  <h3 className="font-semibold text-gray-900 group-hover:text-cf-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-cf-orange text-sm font-medium">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-cf-orange rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;