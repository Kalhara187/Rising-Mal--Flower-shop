import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      title: "Red Rose Romance",
      description: "Classic red roses perfect for expressing deep love",
      price: "$45",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&h=600&fit=crop&q=80",
      category: "Romantic"
    },
    {
      id: 2,
      title: "Birthday Celebration",
      description: "Vibrant mixed flowers to brighten any birthday",
      price: "$35",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=600&fit=crop&q=80",
      category: "Birthday"
    },
    {
      id: 3,
      title: "Wedding Elegance",
      description: "Sophisticated white roses for your special day",
      price: "$120",
      image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=600&h=600&fit=crop&q=80",
      category: "Wedding"
    },
    {
      id: 4,
      title: "Sunflower Sunshine",
      description: "Bright sunflowers to bring warmth and joy",
      price: "$40",
      image: "https://images.unsplash.com/photo-1567258006714-81a0454d9c2f?w=600&h=600&fit=crop&q=80",
      category: "Cheerful"
    },
    {
      id: 5,
      title: "Purple Dream",
      description: "Luxurious purple orchids and lilies",
      price: "$55",
      image: "https://images.unsplash.com/photo-1587814213271-80e3a82ed7a9?w=600&h=600&fit=crop&q=80",
      category: "Elegant"
    },
    {
      id: 6,
      title: "Spring Garden",
      description: "Fresh seasonal blooms in delightful arrangement",
      price: "$38",
      image: "https://images.unsplash.com/photo-1560119253-f0525a4e1cf1?w=600&h=600&fit=crop&q=80",
      category: "Seasonal"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Bouquets
          </h2>
          <p className="text-xl text-gray-600">
            Our most popular arrangements, handcrafted with love
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition shadow-lg"
          >
            View All Bouquets
          </Link>
        </div>
      </div>
    </section>
  );
}
