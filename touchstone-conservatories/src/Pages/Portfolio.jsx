import React, { useState, useEffect, useRef } from "react";
import cr from "../assets/custom-rooms/customrooms(1).png";
import cr1 from "../assets/custom-rooms/customrooms(1).jpg";
import cr2 from "../assets/custom-rooms/customrooms(2).jpg";
import cr3 from "../assets/custom-rooms/customrooms(3).jpg";
import cr4 from "../assets/custom-rooms/customrooms(4).jpg";
import cr5 from "../assets/custom-rooms/customrooms(5).jpg";
import cr6 from "../assets/custom-rooms/customrooms(6).jpg";
import cr7 from "../assets/custom-rooms/customrooms(7).jpg";
import cr8 from "../assets/custom-rooms/customrooms(8).jpg";
import cr10 from "../assets/custom-rooms/customrooms(10).jpg";
import cr11 from "../assets/custom-rooms/customrooms(11).jpg";
import cr12 from "../assets/custom-rooms/customrooms(12).jpg";
import cr13 from "../assets/custom-rooms/customrooms(13).jpg";
import cr14 from "../assets/custom-rooms/customrooms(14).jpg";
import cr15 from "../assets/custom-rooms/customrooms(15).jpg";
import cr16 from "../assets/custom-rooms/customrooms(16).jpg";
import cr17 from "../assets/custom-rooms/customrooms(17).jpg";
import cr18 from "../assets/custom-rooms/customrooms(18).jpg";
import cr19 from "../assets/custom-rooms/customrooms(19).jpg";
import cr20 from "../assets/custom-rooms/customrooms(20).jpg";
import cr21 from "../assets/custom-rooms/customrooms(21).jpg";
import cr22 from "../assets/custom-rooms/customrooms(22).jpg";
import cr23 from "../assets/custom-rooms/customrooms(23).jpg";
import cr24 from "../assets/custom-rooms/customrooms(24).jpg";
import cr25 from "../assets/custom-rooms/customrooms(25).jpg";
import cr26 from "../assets/custom-rooms/customrooms(26).jpg";
import cr27 from "../assets/custom-rooms/customrooms(27).jpg";
import cr28 from "../assets/custom-rooms/customrooms(28).jpg";
import cr29 from "../assets/custom-rooms/customrooms(29).jpg";
import cr30 from "../assets/custom-rooms/customrooms(30).jpg";
import cr31 from "../assets/custom-rooms/customrooms(31).jpg";
import cr32 from "../assets/custom-rooms/customrooms(32).jpg";
import cr33 from "../assets/custom-rooms/customrooms(33).jpg";
import cr34 from "../assets/custom-rooms/customrooms(34).jpg";
import cr35 from "../assets/custom-rooms/customrooms(35).jpg";
import cr36 from "../assets/custom-rooms/customrooms(36).jpg";
import cr37 from "../assets/custom-rooms/customrooms(37).jpg";
import cr38 from "../assets/custom-rooms/customrooms(38).jpg";
import cr39 from "../assets/custom-rooms/customrooms(39).jpg";
import cr40 from "../assets/custom-rooms/customrooms(40).jpg";
import cr41 from "../assets/custom-rooms/customrooms(41).jpg";
import cr42 from "../assets/custom-rooms/customrooms(42).jpg";
import cr43 from "../assets/custom-rooms/customrooms(43).jpg";
import cr44 from "../assets/custom-rooms/customrooms(44).jpg";
import cr45 from "../assets/custom-rooms/customrooms(45).jpg";
import cr46 from "../assets/custom-rooms/customrooms(46).jpg";
import cr47 from "../assets/custom-rooms/customrooms(47).jpg";
import cr48 from "../assets/custom-rooms/customrooms(48).jpg";
import cr49 from "../assets/custom-rooms/customrooms(49).jpg";
import cr50 from "../assets/custom-rooms/customrooms(50).jpg";
import cr51 from "../assets/custom-rooms/customrooms(51).jpg";
import cr52 from "../assets/custom-rooms/customrooms(52).jpg";
import cr53 from "../assets/custom-rooms/customrooms(53).jpg";
import cr54 from "../assets/custom-rooms/customrooms(54).jpg";
import cr55 from "../assets/custom-rooms/customrooms(55).jpg";
import cr56 from "../assets/custom-rooms/customrooms(56).jpg";
import cr57 from "../assets/custom-rooms/customrooms(57).jpg";
import cr58 from "../assets/custom-rooms/customrooms(58).jpg";
import cr59 from "../assets/custom-rooms/customrooms(59).jpg";

const images = [
  cr,
  cr1,
  cr2,
  cr3,
  cr4,
  cr5,
  cr6,
  cr7,
  cr8,
  cr10,
  cr11,
  cr12,
  cr13,
  cr14,
  cr15,
  cr16,
  cr17,
  cr18,
  cr19,
  cr20,
  cr21,
  cr22,
  cr23,
  cr24,
  cr25,
  cr26,
  cr27,
  cr28,
  cr29,
  cr30,
  cr31,
  cr32,
  cr33,
  cr34,
  cr35,
  cr36,
  cr37,
  cr38,
  cr39,
  cr40,
  cr41,
  cr42,
  cr43,
  cr44,
  cr45,
  cr46,
  cr47,
  cr48,
  cr49,
  cr50,
  cr51,
  cr52,
  cr53,
  cr54,
  cr55,
  cr56,
  cr57,
  cr58,
  cr59,
];

export default function Portfolio() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [carouselOffset, setCarouselOffset] = useState(0); // Track the carousel offset
  const [nextClickCount, setNextClickCount] = useState(0); // Track the number of next button clicks
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
    setNextClickCount((prevCount) => Math.max(prevCount - 1, 0)); // Decrease next click count
  };

  const goToNext = () => {
    if (nextClickCount < 4) {
      setCarouselOffset((prevOffset) =>
        Math.min(prevOffset + 8, images.length - 1)
      );
      setNextClickCount((prevCount) => prevCount + 1); // Increase next click count
    }
  };

  return (
    <div id="Portfolio" className="text-black text-center mt-20">
      <h1 className="text-black text-4xl mb-5 font-bold">
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
    </div>
  );
}
