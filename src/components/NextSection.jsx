import React from "react";
import Button from "./Button";
import SponsorCard from "./SponsorCard";
import Label from "./Label";

const NextSection = ({ paraShow, arrow, group, paraText }) => {
  return (
    <section>
      {/* Section 1 */}
      <div
        className="relative w-full translate-y-[-5%] bg-center bg-no-repeat px-6 py-[4rem] md:bg-[url('/line2.png')] md:px-[3.5rem] md:pt-[7rem]"
        style={{
          backgroundSize: "100% 100%",
          backgroundPosition: "top center",
        }}
      >
        <div>
          <div className="flex flex-col-reverse pb-8 md:flex-row md:gap-[17.5rem] md:pb-[3rem]">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <p className="font-bold text-[#5C00B3]">Founders Friday</p>
              <h1 className="my-4 text-2xl font-bold md:w-[27rem] md:text-3xl">
                What Happens At Founders Friday
              </h1>
              <p className="my-4 text-base text-[#4C4452] md:w-[27rem]">
                {paraText}
              </p>
              <Button
                text="Learn More"
                icon="/arrowIcon.png"
                classNames="border bg-[#9524FF] text-white px-6 py-3 rounded-xl mt-4"
              />
            </div>

            {/* Right Content */}
            <div className="mt-6 flex-1 md:mt-0">
              <img
                src={group}
                alt="Group Illustration"
                className="h-auto w-full max-w-sm object-contain md:h-full md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-[-5rem] px-6 md:px-[3.5rem]">
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
          {/* Left Content */}
          <div className="mb-6 flex-1 md:mb-0">
            <p className="font-bold text-[#5C00B3]">Founders Friday</p>
            <h1 className="my-2 text-2xl font-bold md:w-[18rem] md:text-3xl">
              Why Sponsor Founders Friday?
            </h1>
          </div>

          {/* Right Content */}
          <p className="text-sm text-[#4C4452] md:my-4 md:flex-1 md:text-right">
            {paraText}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 flex flex-col items-center gap-8 pb-10 md:flex-row md:items-start md:justify-between md:px-[3rem]">
          <SponsorCard />
          <Label />
        </div>
      </div>
    </section>
  );
};

export default NextSection;