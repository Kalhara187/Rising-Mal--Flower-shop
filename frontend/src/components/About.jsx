import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 shadow-md bg-pink-50">
        <h1 className="text-2xl font-bold text-pink-600">RISING මල්</h1>
        <nav className="flex space-x-6 text-lg">
          <a href="/" className="hover:text-pink-600">Home</a>
          <a href="/about" className="text-pink-600 font-semibold">About</a>
          <a href="/products" className="hover:text-pink-600">Bouquets</a>
          <a href="/contact" className="hover:text-pink-600">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section className="px-10 py-16 text-center">
        <h2 className="text-4xl font-bold text-pink-600">About Us</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
          RISING මල් is a creative flower boutique dedicated to bringing joy, beauty, 
          and love into people’s lives through handcrafted, elegant bouquet designs. 
          We specialize in custom floral arrangements for birthdays, weddings, anniversaries, 
          corporate events, and special occasions.
        </p>
      </section>

      {/* Vision & Mission Cards */}
      <section className="px-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        
        <div className="bg-pink-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-pink-700">Our Mission</h3>
          <p className="mt-4 text-gray-700">
            To create beautiful, unique floral designs that connect emotions, express love, 
            and make every moment memorable.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-pink-700">Our Story</h3>
          <p className="mt-4 text-gray-700">
            What began as a small passion project turned into a beloved brand trusted by many. 
            We grew by spreading happiness through flowers and connecting personally with customers.
          </p>
        </div>

      </section>

      {/* Image Section */}
      <section className="mt-20 text-center">
        <img 
          src="https://via.placeholder.com/900x400"
          alt="Flower Shop"
          className="mx-auto rounded-2xl shadow-lg"
        />
        <p className="text-gray-600 mt-4">Handcrafted bouquets for every occasion.</p>
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
