import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroData from "../data/heroSlides.json";
import "remixicon/fonts/remixicon.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { slides } = heroData;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-5xl mx-auto px-4 pt-24">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-slideUp">
                  {slide.title}
                </h1>
                <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto opacity-0 animate-slideUp animation-delay-400">
                  {slide.description}
                </p>
                <Link
                  to={slide.cta.link}
                  className="inline-flex items-center bg-brand-green hover:bg-opacity-90 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 opacity-0 animate-slideUp animation-delay-600"
                >
                  {slide.cta.text}
                  <i className="ri-arrow-right-line ml-2 transition-transform group-hover:translate-x-1"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 z-10"
      >
        <i className="ri-arrow-left-s-line text-2xl"></i>
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 z-10"
      >
        <i className="ri-arrow-right-s-line text-2xl"></i>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-brand-green"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
