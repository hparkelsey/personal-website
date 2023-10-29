/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import "./loading.css";


const Loading = ({ setDone }) => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const myText = new SplitType("#myText");
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.1,
      duration: 0.1,
    });
    setTimeout(() => {
      setDone(true);
    }, 1500);
  }, []);
  return (
    <div className="loading-screen">
      <h1 className="font-overpass600 text-4xl md:text-8xl" id="myText">
        Kelsey Park
      </h1>
    </div>
  );
};
export default Loading;
