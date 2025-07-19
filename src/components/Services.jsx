import { useState } from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/homePage.json";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { governmentServices, importExportServices } = servicesData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-green mb-4">
            Products & Services
          </h2>

          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Innovative solutions combining technology and sustainability for
            modern agriculture
          </p>
        </div>

        {/* Government Tenders - Enhanced */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {governmentServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white p-5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative z-10">
                  {/* Icon with Enhanced Container */}
                  <div className="w-10 h-10 bg-brand-green rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{service.icon}</span>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brand-green transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-900 leading-relaxed mb-4">
                    {service.description.length > 50
                      ? service.description.slice(0, 50) + "..."
                      : service.description}
                  </p>

                  {/* Enhanced Features Preview */}
                  <div className="space-y-1">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                        <span className="text-gray-900">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 2 && (
                      <button className="text-brand-blue hover:text-brand-green transition-colors text-sm font-medium mt-1">
                        +{service.features.length - 2} more features
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Import & Export - Enhanced */}
        <div className="">
          <h3 className="text-2xl md:text-4xl font-bold text-brand-green text-center mb-16">
            Import & Export
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importExportServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white p-5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Enhanced Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-900 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Enhanced Products List */}
                <div className="flex flex-wrap gap-2">
                  {service.products.slice(0, 2).map((product, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-50 text-brand-blue px-3 py-1.5 rounded-full text-xs font-medium"
                    >
                      {product}
                    </span>
                  ))}
                  {service.products.length > 2 && (
                    <span className="text-brand-green text-xs font-medium">
                      +{service.products.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
