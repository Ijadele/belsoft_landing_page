"use client";

import React, { useState } from 'react';
import Faq from './Faq';

const Testimonial = () => {
  const [testItems, setTestItems] = useState([
    {
      imgIcon: '/Frame1.png',
      user: 'Mr Belba Ngoy',
      text: 'Always a remarkable experience for my team and myself',
    },
    {
      imgIcon: '/Frame1.png',
      user: 'Mr Belba Ngoy',
      text: 'Always a remarkable experience for my team and myself',
    },
    {
      imgIcon: '/Frame1.png',
      user: 'Mr Belba Ngoy',
      text: 'Always a remarkable experience for my team and myself',
    },
  ]);

  return (
    <section className="px-4 pb-8 text-center sm:px-8 md:px-[3.5rem]">
      {/* Header Section */}
      <h1 className="mb-3 text-xl font-bold sm:text-2xl">What Do Our Attendees Have To Say?</h1>
      <div className="mb-4 flex items-center justify-center">
        <p className="sm:-text-sm text-xs font-normal text-[8E8E93] md:px-[33.5rem]">Well, See For Yourself!</p>
        <div className="flex gap-2">
          <img src="/carouselBack.png" alt="Previous" className="h-8 w-8 cursor-pointer sm:h-12 sm:w-12" />
          <img src="/carouselNext.png" alt="Next" className="h-8 w-8 cursor-pointer sm:h-12 sm:w-12" />
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {testItems.map((testItem, index) => (
          <div
            key={index}
            className="p-4"
          >
            <img
              src={testItem.imgIcon}
              alt="User Icon"
              className="mx-auto mb-4 h-[6rem] w-[6rem] rounded-full sm:h-[8rem] sm:w-[8rem] md:h-[9rem] md:w-[9rem]"
            />
            <p className="text-base font-semibold sm:text-lg">{testItem.user}</p>
            <p className="mt-2 px-4 text-sm leading-[1.4rem] sm:text-base">{testItem.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Faq />
      </div>
    </section>
  );
};

export default Testimonial;