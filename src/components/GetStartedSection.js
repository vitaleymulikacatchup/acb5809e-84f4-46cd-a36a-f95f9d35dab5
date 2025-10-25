import React from 'react';
import { Shield, MessageCircle, Phone } from 'lucide-react';

const GetStartedSection = () => {
  const options = [
    {
      icon: Shield,
      title: "Get started for free",
      description: "Get started with Cloudflare's connectivity cloud with our free plan.",
      buttonText: "Sign up"
    },
    {
      icon: MessageCircle,
      title: "Need help choosing?",
      description: "Get personalized recommendations from our solution experts.",
      buttonText: "Contact us"
    },
    {
      icon: Phone,
      title: "Talk to an expert",
      description: "Get comprehensive guidance from our technical experts.",
      buttonText: "Schedule call"
    }
  ];

  return (
    <section className="gradient-orange section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Get started with the connectivity cloud
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {options.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 text-center">
                  <Icon className="w-12 h-12 text-cf-orange mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  <button className="btn-primary w-full">
                    {option.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;