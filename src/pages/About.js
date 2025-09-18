import React from 'react';

const About = () => {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About SoleCrafts
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Crafting premium footwear for the modern lifestyle since 2020
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                SoleCrafts was born from a passion for quality footwear and a desire to create 
                shoes that combine timeless design with modern comfort. Our journey began in 
                a small workshop where every pair was handcrafted with attention to detail.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we continue that tradition of excellence, using premium materials and 
                innovative techniques to create footwear that stands the test of time.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="aspect-square bg-gray-700 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Our Workshop</span>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design</h3>
              <p className="text-gray-300">
                Every design is carefully crafted to balance style, comfort, and functionality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quality</h3>
              <p className="text-gray-300">
                We use only the finest materials and maintain the highest standards in every step.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sustainability</h3>
              <p className="text-gray-300">
                Committed to sustainable practices and environmentally conscious manufacturing.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">Sarah Johnson</h3>
                <p className="text-gray-400 mb-2">Founder & CEO</p>
                <p className="text-gray-300 text-sm">
                  Passionate about creating footwear that combines style and comfort.
                </p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">Mike Chen</h3>
                <p className="text-gray-400 mb-2">Head of Design</p>
                <p className="text-gray-300 text-sm">
                  Bringing innovative designs to life with attention to every detail.
                </p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">Emma Davis</h3>
                <p className="text-gray-400 mb-2">Quality Assurance</p>
                <p className="text-gray-300 text-sm">
                  Ensuring every pair meets our high standards of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
