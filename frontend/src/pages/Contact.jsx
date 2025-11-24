import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Let us know how we can help make your occasion special
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! Your message has been sent successfully. We'll get back to you soon! 🌸
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your event or bouquet needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-pink-700 transition shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-600 to-pink-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📱</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Social Media</h3>
                    <p className="text-pink-100">Facebook: RISING මල්</p>
                    <p className="text-pink-100">Messenger: Chat with us anytime</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-pink-100">contact@risingmal.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🕐</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-pink-100">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-pink-100">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">🚚</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Delivery</h3>
                    <p className="text-pink-100">Same-day delivery available</p>
                    <p className="text-pink-100">Order before 2 PM for same-day service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Order Links</h2>
              <div className="space-y-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition"
                >
                  Order via Facebook
                </a>
                <a 
                  href="https://m.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg text-center font-semibold hover:from-pink-600 hover:to-purple-700 transition"
                >
                  Chat on Messenger
                </a>
              </div>
            </div>

            {/* Map or Image */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=300&fit=crop" 
                alt="Beautiful flowers" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Our Studio</h3>
                <p className="text-gray-600">
                  Come see our fresh flowers and get personalized recommendations for your special occasion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer">
                How far in advance should I order?
              </summary>
              <p className="mt-4 text-gray-600">
                For best availability, we recommend ordering 2-3 days in advance. However, we also offer same-day delivery for orders placed before 2 PM!
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer">
                Do you deliver?
              </summary>
              <p className="mt-4 text-gray-600">
                Yes! We offer delivery within the city. Delivery charges may vary based on location. Contact us for specific delivery details.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer">
                Can I customize my bouquet?
              </summary>
              <p className="mt-4 text-gray-600">
                Absolutely! We love creating custom arrangements. Just let us know your preferences, colors, and occasion, and we'll design something perfect for you.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 group">
              <summary className="font-semibold text-lg text-gray-800 cursor-pointer">
                What payment methods do you accept?
              </summary>
              <p className="mt-4 text-gray-600">
                We accept cash on delivery, bank transfers, and mobile payment apps. Payment details will be provided when you place your order.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
