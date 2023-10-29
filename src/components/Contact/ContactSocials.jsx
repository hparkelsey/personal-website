import React from "react";
import { Link } from "react-router-dom";

const ContactSocials = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-grey font-overpass">
        Reach me through social media:
      </h1>
      <div className="flex gap-6">
        <Link to="https://www.linkedin.com/in/kelseypark/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            width={36}
            height={36}
            title="LinkedIn"
            className="pulse-hover"
            alt="LinkedIn Logo"
          />
        </Link>
        <Link to="https://github.com/hparkelsey" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            width={36}
            height={36}
            title="GitHub"
            className="pulse-hover"
            alt="GitHub Logo"
          />
        </Link>
      </div>
    </div>
  );
};
export default ContactSocials;
