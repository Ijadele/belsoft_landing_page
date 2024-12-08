import React from "react";
import Button from "./Button";

const EventSection = ({ paraText, group }) => {
  return (
    <section>
      <div
        className="bg-no-repeat px-6 py-8 md:px-[3.5rem] md:py-[4rem]"
        style={{
          backgroundImage: "url('/founderImage2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex flex-col-reverse md:h-[30rem] md:flex-row md:gap-[17.5rem] md:pb-[3rem]">
          {/* Left Content */}
          <div className="mb-6 flex flex-1 flex-col text-left md:mb-0">
            <div>
              <p className="text-lg font-bold text-[#EBE9ED] md:text-[2rem]">
                Founders Friday is coming to
              </p>
              <h1 className="my-2 text-3xl font-bold leading-tight text-[#A649FF] md:my-0 md:w-[27rem] md:text-[5rem] md:leading-[65px]">
                Kaduna
              </h1>
              <p className="my-4 text-sm text-[#EBE9ED] md:w-[27rem] md:text-base">
                {paraText}
              </p>
            </div>
            <div>
              <Button
                classNames="flex items-center rounded-2xl border border-[#9524FF] bg-primary px-6 py-2 md:px-[30px] md:py-[7.5px]"
                text="Register"
                icon="/purpleArrowRight.png"
                textClass="text-sm text-[#9524FF]"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-1 items-center justify-center">
            <img
              src={group}
              alt="Group Illustration"
              className="h-64 w-auto object-contain md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;