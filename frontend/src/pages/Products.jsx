import React from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Red Rose Romance",
      description: "Classic red roses perfect for expressing deep love and passion",
      price: "$45",
      image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=400&fit=crop",
      category: "Romantic"
    },
    {
      id: 2,
      title: "Birthday Celebration",
      description: "Vibrant mixed flowers to brighten any birthday",
      price: "$35",
      image: "https://images.unsplash.com/photo-1513003550745-9d42cf3880e0?w=400&h=400&fit=crop",
      category: "Birthday"
    },
    {
      id: 3,
      title: "Wedding Elegance",
      description: "Sophisticated white and cream roses for your special day",
      price: "$120",
      image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&h=400&fit=crop",
      category: "Wedding"
    },
    {
      id: 4,
      title: "Sunflower Sunshine",
      description: "Bright sunflowers to bring warmth and joy",
      price: "$40",
      image: "https://images.unsplash.com/photo-1597848212624-e83db54bee95?w=400&h=400&fit=crop",
      category: "Cheerful"
    },
    {
      id: 5,
      title: "Purple Dream",
      description: "Luxurious purple orchids and lilies",
      price: "$55",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop",
      category: "Elegant"
    },
    {
      id: 6,
      title: "Spring Garden",
      description: "Fresh seasonal blooms in a delightful arrangement",
      price: "$38",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
      category: "Seasonal"
    },
    {
      id: 7,
      title: "Pink Passion",
      description: "Soft pink roses and peonies for tender moments",
      price: "$48",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop",
      category: "Romantic"
    },
    {
      id: 8,
      title: "Tropical Paradise",
      description: "Exotic tropical flowers for a unique statement",
      price: "$65",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&h=400&fit=crop",
      category: "Exotic"
    },
    {
      id: 9,
      title: "White Purity",
      description: "Elegant white lilies symbolizing purity and peace",
      price: "$50",
      image: "https://images.unsplash.com/photo-1563210122-0cc2b9a7f711?w=400&h=400&fit=crop",
      category: "Elegant"
    },
    {
      id: 10,
      title: "Wildflower Wonder",
      description: "Charming wildflower mix for a natural touch",
      price: "$32",
      image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=400&fit=crop",
      category: "Rustic"
    },
    {
      id: 11,
      title: "Corporate Chic",
      description: "Professional arrangement perfect for office spaces",
      price: "$85",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop",
      category: "Corporate"
    },
    {
      id: 12,
      title: "Anniversary Bliss",
      description: "Romantic mixed bouquet celebrating enduring love",
      price: "$60",
      image: "https://images.unsplash.com/photo-1535864104114-e4a94a4df58b?w=400&h=400&fit=crop",
      category: "Anniversary"
    }
  ];

  const categories = ["All", "Romantic", "Birthday", "Wedding", "Elegant", "Cheerful", "Seasonal", "Exotic", "Corporate"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <section className="py-20 px-4 text-center bg-white">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          Our Bouquets
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Handcrafted with love for every special occasion
        </p>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-pink-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">
            We create custom bouquets tailored to your needs and preferences
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Request Custom Bouquet
          </button>
        </div>
      </section>
    </div>
  );
}
