import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Heading = ({ title, linkTo }) => {
  return (
    <Link to={linkTo} className="flex text-4xl font-overpass600 my-4">
      <p className="text-orange">#</p>
      <h1 className="tracking-wide text-black">{title}</h1>
    </Link>
  );
};
export default Heading;
