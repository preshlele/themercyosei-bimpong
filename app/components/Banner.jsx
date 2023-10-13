import React from "react";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner  w-full h-[30rem]  relative -z-10">
      <Image
        src="/blurry-gradient-haikei.png"
        alt="blur-bg"
        fill
        className="absolute inset-0 w-full object-cover blur-[15rem]"
      />
      <div>
        <Image
          src="/Subtract.png"
          alt="pattern-left"
          width={500}
          height={500}
        />
      </div>
      <div className=" inset-0 absolute z-20">
        <div>
          <Image
            src="/Subtract.png"
            alt="pattern"
            width={500}
            height={500}
            className=" absolute -z-10 -top-40 hidden lg:block"
          />
        </div>
        <div className="text-4xl lg:text-6xl text-[#3C0D79] font-semibold pt-16 lg:pt-40 pb-3 text-center">
          <span className="px-5">
            Mercy Osei-Bimpong: <br />
          </span>
          <div className="px-2 lg:px-[20rem]  lg:pt-3">
            Your trusted partner in accounting excellence
          </div>
        </div>
        <div className="px-2 text-center text-sm lg:text-xl mx-auto lg:w-[40rem] text-gray-500 ">
          Hello, I’m Mercy Osei-Bimpong, I have the perks to empower your
          financial journey through expert accountancy
        </div>
        <div>
          <Image
            src="/Subtract.png"
            alt="pattern-right"
            width={600}
            height={600}
            className="absolute right-0  top-12 -z-10 hidden lg:block"
          />
        </div>
        <div className="flex gap-4 justify-center mt-12 mb-28">
          <Button>Contact me</Button>
          <Button className="border-2 border-[#3C0D79]  bg-white">
            <span className="text-purple-900  font-medium flex items-center gap-2">
              View resume <FiArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
