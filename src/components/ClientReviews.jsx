import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homeData from "../data/homePage.json";

const ClientReviews = () => {
  const { clientReviews } = homeData;
  const [currentReview, setCurrentReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextReview();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentReview]);

  const handleNextReview = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentReview((prev) => (prev + 1) % clientReviews.reviews.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrevReview = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentReview(
        (prev) =>
          (prev - 1 + clientReviews.reviews.length) %
          clientReviews.reviews.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`ri-star-fill ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl translate-y-36 -translate-x-36"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {clientReviews.heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {clientReviews.subheading}
          </p>
        </div>

        {/* Enhanced Review Card */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-8 border border-white/20 hover:border-brand-green/30 transition-colors duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Enhanced Client Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-1 group">
                  <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-xl group-hover:bg-brand-green/30 transition-colors duration-300"></div>
                  <img
                    src={clientReviews.reviews[currentReview].image}
                    alt={clientReviews.reviews[currentReview].name}
                    className="w-24 h-24 rounded-full mx-auto lg:mx-0 object-cover border-4 border-brand-green relative z-10"
                  />
                  <div className="absolute bottom-0 right-0 bg-brand-green rounded-full px-1 z-20">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                </div>

                <h3 className="text-2xl font-bold">
                  {clientReviews.reviews[currentReview].name}
                </h3>
                <p className="text-brand-green font-semibold mb-1">
                  {clientReviews.reviews[currentReview].position}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {clientReviews.reviews[currentReview].organization}
                </p>

                <div className="flex justify-center lg:justify-start mb-4 gap-1">
                  {renderStars(clientReviews.reviews[currentReview].rating)}
                </div>
              </div>

              {/* Enhanced Review Content */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <i className="ri-double-quotes-l absolute -top-4 -left-4 text-4xl text-brand-green opacity-50"></i>
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-8 pl-8">
                    {clientReviews.reviews[currentReview].review}
                  </blockquote>

                  <div className="flex items-center gap-4 mt-8">
                    <div className="bg-white/10 rounded-xl px-6 py-3 backdrop-blur-sm">
                      <p className="text-sm text-brand-green ">Project:</p>
                      <p className="font-bold text-white">
                        {clientReviews.reviews[currentReview].project}
                      </p>
                    </div>
                    <div className="bg-brand-green/20 rounded-xl px-6 py-3 backdrop-blur-sm">
                      <p className="text-sm font-semibold text-brand-green mb-1">
                        Project Impact:
                      </p>
                      <p className="text-white">
                        {clientReviews.reviews[currentReview].impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={handlePrevReview}
            disabled={isAnimating}
            className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full px-2 py-1 transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <button
            onClick={handleNextReview}
            disabled={isAnimating}
            className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full px-2 py-1 transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            {clientReviews.cta.heading}
          </p>
          <Link
            to={clientReviews.cta.buttonLink}
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-opacity-90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {clientReviews.cta.buttonText}
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
