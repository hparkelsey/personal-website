import React from "react";
import "./hero.css";
const Banner = () => {
  return (
    <div className="relative">
      <div className="banner-back absolute top-0"></div>
      <div className="banner-front absolute top-0 shadow-md"></div>
    </div>
  );
};

export default Banner;
