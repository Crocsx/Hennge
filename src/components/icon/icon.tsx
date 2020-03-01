import React from "react";

const Icon = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 40 26"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  </svg>
);

export default Icon;
