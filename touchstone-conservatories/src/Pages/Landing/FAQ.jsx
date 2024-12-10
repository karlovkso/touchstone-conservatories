import React from "react";

export default function FAQ() {
  const faqItems = [
    {
      question: "What types of enclosures do you build?",
      answer:
        "We specialize in custom sunrooms, conservatories, pool enclosures, and other glass enclosures to suit your needs.",
    },
    {
      question: "How long does the installation process take?",
      answer:
        "The timeline depends on the complexity of the project, but most installations are completed within a few weeks.",
    },
    {
      question: "Do you offer free design consultations?",
      answer:
        "Yes, for qualified customers, we provide a free design consultation to help you plan the perfect enclosure for your space.",
    },
    {
      question: "Are your enclosures weather-resistant?",
      answer:
        "Absolutely! Our enclosures are built to withstand various weather conditions, ensuring long-lasting durability.",
    },
    {
      question: "What is the cost of building a custom enclosure?",
      answer:
        "The cost varies based on design, size, and materials. Contact us for a free consultation and detailed estimate.",
    },
    {
      question: "Can I customize the design of my enclosure?",
      answer:
        "Yes! We work with you to create a design that fits your style, preferences, and space requirements.",
    },
    {
      question: "Do you offer any warranties on your enclosures?",
      answer:
        "Yes, we provide warranties on both the materials and craftsmanship to ensure your peace of mind.",
    },
    {
      question: "Are your enclosures energy-efficient?",
      answer:
        "Yes, our glass enclosures are designed to maximize natural light while helping with insulation and energy efficiency.",
    },
    {
      question: "Do you handle permits and approvals for the project?",
      answer:
        "Yes, we assist with obtaining the necessary permits and approvals to ensure a smooth installation process.",
    },
    {
      question: "Can I use my enclosure year-round?",
      answer:
        "Absolutely! Our enclosures are designed for year-round use, offering comfort in any season.",
    },
  ];

  return (
    <section id="FAQ" className="text-center text-black mb-20">
      <h1 className="text-cyan-700 text-center text-4xl mb-12 font-semibold">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center">
        <div className="w-2/3">
          {faqItems.map((item, index) => (
            <div key={index} className="collapse collapse-arrow mt-4">
              <input type="checkbox" name="faq-accordion" />
              <div className="collapse-title text-xl font-bold">
                {item.question}
              </div>
              <div className="divider divider-neutral mx-4"></div>
              <div className="collapse-content font-normal">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
