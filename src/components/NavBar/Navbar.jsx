import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import hamburgerMenu from "../../assets/Hamburger.json";
import "./navbar.css";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const fromTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: { duration: 1 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialState, setInitialState] = useState(true);
  const lottieRef = useRef();

  const handleLottie = () => {
    if (isOpen && lottieRef.current) {
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
      setIsOpen(false);
    } else {
      lottieRef.current.setDirection(1);
      lottieRef.current.play();
      setIsOpen(true);
      setInitialState(false);
    }
  };
  useEffect(() => {
    lottieRef.current.stop();
  }, []);
  return (
    <>
      <motion.header className="sticky top-0 z-50 bg-purewhite">
        <motion.div
          variants={fromTop}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-center px-6 max-w-6xl h-14 md:mx-auto "
        >
          <Link
            to="/"
            className="font-overpass600 text-red logo-link self-center text-3xl md:text-3xl tracking-wider align-baseline hover:cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsOpen(false);
            }}
          >
            {"{ KP }"}
          </Link>
          <div className="md:hidden w-[24px] h-[24px]">
            <Lottie
              animationData={hamburgerMenu}
              loop={false}
              lottieRef={lottieRef}
              onClick={handleLottie}
              className="md:hidden"
            />
          </div>
          {/* FOR DESKTOP */}
          <nav className="hidden md:flex gap-9 font-overpass text-base tracking-wider align-baseline mr-10 hover:cursor-pointer">
            <Link to="/#about" className="nav-link" id="about-link">
              About
            </Link>
            <Link to="/#projects" className="nav-link" id="projects-link">
              Projects
            </Link>
            <Link to="/#contact" className="nav-link" id="contact-link">
              Contact
            </Link>
          </nav>
        </motion.div>
      </motion.header>
      <nav
        className={`${isOpen ? "showNav" : "hideNav"} ${
          initialState ? "hidden" : ""
        } mobile-nav flex flex-col justify-center items-center gap-8 font-overpass600 text-2xl tracking-widest align-baseline`}
      >
        <Link
          to="/#about"

          onClick={() => {
            setIsOpen(false);
            handleLottie();
          }}
        >
          ABOUT
        </Link>
        <Link
          to="/#projects"

          onClick={() => {
            setIsOpen(false);
            handleLottie();
          }}
        >
          PROJECTS
        </Link>
        <Link
          to="/#contact"

          onClick={() => {
            setIsOpen(false);
            handleLottie();
          }}
        >
          CONTACT
        </Link>
        <div className="w-24 border-2 border-solid border-red"></div>
      </nav>
    </>
  );
};

export default Navbar;
