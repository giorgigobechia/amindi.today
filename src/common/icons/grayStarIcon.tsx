import React from "react";
import { IconProps } from "./IconTypes";

function GrayStarIcon({ width, height, className }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 180"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M90 0L114.308 65.6918L180 90L114.308 114.308L90 180L65.6918 114.308L0 90L65.6918 65.6918L90 0Z"
        fill="url(#paint0_radial_51_721)"
        fillOpacity="0.7"
      />
      <defs>
        <radialGradient
          id="paint0_radial_51_721"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(90 90) rotate(90) scale(90)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default GrayStarIcon;
