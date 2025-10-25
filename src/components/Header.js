import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/cloudflare-logo.svg" alt="Cloudflare" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-cf-orange transition-colors">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-cf-orange transition-colors">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-cf-orange transition-colors">
                Developers
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-cf-orange transition-colors">
                Partners
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-cf-orange transition-colors">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-cf-orange transition-colors">
                Company
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-sm text-gray-600">Contact sales</span>
            <span className="text-sm text-cf-orange font-medium">+44 20 3514 6970</span>
            <button className="text-gray-700 hover:text-cf-orange transition-colors">Log in</button>
            <button className="btn-primary">Sign up</button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-cf-orange">Products</a>
              <a href="#" className="block text-gray-700 hover:text-cf-orange">Solutions</a>
              <a href="#" className="block text-gray-700 hover:text-cf-orange">Developers</a>
              <a href="#" className="block text-gray-700 hover:text-cf-orange">Partners</a>
              <a href="#" className="block text-gray-700 hover:text-cf-orange">Resources</a>
              <a href="#" className="block text-gray-700 hover:text-cf-orange">Company</a>
              <div className="pt-4 border-t">
                <button className="block w-full text-left text-gray-700 hover:text-cf-orange mb-2">Log in</button>
                <button className="btn-primary w-full">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;