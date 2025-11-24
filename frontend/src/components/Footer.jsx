import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-pink-400">
              RISING මල්
            </h3>
            <p className="text-gray-400">
              Bringing happiness, love, and beauty through handcrafted flower bouquets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-pink-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-pink-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-pink-400 transition">
                  Our Bouquets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-pink-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Birthday Bouquets</li>
              <li>Wedding Arrangements</li>
              <li>Anniversary Flowers</li>
              <li>Corporate Events</li>
              <li>Custom Designs</li>
              <li>Same-Day Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 contact@risingmal.com</li>
              <li>📱 Facebook: RISING මල්</li>
              <li>💬 Messenger Chat Available</li>
              <li>🕐 Mon-Sat: 9AM-6PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} RISING මල් | All Rights Reserved
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with 💖 for spreading happiness through flowers
          </p>
        </div>
      </div>
    </footer>
  );
}
