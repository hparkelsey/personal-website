import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fromRightWatermark = {
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: 100,
    transition: { duration: 1 },
  },
};

const WatermarkBottomDesktop = ({ title, top, left }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fromRightWatermark}
      style={{top: top, left: left}}
      className={` hidden absolute md:block font-overpass600 text-2xl text-black opacity-20 overflow-hidden watermark`}
    >
      {` </ ${title}>`}
    </motion.div>
  );
};

export default WatermarkBottomDesktop;
