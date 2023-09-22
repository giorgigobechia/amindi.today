import React from "react";
import { IconProps } from "./IconTypes";

function WhiteGradient({ width, height, className }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 746 746"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="373"
        cy="373"
        r="373"
        fill="url(#paint0_radial_48_1791)"
        fillOpacity="0.3"
      />
      <defs>
        <radialGradient
          id="paint0_radial_48_1791"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(373 373) rotate(90) scale(373)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default WhiteGradient;
