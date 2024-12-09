import React from 'react';
import Logo from '/touchstone-logo.png';

function CustomDesign() {
  return (
    <div className='min-h-screen flex flex-col pl-10 pr-10 bg-[#F0F7F8]'>
      <div className="flex flex-col lg:flex-row flex-1">

        {/* Left Section */}
        <div className="flex-1 flex flex-col p-6">
          <a href="/" className="logo w-40 md:w-48 lg:w-64 mb-5 ml-3">
            <img src={Logo} alt="logo" width={50} className="transition-all duration-300"/>
          </a>
          <div className='flex flex-col flex-1 justify-center'>
            <h1 className="text-cyan-700 text-2xl md:text-3xl lg:text-5xl mb-4 font-bold tracking-wide leading-tight">
              GET YOUR CUSTOM DESIGN
            </h1>
            <h2 className="text-cyan-700 text-xl md:text-3xl mb-2 tracking-tight font-medium underline">
              info@touchstoneconservatories.com
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 tracking-wide">
              Touchstone Conservatories primarily focuses on building within New Jersey, New York, and Pennsylvania. We have the ability to ship our modular kits nationwide for installation by local contracting partners.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <form className="flex-1 bg-[#01738F] rounded-xl flex flex-col justify-center mb-16 md:mb-6 sm:mb-8 pr-10 mt-0 md:mt-8 sm:mt-0">
          <div className='bg-[#FCFDFD] flex-1 p-5 pb-4'>
            <h3 className="text-md font-semibold text-gray-800">
              <span className='text-red-700'>* </span>INDICATES REQUIRED FIELD
            </h3>
            <div className='p-7 pb-2'>
              <label htmlFor="firstName" className="text-sm mb-2 block">NAME<span className="text-red-700"> *</span></label>
              <div className="flex flex-col sm:flex-row sm:space-x-2 mb-2">
                <input
                  id="firstName"
                  type="text"
                  placeholder="FIRST"
                  className="w-full p-2 border-2 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <input
                  id="lastName"
                  type="text"
                  placeholder="LAST"
                  className="w-full p-2 border-2 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <label htmlFor="email" className="text-sm mb-2 block">EMAIL<span className="text-red-700"> *</span></label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border-2 border-gray-300 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-2"
              />

              <label htmlFor="phone" className="text-sm mb-2 block">PHONE NUMBER<span className="text-red-700"> *</span></label>
              <input
                id="phone"
                type="number"
                className="w-full p-2 border-2 border-gray-300 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-2"
              />

              <label htmlFor="service" className="text-sm mb-2 block">SERVICE<span className="text-red-700"> *</span></label>
              <select
                id="service"
                className="w-full p-2 border-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4"
              >
                <option value="sunrooms">SUNROOMS</option>
                <option value="conservatory">CONSERVATORY</option>
                <option value="pool_enclosure">POOL ENCLOSURE</option>
                <option value="other">OTHER</option>
              </select>

              <label htmlFor="message" className="text-sm mb-2 block">MESSAGE<span className="text-red-700"> *</span></label>
              <textarea
                id="message"
                placeholder="Message"
                rows="3"
                className="w-full h-[133px] p-2 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4"
              />

              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-cyan-700 bg-white focus:ring-cyan-500 border-2 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 text-black text-xs">
                  I agree to receive marketing and promotional materials.
                </label>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto pl-5 pr-5 bg-white border-2 border-gray-500 text-black p-2 rounded-sm mt-4 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
