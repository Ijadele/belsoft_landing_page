import React from "react";
import Button from "./Button";

const Register = () => {
  return (
    <section className="pt-[3rem] md:pt-[5rem]">
      <div>
        {/* Header Section */}
        <h1 className="text-center text-2xl font-bold md:text-3xl">
          Register And Be Part of Our Community
        </h1>
        <p className="px-4 py-2 text-center text-sm text-[#8E8E93] md:px-[15rem] lg:px-[29rem]">
          Join our community of over 1000+ founders, developers, and tech junkies in general. 
          Be inspired by people who live to inspire!
        </p>

        {/* Image Section */}
        <div className="relative">
          <img className="w-full pt-[2rem]" src="/line3.png" alt="Decorative Line" />
          <img 
            className="absolute left-[5%] top-[20px] w-[90%] md:left-[4%] lg:right-[74px] lg:top-[3px]" 
            src="/FrameImage.png" 
            alt="Frame" 
          />
        </div>

        {/* Register Button */}
        <div className="mt-4 flex items-center justify-center md:mt-6">
          <Button
            classNames="border-[#A649FF] bg-primary border-2 px-4 md:px-[30px] rounded-2xl py-2 md:py-[7.5px] flex items-center"
            text="Register Now"
            icon="/purpleArrowRight.png"
            textClass="text-sm text-[#9524FF]"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-6 px-6 py-[3rem] md:flex-row md:gap-[10rem] md:py-[7rem]">
        {/* Image */}
        <img 
          className="w-full rounded-lg object-cover md:w-1/3" 
          src="/FounderImage3.png" 
          alt="Founder" 
        />
        
        {/* Text Content */}
        <div className="flex-grow text-left md:text-left">
          <p className="text-lg font-semibold md:text-xl">
            At Founder’s Friday, Every Friday 
            Is a Learning Experience!
          </p>
          <p className="py-4 text-sm font-semibold md:py-[2rem] md:text-base">
            Join us in our mission to transform ideas 
            into impact and shape the future of Nigeria’s startup landscape.
          </p>
          <Button
            classNames="bg-[#A649FF] border px-6 md:px-[30px] rounded-3xl py-2 md:py-[9.5px] flex items-center"
            text="Register"
            icon="/arrowIcon.png"
            textClass="text-sm text-[#FDF7FF]"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;