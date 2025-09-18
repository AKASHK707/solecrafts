import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'YouTube', href: '#', icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' }
  ];

  const footerLinks = [
    { title: 'Shop', links: ['New Arrivals', 'Best Sellers', 'Sale', 'Collections'] },
    { title: 'Support', links: ['Size Guide', 'Shipping', 'Returns', 'Contact Us'] },
    { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Sustainability'] }
  ];

  return (
    <footer className="glass border-t border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">SoleCrafts</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting premium footwear for the modern lifestyle. 
              Quality, comfort, and style in every step.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 neon-glow"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <button
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">Get the latest updates on new releases and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2025 SoleCrafts. All rights reserved. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
