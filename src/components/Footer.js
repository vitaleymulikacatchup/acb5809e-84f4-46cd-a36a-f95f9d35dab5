import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "GETTING STARTED",
      links: [
        "Free plans",
        "Small business plans", 
        "For enterprises",
        "Get a recommendation",
        "Request a demo"
      ]
    },
    {
      title: "SOLUTIONS",
      links: [
        "Connectivity cloud",
        "Application services",
        "SASE and workspace security",
        "Network services",
        "Developer platform"
      ]
    },
    {
      title: "SUPPORT",
      links: [
        "Help center",
        "Customer support",
        "Community forum",
        "Developers Discord",
        "Lost account access?"
      ]
    },
    {
      title: "COMPLIANCE",
      links: [
        "Compliance resources",
        "Trust",
        "GDPR",
        "Responsible AI",
        "Transparency report"
      ]
    },
    {
      title: "COMPANY",
      links: [
        "About Cloudflare",
        "Network map",
        "Our team",
        "Logos & press kit",
        "Diversity, equity, & inclusion"
      ]
    }
  ];

  return (
    <footer className="bg-cf-dark-blue text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-sm mb-4 text-gray-300">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 lg:mb-0">
              <img src="/images/cloudflare-logo-white.svg" alt="Cloudflare" className="h-8" />
              <span className="text-sm text-gray-400">© 2024 Cloudflare, Inc.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;