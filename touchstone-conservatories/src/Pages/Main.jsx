import React from "react";
import background from "../assets/background.png";

export default function Main() {
  return (
    <div className="Main" id="Home">
      <div
        className="hero min-h-screen bg-cyan-700"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full text-white">
            <h1 className="mb-5 text-8xl font-bold">
              We Create Space, Handcrafted For Connection
            </h1>
            <p className="mt-10 mb-5 text-2xl">
              We build elegant, custom conservatories that transform your home
              and outdoor spaces. Our designs bring natural light, comfort, and
              style to your life. Ready to create your dream space? Contact us
              today for a free consultation!
            </p>
            <button className="btn text-sm mt-5 text-black bg-white uppercase border-transparent hover:border-transparent hover:bg-cyan-700 hover:text-white">
              Get Free Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
