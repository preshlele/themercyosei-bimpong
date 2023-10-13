"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    { name: "Home", id: "1" },
    { name: "Work", id: "2" },
    { name: "About Me", id: "3" },
    { name: "Contact", id: "4" },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-full px-10 bg-white text-black">
      <div className="">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
      </div>
      <ul className="hidden lg:flex gap-20">
        {/* desktop menu */}
        {navLinks.map((link) => (
          <li key={link.id} className="p-4 border-gray-600">
            <Link href="#">{link.name}</Link>
          </li>
        ))}
      </ul>

      <Button className="hidden lg:block">Get In Touch</Button>
      <div onClick={handleNav} className=" relative lg:hidden text-[#3C0D79]">
        {nav ? (
          <div className=" relative z-40 ">
            <AiOutlineClose size={30} />
          </div>
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-full h-full py-3 border-r border-r-gray-900 text-[#8A8787] bg-white ease-in-out overflow-hidden"
            : " ease-in-out   fixed top-[-100%]"
        }
      >
        <div className="mx-4 my-5">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </div>
        {/* mobile menu */}
        {navLinks.map((link) => (
          <li key={link.id} className="p-4 text-center">
            <Link href="#">{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
