import React from "react";
import { IconProps } from "./IconTypes";

const MobileIcon = ({ width, height, className, stroke }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 35"
      fill="none"
      className={className}
    >
      <path
        d="M26 9.25V25.75C26 32.35 24.4375 34 18.1875 34H8.8125C2.5625 34 1 32.35 1 25.75V9.25C1 2.65 2.5625 1 8.8125 1H18.1875C24.4375 1 26 2.65 26 9.25Z"
        stroke={stroke}
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.625 6.7749H10.375"
        stroke={stroke}
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 29.2151C14.8376 29.2151 15.9219 28.0701 15.9219 26.6576C15.9219 25.2451 14.8376 24.1001 13.5 24.1001C12.1624 24.1001 11.0781 25.2451 11.0781 26.6576C11.0781 28.0701 12.1624 29.2151 13.5 29.2151Z"
        stroke={stroke}
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MobileIcon;
