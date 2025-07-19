import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title:
        "Revolutionizing agriculture with advanced technology & sustainable practices",
      subtitle: "Leading Government Contractor in Agricultural Innovation",
      image:
        "https://images.pexels.com/photos/2132086/pexels-photo-2132086.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      title: "Precision Agriculture & IoT Solutions",
      subtitle: "Smart Irrigation Systems for Modern Farming",
      image:
        "https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      title: "Sustainable Storage Solutions",
      subtitle: "Cold Rooms & Zero Energy Cooling Chambers",
      image:
        "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-in">
            {slides[currentSlide].subtitle}
          </p>

          {/* Company Info */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-light">
                  2018
                </h3>
                <p className="text-sm">Founded</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-green-light">
                  14+
                </h3>
                <p className="text-sm">Team Members</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-green-light">
                  Md Saiful Islam Khan
                </h3>
                <p className="text-sm">Proprietor</p>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-block bg-brand-green hover:bg-brand-green text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-slide-in"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-brand-green"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
