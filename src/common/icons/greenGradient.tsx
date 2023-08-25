import React from "react";
import { IconProps } from "./IconTypes";

const GreenGradient = ({ width, height, className }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 441 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse
        cx="220.79"
        cy="175"
        rx="239.407"
        ry="146.908"
        transform="rotate(-30.0301 220.79 175)"
        fill="url(#paint0_radial_21_193)"
        fillOpacity="0.4"
      />
      <defs>
        <radialGradient
          id="paint0_radial_21_193"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(220.79 175) rotate(90) scale(146.908 239.407)"
        >
          <stop stopColor="#399EB3" />
          <stop offset="1" stopColor="#399EB3" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default GreenGradient;
