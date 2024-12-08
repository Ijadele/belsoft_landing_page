"use client";

import React, { useState } from "react";

const SponsorCard = () => {
  const [CardItems] = useState([
    {
      heading: "Networking Opportunities",
      textline: "Connect with industry leaders, founders, and potential partners.",
      bgColour: "#DCB6FF",
    },
    {
      heading: "Community Impact",
      textline: "Support the growth and development of the startup ecosystem.",
      bgColour: "#EDDBFF",
    },
    {
      heading: "Brand Association",
      textline: "Align your brand with innovation and entrepreneurial success.",
      bgColour: "#EDDBFF",
    },
    {
      heading: "Visibility",
      textline:
        "Gain exposure to a targeted audience of young professionals and entrepreneurs.",
      bgColour: "#DCB6FF",
    },
  ]);

  return (
    <div className="w-100 h-100 md:w-100 grid max-w-4xl grid-cols-2 gap-4 border-2 border-[#CA92FF] bg-[#FDF7FF] px-4 py-8 shadow-md sm:grid-cols-2">
      {CardItems.map((item, index) => (
        <div
          key={index}
          className="flex aspect-square w-full max-w-[150px] flex-col items-center justify-center rounded-full border-2 border-[#A649FF] p-4 shadow-md sm:w-[150px] sm:p-2"
          style={{
            backgroundColor: item.bgColour,
          }}
        >
          <h2 className="mb-2 text-center text-xs font-bold sm:text-sm md:text-sm">
            {item.heading}
          </h2>
          <p className="text-center text-[10px] sm:text-[12px] md:text-[10px]">
            {item.textline}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SponsorCard;