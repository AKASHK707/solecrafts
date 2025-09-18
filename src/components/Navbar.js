import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleShopClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      // If on home page, scroll to shop section
      const shopSection = document.getElementById('shop');
      if (shopSection) {
        shopSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If on other pages, navigate to shop page
      window.location.href = '/shop';
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl sm:text-2xl font-bold gradient-text hover:scale-105 transition-all duration-300">
              SoleCrafts
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                item.name === 'Shop' ? (
                  <button
                    key={item.name}
                    onClick={handleShopClick}
                    className="text-white hover:text-pink-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 relative group mobile-touch"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white hover:text-pink-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 relative group mobile-touch"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md">
              {navItems.map((item) => (
                item.name === 'Shop' ? (
                  <button
                    key={item.name}
                    onClick={(e) => {
                      handleShopClick(e);
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-pink-400 block px-3 py-2 text-base font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white hover:text-pink-400 block px-3 py-2 text-base font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
