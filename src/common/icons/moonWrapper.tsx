import React from "react";
import { IconProps } from "./IconTypes";

const MoonWrapper = ({ width, height, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 221 111"
      fill="none"
      className={className}
    >
      <path
        d="M0.499994 110.5C0.499997 81.3262 12.0893 53.3473 32.7183 32.7183C53.3473 12.0893 81.3262 0.500005 110.5 0.500006C139.674 0.500006 167.653 12.0893 188.282 32.7183C208.911 53.3473 220.5 81.3262 220.5 110.5"
        stroke="url(#paint0_linear_945_4208)"
        stroke-opacity="0.3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_945_4208"
          x1="110"
          y1="-12.5"
          x2="110"
          y2="221"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MoonWrapper;
