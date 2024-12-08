"use client";

import React, { useState } from "react";
import Button from "./Button";
import { IoMenuSharp } from "react-icons/io5"; // Import the hamburger icon from React Icons

const Nav = ({ logo, logoText }) => {
  const navItems = ['Home', 'About Us', 'Gallery', 'Contact Us'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
  className="fixed left-0 right-0 top-0 z-50 flex h-[70px] items-center justify-between border-b-[0.5px] border-[#75687E] bg-[#FDF7FF] px-4 py-4 md:px-[3.5rem]"
>
  {/* Logo Section */}
  <div className="flex items-center">
    <img src={logo} alt="Logo" className="mr-2 h-10" />
    <p className="text-shadow text-lg font-bold">{logoText}</p>
  </div>

  {/* Desktop Navigation Menu */}
  <div className="hidden w-auto items-center justify-between gap-14 md:flex">
    <ul className="flex space-x-4">
      {navItems.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer text-base font-medium hover:text-[#8300FF]"
        >
          {item}
        </li>
      ))}
    </ul>

    <Button
      classNames="border-[#9524FF] bg-primary border px-[15px] rounded-2xl py-[7.5px] flex items-center"
      text="Register"
      icon="/purpleArrowRight.png"
      textClass="text-sm text-[#9524FF]"
    />
  </div>

  {/* Mobile Navigation Menu (Hamburger) */}
  <div className="flex items-center md:hidden">
    <button onClick={toggleMobileMenu} className="text-3xl">
      <IoMenuSharp />
    </button>
  </div>

  {/* Mobile Dropdown Menu */}
  {isMobileMenuOpen && (
    <div className="absolute left-0 right-0 top-16 z-50 flex flex-col items-center gap-4 bg-white p-4 shadow-md md:hidden">
      <ul className="flex flex-col items-center gap-4">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer text-base font-medium hover:text-[#8300FF]"
          >
            {item}
          </li>
        ))}
      </ul>

      <Button
        classNames="border-[#9524FF] bg-primary border px-[15px] rounded-2xl py-[7.5px] flex items-center"
        text="Register"
        icon="/purpleArrowRight.png"
        textClass="text-sm text-[#9524FF]"
      />
    </div>
  )}
</nav>
  );
};

export default Nav;