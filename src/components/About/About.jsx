import React, { useEffect } from "react";
import Heading from "../UI_elements/Heading";
import Skills from "./aboutSkills/Skills";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import WatermarkTopDesktop from "../UI_elements/WMTopDesktop";
import WatermarkTopMobile from "../UI_elements/WMTopMobile";
import WatermarkBottomDesktop from "../UI_elements/WMBottomDesktop";
import WatermarkBottomMobile from "../UI_elements/WMBottomMobile";

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

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      className="about overflow-hidden relative scroll-mt-2.5"
      id="about"
      ref={ref}
    >
      <WatermarkTopMobile
        title={"AboutMe onRead={()=>setImpressed(true)}"}
        top={"5%"}
        left={"5%"}
      />
      <WatermarkTopDesktop
        title={"AboutMe onRead={()=>setImpressed(true)}"}
        top={"5%"}
        left={"10%"}
      />
      <section className="flex flex-col gap-6 px-6 md:flex-row md:justify-between md:max-w-6xl md:mx-auto md:gap-40 pb-[10vh] pt-[20vh] md:mt-[15vh] md:pt-0 ">
       {/* <div className="flex flex-col gap-6 md:flex-row"> */}
        <motion.div
          animate={controls}
          variants={fromLeft}
          initial="hidden"
          className="basis-full"
        >
          <Heading title={"About Me"} linkTo={"/#about"} />
          <section className="flex flex-col gap-2 font-poppins300">
            <p>
              I am a sophomore at Emory University studying Computer Science and Math with a passion for writing{" "}
              <span className="font-poppins500 underline-on-hover">
                impactful
              </span>{" "}
              software. 
            </p>
            <p>  
              Most of my experiences are in{" "}
              <span className="font-poppins500 underline-on-hover">
                mobile app development
              </span>{" "}
               and{" "}
               <span className="font-poppins500 underline-on-hover">
                web development
              </span>{" "}
              , but I am always open to exploring new areas of software engineering.
            </p>
            <p>  
              On campus, I am actively involved in a student-managed quantitative investment fund, a student consulting group, and the Korean Student Association.{" "}
            </p>

            <p>
              Outside of coding, I enjoy playing soccer and basketball, listening to hiphop/RnB music, and hanging out with friends.{"  "}
            </p>
            <p>
              <span className="font-poppins500 underline-on-hover">
                Thank you
              </span>{" "}
              for getting to know me!
            </p>
          </section>
          
        </motion.div>
        <Skills inView={inView} />
        
      </section>

      <WatermarkBottomDesktop title={"AboutMe"} top={"95%"} left={"80%"} />
      <WatermarkBottomMobile title={"AboutMe"} top={"95%"} left={"45%"} />
    </div>
  );
};

export default About;
