import React from "react";
import { IconProps } from "./IconTypes";

const GrayGradient = ({ width, height, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 350 343"
      fill="none"
      className={className}
    >
      <path
        d="M101.926 266.663C18.0195 182.757 -33.6451 98.3824 28.0423 36.695C89.7297 -24.9925 207.757 -6.98056 291.663 76.9258C375.569 160.832 358.84 244.118 297.152 305.805C235.465 367.493 185.832 350.569 101.926 266.663Z"
        fill="url(#paint0_radial_21_194)"
        fillOpacity="0.2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_21_194"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(179.968 188.621) rotate(-136.202) scale(135.333 109.629)"
        >
          <stop stopColor="#617987" />
          <stop offset="1" stopColor="#4D6276" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default GrayGradient;
