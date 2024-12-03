import React from "react";

export default function About() {
  return (
    <section id="About" className="py-28 bg-white text-black">
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
    </section>
  );
}
