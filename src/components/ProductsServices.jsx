// filepath: f:\Personal\Kajal Enterprise\src\components\ProductsServices.jsx
import React, { useState } from "react";

const ProductsServices = () => {
  const [activeTab, setActiveTab] = useState("products");

  const services = [
    {
      title: "Agricultural Technology",
      description:
        "Smart farming solutions including IoT sensors, automated irrigation, and crop monitoring systems.",
      icon: "🌾",
      category: "Technology",
    },
    {
      title: "Cold Storage Solutions",
      description:
        "Modern cold storage facilities with temperature control and monitoring systems.",
      icon: "❄️",
      category: "Infrastructure",
    },
    {
      title: "Greenhouse Systems",
      description:
        "Advanced greenhouse technology for controlled environment agriculture.",
      icon: "🏡",
      category: "Infrastructure",
    },
  ];

  const products = [
    {
      title: "IoT Sensors",
      description:
        "Advanced sensors for soil moisture, temperature, and nutrient monitoring.",
      price: "Contact for Quote",
      image: "/images/iot-sensor.jpg",
      features: [
        "Real-time monitoring",
        "Cloud integration",
        "Long battery life",
      ],
    },
    {
      title: "Solar Irrigation",
      description: "Solar-powered irrigation systems for sustainable farming.",
      price: "Contact for Quote",
      image: "/images/solar-irrigation.jpg",
      features: ["Energy efficient", "Remote control", "Weather resistant"],
    },
    {
      title: "Smart Controllers",
      description: "Automated control systems for agricultural operations.",
      price: "Contact for Quote",
      image: "/images/smart-controller.jpg",
      features: [
        "Mobile app control",
        "Automated scheduling",
        "Data analytics",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Products & Services
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative agricultural solutions combining technology and
            sustainability
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "products"
                  ? "bg-brand-green text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "services"
                  ? "bg-brand-green text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-brand-green mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-brand-green font-semibold">
                      {product.price}
                    </span>
                    <button className="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services Grid */}
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium">
                  {service.category}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center bg-brand-green hover:bg-brand-green text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Request Custom Solution
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
