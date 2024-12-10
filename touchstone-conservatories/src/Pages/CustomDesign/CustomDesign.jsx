import React from "react";
import Logo from "/touchstone-logo.png";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

function CustomDesign() {
  return (
    <div className="min-h-screen flex flex-col pl-10 pr-10 bg-[#F0F7F8]">
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left Section */}
        <div className="flex-1 flex flex-col">
          <a href="/" className="logo w-40 md:w-48 lg:w-64 mb-5 mt-7">
            <img
              src={Logo}
              alt="logo"
              width={50}
              className="transition-all duration-300"
            />
          </a>
          <div className="flex flex-col flex-1 justify-center">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-black text-2xl md:text-3xl lg:text-4xl mb-4 font-bold tracking-wide leading-tight">
              GET YOUR CUSTOM DESIGN
            </h1>
            <h2 className="text-cyan-700 text-xl md:text-2xl mb-2 tracking-tight font-medium underline">
              info@touchstoneconservatories.com
            </h2>
            <p className="text-gray-700 text-base md:text-md mb-6 tracking-wide">
              Touchstone Conservatories primarily focuses on building within New
              Jersey, New York, and Pennsylvania. We have the ability to ship
              our modular kits nationwide for installation by local contracting
              partners.
            </p>
            <h1 className="uppercase text-cyan-700 font-semibold text-base mt-8">
              Keep in touch
            </h1>
            <div className="flex space-x-2 mt-2 ml-1">
              <a href="https://www.facebook.com/TouchstoneConservatories">
                <img src={Facebook} className="w-6"></img>
              </a>
              <a href="https://www.instagram.com/touchstoneconservatories/">
                <img src={Instagram} className="w-6"></img>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form className="flex-1 bg-cyan-700 rounded-xl flex flex-col justify-center mb-16 md:mb-6 sm:mb-8 pr-10 mt-0 md:mt-8 sm:mt-0">
          <div className="bg-[#FCFDFD] flex-1 p-5 pb-4">
            <h3 className="text-md text-gray-800 indent-3">
              <span className="text-red-700">* </span>INDICATES REQUIRED FIELD
            </h3>
            <div className="p-7 pb-2">
              <label htmlFor="firstName" className="text-sm mb-2 block">
                NAME<span className="text-red-700"> *</span>
              </label>
              <div className="flex flex-col sm:flex-row sm:space-x-2 mb-2 text-black">
                <input
                  id="firstName"
                  type="text"
                  placeholder="FIRST"
                  className="w-full p-2 text-sm border-2 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />
                <input
                  id="lastName"
                  type="text"
                  placeholder="LAST"
                  className="w-full p-2 text-sm border-2 bg-white rounded-sm = focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />
              </div>

              <label htmlFor="email" className="text-sm mb-2 block">
                EMAIL<span className="text-red-700"> *</span>
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 text-sm border-2 border-gray-300 bg-white rounded-sm text-black focus:outline-none focus:ring-2 focus:ring-cyan-700 mb-2"
              />

              <label htmlFor="phone" className="text-sm mb-2 block">
                PHONE NUMBER<span className="text-red-700"> *</span>
              </label>
              <input
                id="phone"
                type="number"
                className="w-full p-2 text-sm border-2 border-gray-300 bg-white rounded-sm text-black focus:outline-none focus:ring-2 focus:ring-cyan-700 mb-2"
              />

              <label htmlFor="service" className="text-sm mb-2 block">
                SERVICE<span className="text-red-700"> *</span>
              </label>
              <select
                id="service"
                className="w-full p-2 text-sm border-2 bg-white rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-cyan-700 mb-4"
              >
                <option value="sunrooms">SUNROOMS</option>
                <option value="conservatory">CONSERVATORY</option>
                <option value="pool_enclosure">POOL ENCLOSURE</option>
                <option value="other">OTHER</option>
              </select>

              <label htmlFor="message" className="text-sm mb-2 block">
                MESSAGE<span className="text-red-700"> *</span>
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="3"
                className="w-full h-[133px] p-2 text-sm border-2 border-gray-300 bg-white rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-cyan-700 mb-4"
              />

              <div className="mb-2 flex items-center pl-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 focus:ring-cyan-500 border-2 border-gray-300 rounded checkbox [--chkbg:theme(colors.cyan.700)] [--chkfg:white] checked:border-cyan-700"
                />
                <label htmlFor="terms" className="ml-2 text-black text-sm">
                  I agree to receive marketing and promotional materials.
                </label>
              </div>
              <button
                type="submit"
                className="w-full uppercase text-sm sm:w-auto ml-2 pl-5 pr-5 bg-white border-2 border-gray-400 text-black p-2 rounded-sm mt-4 hover:bg-cyan-700 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-700"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomDesign;
