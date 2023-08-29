import React from "react";
import { IconProps } from "./IconTypes";

const ZodiacIcon = ({ width, height, className, stroke }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M16 4H28V16"
        stroke={stroke}
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 4L4 28"
        stroke={stroke}
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.79993 8.7998L23.2 23.1999"
        stroke={stroke}
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ZodiacIcon;
