import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-100 via-pink-50 to-white min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-pink-300 text-9xl">🌸</div>
        <div className="absolute top-40 right-20 text-pink-300 text-7xl">🌺</div>
        <div className="absolute bottom-20 left-1/4 text-pink-300 text-8xl">🌹</div>
        <div className="absolute bottom-40 right-1/3 text-pink-300 text-6xl">💐</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
          RISING <span className="text-pink-600">මල්</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
          Bringing Happiness, Love & Beauty
        </p>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Handcrafted flower bouquets for birthdays, weddings, anniversaries, and every special moment
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/products"
            className="bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Order Now
          </Link>
          <Link 
            to="/about"
            className="bg-white text-pink-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-pink-600"
          >
            Our Story
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-3">🌹</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh Flowers</h3>
            <p className="text-gray-600">Sourced daily for maximum freshness and beauty</p>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Creative Designs</h3>
            <p className="text-gray-600">Unique arrangements crafted with artistic passion</p>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same-day delivery available for your convenience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
