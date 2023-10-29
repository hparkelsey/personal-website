import React from "react";
import "./socials.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const fromLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 1,
    },
  },
};
const Socials = () => {
  return (
    <motion.div
      variants={fromLeft}
      initial="hidden"
      animate="visible"
      className="hidden xl:flex flex-col gap-4 fixed top-[80%] p-3 left-[0%] socials"
    >
      <Link
        to="https://www.linkedin.com/in/kelseypark/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          width={24}
          height={24}
          title="LinkedIn"
          className="pulse-hover"
          alt="LinkedIn Logo"
        />
      </Link>
      <Link
        to="https://github.com/hparkelsey"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          width={24}
          height={24}
          title="GitHub"
          className="pulse-hover"
          alt="GitHub Logo"
        />
      </Link>
    </motion.div>
  );
};
export default Socials;
