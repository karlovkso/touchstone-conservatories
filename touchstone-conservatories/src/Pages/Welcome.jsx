import React from "react";
import firstCard from "../assets/1-1.png";
import secondCard from "../assets/2-1.png";
import thirdCard from "../assets/3-1.png";

export default function Welcome() {
  return (
    <div id="Welcome" className="Welcome text-black">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mt-16">
          Welcome to Touchstone Conservatories
        </h1>
        <p className="mt-10 px-20 max-w-full">
          We believe in creating more than just conservatories —{" "}
          <span className="font-semibold">
            we build spaces that inspire connection, joy, and lifelong memories.
          </span>{" "}
          We understand that you're not just buying a conservatory; you're
          investing in a space to live in. That's why we design and innovate
          with people in mind,{" "}
          <span className="font-semibold">
            every room we design is a reflection of our dedication to
            craftsmanship, sustainability, and innovation,
          </span>{" "}
          whether it's a sun room, conservatory, or pool enclosure.
        </p>
        <h1 className="text-4xl font-semibold mt-10">Why Choose Us?</h1>
      </div>

      {/* Cards */}
      <div className="flex justify-around items-center text-center mt-10">
        <div className="flex flex-wrap gap-14 justify-center">
          <div className="card bg-white w-72 shadow-xl">
            <figure>
              <img src={firstCard} alt="logo1" />
            </figure>
            <div className="card-body pt-0">
              <h1 className="card-title justify-center">
                30+ Years Of Experience
              </h1>
              <p className="pt-3">
                We bring decades of expertise to ensure your enclosure is built
                to last.
              </p>
            </div>
          </div>
          <div className="card bg-white w-72 shadow-xl">
            <figure>
              <img src={secondCard} alt="logo1" />
            </figure>
            <div className="card-body pt-0">
              <h1 className="card-title justify-center">
                We Offer Free Design
              </h1>
              <p className="pt-3">
                We provide a no-cost, custom design consultation for qualified
                customers to bring vision to life.
              </p>
            </div>
          </div>
          <div className="card bg-white w-72 shadow-xl">
            <figure>
              <img src={thirdCard} alt="logo1" />
            </figure>
            <div className="card-body pt-0">
              <h1 className="card-title justify-center">Competitive Pricing</h1>
              <p className="pt-3">
                We offer top-quality enclosures at unbeatable rates, tailored to
                your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
