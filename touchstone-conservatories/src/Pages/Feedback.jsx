import React, { useState, useEffect } from "react";

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    {
      name: "Susan Bottomley",
      rating: 5,
      content:
        "Chris rescued our designed conservatory project from a no-go to a go-forward. From that point on Chris and his team achieved timeline goals. Chris’ communication about project progress was excellent as was his transparency concerning emerging difficulties.",
    },
    {
      name: "Hikaru Nakamura",
      rating: 4,
      content:
        "Chris rescued our designed conservatory project from a no-go to a go-forward. From that point on Chris and his team achieved timeline goals. Chris’ communication about project progress was excellent as was his transparency concerning emerging difficulties.",
    },
    {
      name: "Wesley So",
      rating: 3,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.",
    },
    {
      name: "Magnus Carlsen",
      rating: 5,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const orderedItems = [
    ...carouselItems.slice(currentIndex),
    ...carouselItems.slice(0, currentIndex),
  ];

  return (
    <section id="Feedback" className="py-20 mb-10">
      <h1 className="text-black text-center text-4xl mb-5 font-semibold">
        What Our Customers Say
      </h1>
      <div className="carousel-items flex overflow-x-hidden space-x-4 sm:space-x-8 justify-center">
        {orderedItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item flex-shrink-0 w-full lg:w-1/3 p-4 transition-all duration-500 ease-in-out ${
              index === 3 ? "hidden" : ""
            }`}
          >
            <div className="card shadow-lg border-[0.5px] border-black rounded-lg overflow-hidden bg-[#D9D9D9] w-full">
              <div className="flex justify-end items-end p-4">
                <i className="fab fa-google text-2xl text-cyan-700" />
              </div>

              <div className="flex flex-row pl-4 -mt-3 items-center space-x-3">
                <div className="mr-3 -mt-4">
                  <div className="w-10 h-10 rounded-full p-7 border-black border-[1px] flex items-center justify-center text-white">
                    <i className="fas fa-user text-3xl text-[#bb5062]" />
                  </div>
                </div>
                <div className="-mt-5">
                  <div className="text-xl font-bold text-black">
                    {item.name}
                  </div>
                  <div className="text-xl font-bold">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-body pl-8 text-gray-800 text-md leading-loose">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
