import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import video1 from "../assets/video1.mp4";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      <Navbar />

      {/* Hero Section with Video Background */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center px-4 min-h-[600px] overflow-hidden">
        {/* Video Background */}
        <video 
          className="fixed top-0 left-0 w-full h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video1} type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="fixed top-0 left-0 w-full h-screen bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl font-bold text-white drop-shadow-2xl">
            Fresh & Beautiful Flower Bouquets
          </h2>
          <p className="mt-6 text-xl text-white drop-shadow-lg">
            We bring happiness, love, and beauty into your special moments with handcrafted bouquets for any occasion.
          </p>

          <button className="mt-8 bg-pink-600 text-white px-8 py-4 rounded-full text-lg hover:bg-pink-700 transition shadow-2xl">
            Order Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="mt-20 px-10">
        <h3 className="text-3xl font-semibold text-center text-gray-900">
          Popular Bouquets
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

          <div className="bg-white shadow-lg rounded-xl p-4 text-center group">
            <div className="relative rounded-lg overflow-hidden">
              
              <img 
                src="https://via.placeholder.com/300" 
                alt="" 
                className="rounded-lg absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
              />
            </div>
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

      <Footer />

    </div>
  );
}
