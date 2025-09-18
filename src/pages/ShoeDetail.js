import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { shoes } from '../data/shoes';

const ShoeDetail = () => {
  const { id } = useParams();
  const shoe = shoes.find(s => s.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  if (!shoe) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Shoe not found</h1>
          <Link to="/shop" className="text-blue-400 hover:text-blue-300">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const currentColor = shoe.colors[selectedColor];

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-white transition-colors duration-300">Shop</Link>
              <span>/</span>
              <span className="text-white">{shoe.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden mb-6">
                <img
                  src={currentColor.image}
                  alt={shoe.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Color Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Available Colors</h3>
                <div className="flex space-x-3">
                  {shoe.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
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
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{shoe.name}</h1>
              <p className="text-3xl font-bold text-white mb-6">${shoe.basePrice}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">{shoe.description}</p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Size</h3>
                <div className="grid grid-cols-6 gap-2">
                  {shoe.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-white bg-white text-black'
                          : 'border-gray-600 text-white hover:border-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                <ul className="space-y-2">
                  {shoe.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <button className="w-full px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Add to Cart - ${shoe.basePrice}
                </button>
                <button className="w-full px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                  Add to Wishlist
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Category:</span>
                    <p className="text-white">{shoe.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">SKU:</span>
                    <p className="text-white">SC-{shoe.id.toString().padStart(3, '0')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {shoes
                .filter(s => s.id !== shoe.id)
                .slice(0, 3)
                .map((relatedShoe) => (
                  <Link
                    key={relatedShoe.id}
                    to={`/shoe/${relatedShoe.id}`}
                    className="group bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
                  >
                    <div className="aspect-square bg-gray-700">
                      <img
                        src={relatedShoe.colors[0].image}
                        alt={relatedShoe.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{relatedShoe.name}</h3>
                      <p className="text-gray-400 mb-4">{relatedShoe.description}</p>
                      <p className="text-xl font-bold text-white">${relatedShoe.basePrice}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoeDetail;
