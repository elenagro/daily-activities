import React from "react";
import "./Copyright.css";

const Copyright = () => {
  let year = new Date().getFullYear();

  return (
    <div>
      <span>Copyright © {year}</span>
    </div>
  );
};

export default Copyright;
