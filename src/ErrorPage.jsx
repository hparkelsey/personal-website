import React from "react";
import { motion } from "framer-motion";
import HashButton from "./components/Button/HashButton";

const fromLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: { duration: 1 },
  },
};

const ErrorPage = () => {
  return (
    <motion.div
      variants={fromLeft}
      initial="hidden"
      animate="visible"
      className="h-[80vh] flex flex-col items-center px-6 gap-6 md:justify-center md:max-w-6xl md:pb-0 md:mx-auto "
    >
      <h1 className="text-4xl font-overpass600">
        Hmm. Seems you are on the wrong page somehow 🤔
      </h1>
      <HashButton content={"Let’s get you back home!"} linkTo={"/"} />
    </motion.div>
  );
};

export default ErrorPage;
