// filepath: f:\Personal\Kajal Enterprise\src\components\ProductsServices.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckLineIcon,
  ArrowRightLineIcon,
  LeafLineIcon,
  StorageLineIcon,
  FlashlightLineIcon,
} from "remixicon-react";
import homeData from "../data/homePage.json";

const ProductsServices = () => {
  const [activeTab, setActiveTab] = useState("products");
  const { productsServices } = homeData;

  const getIconComponent = (categoryName) => {
    switch (categoryName) {
      case "Technology":
        return <FlashlightLineIcon className="w-6 h-6" />;
      case "Infrastructure":
        return <StorageLineIcon className="w-6 h-6" />;
      case "Sustainability":
        return <LeafLineIcon className="w-6 h-6" />;
      default:
        return <LeafLineIcon className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-4">
            {productsServices.heading}
          </h2>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
            {["products", "services"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-brand-green text-white shadow-md transform -translate-y-0.5"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsServices.products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-white/90 text-brand-green px-3 py-1.5 rounded-full text-sm font-medium">
                      {getIconComponent(product.category)}
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <CheckLineIcon className="w-5 h-5 text-brand-green mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {product.features.length > 3 && (
                      <span className="text-brand-blue text-sm font-medium">
                        +{product.features.length - 3} more features
                      </span>
                    )}
                  </div>

                  {/* Benefits Preview */}
                  <div className="bg-gray-50 p-4 rounded-xl mb-6">
                    <div className="text-sm font-medium text-gray-900 mb-2">
                      Key Benefits:
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.benefits[0]}
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="font-medium text-brand-blue">
                      {product.price}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center gap-1 px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Get Quote
                      <ArrowRightLineIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services Grid */}
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsServices.services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-8">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-4xl">{service.icon}</span>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mb-6">{service.description}</p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <CheckLineIcon className="w-5 h-5 text-brand-green mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green px-3 py-1.5 rounded-full text-sm font-medium">
                      {getIconComponent(service.category)}
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-brand-green/10 to-brand-blue/10 p-12 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Agriculture?
            </h3>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our innovative solutions and how we
              can help optimize your agricultural operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-brand-green hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg gap-2"
            >
              Request Custom Solution
              <ArrowRightLineIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
