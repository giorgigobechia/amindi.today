import React from "react";
import { IconProps } from "./IconTypes";

const StarIcon = ({ width, height, className }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M57.5 0L73.0302 41.9698L115 57.5L73.0302 73.0302L57.5 115L41.9698 73.0302L0 57.5L41.9698 41.9698L57.5 0Z"
        fill="url(#paint0_radial_69_4316)"
        fillOpacity="0.7"
      />
      <defs>
        <radialGradient
          id="paint0_radial_69_4316"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(57.5 57.5) rotate(90) scale(57.5)"
        >
          <stop stopColor="#2E386B" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default StarIcon;
