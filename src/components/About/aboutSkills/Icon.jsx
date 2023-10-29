import React from "react";
import "./icon.css";


const Icon = ({ url, name }) => {
  return (
    <div className="flex gap-4 justify-between items-end p-2 icon">
      <img
        src={url}
        width={28}
        height={28}
        alt={`${name} Icon`}
        title={name}
      />
      <p className="font-overpass600 text-center">{name}</p>
    </div>
  );
};
export default Icon;
