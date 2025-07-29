import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import servicesData from "../data/homePage.json";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findService = () => {
      const governmentService = servicesData.governmentServices.find(
        (s) => s.id === id
      );
      if (governmentService) {
        setService(governmentService);
      } else {
        const importExportService = servicesData.importExportServices.find(
          (s) => s.id === id
        );
        setService(importExportService);
      }
      setLoading(false);
    };

    findService();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h2>
          <Link to="/" className="text-brand-green hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-brand-green hover:text-brand-green mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center">
                  <span className="text-4xl text-white">{service.icon}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h1>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Features Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-3 h-3 text-brand-green"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Products Section (if available) */}
              {service.products && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Available Products
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.products.map((product, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-xl">
                        <span className="text-gray-800">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                Interested in this service? Contact us for detailed information
                and pricing.
              </p>

              <Link
                to="/contact"
                className="block w-full bg-brand-green hover:bg-opacity-90 text-white text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Contact Us
              </Link>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+8801795075025"
                    className="flex items-center text-gray-600 hover:text-brand-green"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +880 1795 075 025
                  </a>
                  <a
                    href="mailto:info@kajalenterprise.com.bd"
                    className="flex items-center text-gray-600 hover:text-brand-green"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@kajalenterprise.com.bd
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
