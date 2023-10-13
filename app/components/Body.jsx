import React from "react";
import Banner from "./Banner";
import Profile from "./Profile";

const Body = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <div className="mt-20 lg:mt-[32rem]">
        <Profile />
      </div>
    </div>
  );
};

export default Body;
