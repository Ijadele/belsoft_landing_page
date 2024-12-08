"use client";

import React, { useState } from "react";

const Faq = () => {
  const [faqItems, setFaqItems] = useState([
    {
      faq: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconImage: "/arrowDown.png",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac tincidunt neque.",
    },
    {
      faq: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconImage: "/arrowDown.png",
      answer:
        "Curabitur vehicula, sapien vel tincidunt pharetra, risus neque auctor arcu, non blandit velit enim a nunc.",
    },
    {
      faq: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconImage: "/arrowDown.png",
      answer:
        "Quisque fermentum, elit nec lacinia dapibus, lacus erat consequat lorem, in feugiat eros arcu a risus.",
    },
    {
      faq: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconImage: "/arrowDown.png",
      answer:
        "Quisque fermentum, elit nec lacinia dapibus, lacus erat consequat lorem, in feugiat eros arcu a risus.",
    },
    {
      faq: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconImage: "/arrowDown.png",
      answer:
        "Quisque fermentum, elit nec lacinia dapibus, lacus erat consequat lorem, in feugiat eros arcu a risus.",
    },
    {
      faq: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      iconImage: "/arrowDown.png",
      answer:
        "Quisque fermentum, elit nec lacinia dapibus, lacus erat consequat lorem, in feugiat eros arcu a risus.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-[90rem] py-[1rem] md:py-[2.5rem]">
      <h1 className="mb-6 text-left text-3xl font-bold">FAQs</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {faqItems.map((faqItem, index) => (
          <div key={index} className="px-4 py-2 md:pl-[3rem] md:pr-[6rem]">
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => toggleFaq(index)}
            >
              <p className="font-semibold text-[#340066]">{faqItem.faq}</p>
              <img
                src={faqItem.iconImage}
                alt="Toggle"
                className={`w-5 h-3 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{faqItem.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
