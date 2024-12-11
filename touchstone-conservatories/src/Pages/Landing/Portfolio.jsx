import React, { useState, useEffect, useRef } from "react";
import { images } from "../../Components/CustomRooms";

export default function Portfolio() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [carouselOffset, setCarouselOffset] = useState(0);
  const [nextClickCount, setNextClickCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          setCurrentImage(images[nextIndex]);
          return nextIndex;
        });
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const goToPrevious = () => {
    setCarouselOffset((prevOffset) => Math.max(prevOffset - 8, 0));
    setNextClickCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const goToNext = () => {
    if (nextClickCount < 4) {
      setCarouselOffset((prevOffset) =>
        Math.min(prevOffset + 8, images.length - 1)
      );
      setNextClickCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div id="Portfolio" className="text-black text-center mt-16">
      <h1 className="text-black text-2xl lg:text-4xl mb-5 font-semibold">
        Explore Our Custom Designs
      </h1>

      {/* Image Stage */}
      <div className="w-full mb-10 flex justify-center">
        <img
          src={currentImage}
          alt="Hovered Custom Room"
          className="min-w-96 h-96 object-cover transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Carousel for Images */}
      <div className="carousel h-16">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${carouselOffset * 100}px)`,
          }}
        >
          {images.map((image, index) => (
            <div
              className="carousel-item"
              key={index}
              onMouseEnter={() => {
                setCurrentImage(image);
                setCurrentIndex(index);
                handleMouseEnter();
              }}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image}
                alt={`Custom Room ${index + 1}`}
                className={`transition-transform duration-300 ease-in-out ${
                  index === currentIndex ? "border-4 border-cyan-700" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-5 mx-2">
        {/* Previous button */}
        <button
          id="prev"
          disabled={carouselOffset === 0}
          onClick={goToPrevious}
          className="btn btn-sm drop-shadow-lg text-sm mt-1 text-black bg-white uppercase px-5 border-transparent hover:border-transparent hover:bg-cyan-700 hover:text-white"
        >
          ❮
        </button>

        {/* Next button */}
        <button
          id="next"
          onClick={goToNext}
          className={`btn btn-sm drop-shadow-lg text-sm mt-1 text-black bg-white uppercase px-5 border-transparent hover:border-transparent hover:bg-cyan-700 hover:text-white ${
            nextClickCount >= 4 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={nextClickCount >= 4}
        >
          ❯
        </button>
      </div>

      <section className="flex items-center justify-center h-screen bg-white my-16">
        <iframe
          className="min-w-full min-h-full"
          src="https://www.youtube.com/embed/1DKLCAGSWmQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}
