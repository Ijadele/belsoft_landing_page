import React from "react";
import Button from "./Button";
import Card from "./Card";

const Section = ({ paraHead, paraText, para, arrow, paraShow, group }) => {
  const listItems = [
    "/EllipseBold.png",
    "/EllipseCafe.png",
    "/EllipseS.png",
    "/EllipseMswitch.png",
    "/EllipseTree.png",
  ];

  return (
    <section>
      <div
      className="relative w-full bg-center bg-no-repeat px-4 py-6 md:bg-[url('/line.png')] md:px-[3.5rem] md:py-[4rem]"
      style={{
        backgroundSize: "68% 115%",
        backgroundPosition: "center right",
  }}
>
        <div className="flex flex-col-reverse gap-4 pb-8 md:flex-row md:gap-[17.5rem] md:pb-[3rem]">
          {/* Text Section */}
          <div className="flex flex-1 flex-col text-center md:text-left">
            <p className="mb-1 text-xs font-semibold">{paraHead}</p>
            <h1 className="mb-4 text-2xl font-bold text-[#5C00B3] md:text-3xl">
              Connect, Collaborate, Innovate!
            </h1>
            <p className="mb-4 w-full text-base md:w-[549px]">{paraText}</p>
            <Button
              text="Register For Our Next Event"
              icon="/doubleArrow.png"
              textClass="text-[#9524FF]"
              classNames="w-fit border border-[#9524FF] text-white px-6 py-3 rounded-full mt-4"
            />
            <p className="mt-2 text-xs font-semibold text-[#6750A4]">{para}</p>

            {/* List Items */}
            <div className="mt-12 flex justify-center gap-4 md:justify-start">
              {listItems.map((listItem, index) => (
                <img key={index} src={listItem} alt={`Item ${index + 1}`} className="h-12 w-12" />
              ))}
            </div>

            {/* Arrow Section */}
            <div className="mt-4 flex items-center justify-center md:justify-start">
              <p className="text-xs font-bold">{paraShow}</p>
              <img src={arrow} alt="Arrow Icon" className="ml-4 h-3 w-3" />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-1 items-center justify-center">
            <img
              src={group}
              alt="Group Illustration"
              className="h-full object-contain md:w-full md:object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="px-4 pb-[4rem] md:px-[3.5rem]">
        <Card
          ImgFounder="/founderImage1.png"
          heading="Who Are We?"
          paraText="Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration."
          headingStyle="mt-[-48px] text-2xl md:text-3xl font-bold"
          paraStyle="py-[2rem] md:pt-[3rem] text-sm text-[#8E8E93]"
        />
      </div>
    </section>
  );
};

export default Section;