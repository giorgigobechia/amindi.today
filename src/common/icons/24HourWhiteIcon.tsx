import React from "react";
import { IconProps } from "./IconTypes";

function WhiteIcon({ width, height, className }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 365 279"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="182.691"
        cy="139.308"
        rx="212.007"
        ry="86.2249"
        transform="rotate(34.3446 182.691 139.308)"
        fill="url(#paint0_radial_59_2538)"
        fillOpacity="0.5"
      />
      <defs>
        <radialGradient
          id="paint0_radial_59_2538"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(182.691 139.308) rotate(90) scale(86.2249 212.007)"
        >
          <stop stopColor="white" stop-opacity="0.38" />
          <stop offset="1" stopColor="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default WhiteIcon;
