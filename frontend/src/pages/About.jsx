import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          About RISING මල්
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Where passion meets petals, and every bouquet tells a story
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At RISING මල්, our mission is to bring happiness, love, and beauty into people's lives through fresh and creative flower bouquets.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that flowers have the power to transform moments into memories, and we're dedicated to making every occasion special with our handcrafted arrangements.
            </p>
          </div>
          <div className="bg-pink-100 rounded-2xl p-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&h=400&fit=crop&q=80" 
              alt="Beautiful flower arrangement" 
              className="rounded-xl w-full h-80 object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1560119253-f0525a4e1cf1?w=600&h=400&fit=crop&q=80" 
                alt="Flower shop story" 
                className="rounded-xl w-full h-80 object-cover shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                What started as a small passion project has blossomed into something beautiful. RISING මල් began with a simple dream: to share the joy of flowers with our community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Through creativity, dedication, and an unwavering commitment to customer happiness, we've grown from humble beginnings to become a trusted name in floral arrangements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every bouquet we create is a testament to our passion for beauty and our dedication to making your special moments unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🎂</div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">Birthdays</h3>
              <p className="text-gray-600">
                Bright and cheerful arrangements to celebrate life's special milestones
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">💒</div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">Weddings</h3>
              <p className="text-gray-600">
                Elegant and romantic bouquets for your perfect day
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">Anniversaries</h3>
              <p className="text-gray-600">
                Timeless arrangements to celebrate enduring love
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">Corporate Events</h3>
              <p className="text-gray-600">
                Professional and sophisticated designs for business occasions
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">Special Occasions</h3>
              <p className="text-gray-600">
                Custom creations for any celebration or moment worth remembering
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌺</div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">Custom Orders</h3>
              <p className="text-gray-600">
                Personalized bouquets designed just for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">How to Order</h2>
          <p className="text-lg text-gray-700 mb-12">
            We make ordering easy and convenient for you
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Facebook</h3>
              <p className="text-gray-600">
                Message us on our Facebook page
              </p>
            </div>
            <div className="p-6">
              <div className="bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Messenger</h3>
              <p className="text-gray-600">
                Chat with us directly for quick responses
              </p>
            </div>
            <div className="p-6">
              <div className="bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Website</h3>
              <p className="text-gray-600">
                Browse our collection and contact us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">🌸 Quality</h3>
              <p className="text-gray-700">
                We source only the freshest flowers to ensure every bouquet is perfect
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">💖 Creativity</h3>
              <p className="text-gray-700">
                Each arrangement is uniquely crafted with artistic vision and care
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">😊 Customer Happiness</h3>
              <p className="text-gray-700">
                Your satisfaction and joy are at the heart of everything we do
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">✨ Passion</h3>
              <p className="text-gray-700">
                We pour love and dedication into every single bouquet we create
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
