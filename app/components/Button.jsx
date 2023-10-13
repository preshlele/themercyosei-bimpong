import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`px-5 py-3 rounded-lg text-white bg-[#3C0D79] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
