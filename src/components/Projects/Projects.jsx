import React, { useEffect } from "react";
import Heading from "../UI_elements/Heading";
import "./project.css";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WatermarkBottomDesktop from "../UI_elements/WMBottomDesktop";
import WatermarkTopDesktop from "../UI_elements/WMTopDesktop";
import WatermarkTopMobile from "../UI_elements/WMTopMobile";
import WatermarkBottomMobile from "../UI_elements/WMBottomMobile";
import Card from "./Cards/Card";
import projects from "./assets/projects";

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

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      className="projects h-full overflow-hidden relative"
      id="projects"
      ref={ref}
    >
      <WatermarkTopDesktop
        title={"Projects projects={amazing}"}
        top={"3%"}
        left={"10%"}
      />
      <WatermarkTopMobile
        title={"Projects projects={amazing}"}
        top={"2%"}
        left={"5%"}
      />
      <div className="flex flex-col gap-6 px-6 md:max-w-6xl md:mx-auto pb-[10vh] pt-[15vh]">
        <motion.div variants={fromLeft} initial="hidden" animate={controls}>
          <Heading title={"Projects"} linkTo={"/#projects"} />
          <h1 className="text-xl text-grey font-overpass600 tracking-wider mb-4 pl-2 md:pl-6">
            Some of my personal favorites!
          </h1>
        </motion.div>
        <div className="projects-wrapper flex flex-col gap-14">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
        
      </div>
      <WatermarkBottomDesktop title={"Projects"} top={"98%"} left={"68%"} />
      <WatermarkBottomMobile title={"Projects"} top={"99%"} left={"60%"} />
    </div>
  );
};

export default Projects;
