"use client";

import { useState } from "react";

const List = () => {
  const [serviceItems, setServiceItems] = useState([
    {
      role: "Monthly Meetups",
      text: "Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.",
      image: "/plus.png",
    },
    {
      role: "Diverse Network",
      text: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
      image: "/plus.png",
    },
    {
      role: "Knowledge Sharing",
      text: "Learn and grow through interactive sessions, workshops, and success stories shared by members.",
      image: "/plus.png",
    },
    {
      role: "Collaboration Opportunities",
      text: "Find potential co-founders, mentors, or partners for your next big venture.",
      image: "/plus.png",
    },
    {
      role: "Community Support",
      text: "Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.",
      image: "/plus.png",
    },
  ]);

  return (
    <section className="mt-8 w-full px-4 md:px-[3.5rem]">
      <div className="py-6">
        <h2 className="mb-8 text-center text-2xl font-bold">What We Offer</h2>
        <ul className="space-y-6">
          {serviceItems.map((serviceItem, index) => (
            <li
              key={index}
              className="flex flex-col gap-4 border-b-2 border-[#3C3641] pb-4 md:flex-row md:justify-between md:gap-8"
            >
              {/* Role and Icon */}
              <div className="flex items-center gap-6">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#8300FF] text-white">
                  {/* Custom Bullet Icon */}
                </div>
                <h3 className="text-lg font-semibold md:w-[12rem]">{serviceItem.role}</h3>
              </div>

              {/* Text and Image */}
              <div className="flex w-full items-center justify-between md:flex-row">
                {/* Text */}
                <p className="text-sm font-semibold text-[#75687E] md:w-[70%]">
                  {serviceItem.text}
                </p>

                {/* Image */}
                <div className="ml-4 shrink-0 md:mr-[5rem]">
                  <img
                    src={serviceItem.image}
                    alt={`${serviceItem.role} icon`}
                    className="h-10 w-10"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default List;
