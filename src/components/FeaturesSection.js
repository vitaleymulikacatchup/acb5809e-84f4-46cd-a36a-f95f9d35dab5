import React from 'react';
import { Users, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Connect your people, apps and AI agents",
      description: "Modernize your network and deliver your workforce against unauthorized access, with browsing controls and phishing. Accelerate your journey to Zero Trust with our SASE platform today.",
      buttonText: "Connect users",
      buttonLink: "Learn more",
      related: ["Individual Zero Trust plans", "30-day SASE journey"]
    },
    {
      icon: Shield,
      title: "Protect and accelerate websites and AI-enabled apps",
      description: "Use our industry-leading WAF, DDoS, and bot protection to protect your websites, APIs, and AI accelerate while accelerating performance with our ultra-fast global network.",
      buttonText: "Start for free",
      buttonLink: "Compare plans",
      related: ["Cloudflare named a Leader in Forrester Wave for WAF for 2024"]
    },
    {
      icon: Zap,
      title: "Build and secure AI agents",
      description: "Agents are the future of AI, and Cloudflare is the best place to get started. Use our agents framework and orchestration tools to run the models you choose and deploy them globally with our serverless and edge compute platform.",
      buttonText: "Start building today",
      buttonLink: "Developer docs",
      related: ["Build AI apps quickly", "Build AI Agents"]
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReverse = index % 2 === 1;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                isReverse ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${isReverse ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-primary">
                      {feature.buttonText}
                    </button>
                    <button className="text-cf-orange hover:text-orange-600 font-medium">
                      {feature.buttonLink}
                    </button>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Related</p>
                    {feature.related.map((item, idx) => (
                      <p key={idx} className="text-cf-orange hover:text-orange-600 cursor-pointer">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className={`${isReverse ? 'lg:col-start-1' : ''}`}>
                  {index === 0 && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-80">
                        <div className="flex items-center justify-center h-full">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="w-12 h-12 bg-cf-orange rounded-full opacity-80"></div>
                            <div className="w-12 h-12 bg-cf-orange rounded-full opacity-60"></div>
                            <div className="w-12 h-12 bg-cf-orange rounded-full opacity-40"></div>
                            <div className="w-12 h-12 bg-cf-orange rounded-full opacity-60"></div>
                            <div className="w-16 h-16 bg-cf-orange rounded-full"></div>
                            <div className="w-12 h-12 bg-cf-orange rounded-full opacity-60"></div>
                            <div className="w-12 h-12 bg-cf-orange rounded-full opacity-40"></div>
                            <div className="w-12 h-12 bg-cf-orange rounded-full opacity-60"></div>
                            <div className="w-12 h-12 bg-cf-orange rounded-full opacity-80"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-80">
                        <div className="flex items-center justify-center h-full">
                          <div className="relative w-32 h-32">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full"></div>
                            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                              <div className="w-4 h-16 bg-cf-orange rounded-full transform rotate-45"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-80">
                        <div className="flex items-center justify-center h-full">
                          <div className="bg-cf-dark-blue rounded-lg p-6 w-full max-w-sm">
                            <div className="space-y-2">
                              <div className="h-2 bg-blue-400 rounded w-3/4"></div>
                              <div className="h-2 bg-blue-400 rounded w-1/2"></div>
                              <div className="h-2 bg-blue-400 rounded w-5/6"></div>
                              <div className="h-8 bg-cf-orange rounded mt-4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;