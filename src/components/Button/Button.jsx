import React, { useState } from "react";
import "./arrow.css";
import { Link } from "react-router-dom";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ content, linkTo, selector }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={linkTo}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center border-2 border-blue p-2 gap-2 mt-6 hover-arrow ${
        hovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={`font-poppins300 text-base tracking-tight`}>{content}</p>
      {selector === "github" ? (
        <img
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          }
          width={24}
          height={24}
          alt="icon"
        />
      ) : (
        <FontAwesomeIcon icon={icon({ name: "arrow-up-right-from-square" })} />
      )}
    </Link>
  );
};

export default Button;
