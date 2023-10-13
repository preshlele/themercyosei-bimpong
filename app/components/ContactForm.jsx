"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isSuccessful, setIsSuccessful] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);
          setIsSuccessful(true);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  return (
    <div className="p-4 lg:flex items-center justify-center lg:justify-center lg:gap-24 mb-24">
      <div className="w-full lg:w-2/5 max-w-md">
        {!isSuccessful ? (
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-black font-semibold"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="from_name"
                placeholder="John Doe"
                className="w-full px-3 py-2 border-2 border-[#8B55D0] rounded-lg focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-black font-semibold">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="example@example.com"
                className="w-full px-3 py-2 border-2 border-[#8B55D0] rounded-lg focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-black font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Type your message here...."
                className="w-full p-2 border-2 border-[#8B55D0] resize-none rounded-lg focus:outline-none mb-2"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#3C0D79] text-white text-sm px-4 w-full py-3 rounded-lg focus:outline-none"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-green-600 font-semibold text-center">
            Thank you! Your message has been sent successfully.
          </div>
        )}
      </div>
      <div className="w-full mt-6 lg:mt-0 lg:w-1/5">
        <div className="p-4">
          <h2 className="font-semibold">Email</h2>
          <span className="text-[#8A8787] text-sm">
            mercyobimpong@gmail.com
          </span>
        </div>
        <div className="p-4">
          <h2 className="font-semibold">Address</h2>
          <span className="text-[#8A8787] text-sm">Accra, Ghana / Remote</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
