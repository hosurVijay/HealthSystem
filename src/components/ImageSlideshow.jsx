import React, { useState, useEffect } from 'react';

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images - replace these URLs with your actual healthcare-related images
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1551076805-e1869033e561",
      title: "Modern Healthcare Facility"
    },
    {
      url: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
      title: "Advanced Medical Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      title: "Dedicated Medical Team"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden"  style={{ marginTop: "50px" }}>

      {/* Main Image */}
      <div 
        className="w-full h-full transition-transform duration-500 ease-out hover:shadow-20  hover:scale-105 "
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center px-4">
            {slides[currentIndex].title}
          </h2>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow; 