import React from "react";
import { IconProps } from "./IconTypes";

const PinkGradient = ({ width, height, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 253 253"
      fill="none"
      className={className}
    >
      <path
        d="M182.134 58.3499C241.778 120.894 277.902 183.255 231.788 227.23C185.675 271.205 99.9418 256.151 40.2985 193.607C-19.3449 131.063 -5.61749 70.6085 40.4962 26.6337C86.6099 -17.3411 122.491 -4.19434 182.134 58.3499Z"
        fill="url(#paint0_radial_21_192)"
        fillOpacity="0.15"
      />
      <defs>
        <radialGradient
          id="paint0_radial_21_192"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(123.795 113.983) rotate(46.36) scale(156.485 81.5744)"
        >
          <stop stopColor="#E94E77" />
          <stop offset="1" stopColor="#E94E77" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default PinkGradient;
