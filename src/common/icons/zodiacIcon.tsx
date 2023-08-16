import React from "react";
import { IconProps } from "./IconTypes";

const ZodiacIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16 4H28V16"
        stroke="black"
        stroke-opacity="0.6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28 4L4 28"
        stroke="black"
        stroke-opacity="0.6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.79993 8.7998L23.2 23.1999"
        stroke="black"
        stroke-opacity="0.6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ZodiacIcon;
