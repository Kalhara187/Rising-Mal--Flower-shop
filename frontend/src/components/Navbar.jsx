import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-pink-50">
      <h1 className="text-2xl font-bold text-pink-600">RISING මල්</h1>
      <nav className="flex space-x-6 text-lg">
        <a href="/" className="hover:text-pink-600">Home</a>
        <a href="/about" className="hover:text-pink-600">About</a>
        <a href="#products" className="hover:text-pink-600">Bouquets</a>
        <a href="#contact" className="hover:text-pink-600">Contact</a>
      </nav>
    </header>
  );
}
