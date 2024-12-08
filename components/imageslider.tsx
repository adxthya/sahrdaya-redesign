"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    { src: "/company.webp", alt: "company" },
    { src: "/nba.webp", alt: "NBA" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 3 seconds
    return () => clearInterval(timer); // Clean up interval on unmount
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden md:mb-10">
      {/* Image Container */}
      <div className="relative w-full h-[400px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={2000}
              height={2000}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 md:left-40 transform -translate-y-1/2 text-black bg-white p-4 rounded-full opacity-70 hover:opacity-100 focus:outline-none transition-opacity"
      >
        <span className="text-3xl">❮</span>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 md:right-40 transform -translate-y-1/2 text-black bg-white p-4 rounded-full opacity-70 hover:opacity-100 focus:outline-none transition-opacity"
      >
        <span className="text-3xl">❯</span>
      </button>
    </div>
  );
};

export default ImageSlider;
