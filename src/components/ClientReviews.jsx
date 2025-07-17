import { useState, useEffect } from "react";

const ClientReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Dr. Abdul Rahman",
      position: "Director, Department of Agriculture Extension",
      organization: "Ministry of Agriculture, Bangladesh",
      review:
        "Kajal Enterprise has consistently delivered exceptional results in our agricultural technology projects. Their CSAWM implementation across 15 districts has revolutionized water management practices and significantly improved farmer productivity. Their professionalism and technical expertise are unmatched.",
      rating: 5,
      project: "CSAWM Implementation",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      impact: "15 Districts Transformed",
    },
    {
      name: "Eng. Fatima Sultana",
      position: "Project Manager",
      organization: "Agricultural Marketing Department",
      review:
        "The cold storage solutions provided by Kajal Enterprise have been game-changing for our post-harvest management initiatives. Their zero-energy cooling chambers reduced our losses by 40% and the installation process was seamless. Highly recommended for any agricultural infrastructure project.",
      rating: 5,
      project: "Cold Storage Solutions",
      image:
        "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      impact: "40% Loss Reduction",
    },
    {
      name: "Mohammad Hasan",
      position: "Cooperative Manager",
      organization: "Rangpur Agricultural Cooperative",
      review:
        "Working with Kajal Enterprise on solar irrigation systems has been an excellent experience. Their team's technical knowledge and commitment to sustainable solutions impressed us. The systems have reduced our energy costs by 60% while improving irrigation efficiency.",
      rating: 5,
      project: "Solar Irrigation Network",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      impact: "60% Energy Savings",
    },
    {
      name: "Dr. Nasreen Ahmed",
      position: "Research Director",
      organization: "Bangladesh Agricultural Research Institute",
      review:
        "Kajal Enterprise's greenhouse automation systems have exceeded our expectations. The precision control and monitoring capabilities have enabled us to conduct advanced research while maintaining optimal growing conditions. Their after-sales support is exceptional.",
      rating: 5,
      project: "Greenhouse Automation",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      impact: "Advanced Research Enabled",
    },
    {
      name: "Karim Uddin",
      position: "Field Operations Manager",
      organization: "Sylhet Agricultural Development Project",
      review:
        "The IoT-based precision agriculture solutions from Kajal Enterprise have transformed our farming operations. Real-time monitoring and automated controls have improved crop yields by 25% while reducing water usage. Outstanding technical support throughout the project.",
      rating: 5,
      project: "Precision Agriculture",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      impact: "25% Yield Increase",
    },
    {
      name: "Rashida Khatun",
      position: "Program Coordinator",
      organization: "Rural Development Academy",
      review:
        "Kajal Enterprise's training programs and technology implementation have been instrumental in our rural development initiatives. Their comprehensive approach to farmer education and technology transfer has created lasting impact in our communities.",
      rating: 5,
      project: "Rural Technology Transfer",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      impact: "5000+ Farmers Trained",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green bg-opacity-10 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 bg-opacity-10 rounded-full translate-y-36 -translate-x-36"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-green-light mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trusted by government agencies and agricultural organizations across
            Bangladesh. Heres what our clients say about our services and
            impact.
          </p>
        </div>

        {/* Main Review Display */}
        <div className="relative">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-24 h-24 rounded-full mx-auto lg:mx-0 object-cover border-4 border-brand-green"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-brand-green rounded-full p-2">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {reviews[currentReview].name}
                </h3>
                <p className="text-brand-green-light font-semibold mb-1">
                  {reviews[currentReview].position}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {reviews[currentReview].organization}
                </p>

                <div className="flex justify-center lg:justify-start mb-4">
                  {renderStars(reviews[currentReview].rating)}
                </div>

                <div className="bg-brand-green bg-opacity-20 rounded-lg p-3">
                  <p className="text-sm font-semibold text-brand-green-light">
                    Project:
                  </p>
                  <p className="text-white">{reviews[currentReview].project}</p>
                </div>
              </div>

              {/* Review Content */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <svg
                    className="absolute -top-4 -left-4 w-12 h-12 text-brand-green opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>

                  <blockquote className="text-lg md:text-xl leading-relaxed mb-6 pl-8">
                    {reviews[currentReview].review}
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="bg-white bg-opacity-10 rounded-lg px-4 py-2">
                      <p className="text-sm text-gray-300">Impact Achieved:</p>
                      <p className="font-bold text-brand-green-light">
                        {reviews[currentReview].impact}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-300">Rating:</span>
                      <div className="flex">
                        {renderStars(reviews[currentReview].rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
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
          </button>

          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Review Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview
                  ? "bg-brand-green scale-125"
                  : "bg-white bg-opacity-30"
              }`}
            />
          ))}
        </div>

        {/* Client Logos/Stats */}
        <div className="mt-16">
          <div className="bg-white bg-opacity-5 rounded-2xl p-8 border border-white border-opacity-10">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-green-light mb-2">
                  25+
                </div>
                <p className="text-gray-300 text-sm">Government Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-green-light mb-2">
                  100%
                </div>
                <p className="text-gray-300 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-green-light mb-2">
                  50+
                </div>
                <p className="text-gray-300 text-sm">Successful Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-green-light mb-2">
                  7+
                </div>
                <p className="text-gray-300 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-300 mb-6">
            Ready to join our satisfied clients?
          </p>
          <button className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
