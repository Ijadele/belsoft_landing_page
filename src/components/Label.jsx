"use client";

import React, { useState } from "react";
import Button from "./Button";

const Label = () => {
  const [forms] = useState([
    {
      labelTag: "Name",
      labelFor: "name",
      placeHolder: "Full name",
      type: "text",
      required: true,
    },
    {
      labelTag: "Company (optional)",
      labelFor: "company",
      placeHolder: "Company name",
      type: "text",
      required: false,
    },
    {
      labelTag: "Email",
      labelFor: "email",
      placeHolder: "Email address",
      type: "email",
      required: true,
    },
    {
      labelTag: "Phone",
      labelFor: "phone",
      placeHolder: "Phone number",
      type: "number",
      required: true,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      alert("Please fill out all required fields.");
      return;
    }
    alert("Form submitted successfully!");
    // Add API call or further processing here
  };

  return (
    <div className="w-full px-4 md:w-[60%]">
      <div className="px-4">
        <h1 className="text-xl font-bold md:text-2xl">How To Sponsor</h1>
        <p className="text-sm italic text-[#605668]">
          Ready to Make an Impact
        </p>
        <p className="text-sm text-[#2C2830]">
          Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2"
      >
        {forms.map((form, index) => (
          <div key={index} className="form-group">
            <label
              htmlFor={form.labelFor}
              className="mb-2 block text-sm font-semibold"
            >
              {form.labelTag} {form.required && <span className="text-red-500">*</span>}
            </label>
            <input
              id={form.labelFor}
              type={form.type}
              placeholder={form.placeHolder}
              required={form.required}
              value={formData[form.labelFor]}
              onChange={handleChange}
              className="w-full rounded-md border border-[#121212] px-3 py-2 text-sm"
            />
          </div>
        ))}
        
          <Button
            text="Sponsor"
            icon="/arrowIcon.png"
            classNames="w-full bg-[#9524FF] text-white px-6 py-3 rounded-xl"
          />
      </form>
    </div>
  );
};

export default Label;
