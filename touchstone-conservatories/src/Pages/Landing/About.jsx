import React, { useState, useEffect } from "react";
import Google from "../../assets/google.svg";

export default function About() {
  const [currentIndex] = useState(0);
  const carouselItems = [
    {
      name: "Charles Anthony",
      rating: 5,
      content:
        "Chris and his team performed magic with the repair and rejuvenation of our 40-year old classic conservatory. The structure had been gradually fading and breaking down but Touchstone worked like mad to revive it to better than new. Chris faced several unforeseen challenges but he and his team were unfazed and came through with a brilliant result. We could not be happier. Highly recommend Touchstone Conservatories!",
    },
    {
      name: "Susan Bottomley",
      rating: 5,
      content:
        "Chris rescued our designed conservatory project from a no-go to a go-forward. From that point on Chris and his team achieved timeline goals. Chris' communication about project progress was excellent as was his transparency concerning  emerging difficulties. Onsite Chris and his team were hardworking and delightful to have around. Post construction they have been just as diligent and responsive. Overall we are thrilled with the beautiful materials and exacting process in building our conservatory. We highly recommend Chris for your project.",
    },
    {
      name: "Cindy Smith",
      rating: 5,
      content:
        "I couldn't be happier with our conservatory Chris and his team built. Chris was a consumate professional from start to finish. He's extremely detail oriented, paying attention to the smallest details, doing what it takes to produce a quality product, updated me on progess every step of the way, and kept to his original estimate, unlike many contractors who hit you with extra costs after the fact. Our conservatory has the quality of a fine piece of furniture. I highly recommend Chris and his team.",
    },
    {
      name: "Jonathan Bolton",
      rating: 5,
      content:
        "I have been a conservatory owner since 1995.  My conservatory was built by the predecessor firm to Touchstone Conservatories.  My wife and I have been very pleased with the conservatory, and it has given us many years of enjoyment.  The wood that is the hallmark of this conservatory design, when combined with all glass walls and roof elements, makes for an impressive view from within the room and a striking addition to our residence.  The only maintenance that I have had over the years has been the replacement of a small number of insulated glass units. Chris and his team at Touchstone were able to help fix the insulated glass units and upgraded the wooden window sash so that they could be easily replaced in the future. While my room was not built by Chris and his team I have I have had contact with Chris, and have seen his work in the area. I recommend his company and know that he and his team have the abilities to produce a high quality conservatory.",
    },
    {
      name: "Zack Combs",
      rating: 5,
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas malesuada efficitur maximus malesuada, penatibus ex erat potenti. Diam id risus varius ridiculus porta facilisis porta. Maximus mi ante litora, varius metus amet phasellus. Ad feugiat vivamus ultrices congue at sit vehicula.",
    },
    {
      name: "John Doe",
      rating: 5,
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas malesuada efficitur maximus malesuada, penatibus ex erat potenti. Diam id risus varius ridiculus porta facilisis porta. Maximus mi ante litora, varius metus amet phasellus. Ad feugiat vivamus ultrices congue at sit vehicula.",
    },
    {
      name: "Juan Dela Cruz",
      rating: 5,
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas malesuada efficitur maximus malesuada, penatibus ex erat potenti. Diam id risus varius ridiculus porta facilisis porta. Maximus mi ante litora, varius metus amet phasellus. Ad feugiat vivamus ultrices congue at sit vehicula.",
    },
  ];

  const orderedItems = [
    ...carouselItems.slice(currentIndex),
    ...carouselItems.slice(0, currentIndex),
  ];

  return (
    <section id="About" className="mt-16 bg-white text-black">
      <div className="About grid grid-cols-1 lg:grid-cols-2 gap-20 lg:items-start px-4 sm:px-8 lg:px-10">
        {/* Our Team Section */}
        <div className="flex-col grid items-center">
          <div className="font-semibold text-3xl sm:text-4xl lg:text-4xl text-black mb-4 text-center lg:text-left">
            Our Team
          </div>
          <div className="text-md leading-loose text-center lg:text-left">
            Our team of highly-skilled shop craftsmen and experienced field
            carpenters is the heart of bringing your vision to life. Each member
            of our team is dedicated to precision, quality, and craftsmanship,
            ensuring that every conservatory is a masterpiece.{" "}
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="flex-col grid items-center">
          <div className="font-semibold text-3xl sm:text-4xl lg:text-4xl text-black mb-4 text-center lg:text-left">
            What We Offer
          </div>
          <div className="text-md  leading-loose text-center lg:text-left">
            We offer custom solutions that reflect your vision and lifestyle,
            ensuring every detail, from design to installation, is meticulously
            crafted with care. Our passion lies in building conservatories that
            become the heart of your home, where relationships thrive and
            moments are cherished for generations.{" "}
          </div>
        </div>

        {/* Transparency Section */}
        <div className="flex-col grid items-center">
          <div className="font-semibold text-3xl sm:text-4xl lg:text-4xl text-black mb-4 text-center lg:text-left">
            Transparency
          </div>
          <div className="text-md  leading-loose text-center lg:text-left">
            We collaborate closely with our clients, infusing their unique
            vision into every corner of their space. With our passionate and
            creative team, we make the design process fun and enjoyable. Trust
            and transparency are our foundation, ensuring you feel confident
            throughout the journey.{" "}
          </div>
        </div>

        {/* Service Area Section */}
        <div className="flex-col grid items-center">
          <div className="font-semibold text-3xl sm:text-4xl lg:text-4xl text-black mb-4 text-center lg:text-left">
            Service Area
          </div>
          <div className="text-md  leading-loose text-center lg:text-left">
            Touchstone Conservatories primarily focuses on building within New
            Jersey, New York, and Pennsylvania. We have the ability to ship our
            modular kits nationwide for installation by local contracting
            partners.{" "}
          </div>
        </div>
      </div>

      {/* What Our Customer Say*/}
      <section className="mt-16">
        <h1 className="text-black text-center text-4xl mb-5 font-semibold">
          What Our Customers Say
        </h1>
        <div className="carousel-items flex overflow-x-hidden space-x-4 sm:space-x-8 group">
          {orderedItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item flex-shrink-0 w-full lg:w-1/3 p-4 transition-all duration-500 ease-in-out `}
            >
              <div className="card shadow-lg border-[0.5px] border-black rounded-lg overflow-hidden bg-[#D9D9D9] max-w-none animate-loop-scroll group-hover:paused">
                <div className="flex justify-end items-end p-4">
                  <img src={Google} className="w-8 text-2xl text-cyan-700" />
                </div>

                <div className="flex flex-row pl-4 -mt-3 items-center space-x-3">
                  <div className="mr-3 -mt-4">
                    <div className="w-10 h-10 rounded-full p-7 border-black border-[1px] flex items-center justify-center text-white">
                      <i className="fas fa-user text-3xl text-[#bb5062]" />
                    </div>
                  </div>
                  <div className="-mt-5">
                    <div className="text-xl font-semibold text-black">
                      {item.name}
                    </div>
                    <div className="text-xl font-semibold">
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-body pl-8 text-gray-800 text-md leading-loose overflow-auto max-h-96 text-justify indent-8">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <a href="https://www.google.com/maps/place/Touchstone+Conservatories/@40.7636548,-74.7394157,14.96z/data=!4m8!3m7!1s0x89c39bb9774aafe3:0xdd29bab61cd627c!8m2!3d40.7636651!4d-74.7396734!9m1!1b1!16s%2Fg%2F11l6xt2r6s?hl=en&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">
            <button className="btn btn-md drop-shadow-lg text-sm mt-5 text-black bg-white uppercase px-10 border-transparent hover:border-transparent hover:bg-cyan-700 hover:text-white">
              View our reviews on Google
            </button>
          </a>
        </div>
      </section>
    </section>
  );
}
