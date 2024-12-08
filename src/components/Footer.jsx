"use client";

import React from "react";
import Button from "./Button";

const Footer = ({ logo, logoText, logoSpan }) => {
  const navItems = ["Home", "About Us", "Gallery", "Contact Us"];

  return (
    <footer className="border border-[#75687E] px-4 pt-8 sm:px-16 lg:px-[3.5rem]">
      {/* Branding Section */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-start">
        <img src={logo} alt="Logo" className="mr-2 h-10" />
        <p className="leading-2 text-center text-base font-bold text-gray-800 sm:text-left">
          {logoText} <span className="block">{logoSpan}</span>
        </p>
      </div>

      {/* Call-to-Action Section */}
      <div className="mb-[5rem] text-center">
        <h1 className="mb-4 px-6 text-2xl font-bold sm:px-[23rem]">
          Want To Be A Part Of Abuja’s Biggest Tech Community?
        </h1>
        <Button
          text="Register For Our Next Event"
          icon="/doubleArrow.png"
          textClass="text-[#9524FF]"
          classNames="border border-[#9524FF] text-[#9524FF] px-6 py-3 rounded-full"
        />
      </div>

      {/* Social Links and Navigation */}
      <div className="flex flex-col items-center justify-between border-t border-[#B86DFF] py-4 sm:flex-row">
        {/* Social Media Links */}
        <div className="mb-4 flex space-x-4 sm:mb-0">
          <img src="/fb.png" alt="Facebook" className="h-6 w-6" />
          <img src="/insta.png" alt="Instagram" className="h-6 w-6" />
          <img src="/X.png" alt="Twitter" className="h-6 w-6" />
        </div>

        {/* Navigation Links */}
        <ul className="mt-4 flex flex-wrap justify-center space-x-6 sm:mt-0 sm:justify-start">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-base font-medium text-gray-600 hover:text-[#8300FF]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
