import React from "react";
import background from "../../assets/background.png";
import firstCard from "../../assets/1-1.png";
import secondCard from "../../assets/2-1.png";
import thirdCard from "../../assets/3-1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="Home" className="Home text-black">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-overlay inset-0 bg-cyan-800 bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full text-white">
            <h1 className="mb-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium ">
              We Create Space, Handcrafted For Connection
            </h1>
            <p className="mt-10 mb-5 text-md sm:text-lg md:text-xl lg:text-2xl">
              We build elegant, custom conservatories that transform your home
              and outdoor spaces. Our designs bring natural light, comfort, and
              style to your life. Ready to create your dream space? Contact us
              today for a free consultation!
            </p>
            <Link to="/CustomDesign">
              <button className="btn px-5 lg:px-10 text-xs lg:text-sm mt-5 text-black bg-white uppercase border-transparent hover:border-transparent hover:bg-cyan-700 hover:text-white">
                Get Free Design
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold mt-16">
          Welcome to Touchstone Conservatories
        </h1>
        <p className="text-base lg:text-lg mt-10 px-10 lg:px-20 max-w-full">
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
        <h1 className="text-2xl lg:text-4xl font-semibold mt-10">
          Why Choose Us?
        </h1>
      </div>

      {/* Cards */}
      <div className="flex justify-around items-center text-center mt-10">
        <div className="flex flex-wrap gap-14 justify-center">
          <div className="card bg-white w-96 shadow-xl">
            <div className="justify-center flex">
              <figure className="w-64 lg:w-80">
                <img src={firstCard} alt="logo1" />
              </figure>
            </div>
            <div className="card-body pt-0">
              <h1 className="card-title justify-center text-lg lg:text-xl">
                30+ Years Of Experience
              </h1>
              <p className="pt-3 text-base lg:text-lg">
                We bring decades of expertise to ensure your enclosure is built
                to last.
              </p>
            </div>
          </div>
          <div className="card bg-white w-96 shadow-xl">
            <div className="justify-center flex">
              <figure className="w-64 lg:w-80">
                <img src={secondCard} alt="logo2" />
              </figure>
            </div>
            <div className="card-body pt-0">
              <h1 className="card-title justify-center text-lg lg:text-xl">
                We Offer Free Design
              </h1>
              <p className="pt-3 text-base lg:text-lg">
                We provide a no-cost, custom design consultation for qualified
                customers to bring vision to life.
              </p>
            </div>
          </div>
          <div className="card bg-white w-96 shadow-xl">
            <div className="justify-center flex">
              <figure className="w-64 lg:w-80">
                <img src={thirdCard} alt="logo3" />
              </figure>
            </div>
            <div className="card-body pt-0">
              <h1 className="card-title justify-center text-lg lg:text-xl">
                Competitive Pricing
              </h1>
              <p className="pt-3 text-base lg:text-lg">
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
