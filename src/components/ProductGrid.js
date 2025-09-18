import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { shoes } from '../data/shoes';

const ProductGrid = () => {
  const [selectedColors, setSelectedColors] = useState({});

  return (
    <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Handcrafted with precision, designed for the modern lifestyle. 
            Each pair tells a story of quality and style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {shoes.map((product) => {
            const selectedColor = selectedColors[product.id] || 0;
            const currentColor = product.colors[selectedColor];
            
            return (
            <div
              key={product.id}
              className="group relative glass rounded-2xl overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 neon-glow hover-lift"
            >
                {/* Product Image */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={currentColor.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link 
                      to={`/shoe/${product.id}`}
                      className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-xs sm:text-sm">
                    {product.description}
                  </p>
                  
                  {/* Color Selection */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-300 mb-2">Colors:</p>
                    <div className="flex space-x-2">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColors(prev => ({ ...prev, [product.id]: index }))}
                          className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                            selectedColor === index 
                              ? 'border-white scale-110' 
                              : 'border-gray-400 hover:border-white'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      ${product.basePrice}
                    </span>
                    <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 mobile-touch">
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 border-2 border-pink-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 glass neon-glow">
            <span className="relative z-10">View All Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
