import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center text-center mt-16 px-4">
        <h2 className="text-4xl font-bold text-pink-600">
          Fresh & Beautiful Flower Bouquets
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          We bring happiness, love, and beauty into your special moments with handcrafted bouquets for any occasion.
        </p>

        <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition">
          Order Now
        </button>
      </section>

      {/* Featured Products */}
      <section id="products" className="mt-20 px-10">
        <h3 className="text-3xl font-semibold text-center text-gray-900">
          Popular Bouquets
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

          <div className="bg-white shadow-lg rounded-xl p-4 text-center">
            <img src="https://via.placeholder.com/300" alt="" className="rounded-lg"/>
            <h4 className="text-xl font-semibold mt-3">Red Rose Love</h4>
            <p className="text-gray-600 mt-2">Perfect for anniversaries & proposals.</p>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
              Buy Now
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4 text-center">
            <img src="https://via.placeholder.com/300" alt="" className="rounded-lg"/>
            <h4 className="text-xl font-semibold mt-3">Birthday Bloom</h4>
            <p className="text-gray-600 mt-2">Bright and joyful arrangements.</p>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
              Buy Now
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4 text-center">
            <img src="https://via.placeholder.com/300" alt="" className="rounded-lg"/>
            <h4 className="text-xl font-semibold mt-3">Wedding Elegance</h4>
            <p className="text-gray-600 mt-2">Luxury designs for special events.</p>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
              Buy Now
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center bg-gray-100">
        <p className="text-gray-600">
          © 2025 RISING මල් | All Rights Reserved
        </p>
      </footer>

    </div>
  );
}
