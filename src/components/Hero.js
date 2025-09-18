import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight">
          <span className="block gradient-text">Sole</span>
          <span className="block gradient-text">
            Crafts
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Discover premium footwear crafted with precision, style, and unparalleled comfort. 
          Step into the future of fashion.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => {
              const shopSection = document.getElementById('shop');
              if (shopSection) {
                shopSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base sm:text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 neon-glow mobile-touch w-full sm:w-auto"
          >
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => {
              const shopSection = document.getElementById('shop');
              if (shopSection) {
                shopSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-pink-500 text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-105 glass mobile-touch w-full sm:w-auto"
          >
            <span className="relative z-10">Explore Collection</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
