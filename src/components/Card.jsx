import React from "react";
import Button from "./Button";

const Card = ({ ImgFounder, heading, paraText, headingStyle, paraStyle }) => {
  return (
    <div className="flex flex-col items-center gap-5 sm:items-stretch md:flex-row">
      {/* Image Section */}
      <div className="flex-1">
        <img
          className="w-full rounded-2xl object-cover md:w-[80%]"
          src={ImgFounder}
          alt="Founder"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-1 flex-col justify-between rounded-2xl border-l-4 border-[#8300FF] pl-6 pt-8 md:mt-0">
        <div>
          <h1 className={`${headingStyle} text-lg md:text-3xl font-bold`}>{heading}</h1>
          <p className={`${paraStyle} text-sm md:text-base`}>{paraText}</p>
        </div>

        <div className="mb-6 flex gap-3">
          <Button
            classNames="bg-[#A649FF] rounded-full px-8 py-2"
            textClass="text-sm font-semibold text-[#FDF7FF]"
            text="Register"
            icon="/arrowIcon.png"
          />
          <Button
            classNames="border border-[#A649FF] px-8 py-2 rounded-full"
            textClass="text-sm font-semibold text-[#A649FF]"
            text="Donate"
            icon="/DonateIcon.png"
          />
        </div>

        {/* Founder Text */}
        <p className="text-sm font-bold md:text-base">
          Founder's Friday is more than just a meetup — it's a movement.
        </p>
      </div>
    </div>
  );
};

export default Card;