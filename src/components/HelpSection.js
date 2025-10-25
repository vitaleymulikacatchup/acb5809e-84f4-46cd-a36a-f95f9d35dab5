import React from 'react';
import { Zap, Shield, Target, Globe, TrendingUp, Settings } from 'lucide-react';

const HelpSection = () => {
  const helpItems = [
    {
      icon: Zap,
      title: "Accelerate website performance"
    },
    {
      icon: Shield,
      title: "Block bad traffic"
    },
    {
      icon: Target,
      title: "Optimize video experiences"
    },
    {
      icon: Globe,
      title: "Deploy serverless code"
    },
    {
      icon: TrendingUp,
      title: "Deploy AI on the edge"
    },
    {
      icon: Settings,
      title: "Eliminate egress fees for object storage"
    }
  ];

  return (
    <section className="gradient-orange section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            How Cloudflare can help
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {helpItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-cf-orange mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12">
            <button className="bg-white text-cf-orange hover:bg-gray-100 font-medium px-8 py-4 rounded-md transition-colors text-lg">
              Show more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;