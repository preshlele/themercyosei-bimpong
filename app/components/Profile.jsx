import React from "react";
import { educationData, experienceData, testimonialsData } from "../utils";
import { BiSolidCheckCircle, BiSolidMessageDots } from "react-icons/bi";
import ContactForm from "./ContactForm";

const Profile = () => {
  return (
    <div className="mt-3">
      <div className="px-4">
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl text-[#3C0D79] font-semibold text-center pb-1 lg:w-[56rem] mx-auto">
            The Personality behind this expertise
          </h2>
          <div className="px-4 text-center text-sm lg:text-lg text-gray-500 pb-6">
            everything about me ranging from education to skills and expertise
            is found here
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4  lg:px-[11rem] mx-auto mt-7">
          <div className="p-5">
            <div className="text-[#8A8787] text-sm lg:text-base text-justify pb-8 ">
              <h2 className="text-black font-bold lg:text-xl">Profile</h2>
              With over 8 years in the financial realm, I bring a wealth of
              experience and in-depth insight to every client, accounting and
              finance business partnership with from various industries both in
              financial and non-financial sectors and making strategic
              contributions towards leadership, grant management, financial
              planning, budgeting and control, and financial reporting, with
              excellent core values. Currently, I am looking for a challenging
              and international finance lead role where I can bring positivity,
              support, and innovation towards goal achievement
            </div>
          </div>
          <div className=" p-5">
            <h2 className="font-bold lg:text-xl">
              Education and Professional Qualification
            </h2>
            <div className="pt-2 ">
              {educationData.map((entry, index) => (
                <div key={index} className="lg:text-base">
                  <div className="flex items-center gap-3">
                    <BiSolidCheckCircle size={20} />
                    <h3 className="text-base">{entry.institution}</h3>
                  </div>
                  <div className="text-[#8A8787] mb-4">
                    <p className="text-sm">{entry.membership}</p>
                    <p className="text-xs italic">{entry.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-32 mt-10 lg:px-[12.4rem] mx-auto p-4  ">
          <h2 className="font-bold lg:text-xl">Skills</h2>
          <div className="text-justify text-sm lg:text-base text-[#8A8787]">
            IFRS, IPSAS, GAAP; Financial Planning and Budgeting, Change and
            Crisis Management, Corporate and financial reporting, Sourcing for
            grants, Excellent Team Leadership skills, A sense of business acumen
            and in-depth understanding of business, Treasury and risk
            management.
          </div>
          <div className="font-semibold text-sm lg:text-xl">
            Accounting Software:
          </div>
          <span className="text-[#8A8787] text-sm lg:text-base">
            QuickBooks, Tally and Xero ERP; Oracle Fusion X-100 and SAP,
            Microsoft Package 365, 2010, 2007
          </span>
        </div>
        <div className="pb-28">
          <h2 className="text-4xl lg:text-6xl  text-[#3C0D79] font-semibold text-center pb-1 px-3 lg:w-[56rem] mx-auto">
            Experience that counts: navigating finances with expertise
          </h2>
          <div className="text-center text-sm lg:text-lg text-[#8A8787] pb-6">
            A track record of excellence and insight in accounting solutions
          </div>
          <div className=" p-4 lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:w-[58rem] mx-auto">
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className="border-2 border-[#8B55D0] mb-4 px-6 py-4 rounded-xl"
              >
                <h2 className="font-medium">{experience.company}</h2>
                <h3 className="font-bold text-sm">{experience.position}</h3>
                <span className="text-xs text-[#8A8787]">
                  {experience.date}
                </span>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-4xl lg:text-6xl text-[#3C0D79] font-semibold text-center pb-1 px-8 mb-5">
          What clients say about me
        </h2>
        <div className=" lg:flex lg:gap-14 lg:px-14 ">
          {testimonialsData.map((testimonial, index) => (
            <div className="my-6 p-5" key={index}>
              <div className="flex items-center gap-5 mb-3">
                <BiSolidMessageDots size={40} className="text-[#8B55D0]" />
                <span className="font-medium lg:text-xl">
                  {testimonial.name}
                </span>
              </div>
              <p className="text-sm lg:text-base text-[#8A8787] text-justify">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl lg:text-6xl text-[#3C0D79] font-semibold text-center pb-1 px-3 mt-56 mb-5">
          You can reach out directly
        </h2>
        <ContactForm />
      </div>
      <div className="text-center text-sm text-[#8A8787] hover:text-[#3C0D79] pb-6">
        <a href="https://presh.vercel.app/" target="_blank">
          Made with <span className="text-red-600">❤</span> by Presh © 2023
        </a>
      </div>
    </div>
  );
};

export default Profile;
